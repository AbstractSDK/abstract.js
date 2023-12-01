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
type TQueryKey = readonly [
  'module-query-client',
  string,
  AbstractAccountId,
  string | undefined,
  string,
  CosmWasmClient | undefined,
]

export function useModuleQueryClient<
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
    TQueryKey
  > = {},
) {
  const { accountId } = useAccountId()
  const { apiUrl } = useConfig()

  const queryKey = React.useMemo(
    () =>
      [
        'module-query-client',
        moduleId,
        accountId,
        chain,
        apiUrl,
        client,
      ] as const,
    [moduleId, accountId, chain, apiUrl, client],
  )

  const queryFn = React.useCallback(() => {
    if (!client) throw new Error('client is not defined')
    if (!chain) throw new Error('chain is not defined')

    return getModuleQueryClient({
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

  return useQuery(queryKey, queryFn, { enabled, ...rest })
}
