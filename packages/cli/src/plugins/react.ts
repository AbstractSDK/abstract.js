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

          let useAbstractModuleQueryClientHookName:
            | 'useGrazAbstractModuleQueryClient'
            | 'useCosmosKitAbstractModuleQueryClient'
            | 'useAbstractModuleQueryClient'
          let useAbstractModuleClientHookName:
            | 'useGrazAbstractModuleClient'
            | 'useCosmosKitAbstractModuleClient'
            | 'useAbstractModuleClient'
          let useAbstractClientHookName:
            | 'useGrazAbstractClient'
            | 'useCosmosKitAbstractClient'
            | undefined
          let useAbstractQueryClientHookName:
            | 'useGrazAbstractQueryClient'
            | 'useCosmosKitAbstractQueryClient'
            | undefined

          if (options?.addon === 'graz') {
            useAbstractModuleQueryClientHookName =
              'useGrazAbstractModuleQueryClient'
            useAbstractModuleClientHookName = 'useGrazAbstractModuleClient'
            useAbstractClientHookName = 'useGrazAbstractClient'
            useAbstractQueryClientHookName = 'useGrazAbstractQueryClient'
            content.push(dedent`
              function useGrazAbstractModuleQueryClient(
                args: Omit<Parameters<typeof useAbstractModuleQueryClient>[0], 'client'>,
                options?: Parameters<typeof useAbstractModuleQueryClient>[1],
              ) {
                const { data: client } = useCosmWasmClient()
                return useAbstractModuleQueryClient(
                  {
                    client,
                    ...args,
                  },
                  options,
                )
              }

              function useGrazAbstractModuleClient(
                args: Omit<
                  Parameters<typeof useAbstractModuleClient>[0],
                  'client' | 'sender'
                >,
                options?: Parameters<typeof useAbstractModuleClient>[1],
              ) {
                const { data: client } = useCosmWasmSigningClient()
                const { data: account } = useAccount()
                const sender = account?.bech32Address
                return useAbstractModuleClient(
                  {
                    client,
                    sender,
                    ...args,
                  },
                  options,
                )
              }

              function useGrazAbstractClient(
                args: Omit<
                  Parameters<typeof useAbstractClient>[0],
                  'client' | 'sender'
                >,
                options?: Parameters<typeof useAbstractClient>[1],
              ) {
                const { data: client } = useCosmWasmSigningClient()
                const { data: account } = useAccount()
                const sender = account?.bech32Address
                return useAbstractClient(
                  {
                    client,
                    sender,
                    ...args,
                  },
                  options,
                )
              }

              function useGrazAbstractQueryClient(
                args: Omit<
                  Parameters<typeof useAbstractQueryClient>[0],
                  'client' | 'sender'
                >,
                options?: Parameters<typeof useAbstractQueryClient>[1],
              ) {
                const { data: client } = useCosmWasmClient()
                return useAbstractQueryClient(
                  {
                    client,
                    ...args,
                  },
                  options,
                )
              }
            `)
          } else if (options?.addon === 'cosmos-kit') {
            useAbstractModuleQueryClientHookName =
              'useCosmosKitAbstractModuleQueryClient'
            useAbstractModuleClientHookName = 'useCosmosKitAbstractModuleClient'
            useAbstractClientHookName = 'useCosmosKitAbstractClient'
            useAbstractQueryClientHookName = 'useCosmosKitAbstractQueryClient'
            content.push(dedent`
              function useCosmosKitAbstractModuleQueryClient(
                args: Omit<Parameters<typeof useAbstractModuleQueryClient>[0], 'client'>,
                options?: Parameters<typeof useAbstractModuleQueryClient>[1],
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

                return useAbstractModuleQueryClient(
                  {
                    client,
                    ...args,
                  },
                  options,
                )
              }

              function useCosmosKitAbstractModuleClient(
                args: Omit<
                  Parameters<typeof useAbstractModuleClient>[0],
                  'client' | 'sender'
                >,
                options?: Parameters<typeof useAbstractModuleClient>[1],
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

                return useAbstractModuleClient(
                  {
                    client,
                    sender: address,
                    ...args,
                  },
                  options,
                )
              }

              function useCosmosKitAbstractClient(
                args: Omit<
                  Parameters<typeof useAbstractClient>[0],
                  'client' | 'sender'
                >,
                options?: Parameters<typeof useAbstractClient>[1],
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

                return useAbstractClient(
                  {
                    client,
                    sender: address,
                    ...args,
                  },
                  options,
                )
              }

              function useCosmosKitAbstractQueryClient(
                args: Omit<
                  Parameters<typeof useAbstractQueryClient>[0],
                  'client' | 'sender'
                >,
                options?: Parameters<typeof useAbstractQueryClient>[1],
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

                return useAbstractQueryClient(
                  {
                    client,
                    ...args,
                  },
                  options,
                )
              }
            `)
          } else {
            useAbstractModuleQueryClientHookName =
              'useAbstractModuleQueryClient'
            useAbstractModuleClientHookName = 'useAbstractModuleClient'
          }

          const shouldInjectClientAndSender = options === undefined

          if (!shouldInjectClientAndSender) {
            imports.push(dedent`
              import { useAbstractClient, useAbstractQueryClient } from '@abstract-money/react/utils'
              import {
                useDeposit as _useDeposit,
                useWithdraw as _useWithdraw,
                useExecute as _useExecute,
                useAccounts as _useAccounts
              } from '@abstract-money/react/hooks'
            `)
            content.push(dedent`
              export function useAccounts({ chain, owner }: Omit<Parameters<typeof _useAccounts>[0], 'client'>, opts?: Parameters<typeof _useAccounts>[1]) {
                const {
                  data: abstractQueryClient,
                  // TODO: figure out what to do with those
                  // isLoading: isAbstractQueryClientLoading,
                  // isError: isAbstractQueryClientError,
                  // error: abstractQueryClientError,
                } = ${useAbstractQueryClientHookName}({ chain })

                return _useAccounts({chain, owner, client: abstractQueryClient}, opts)
              }

              export function useDeposit({ chain }:{ chain: string | undefined }, ...args: Parameters<typeof _useDeposit>) {
                const {
                  data: abstractClient,
                  // TODO: figure out what to do with those
                  // isLoading: isAbstractClientLoading,
                  // isError: isAbstractClientError,
                  // error: abstractClientError,
                } = ${useAbstractClientHookName}({ chain })

                const {
                  mutate: mutate_,
                  mutateAsync: mutateAsync_,
                  ...rest
                } = _useDeposit(...args)

                const mutate = useMemo(() => {
                  if (!abstractClient) return undefined

                  return (
                    variables: Omit<Parameters<typeof mutate_>[0], 'abstractClient'>,
                    options?: Parameters<typeof mutate_>[1],
                  ) => mutate_({ abstractClient, ...variables }, options)
                }, [mutate_, abstractClient])

                const mutateAsync = useMemo(() => {
                  if (!abstractClient) return undefined

                  return (
                    variables: Omit<Parameters<typeof mutateAsync_>[0], 'abstractClient'>,
                    options?: Parameters<typeof mutateAsync_>[1],
                  ) =>
                    mutateAsync_({ abstractClient, ...variables }, options)
                }, [mutateAsync_, abstractClient])

                return { mutate, mutateAsync, ...rest } as const
              }

              export function useWithdraw({ chain }:{ chain: string | undefined }, ...args: Parameters<typeof _useWithdraw>) {
                const {
                  data: abstractClient,
                  // TODO: figure out what to do with those
                  // isLoading: isAbstractClientLoading,
                  // isError: isAbstractClientError,
                  // error: abstractClientError,
                } = ${useAbstractClientHookName}({ chain })

                const {
                  mutate: mutate_,
                  mutateAsync: mutateAsync_,
                  ...rest
                } = _useWithdraw(...args)

                const mutate = useMemo(() => {
                  if (!abstractClient) return undefined

                  return (
                    variables: Omit<Parameters<typeof mutate_>[0], 'abstractClient'>,
                    options?: Parameters<typeof mutate_>[1],
                  ) => mutate_({ abstractClient, ...variables }, options)
                }, [mutate_, abstractClient])

                const mutateAsync = useMemo(() => {
                  if (!abstractClient) return undefined

                  return (
                    variables: Omit<Parameters<typeof mutateAsync_>[0], 'abstractClient'>,
                    options?: Parameters<typeof mutateAsync_>[1],
                  ) =>
                    mutateAsync_({ abstractClient, ...variables }, options)
                }, [mutateAsync_, abstractClient])

                return { mutate, mutateAsync, ...rest } as const
              }

              export function useExecute({ chain }:{ chain: string | undefined }, ...args: Parameters<typeof _useExecute>) {
                const {
                  data: abstractClient,
                  // TODO: figure out what to do with those
                  // isLoading: isAbstractClientLoading,
                  // isError: isAbstractClientError,
                  // error: abstractClientError,
                } = ${useAbstractClientHookName}({ chain })

                const {
                  mutate: mutate_,
                  mutateAsync: mutateAsync_,
                  ...rest
                } = _useExecute(...args)

                const mutate = useMemo(() => {
                  if (!abstractClient) return undefined

                  return (
                    variables: Omit<Parameters<typeof mutate_>[0], 'abstractClient'>,
                    options?: Parameters<typeof mutate_>[1],
                  ) => mutate_({ abstractClient, ...variables }, options)
                }, [mutate_, abstractClient])

                const mutateAsync = useMemo(() => {
                  if (!abstractClient) return undefined

                  return (
                    variables: Omit<Parameters<typeof mutateAsync_>[0], 'abstractClient'>,
                    options?: Parameters<typeof mutateAsync_>[1],
                  ) =>
                    mutateAsync_({ abstractClient, ...variables }, options)
                }, [mutateAsync_, abstractClient])

                return { mutate, mutateAsync, ...rest } as const
              }
            `)
          }

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
                    } = ${useAbstractModuleQueryClientHookName}(
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
                      data: ${contractNameCamelCase}AbstractModuleClient,
                      // TODO: figure out what to do with those
                      // isLoading: is${contractNamePascalCase}AbstractModuleClientLoading,
                      // isError: is${contractNamePascalCase}AbstractModuleClientError,
                      // error: ${contractNameCamelCase}AbstractModuleClientError,
                    } = ${useAbstractModuleClientHookName}(
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
          'use client';

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
            useAbstractModuleClient,
            useAbstractModuleQueryClient,
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
