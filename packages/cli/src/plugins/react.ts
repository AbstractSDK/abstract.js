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

export function react(): ReactResult {
  return {
    name: 'React',
    async run({ contracts, out, isTypeScript }) {
      // Check for disallowed contract names

      if (
        contracts.some(({ name }) => DISALLOWED_CONTRACT_NAMES.includes(name))
      )
        throw new Error(
          '`proxy` and `manager` contract generations are disallowed. Use `@abstract-money/core` methods or `@abstract-money/react` methods',
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
          queryFactory: true,
          queryKeys: true,
        },
        abstractApp: { enabled: true },
        bundle: { enabled: false },
      } satisfies TSBuilderOptions

      const cosmwasmCodegenDirPath = join(out, 'cosmwasm-codegen')

      await codegen({
        options: codegenOptions,
        contracts: contracts.map(({ name, path }) => ({ name, dir: path })),
        outPath: cosmwasmCodegenDirPath,
      })

      const imports: string[] = []
      const content: string[] = []

      content.push(dedent`
        function useAbstractModuleQueryClient(
          args: Omit<Parameters<typeof useAbstractModuleQueryClient_>[0], 'client'>,
          options?: Parameters<typeof useAbstractModuleQueryClient_>[1],
        ) {
          const { data: client } = useCosmWasmClient({chainName: args.chainName})
          return useAbstractModuleQueryClient_(
            {
              client,
              ...args,
            },
            options,
          )
        }

        function useAbstractModuleClient(
          args: Omit<
            Parameters<typeof useAbstractModuleClient_>[0],
            'client' | 'sender'
          >,
          options?: Parameters<typeof useAbstractModuleClient_>[1],
        ) {
          const { data: client } = useSigningCosmWasmClient({chainName: args.chainName})
          const { data: sender } = useSenderAddress({chainName: args.chainName})
          return useAbstractModuleClient_(
            {
              client,
              sender,
              ...args,
            },
            options,
          )
        }
      `)

      for (const contract of contracts) {
        {
          const contractNamePascalCase = pascalCase(contract.name)

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
              generatedClientFileContent.replace(
                '@abstract-money/abstract.js',
                '@abstract-money/core/legacy',
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
          const reactQueryFileContents = await fse.readFile(
            resolve(reactQueryFilePath),
            'utf8',
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
            `import { ${contractNamePascalCase}AppQueryClient, ${contractNamePascalCase}AppClient } from './${relative(
              out,
              join(cosmwasmCodegenDirPath, `${contractNamePascalCase}.client`),
            )}'`,
          )

          content.push(
            `const ${constantCase(contract.name)}_MODULE_ID = '${
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
              queryHooks.set(
                hookNameWithoutModuleAndQuery,
                dedent`
                  ({ options, ${
                    hasArgs ? 'args, ' : ''
                  } ...rest }: Omit<Parameters<typeof ${hookName}<${contractNamePascalCase}Types.${queryHookNameToResponseTypeMap.get(
                  hookName,
                )}>>[0], 'client'> & { accountId?: AccountId; chainName: string | undefined }) => {
                    const {
                      data: ${contractNameCamelCase}AppQueryClient,
                      isLoading: is${contractNamePascalCase}AppQueryClientLoading,
                      isError: is${contractNamePascalCase}AppQueryClientError,
                      error: ${contractNameCamelCase}AppQueryClientError,
                    } = useAbstractModuleQueryClient(
                      {
                        moduleId: ${constantCase(contract.name)}_MODULE_ID,
                        ...rest,
                        Module: ${contractNamePascalCase}AppQueryClient,
                      },
                      { enabled: options?.enabled },
                    )

                    const {
                      data,
                      isLoading: is${hookNamePascalCaseWithoutUse}Loading,
                      isError: is${hookNamePascalCaseWithoutUse}Error,
                      error: ${hookNameCamelCaseWithoutUse}Error,
                    } = use${hookNamePascalCaseWithoutUse}({
                      client: ${contractNameCamelCase}AppQueryClient,
                      options,
                      ${hasArgs ? 'args, ' : ''}
                    })

                    if (is${contractNamePascalCase}AppQueryClientError)
                      return {
                        data: undefined,
                        isLoading: false,
                        isError: true,
                        isSuccess: false,
                        error: ${contractNameCamelCase}AppQueryClientError,
                      } as const
                    if (is${hookNamePascalCaseWithoutUse}Error)
                      return {
                        data: undefined,
                        isLoading: false,
                        isError: true,
                        isSuccess: false,
                        error: ${hookNameCamelCaseWithoutUse}Error,
                      } as const
                    if (is${contractNamePascalCase}AppQueryClientLoading || is${hookNamePascalCaseWithoutUse}Loading)
                      return {
                        data: undefined,
                        isLoading: true,
                        isError: false,
                        isSuccess: false,
                      } as const
                    return {
                      data,
                      isLoading: false,
                      isError: false,
                      isSuccess: true,
                    } as const
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
              mutationHooks.set(
                hookNameWithoutModuleAndMutation,
                dedent`
                  (
                    { chainName, accountId }: { chainName: string | undefined; accountId?: AccountId },
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
                      data: ${contractNameCamelCase}AbstractModuleClient,
                      // TODO: figure out what to do with those
                      // isLoading: is${contractNamePascalCase}AbstractModuleClientLoading,
                      // isError: is${contractNamePascalCase}AbstractModuleClientError,
                      // error: ${contractNameCamelCase}AbstractModuleClientError,
                    } = useAbstractModuleClient(
                      {
                        moduleId: ${constantCase(contract.name)}_MODULE_ID,
                        accountId,
                        chainName,
                        Module: ${contractNamePascalCase}AppClient,
                      }
                    )

                    const {
                      mutate: mutate_,
                      mutateAsync: mutateAsync_,
                      ...rest
                    } = ${hookName}(options)

                    const mutate = useMemo(() => {
                      if (!${contractNameCamelCase}AbstractModuleClient) return undefined

                      return (
                        variables: Omit<Parameters<typeof mutate_>[0], 'client'>,
                        options?: Parameters<typeof mutate_>[1],
                      ) => mutate_({ client: ${contractNameCamelCase}AbstractModuleClient, ...variables }, options)
                    }, [mutate_, ${contractNameCamelCase}AbstractModuleClient])

                    const mutateAsync = useMemo(() => {
                      if (!${contractNameCamelCase}AbstractModuleClient) return undefined

                      return (
                        variables: Omit<Parameters<typeof mutateAsync_>[0], 'client'>,
                        options?: Parameters<typeof mutateAsync_>[1],
                      ) =>
                        mutateAsync_({ client: ${contractNameCamelCase}AbstractModuleClient, ...variables }, options)
                    }, [mutateAsync_, ${contractNameCamelCase}AbstractModuleClient])

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

          import { ExecuteResult } from '@cosmjs/cosmwasm-stargate'
          import { UseMutationOptions } from '@tanstack/react-query'
          import { useMemo } from 'react'

          import {
            useAbstractModuleClient as useAbstractModuleClient_,
            useAbstractModuleQueryClient as useAbstractModuleQueryClient_,
          } from '@abstract-money/react/utils'

          import { AccountId } from '@abstract-money/core'

          import {
            useCosmWasmClient,
            useSigningCosmWasmClient,
            useSenderAddress
          } from '@abstract-money/react/hooks'

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
