import _codegen from '@abstract-money/ts-codegen'
import { TSBuilderOptions } from '@abstract-money/ts-codegen'

import { camelCase, pascalCase } from 'change-case'
import dedent from 'dedent'
import { default as fse } from 'fs-extra'
import { join, relative, resolve } from 'pathe'
import type { Plugin } from '../config'
import type { RequiredBy } from '../types'

type ReactResult = RequiredBy<Plugin, 'run'>

// NOTE: It looks like the `ts-codegen` package bundles incorrectly and the default export is not actually exported.
const codegen = (_codegen as any).default as typeof _codegen

export function react(): ReactResult {
  return {
    name: 'React',
    async run({ contracts, out, isTypeScript /*outputs*/ }) {
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

          type Hook = `use${string}Query` | `use${string}Mutation`

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

          imports.push(
            `import { ${contractNamePascalCase}AppQueryClient, ${contractNamePascalCase}AppClient } from './${relative(
              out,
              join(cosmwasmCodegenDirPath, `${contractNamePascalCase}.client`),
            )}'`,
          )

          content.push(`const MODULE_ID = '${contract.name}'`)

          {
            const queryHooks = new Map<Hook, string>([])
            const contractNameCamelCase = camelCase(contract.name)
            for (const hookName of importedHooks) {
              const hookNamePascalCaseWithoutUse = pascalCase(hookName.slice(3))
              const hookNameCamelCaseWithoutUse = camelCase(hookName.slice(3))
              if (!hookName.endsWith('Query')) continue
              queryHooks.set(
                hookName,
                dedent`
                ({ options, client, chainId, ...rest }: Omit<Parameters<typeof ${hookName}>[0], 'client'> & { chainId: string | undefined, client: CosmWasmClient | undefined }) => {
                  const {
                    data: ${contractNameCamelCase}AppQueryClient,
                    isLoading: is${contractNamePascalCase}AppQueryClientLoading,
                    isError: is${contractNamePascalCase}AppQueryClientError,
                    error: ${contractNameCamelCase}AppQueryClientError,
                  } = useModuleQueryClient(
                    {
                      moduleId: MODULE_ID,
                      client,
                      chain: chainId,
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
              const hookNamePascalCaseWithoutUse = pascalCase(hookName.slice(3))
              if (!hookName.endsWith('Mutation')) continue
              mutationHooks.set(
                hookName,
                dedent`
                (
                  { client, chainId, sender }: { client: SigningCosmWasmClient | undefined; chainId: string | undefined; sender: string | undefined },
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
                  } = useModuleMutationClient(
                    {
                      moduleId: MODULE_ID,
                      client,
                      sender,
                      chain: chainId,
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

      //   const baseHookName = pascalCase(contract.name)
      //
      //   let typeParams = ''
      //   let innerContent = ''
      //   let omitted = ''
      //   const innerHookParams: Record<string, string> = {
      //     abi: contract.meta.abiName,
      //   }
      //
      //   const innerHookConfig = `${Object.entries(innerHookParams).reduce(
      //     (prev, curr) => `${prev}${curr[0]}: ${curr[1]},`,
      //     '{',
      //   )}...config}`
      //
      //   if (hooks.useContractFunctionRead) {
      //     const contractNames = new Set<string>()
      //     for (const item of contract.abi) {
      //       if (
      //         item.type === 'function' &&
      //         (item.stateMutability === 'view' ||
      //           item.stateMutability === 'pure')
      //       ) {
      //         // Skip overrides since they are captured by same hook
      //         if (contractNames.has(item.name)) continue
      //         contractNames.add(item.name)
      //
      //         const name = `use${baseHookName}${pascalCase(item.name)}`
      //         if (hookNames.has(name))
      //           throw getHookNameError(name, contract.name)
      //         hookNames.add(name)
      //
      //         const config = `${Object.entries({
      //           ...innerHookParams,
      //           functionName: `'${item.name}'`,
      //         }).reduce(
      //           (prev, curr) => `${prev}${curr[0]}: ${curr[1]},`,
      //           '{',
      //         )}...config}`
      //         imports.add('useContractRead')
      //         const docString = genDocString('useContractRead', {
      //           name: 'functionName',
      //           value: item.name,
      //         })
      //
      //         let code
      //         if (isTypeScript) {
      //           imports.add('UseContractReadConfig')
      //           actionsImports.add('ReadContractResult')
      //           // prettier-ignore
      //           code = dedent`
      //             ${docString}
      //             export function ${name}<
      //               TFunctionName extends '${item.name}',
      //               TSelectData = ReadContractResult<typeof ${contract.meta.abiName}, TFunctionName>
      //             >(
      //               config: Omit<UseContractReadConfig<typeof ${contract.meta.abiName}, TFunctionName, TSelectData>, 'abi'${omitted} | 'functionName'>${typeParams} = {} as any,
      //             ) {
      //               ${innerContent}
      //               return useContractRead(${config} as UseContractReadConfig<typeof ${contract.meta.abiName}, TFunctionName, TSelectData>)
      //             }
      //             `
      //         } else {
      //           // prettier-ignore
      //           code = dedent`
      //             ${docString}
      //             export function ${name}(config = {}) {
      //               ${innerContent}
      //               return useContractRead(${config})
      //             }
      //             `
      //         }
      //         content.push(code)
      //       }
      //     }
      //   }
      //
      //   if (hasWriteFunction) {
      //     if (hooks.useContractWrite) {
      //       const name = `use${baseHookName}Write`
      //       if (hookNames.has(name)) throw getHookNameError(name, contract.name)
      //       hookNames.add(name)
      //
      //       imports.add('useContractWrite')
      //       const docString = genDocString('useContractWrite')
      //
      //       let code
      //       if (isTypeScript) {
      //         const hasMultichainAddress = typeof contract.address === 'object'
      //         const TChainId = hasMultichainAddress
      //           ? `TChainId extends number = keyof typeof ${contract.meta.addressName}`
      //           : ''
      //         let typeParams_ = ''
      //         if (TChainId) {
      //           imports.add('Address')
      //           typeParams_ = 'address?: never; chainId?: TChainId;'
      //         }
      //
      //         imports.add('UseContractWriteConfig')
      //         if (!hasWriteContractMode) actionsImports.add('WriteContractMode')
      //         actionsImports.add('PrepareWriteContractResult')
      //         // prettier-ignore
      //         code = dedent`
      //         ${docString}
      //         export function ${name}<
      //           TFunctionName extends string,
      //           TMode extends WriteContractMode = undefined,
      //           ${TChainId}
      //         >(
      //           config: TMode extends 'prepared'
      //             ? UseContractWriteConfig<
      //                 PrepareWriteContractResult<typeof ${contract.meta.abiName}, string>['request']['abi'],
      //                 TFunctionName,
      //                 TMode
      //               >${
      //                 TChainId
      //                   ? ' & { address?: Address; chainId?: TChainId; }'
      //                   : ''
      //               }
      //             : UseContractWriteConfig<typeof ${contract.meta.abiName}, TFunctionName, TMode> & {
      //                 abi?: never
      //                 ${typeParams_}
      //               } = {} as any,
      //         ) {
      //           ${innerContent}
      //           return useContractWrite<typeof ${
      //             contract.meta.abiName
      //           }, TFunctionName, TMode>(${innerHookConfig} as any)
      //         }
      //         `
      //       } else
      //         code = dedent`
      //         ${docString}
      //         export function ${name}(config = {}) {
      //           ${innerContent}
      //           return useContractWrite(${innerHookConfig})
      //         }
      //         `
      //       content.push(code)
      //     }
      //
      //     if (hooks.useContractFunctionWrite) {
      //       const contractNames = new Set<string>()
      //       for (const item of contract.abi) {
      //         if (
      //           item.type === 'function' &&
      //           (item.stateMutability === 'nonpayable' ||
      //             item.stateMutability === 'payable')
      //         ) {
      //           // Skip overrides since they are captured by same hook
      //           if (contractNames.has(item.name)) continue
      //           contractNames.add(item.name)
      //
      //           const name = `use${baseHookName}${pascalCase(item.name)}`
      //           if (hookNames.has(name))
      //             throw getHookNameError(name, contract.name)
      //           hookNames.add(name)
      //
      //           const config = `${Object.entries({
      //             ...innerHookParams,
      //             functionName: `'${item.name}'`,
      //           }).reduce(
      //             (prev, curr) => `${prev}${curr[0]}: ${curr[1]},`,
      //             '{',
      //           )}...config}`
      //           imports.add('useContractWrite')
      //           const docString = genDocString('useContractWrite', {
      //             name: 'functionName',
      //             value: item.name,
      //           })
      //
      //           let code
      //           if (isTypeScript) {
      //             const hasMultichainAddress =
      //               typeof contract.address === 'object'
      //             const TChainId = hasMultichainAddress
      //               ? `TChainId extends number = keyof typeof ${contract.meta.addressName}`
      //               : ''
      //             let preparedTypeParams = `functionName?: '${item.name}'`
      //             let unpreparedTypeParams = `functionName?: '${item.name}'`
      //             if (TChainId) {
      //               imports.add('Address')
      //               preparedTypeParams = `address?: Address; chainId?: TChainId; functionName?: '${item.name}'`
      //               unpreparedTypeParams = `address?: never; chainId?: TChainId; functionName?: '${item.name}'`
      //             }
      //
      //             imports.add('UseContractWriteConfig')
      //             if (!hasWriteContractMode)
      //               actionsImports.add('WriteContractMode')
      //             actionsImports.add('PrepareWriteContractResult')
      //             // prettier-ignore
      //             code = dedent`
      //             ${docString}
      //             export function ${name}<
      //               TMode extends WriteContractMode = undefined,
      //               ${TChainId}
      //             >(
      //               config: TMode extends 'prepared'
      //               ? UseContractWriteConfig<
      //                 PrepareWriteContractResult<typeof ${contract.meta.abiName}, '${item.name}'>['request']['abi'],
      //                 '${item.name}',
      //                 TMode
      //                 > & {${preparedTypeParams}}
      //               : UseContractWriteConfig<typeof ${contract.meta.abiName}, '${item.name}', TMode> & {
      //                   abi?: never
      //                   ${unpreparedTypeParams}
      //                 } = {} as any,
      //             ) {
      //               ${innerContent}
      //               return useContractWrite<typeof ${contract.meta.abiName}, '${item.name}', TMode>(${config} as any)
      //             }
      //             `
      //           } else {
      //             // prettier-ignore
      //             code = dedent`
      //             ${docString}
      //             export function ${name}(config = {}) {
      //               ${innerContent}
      //               return useContractWrite(${config})
      //             }
      //             `
      //           }
      //           content.push(code)
      //         }
      //       }
      //     }
      //
      //     if (hooks.usePrepareContractWrite) {
      //       const name = `usePrepare${baseHookName}Write`
      //       if (hookNames.has(name)) throw getHookNameError(name, contract.name)
      //       hookNames.add(name)
      //
      //       imports.add('usePrepareContractWrite')
      //       const docString = genDocString('usePrepareContractWrite')
      //
      //       let code
      //       if (isTypeScript) {
      //         imports.add('UsePrepareContractWriteConfig')
      //         // prettier-ignore
      //         code = dedent`
      //         ${docString}
      //         export function ${name}<
      //           TFunctionName extends string,
      //         >(
      //           config: Omit<UsePrepareContractWriteConfig<typeof ${contract.meta.abiName}, TFunctionName>, 'abi'${omitted}>${typeParams} = {} as any,
      //         ) {
      //           ${innerContent}
      //           return usePrepareContractWrite(${innerHookConfig} as UsePrepareContractWriteConfig<typeof ${contract.meta.abiName}, TFunctionName>)
      //         }
      //         `
      //       } else
      //         code = dedent`
      //         ${docString}
      //         export function ${name}(config = {}) {
      //           ${innerContent}
      //           return usePrepareContractWrite(${innerHookConfig})
      //         }
      //         `
      //       content.push(code)
      //     }
      //
      //     if (hooks.usePrepareContractFunctionWrite) {
      //       const contractNames = new Set<string>()
      //       for (const item of contract.abi) {
      //         if (
      //           item.type === 'function' &&
      //           (item.stateMutability === 'nonpayable' ||
      //             item.stateMutability === 'payable')
      //         ) {
      //           // Skip overrides since they are captured by same hook
      //           if (contractNames.has(item.name)) continue
      //           contractNames.add(item.name)
      //
      //           const name = `usePrepare${baseHookName}${pascalCase(item.name)}`
      //           if (hookNames.has(name))
      //             throw getHookNameError(name, contract.name)
      //           hookNames.add(name)
      //
      //           const config = `${Object.entries({
      //             ...innerHookParams,
      //             functionName: `'${item.name}'`,
      //           }).reduce(
      //             (prev, curr) => `${prev}${curr[0]}: ${curr[1]},`,
      //             '{',
      //           )}...config}`
      //           imports.add('usePrepareContractWrite')
      //           const docString = genDocString('usePrepareContractWrite', {
      //             name: 'functionName',
      //             value: item.name,
      //           })
      //
      //           let code
      //           if (isTypeScript) {
      //             imports.add('UsePrepareContractWriteConfig')
      //             // prettier-ignore
      //             code = dedent`
      //             ${docString}
      //             export function ${name}(
      //               config: Omit<UsePrepareContractWriteConfig<typeof ${contract.meta.abiName}, '${item.name}'>, 'abi'${omitted} | 'functionName'>${typeParams} = {} as any,
      //             ) {
      //               ${innerContent}
      //               return usePrepareContractWrite(${config} as UsePrepareContractWriteConfig<typeof ${contract.meta.abiName}, '${item.name}'>)
      //             }
      //             `
      //           } else {
      //             // prettier-ignore
      //             code = dedent`
      //             ${docString}
      //             export function ${name}(config = {}) {
      //               ${innerContent}
      //               return usePrepareContractWrite(${config})
      //             }
      //             `
      //           }
      //           content.push(code)
      //         }
      //       }
      //     }
      //   }
      //
      // }
      //
      return {
        imports: dedent`
            import { SigningCosmWasmClient, CosmWasmClient, ExecuteResult } from '@cosmjs/cosmwasm-stargate'
            import { UseMutationOptions } from '@tanstack/react-query'
            import { useMemo } from 'react'

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
