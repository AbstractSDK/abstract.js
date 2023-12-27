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
  enableAppstractAppFor?: string[]
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
          .filter(({ name }) => !options.enableAppstractAppFor?.includes(name))
          .map(({ name, path }) => ({ name, dir: path })),
        outPath: cosmwasmCodegenDirPath,
      })

      if (options.enableAppstractAppFor?.length !== 0)
        await codegen({
          options: { ...codegenOptions, abstractApp: { enabled: true } },
          contracts: contracts
            .filter(({ name }) => options.enableAppstractAppFor?.includes(name))
            .map(({ name, path }) => ({ name, dir: path })),
          outPath: cosmwasmCodegenDirPath,
        })

      const content: string[] = []

      for (const contract of contracts) {
        // Have to post-process the message composer files to rename the `msg` in-block function definition
        // See https://github.com/CosmWasm/ts-codegen/issues/114
        const contractNamePascalCase = pascalCase(contract.name)

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

        content.push(
          dedent`
          export * from './cosmwasm-codegen/${contractNamePascalCase}.client'
          export * from './cosmwasm-codegen/${contractNamePascalCase}.message-builder'
          export * from './cosmwasm-codegen/${contractNamePascalCase}.message-composer'
          import * as ${contractNamePascalCase}Types from './cosmwasm-codegen/${contractNamePascalCase}.types'
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
