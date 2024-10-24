import _codegen from '@abstract-money/ts-codegen'
import { TSBuilderOptions } from '@abstract-money/ts-codegen'
import { default as fse } from 'fs-extra'

import { pascalCase } from 'change-case'
import dedent from 'dedent'
import { join, resolve } from 'pathe'
import type { Plugin } from '../config'
import type { RequiredBy } from '../types'

// NOTE: It looks like the `ts-codegen` package bundles incorrectly and the default export is not actually exported.
const codegen = (_codegen as any).default as typeof _codegen

type VanillaResult = RequiredBy<Plugin, 'run'>

type VanillaOptions = {
  enableAbstractAppFor?: string[]
}

export function vanilla(options: VanillaOptions = {}): VanillaResult {
  return {
    name: 'Vanilla',
    async run({ contracts, out, isTypeScript }) {
      // Prepare default config options
      const codegenOptions = {
        client: { enabled: true },
        messageBuilder: { enabled: true },
        messageComposer: { enabled: true },
        types: { enabled: isTypeScript },
        abstractApp: { enabled: false },
        bundle: { enabled: false },
      } satisfies TSBuilderOptions

      const cosmwasmCodegenDirPath = join(out, 'cosmwasm-codegen')

      await codegen({
        options: codegenOptions,
        contracts: contracts
          .filter(({ name }) => !options.enableAbstractAppFor?.includes(name))
          .map(({ name, path }) => ({ name, dir: path })),
        outPath: cosmwasmCodegenDirPath,
      })

      if (options.enableAbstractAppFor?.length !== 0) {
        const abstractContracts = contracts.filter(({ name }) =>
          options.enableAbstractAppFor?.includes(name),
        )

        for (const abstractContract of abstractContracts) {
          const ac = {
            name: abstractContract.name,
            dir: abstractContract.path,
          }
          await codegen({
            options: {
              ...codegenOptions,
              abstractApp: {
                enabled: true,
                moduleType: abstractContract.moduleType,
              },
            },
            contracts: [ac],
            outPath: cosmwasmCodegenDirPath,
          })
        }
      }

      const content: string[] = []

      for (const contract of contracts) {
        // Have to post-process the message composer files to rename the `msg` in-block function definition
        // See https://github.com/CosmWasm/ts-codegen/issues/114
        const contractNamePascalCase = pascalCase(contract.name)

        // NOTE: The `@abstract-money/codegen` points to the old name of the core
        // package `@abstract-money/abstract.js`, and has to be changed to the
        // `@abstract-money/core` package.
        const generatedClientFilePath = join(
          cosmwasmCodegenDirPath,
          `${contractNamePascalCase}.client.ts`,
        )

        const generatedClientFileContent = await fse.readFile(
          resolve(generatedClientFilePath),
          'utf8',
        )
        await fse.writeFile(
          resolve(generatedClientFilePath),
          generatedClientFileContent
            .replace(
              '@abstract-money/abstract.js',
              '@abstract-money/core/legacy',
            )
            .replaceAll(
              /(@cosmjs\/cosmwasm-stargate|@cosmjs\/amino)/gm,
              '@abstract-money/cli/cosmjs',
            ),
        )

        const generatedMessageComposerFilePath = join(
          cosmwasmCodegenDirPath,
          `${contractNamePascalCase}.message-composer.ts`,
        )

        const generatedMessageComposerFileContent = await fse.readFile(
          resolve(generatedMessageComposerFilePath),
          'utf8',
        )
        await fse.writeFile(
          resolve(generatedMessageComposerFilePath),
          // ts-codegen produces a file with some invalid typings, so we're ignoring those
          dedent`
            // @ts-nocheck
            ${generatedMessageComposerFileContent
              .replaceAll('const msg = {', 'const _msg = {')
              .replaceAll('JSON.stringify(msg)', 'JSON.stringify(_msg)')
              .replaceAll(
                '@abstract-money/abstract.js',
                '@abstract-money/core',
              )}
          `,
        )

        const generatedMessageBuilderFilePath = join(
          cosmwasmCodegenDirPath,
          `${contractNamePascalCase}.message-builder.ts`,
        )

        const generatedMessageBuilderFileContent = await fse.readFile(
          resolve(generatedMessageBuilderFilePath),
          'utf8',
        )
        await fse.writeFile(
          resolve(generatedMessageBuilderFilePath),
          // ts-codegen produces a file with some invalid typings, so we're ignoring those
          dedent`
            // @ts-nocheck
            ${generatedMessageBuilderFileContent}
          `,
        )

        // TODO: Apps are duplicating the type imports
        const isAppEnabled = options.enableAbstractAppFor?.includes(
          contract.name,
        )
        const importTypesLine = isAppEnabled
          ? ''
          : `import * as ${contractNamePascalCase}Types from './cosmwasm-codegen/${contractNamePascalCase}.types'`

        content.push(
          dedent`
          export * from './cosmwasm-codegen/${contractNamePascalCase}.client'
          export * from './cosmwasm-codegen/${contractNamePascalCase}.message-builder'
          export * from './cosmwasm-codegen/${contractNamePascalCase}.message-composer'
          ${importTypesLine}
          export { ${contractNamePascalCase}Types }
          `,
        )
      }

      return {
        content: content.join('\n\n'),
      }
    },
  }
}
