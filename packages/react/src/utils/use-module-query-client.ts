import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useCosmWasmClient, useRecentChains } from 'graz'
import * as React from 'react'

import {
  ABSTRACT_API_URL,
  AbstractAccountId,
  AbstractQueryClient,
  CHAIN_DEPLOYMENT_QUERY,
  graphqlRequest,
} from '@abstract-money/core'
import { ChainInfo } from '@keplr-wallet/types'
import {
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query'
import { useAccountId, useConfig } from '../contexts'

interface ModuleQueryClientConstructor {
  new (args: {
    abstractQueryClient: AbstractQueryClient
    accountId: AbstractAccountId
    managerAddress: string
    proxyAddress: string
    moduleId: string
  }): any
}

async function getModuleQueryClient<
  TModule extends ModuleQueryClientConstructor,
>({
  client,
  chainInfos,
  overrideApiUrl = ABSTRACT_API_URL,
  accountId,
  moduleId,
  Module,
}: {
  client: CosmWasmClient
  chainInfos: [ChainInfo, ...ChainInfo[]]
  overrideApiUrl?: string
  accountId: AbstractAccountId
  moduleId: string
  Module: TModule
}) {
  // TODO: re-check if grabbing the first chain of the list is a good solution
  const data = await graphqlRequest(overrideApiUrl, CHAIN_DEPLOYMENT_QUERY, {
    chain: chainInfos[0].chainId,
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
type TQueryKey = readonly [
  'module-query-client',
  string,
  AbstractAccountId,
  ChainInfo[] | undefined,
  string,
  CosmWasmClient | undefined,
]

export function useModuleQueryClient<
  TModule extends ModuleQueryClientConstructor,
>(
  {
    moduleId,
    Module,
  }: {
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
    TQueryKey
  > = {},
) {
  // TODO: propagate the query states and errors from those hooks
  // Although `isLoading` will be correct, `isStale` and error-related results
  // would be incorrect.
  const { data: client } = useCosmWasmClient()
  const { accountId } = useAccountId()
  const { data: chainInfos } = useRecentChains()
  const { apiUrl } = useConfig()

  const queryKey = React.useMemo(
    () =>
      [
        'module-query-client',
        moduleId,
        accountId,
        chainInfos,
        apiUrl,
        client,
      ] as const,
    [moduleId, accountId, chainInfos, apiUrl, client],
  )

  const queryFn = React.useCallback(() => {
    if (!client) throw new Error('client is not defined')
    // Retrieve the first chain from the list

    if (!chainInfos?.[0]) throw new Error('chain infos are empty')
    return getModuleQueryClient({
      client,
      chainInfos: chainInfos as [ChainInfo, ...ChainInfo[]],
      overrideApiUrl: apiUrl,
      accountId,
      moduleId,
      Module,
    })
  }, [client, chainInfos, apiUrl, accountId, moduleId, Module])

  const enabled = React.useMemo(
    () => Boolean(client && chainInfos?.[0] && enabled_),
    [enabled_, client, chainInfos],
  )

  return useQuery(queryKey, queryFn, { enabled, ...rest })
}
