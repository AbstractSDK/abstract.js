import _codegen from '@abstract-money/ts-codegen'
import { TSBuilderOptions } from '@abstract-money/ts-codegen'

import { camelCase, constantCase, pascalCase } from 'change-case'
import dedent from 'dedent'
import { default as fse } from 'fs-extra'
import { join, relative, resolve } from 'pathe'
import { DISALLOWED_CONTRACT_NAMES } from 'src/utils/disallowed-contract-names'
import type { Plugin } from '../config'
import type { RequiredBy } from '../types'

// NOTE: It looks like the `ts-codegen` package bundles incorrectly and the default export is not actually exported.
const codegen = (_codegen as any).default as typeof _codegen

type ReactResult = RequiredBy<Plugin, 'run'>

const DISABLED_APPSTRACT_APP_FOR_NAMESPACES_LIST = ['cw-plus']

type ReactOptions = {
  disableAppstractAppFor?: string[]
}

export function react(options: ReactOptions = {}): ReactResult {
  const disableAppstractAppFor = [
    ...(options.disableAppstractAppFor ?? []),
    ...DISABLED_APPSTRACT_APP_FOR_NAMESPACES_LIST,
  ]

  return {
    name: 'React',
    async run({ contracts, out, isTypeScript }) {
      // Check for disallowed contract names

      if (
        contracts.some(({ name }) => DISALLOWED_CONTRACT_NAMES.includes(name))
      )
        throw new Error(
          '`proxy` and `manager` contract generations are disallowed. Use `@abstract-money/core` methods or `@abstract-money/react` hooks.',
        )

      // Prepare default config options
      const codegenOptions = {
        client: { enabled: true },
        messageBuilder: { enabled: true },
        types: { enabled: isTypeScript },
        reactQuery: {
          optionalClient: true,
          enabled: true,
          mutations: true,
          camelize: true,
          queryKeys: true,
        },
        abstractApp: { enabled: true },
        bundle: { enabled: false },
      } satisfies TSBuilderOptions

      const cosmwasmCodegenDirPath = join(out, 'cosmwasm-codegen')

      // Guard speicfic contracts to not have the abstract app generated
      const contractsWithoutAbstractApp = contracts.filter(({ namespace }) =>
        disableAppstractAppFor.includes(namespace),
      )

      await codegen({
        options: codegenOptions,
        contracts: contracts
          .filter(
            ({ namespace }) =>
              !disableAppstractAppFor.includes(namespace) &&
              contractsWithoutAbstractApp.every(
                (guardedContract) => guardedContract.namespace !== namespace,
              ),
          )
          .map(({ name, path }) => ({ name, dir: path })),
        outPath: cosmwasmCodegenDirPath,
      })

      if (contractsWithoutAbstractApp.length !== 0)
        await codegen({
          options: { ...codegenOptions, abstractApp: { enabled: false } },
          contracts: [
            ...contractsWithoutAbstractApp,
            ...contracts.filter(({ namespace }) =>
              disableAppstractAppFor.includes(namespace),
            ),
          ].map(({ name, path }) => ({ name, dir: path })),
          outPath: cosmwasmCodegenDirPath,
        })

      const imports: string[] = []
      const content: string[] = []

      for (const contract of contracts) {
        {
          const contractNamePascalCase = pascalCase(contract.name)

          const hasAbstractApp = contractsWithoutAbstractApp.every(
            (contractWithoutAbstractApp) =>
              contractWithoutAbstractApp !== contract,
          )
          // Post ts-codegen transfomrations
          {
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
          }

          const reactQueryFilePath = join(
            cosmwasmCodegenDirPath,
            `${contractNamePascalCase}.react-query.ts`,
          )
          let reactQueryFileContents = await fse.readFile(
            resolve(reactQueryFilePath),
            'utf8',
          )
          // Replace args: to args?: to support stale queries with partial args
          reactQueryFileContents = reactQueryFileContents
            .replaceAll(
              /(export interface \w+Query.*[\r\n \w\s]*?)args:/gm,
              (substring) => {
                const matches =
                  /(export interface \w+Query.*[\r\n \w\s]*?)args:/gm.exec(
                    substring,
                  )
                if (!matches)
                  throw new Error(
                    'Could not replace React Query File Contents. Please open an issue on GitHub.',
                  )
                return `${matches[1]}args: undefined |`
              },
            )
            .replaceAll(/useQuery(?:[<>\r\n \S]*?)^}/gm, (useQueryCode) => {
              // Don't edit query hooks without args
              if (!useQueryCode.includes('args')) return useQueryCode
              return useQueryCode
                .replaceAll('Invalid client', 'Invalid client or args')
                .replaceAll(
                  /args\),(?:[\r\n \s]*?)\(\)(?:[\r\n \s]*?)=>(?:[\r\n \s]*?)client(?:[\r\n \s]*?)\?/gm,
                  'args), () => client && args ?',
                )
                .replaceAll(
                  /args"\)\),(?:[\r\n \s]*?){(?:[\r\n \s]*?)\.\.\.options,(?:[\r\n \s]*?)enabled:/gm,
                  'args")), { ...options, enabled: !!args && ',
                )
            })
            .replaceAll(
              /(@cosmjs\/cosmwasm-stargate|@cosmjs\/amino)/gm,
              '@abstract-money/cli/cosmjs',
            )

          await fse.writeFile(
            resolve(reactQueryFilePath),
            reactQueryFileContents,
          )

          type Hook = `use${string}`

          const importedQueryHooks = [
            ...reactQueryFileContents.matchAll(
              /export function (\w+).*\(\{((?:[\r\n \S]*?))\}/gm,
            ),
          ].map((m) => ({
            name: m[1],
            hasArgs: /args/.test(m[2] ?? ''),
          })) as readonly { name: Hook; hasArgs: boolean }[]

          const importedMutationHooks = [
            ...reactQueryFileContents.matchAll(
              /export function (\w+Mutation)/gm,
            ),
          ].map((m) => m[1]) as readonly Hook[]
          {
            const contractQueryImports = new Set<string>([])
            for (const hookName of importedMutationHooks) {
              contractQueryImports.add(hookName)

              if (isTypeScript) {
                // Slicing the `use` out of the hook to import the mutation type.
                // i.e. `useFooMutation` -> `FooMutation`
                contractQueryImports.add(hookName.slice(3))
              }
            }

            for (const { name: hookName } of importedQueryHooks) {
              contractQueryImports.add(hookName)
            }
            imports.push(
              `import { ${[...contractQueryImports.values()].join(
                ', ',
              )} } from './${relative(out, reactQueryFilePath.slice(0, -3))}'`,
            )
          }

          const queryHookNameToResponseTypeMap = new Map(
            [
              ...reactQueryFileContents.matchAll(
                /export function (\w+)<[\r\n ]*TData = (\w+)/gm,
              ),
            ].map((m) => [m[1] as Hook, m[2]]),
          )
          {
            const typesFilePath = join(
              cosmwasmCodegenDirPath,
              `${contractNamePascalCase}.types.ts`,
            )
            imports.push(
              `import * as ${contractNamePascalCase}Types from './${relative(
                out,
                typesFilePath.slice(0, -3),
              )}'`,
            )
          }

          imports.push(
            `import { ${contractNamePascalCase}${
              hasAbstractApp ? 'App' : ''
            }QueryClient, ${contractNamePascalCase}${
              hasAbstractApp ? 'App' : ''
            }Client } from './${relative(
              out,
              join(cosmwasmCodegenDirPath, `${contractNamePascalCase}.client`),
            )}'`,
          )

          if (hasAbstractApp)
            content.push(
              `export const ${constantCase(contract.name)}_MODULE_ID = '${
                contract.namespace
              }:${contract.name}'`,
            )

          {
            const queryHooks = new Map<Hook, string>([])
            const contractNameCamelCase = camelCase(contract.name)
            for (const { name: hookName, hasArgs } of importedQueryHooks) {
              const hookNamePascalCaseWithoutUse = pascalCase(hookName.slice(3))
              const hookNameCamelCaseWithoutUse = camelCase(hookName.slice(3))
              const hookNameWithoutModuleAndQuery = hookName
                .replace(pascalCase(contract.name), '')
                .replace('Query', '') as Hook
              const queryClientCamelCase = hasAbstractApp
                ? `${contractNameCamelCase}AppQueryClient`
                : `${contractNameCamelCase}QueryClient`
              const queryClientPascalCase = hasAbstractApp
                ? `${contractNamePascalCase}AppQueryClient`
                : `${contractNamePascalCase}QueryClient`
              queryHooks.set(
                hookNameWithoutModuleAndQuery,
                dedent`
                  ({ options, ${
                    hasArgs ? 'args, ' : ''
                  } ...rest }: Omit<Parameters<typeof ${hookName}<${contractNamePascalCase}Types.${queryHookNameToResponseTypeMap.get(
                  hookName,
                )}>>[0], 'client'> & { ${
                  hasAbstractApp
                    ? 'accountId: AccountId | undefined; chainName: string | undefined;'
                    : 'contractAddress: string | undefined;'
                }}) => {
                    const {
                      data: ${queryClientCamelCase},
                    } = use${hasAbstractApp ? 'Abstract' : ''}ModuleQueryClient(
                      {
                        ${
                          hasAbstractApp
                            ? `moduleId: ${constantCase(
                                contract.name,
                              )}_MODULE_ID,`
                            : ''
                        }
                        ...rest,
                        Module: ${queryClientPascalCase},
                      ${
                        hasAbstractApp
                          ? 'query: { enabled: options?.enabled }'
                          : ''
                      }
                      },
                    )

                    return use${hookNamePascalCaseWithoutUse}({
                      client: ${queryClientCamelCase},
                      options,
                      ${hasArgs ? 'args, ' : ''}
                    })
                  }
                `,
              )
            }

            const mutationHooks = new Map<Hook, string>([])
            for (const hookName of importedMutationHooks) {
              const hookNamePascalCaseWithoutUse = pascalCase(hookName.slice(3))
              const hookNameWithoutModuleAndMutation = hookName
                .replace(pascalCase(contract.name), '')
                .replace('Mutation', '') as Hook

              const clientCamelCase = hasAbstractApp
                ? `${contractNameCamelCase}AppClient`
                : `${contractNameCamelCase}Client`
              const clientPascalCase = hasAbstractApp
                ? `${contractNamePascalCase}AppClient`
                : `${contractNamePascalCase}Client`
              mutationHooks.set(
                hookNameWithoutModuleAndMutation,
                dedent`
                  (
                    { ${
                      hasAbstractApp
                        ? 'accountId, chainName, sender'
                        : 'contractAddress, sender'
                    } }: { ${
                  hasAbstractApp
                    ? 'accountId: AccountId | undefined; chainName: string | undefined; sender?: string | undefined;'
                    : 'contractAddress: string | undefined; sender?: string | undefined;'
                } },
                    options?: Omit<
                      UseMutationOptions<
                        ExecuteResult,
                        Error,
                        Omit<${hookNamePascalCaseWithoutUse}, 'client'>
                      >,
                      'mutationFn'
                    >,
                  ) => {
                    const {
                      data: ${clientCamelCase},
                      // TODO: figure out what to do with those
                      // isLoading: is${clientPascalCase}Loading,
                      // isError: is${clientPascalCase}Error,
                      // error: ${clientCamelCase}Error,
                    } = use${hasAbstractApp ? 'Abstract' : ''}ModuleClient(
                      {
                        ${
                          hasAbstractApp
                            ? `
                        moduleId: ${constantCase(contract.name)}_MODULE_ID,
                        accountId,
                        chainName,
                        sender,
                        `
                            : 'contractAddress,'
                        }
                        Module: ${clientPascalCase},
                      }
                    )

                    const {
                      mutate: mutate_,
                      mutateAsync: mutateAsync_,
                      ...rest
                    } = ${hookName}(options)

                    const mutate = useMemo(() => {
                      if (!${clientCamelCase}) return undefined

                      return (
                        variables: Omit<Parameters<typeof mutate_>[0], 'client'>,
                        options?: Parameters<typeof mutate_>[1],
                      ) => mutate_({ client: ${clientCamelCase}, ...variables }, options)
                    }, [mutate_, ${clientCamelCase}])

                    const mutateAsync = useMemo(() => {
                      if (!${clientCamelCase}) return undefined

                      return (
                        variables: Omit<Parameters<typeof mutateAsync_>[0], 'client'>,
                        options?: Parameters<typeof mutateAsync_>[1],
                      ) =>
                        mutateAsync_({ client: ${clientCamelCase}, ...variables }, options)
                    }, [mutateAsync_, ${clientCamelCase}])

                    return { mutate, mutateAsync, ...rest } as const
                  }
                `,
              )
            }

            content.push(
              dedent`
                export const ${camelCase(contract.name)} = {
                  queries: {
                    ${[...queryHooks.entries()]
                      .map(([hookName, hook]) => `${hookName}: ${hook},`)
                      .join('\n')}
                  },
                  mutations: {
                    ${[...mutationHooks.entries()]
                      .map(([hookName, hook]) => `${hookName}: ${hook},`)
                      .join('\n')}
                  }
                }
              `,
            )
          }
        }
      }

      return {
        imports: dedent`
          'use client';

          import { ExecuteResult } from '@abstract-money/cli/cosmjs'
          import { UseMutationOptions } from '@tanstack/react-query'
          import { useMemo } from 'react'

          import {
            useAbstractModuleClient,
            useAbstractModuleQueryClient,
          ${
            contractsWithoutAbstractApp.length !== 0
              ? `
            useModuleClient,
            useModuleQueryClient,
          `
              : ''
          }
          } from '@abstract-money/react'

          import { AccountId } from '@abstract-money/core'

          ${imports.join('\n\n')}
        `,
        // (actionsImportValues.length
        //   ? `import { ${actionsImportValues.join(
        //       ', ',
        //     )} } from 'wagmi/actions'`
        //   : ''),
        content: content.join('\n\n'),
      }
    },
  }
}
