import * as React from 'react'

import { AccountId } from '@abstract-money/core'
import { AccountPublicClient } from '@abstract-money/core/src'
import { useConfig } from '../contexts'
import { UseQueryParameters, useQuery } from '../types/queries'

interface AbstractModuleQueryClientConstructor {
  new (args: {
    accountPublicClient: AccountPublicClient
    moduleId: string
  }): any
}

async function getAbstractModuleQueryClient<
  TModule extends AbstractModuleQueryClientConstructor,
>({
  accountPublicClient,
  moduleId,
  Module,
}: {
  accountPublicClient: AccountPublicClient
  overrideApiUrl?: string
  moduleId: string
  Module: TModule
}) {
  return new Module({
    accountPublicClient: accountPublicClient,
    moduleId,
  }) as InstanceType<TModule>
}

type TQueryFnData<TModule extends AbstractModuleQueryClientConstructor> =
  | InstanceType<TModule>
  | undefined
type TQueryData<TModule extends AbstractModuleQueryClientConstructor> =
  | InstanceType<TModule>
  | undefined
type TQueryKey<TModule extends AbstractModuleQueryClientConstructor> =
  readonly [
    'module-query-client',
    string,
    TModule,
    AccountPublicClient | undefined,
  ]

export type UseAbstractModuleQueryClientParameters<
  TModule extends AbstractModuleQueryClientConstructor,
> = {
  accountId: AccountId | undefined
  chainName: string | undefined
  moduleId: string
  Module: TModule
  query?: UseQueryParameters<
    TQueryFnData<TModule>,
    unknown,
    TQueryData<TModule>,
    TQueryKey<TModule>
  >
}

export function useAbstractModuleQueryClient<
  TModule extends AbstractModuleQueryClientConstructor,
>({
  accountId,
  chainName,
  moduleId,
  Module,
  query = {},
}: UseAbstractModuleQueryClientParameters<TModule>) {
  const { apiUrl, useAccountPublicClient } = useConfig()

  const accountPublicClient = useAccountPublicClient({
    accountId,
    chainName,
  })

  const queryKey = React.useMemo(
    () =>
      ['module-query-client', moduleId, Module, accountPublicClient] as const,
    [moduleId, accountId, accountPublicClient],
  )

  const queryFn = React.useCallback(() => {
    if (!accountPublicClient) throw new Error('client is not defined')

    return getAbstractModuleQueryClient({
      accountPublicClient,
      overrideApiUrl: apiUrl,
      moduleId,
      Module,
    })
  }, [accountPublicClient, apiUrl, accountId, moduleId, Module])

  const enabled = Boolean(
    accountPublicClient && accountId && (query.enabled ?? true),
  )

  const {
    data,
    isLoading: isAbstractModuleQueryClientLoading,
    isError: isAbstractModuleQueryClientError,
    error: abstractModuleQueryClientError,
  } = useQuery({ queryKey, queryFn, ...query, enabled })

  // TODO: combine?
  if (!enabled)
    return {
      data: undefined,
      isLoading: true,
      isError: false,
      isSuccess: false,
      error: undefined,
    } as const
  if (isAbstractModuleQueryClientError)
    return {
      data: undefined,
      isLoading: false,
      isError: true,
      isSuccess: false,
      error: abstractModuleQueryClientError,
    } as const
  if (isAbstractModuleQueryClientLoading)
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
