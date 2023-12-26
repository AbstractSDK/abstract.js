import _codegen from '@abstract-money/ts-codegen'
import { TSBuilderOptions } from '@abstract-money/ts-codegen'

import { camelCase, constantCase, pascalCase } from 'change-case'
import dedent from 'dedent'
import { default as fse } from 'fs-extra'
import { join, relative, resolve } from 'pathe'
import type { Plugin } from '../config'
import type { RequiredBy } from '../types'

// NOTE: It looks like the `ts-codegen` package bundles incorrectly and the default export is not actually exported.
const codegen = (_codegen as any).default as typeof _codegen

type ReactConfig = { addon: 'graz' } | { addon: 'cosmos-kit'; lite?: boolean }
type ReactResult = RequiredBy<Plugin, 'run'>

export function react(options?: ReactConfig): ReactResult {
  return {
    name: 'React',
    async run({ contracts, out, isTypeScript }) {
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

      if (options?.addon === 'graz') {
        imports.push(
          `import { useAccount, useCosmWasmClient, useCosmWasmSigningClient } from 'graz'`,
        )
      } else if (options?.addon === 'cosmos-kit') {
        imports.push(
          `import { useChain } from '@cosmos-kit/${
            options.lite ? 'react-lite' : 'react'
          }'`,
        )
      }

      const content: string[] = []
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
                '@abstract-money/core',
              ),
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

          const importedHooks = [
            ...reactQueryFileContents.matchAll(/export function (\w+)/gm),
          ].map((m) => m[1]) as readonly Hook[]
          {
            const contractQueryImports = new Set<string>([])
            for (const hookName of importedHooks) {
              contractQueryImports.add(hookName)

              if (isTypeScript && hookName.endsWith('Mutation')) {
                // Slicing the `use` out of the hook to import the mutation type.
                // i.e. `useFooMutation` -> `FooMutation`
                contractQueryImports.add(hookName.slice(3))
              }
            }
            imports.push(
              `import { ${[...contractQueryImports.values()].join(
                ', ',
              )} } from './${relative(out, reactQueryFilePath.slice(0, -3))}'`,
            )
          }

          const queryHooksWithResponseTypes = new Map(
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
            const importedResponseTypes = new Set(
              queryHooksWithResponseTypes.values(),
            )
            imports.push(
              `import { ${[...importedResponseTypes.values()].join(
                ', ',
              )} } from './${relative(out, typesFilePath.slice(0, -3))}'`,
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

          let useModuleQueryClientHookName:
            | 'useGrazModuleQueryClient'
            | 'useCosmosKitModuleQueryClient'
            | 'useModuleQueryClient'
          let useModuleMutationClientHookName:
            | 'useGrazModuleMutationClient'
            | 'useCosmosKitModuleMutationClient'
            | 'useModuleMutationClient'

          if (options?.addon === 'graz') {
            useModuleQueryClientHookName = 'useGrazModuleQueryClient'
            useModuleMutationClientHookName = 'useGrazModuleMutationClient'
            content.push(dedent`
              function useGrazModuleQueryClient(
                args: Omit<Parameters<typeof useModuleQueryClient>[0], 'client'>,
                options?: Parameters<typeof useModuleQueryClient>[1],
              ) {
                const { data: client } = useCosmWasmClient()
                return useModuleQueryClient(
                  {
                    client,
                    ...args,
                  },
                  options,
                )
              }

              function useGrazModuleMutationClient(
                args: Omit<
                  Parameters<typeof useModuleMutationClient>[0],
                  'client' | 'sender'
                >,
                options?: Parameters<typeof useModuleMutationClient>[1],
              ) {
                const { data: client } = useCosmWasmSigningClient()
                const { data: account } = useAccount()
                const sender = account?.bech32Address
                return useModuleMutationClient(
                  {
                    client,
                    sender,
                    ...args,
                  },
                  options,
                )
              }
            `)
          } else if (options?.addon === 'cosmos-kit') {
            useModuleQueryClientHookName = 'useCosmosKitModuleQueryClient'
            useModuleMutationClientHookName = 'useCosmosKitModuleMutationClient'
            content.push(dedent`
              function useCosmosKitModuleQueryClient(
                args: Omit<Parameters<typeof useModuleQueryClient>[0], 'client'>,
                options?: Parameters<typeof useModuleQueryClient>[1],
              ) {
                const [client, setClient] = useState<CosmWasmClient | undefined>(undefined)
                const {getCosmWasmClient: _getCosmWasmClient} = useChain(args.chain ?? 'neutron')

                const getCosmWasmClient = useMemo(() => {
                  if (!args.chain) return undefined
                  return _getCosmWasmClient
                }, [_getCosmWasmClient, args.chain])

                useEffect(() => {
                  if (!getCosmWasmClient) return
                  getCosmWasmClient().then((client) => setClient(client))

                }, [getCosmWasmClient])

                return useModuleQueryClient(
                  {
                    client,
                    ...args,
                  },
                  options,
                )
              }

              function useCosmosKitModuleMutationClient(
                args: Omit<
                  Parameters<typeof useModuleMutationClient>[0],
                  'client' | 'sender'
                >,
                options?: Parameters<typeof useModuleMutationClient>[1],
              ) {
                const [client, setClient] = useState<SigningCosmWasmClient | undefined>(undefined)
                const {getSigningCosmWasmClient: _getSigningCosmWasmClient, address, isWalletConnected} = useChain(args.chain ?? 'neutron')

                const getSigningCosmWasmClient = useMemo(() => {
                  if (!args.chain || !isWalletConnected) return undefined
                  return _getSigningCosmWasmClient
                }, [_getSigningCosmWasmClient, args.chain])

                useEffect(() => {
                  if (!getSigningCosmWasmClient) return
                  getSigningCosmWasmClient().then((client) => setClient(client))

                }, [getSigningCosmWasmClient])

                return useModuleMutationClient(
                  {
                    client,
                    sender: address,
                    ...args,
                  },
                  options,
                )
              }`)
          } else {
            useModuleQueryClientHookName = 'useModuleQueryClient'
            useModuleMutationClientHookName = 'useModuleMutationClient'
          }

          const shouldInjectClientAndSender = options === undefined

          {
            const queryHooks = new Map<Hook, string>([])
            const contractNameCamelCase = camelCase(contract.name)
            for (const hookName of importedHooks) {
              if (!hookName.endsWith('Query')) continue
              const hookNamePascalCaseWithoutUse = pascalCase(hookName.slice(3))
              const hookNameCamelCaseWithoutUse = camelCase(hookName.slice(3))
              const hookNameWithoutModuleAndQuery = hookName
                .replace(pascalCase(contract.name), '')
                .replace('Query', '') as Hook
              queryHooks.set(
                hookNameWithoutModuleAndQuery,
                dedent`
                  ({ options, ${
                    shouldInjectClientAndSender ? 'client,' : ''
                  } chain, ...rest }: Omit<Parameters<typeof ${hookName}<${queryHooksWithResponseTypes.get(
                  hookName,
                )}>>[0], 'client'> & { chain: string | undefined${
                  shouldInjectClientAndSender
                    ? ', client: CosmWasmClient | undefined'
                    : ''
                } }) => {
                    const {
                      data: ${contractNameCamelCase}AppQueryClient,
                      isLoading: is${contractNamePascalCase}AppQueryClientLoading,
                      isError: is${contractNamePascalCase}AppQueryClientError,
                      error: ${contractNameCamelCase}AppQueryClientError,
                    } = ${useModuleQueryClientHookName}(
                      {
                        moduleId: ${constantCase(contract.name)}_MODULE_ID,
                        ${shouldInjectClientAndSender ? 'client,' : ''}
                        chain,
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
                      ...rest
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
            for (const hookName of importedHooks) {
              if (!hookName.endsWith('Mutation')) continue
              const hookNamePascalCaseWithoutUse = pascalCase(hookName.slice(3))
              const hookNameWithoutModuleAndMutation = hookName
                .replace(pascalCase(contract.name), '')
                .replace('Mutation', '') as Hook
              mutationHooks.set(
                hookNameWithoutModuleAndMutation,
                dedent`
                  (
                    { ${
                      shouldInjectClientAndSender ? 'client, sender, ' : ''
                    }chain }: { ${
                  shouldInjectClientAndSender
                    ? 'client: SigningCosmWasmClient | undefined; sender: string | undefined; '
                    : ''
                } chain: string | undefined },
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
                      data: ${contractNameCamelCase}MutationClient,
                      // TODO: figure out what to do with those
                      // isLoading: is${contractNamePascalCase}MutationClientLoading,
                      // isError: is${contractNamePascalCase}MutationClientError,
                      // error: ${contractNameCamelCase}MutationClientError,
                    } = ${useModuleMutationClientHookName}(
                      {
                        moduleId: ${constantCase(contract.name)}_MODULE_ID,${
                  shouldInjectClientAndSender ? '\nclient,\nsender, ' : ''
                }
                        chain,
                        Module: ${contractNamePascalCase}AppClient,
                      }
                    )

                    const {
                      mutate: mutate_,
                      mutateAsync: mutateAsync_,
                      ...rest
                    } = ${hookName}(options)

                    const mutate = useMemo(() => {
                      if (!${contractNameCamelCase}MutationClient) return undefined

                      return (
                        variables: Omit<Parameters<typeof mutate_>[0], 'client'>,
                        options?: Parameters<typeof mutate_>[1],
                      ) => mutate_({ client: ${contractNameCamelCase}MutationClient, ...variables }, options)
                    }, [mutate_, ${contractNameCamelCase}MutationClient])

                    const mutateAsync = useMemo(() => {
                      if (!${contractNameCamelCase}MutationClient) return undefined

                      return (
                        variables: Omit<Parameters<typeof mutateAsync_>[0], 'client'>,
                        options?: Parameters<typeof mutateAsync_>[1],
                      ) =>
                        mutateAsync_({ client: ${contractNameCamelCase}MutationClient, ...variables }, options)
                    }, [mutateAsync_, ${contractNameCamelCase}MutationClient])

                    return { mutate, mutateAsync, ...rest } as const
                  }
                `,
              )
            }

            content.push(
              dedent`
                export const ${contract.name} = {
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

      const shouldImportUseEffectAndUseState = options?.addon === 'cosmos-kit'
      const shouldImportCosmWasmClientTypes = options?.addon === 'cosmos-kit'

      return {
        imports: dedent`
          import { ${
            shouldImportCosmWasmClientTypes
              ? 'SigningCosmWasmClient, CosmWasmClient, '
              : ''
          }ExecuteResult } from '@cosmjs/cosmwasm-stargate'
          import { UseMutationOptions } from '@tanstack/react-query'
          import { useMemo${
            shouldImportUseEffectAndUseState ? ', useState, useEffect' : ''
          } } from 'react'

          import {
            useModuleMutationClient,
            useModuleQueryClient,
          } from '@abstract-money/react/utils'

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
