import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'

import {
  ABSTRACT_API_URL,
  AbstractAccountId,
  AbstractQueryClient,
  CHAIN_DEPLOYMENT_QUERY,
  graphqlRequest,
} from '@abstract-money/core'
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
  chain,
  overrideApiUrl = ABSTRACT_API_URL,
  accountId,
  moduleId,
  Module,
}: {
  client: CosmWasmClient
  chain: string
  overrideApiUrl?: string
  accountId: AbstractAccountId
  moduleId: string
  Module: TModule
}) {
  // TODO: re-check if grabbing the first chain of the list is a good solution
  const data = await graphqlRequest(overrideApiUrl, CHAIN_DEPLOYMENT_QUERY, {
    chain,
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
      accountId: accountId.into(),
    })
  return new Module({
    abstractQueryClient,
    accountId,
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
  AbstractAccountId,
  TModule,
  AbstractQueryClient | undefined,
]

export function useAbstractModuleQueryClient<
  TModule extends ModuleQueryClientConstructor,
>(
  {
    moduleId,
    Module,
    client,
    chain,
  }: {
    client: CosmWasmClient | undefined
    chain: string | undefined
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
  const { accountId } = useAccountId()
  const { apiUrl } = useConfig()

  const {
    data: abstractQueryClient,
    isLoading: isAbstractClientLoading,
    isError: isAbstractClientError,
    error: abstractClientError,
  } = useAbstractQueryClient({ client, chain }, { enabled: enabled_ })

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
    if (!chain) throw new Error('chain is not defined')

    return getAbstractModuleQueryClient({
      client,
      chain,
      overrideApiUrl: apiUrl,
      accountId,
      moduleId,
      Module,
    })
  }, [client, chain, apiUrl, accountId, moduleId, Module])

  const enabled = React.useMemo(
    () => Boolean(client && chain && enabled_),
    [enabled_, client, chain],
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
