import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'

import { AccountId, accountIdToParameter } from '@abstract-money/core'
import {
  ABSTRACT_API_URL,
  AbstractAccountId,
  AbstractQueryClient,
  CHAIN_DEPLOYMENT_QUERY,
  accountIdToLegacyAccountId,
  graphqlRequest,
} from '@abstract-money/core/legacy'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { useAccountId, useConfig } from '../contexts'
import { useAbstractQueryClient } from './use-abstract-query-client'

interface ModuleQueryClientConstructor {
  new (args: {
    abstractQueryClient: AbstractQueryClient
    accountId: AbstractAccountId
    managerAddress: string
    proxyAddress: string
    moduleId: string
  }): any
}

async function getAbstractModuleQueryClient<
  TModule extends ModuleQueryClientConstructor,
>({
  client,
  chainName,
  overrideApiUrl = ABSTRACT_API_URL,
  accountId,
  moduleId,
  Module,
}: {
  client: CosmWasmClient
  chainName: string
  overrideApiUrl?: string
  accountId: AccountId
  moduleId: string
  Module: TModule
}) {
  // TODO: re-check if grabbing the first chain of the list is a good solution
  const data = await graphqlRequest(overrideApiUrl, CHAIN_DEPLOYMENT_QUERY, {
    chain: chainName,
  })

  const {
    ansHost: ansHostAddress,
    registry: registryAddress,
    accountFactory: factoryAddress,
  } = data.deployment

  const abstractQueryClient = new AbstractQueryClient({
    client,
    ansHostAddress,
    registryAddress,
    factoryAddress,
  })

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

type TQueryFnData<TModule extends ModuleQueryClientConstructor> =
  | InstanceType<TModule>
  | undefined
type TQueryData<TModule extends ModuleQueryClientConstructor> =
  | InstanceType<TModule>
  | undefined
type TQueryKey<TModule extends ModuleQueryClientConstructor> = readonly [
  'module-query-client',
  string,
  AccountId | undefined,
  TModule,
  AbstractQueryClient | undefined,
]

export function useAbstractModuleQueryClient<
  TModule extends ModuleQueryClientConstructor,
>(
  parameters: {
    client: CosmWasmClient | undefined
    accountId?: AccountId
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
  const {
    moduleId,
    accountId: accountIdParameter,
    Module,
    client,
    chainName,
  } = parameters
  const { accountId } = useAccountId(
    // Workaround to not pass any parameters if the accountId was not fed as an argument
    // in order to throw `accountId` not found error, as it might be defined as a property
    // but be undefined.
    ...((Object.hasOwnProperty.call(parameters, 'accountId')
      ? [{ accountId: accountIdParameter }]
      : []) as [any]),
  )
  const { apiUrl } = useConfig()

  const {
    data: abstractQueryClient,
    isLoading: isAbstractClientLoading,
    isError: isAbstractClientError,
    error: abstractClientError,
  } = useAbstractQueryClient(
    { client, chainName: chainName },
    { enabled: enabled_ },
  )

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
    if (!client) throw new Error('client is not defined')
    if (!chainName) throw new Error('chain is not defined')
    if (!accountId) throw new Error('accountId is not defined')

    return getAbstractModuleQueryClient({
      client,
      chainName: chainName,
      overrideApiUrl: apiUrl,
      accountId,
      moduleId,
      Module,
    })
  }, [client, chainName, apiUrl, accountId, moduleId, Module])

  const enabled = React.useMemo(
    () => Boolean(client && chainName && accountId && enabled_),
    [enabled_, client, chainName, accountId],
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
