import * as React from 'react'

import { AccountId, accountIdToParameter } from '@abstract-money/core'
import {
  AbstractAccountId,
  AbstractQueryClient,
  accountIdToLegacyAccountId,
} from '@abstract-money/core/legacy'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { useConfig } from '../contexts'
import { useAbstractQueryClient } from './use-abstract-query-client'

interface AbstractModuleQueryClientConstructor {
  new (args: {
    abstractQueryClient: AbstractQueryClient
    accountId: AbstractAccountId
    managerAddress: string
    proxyAddress: string
    moduleId: string
  }): any
}

async function getAbstractModuleQueryClient<
  TModule extends AbstractModuleQueryClientConstructor,
>({
  abstractQueryClient,
  accountId,
  moduleId,
  Module,
}: {
  abstractQueryClient: AbstractQueryClient
  chainName: string
  overrideApiUrl?: string
  accountId: AccountId
  moduleId: string
  Module: TModule
}) {
  const { account_base } =
    await abstractQueryClient.registryQueryClient.accountBase({
      accountId: accountIdToParameter(accountId),
    })
  return new Module({
    abstractQueryClient,
    accountId: accountIdToLegacyAccountId(accountId),
    managerAddress: account_base.manager,
    proxyAddress: account_base.proxy,
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
    AccountId | undefined,
    TModule,
    AbstractQueryClient | undefined,
  ]

export function useAbstractModuleQueryClient<
  TModule extends AbstractModuleQueryClientConstructor,
>(
  parameters: {
    accountId: AccountId | undefined
    chainName: string | undefined
    moduleId: string
    Module: TModule
  },
  {
    enabled: enabled_ = true,
    ...rest
  }: UseQueryOptions<
    TQueryFnData<TModule>,
    unknown,
    TQueryData<TModule>,
    TQueryKey<TModule>
  > = {},
) {
  const { moduleId, accountId, Module, chainName } = parameters
  const { apiUrl } = useConfig()

  const {
    data: abstractQueryClient,
    isLoading: isAbstractClientLoading,
    isError: isAbstractClientError,
    error: abstractClientError,
  } = useAbstractQueryClient({ chainName: chainName }, { enabled: enabled_ })

  const queryKey = React.useMemo(
    () =>
      [
        'module-query-client',
        moduleId,
        accountId,
        Module,
        abstractQueryClient,
      ] as const,
    [moduleId, accountId, abstractQueryClient],
  )

  const queryFn = React.useCallback(() => {
    if (!abstractQueryClient) throw new Error('client is not defined')
    if (!chainName) throw new Error('chain is not defined')
    if (!accountId) throw new Error('accountId is not defined')

    return getAbstractModuleQueryClient({
      abstractQueryClient,
      chainName: chainName,
      overrideApiUrl: apiUrl,
      accountId,
      moduleId,
      Module,
    })
  }, [abstractQueryClient, chainName, apiUrl, accountId, moduleId, Module])

  const enabled = React.useMemo(
    () => Boolean(abstractQueryClient && chainName && accountId && enabled_),
    [enabled_, abstractQueryClient, chainName, accountId],
  )

  const {
    data,
    isLoading: isAbstractModuleQueryClientLoading,
    isError: isAbstractModuleQueryClientError,
    error: abstractModuleQueryClientError,
  } = useQuery(queryKey, queryFn, { enabled, ...rest })

  if (isAbstractClientError)
    return {
      data: undefined,
      isLoading: false,
      isError: true,
      isSuccess: false,
      error: abstractClientError,
    } as const
  if (isAbstractModuleQueryClientError)
    return {
      data: undefined,
      isLoading: false,
      isError: true,
      isSuccess: false,
      error: abstractModuleQueryClientError,
    } as const
  if (isAbstractClientLoading || isAbstractModuleQueryClientLoading)
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
