import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useCosmWasmSigningClient, useRecentChains, useAccount } from 'graz'
import * as React from 'react'

import {
  ABSTRACT_API_URL,
  AbstractAccountId,
  AbstractClient,
  CHAIN_DEPLOYMENT_QUERY,
  graphqlRequest,
} from '@abstract-money/core'
import { ChainInfo } from '@keplr-wallet/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { useAccountId, useConfig } from '../contexts'

interface ModuleMutationClientConstructor {
  new (args: {
    abstractClient: AbstractClient
    accountId: AbstractAccountId
    managerAddress: string
    proxyAddress: string
    moduleId: string
  }): any
}

async function getModuleMutationClient<
  TModule extends ModuleMutationClientConstructor,
>({
  sender,
  client,
  chainInfos,
  overrideApiUrl = ABSTRACT_API_URL,
  accountId,
  moduleId,
  Module,
}: {
  sender: string
  client: SigningCosmWasmClient
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

  const abstractClient = new AbstractClient({
    sender,
    client,
    ansHostAddress,
    registryAddress,
    factoryAddress,
  })

  const { account_base } = await abstractClient.registryQueryClient.accountBase(
    {
      accountId: accountId.into(),
    },
  )
  return new Module({
    abstractClient: abstractClient,
    accountId,
    managerAddress: account_base.manager,
    proxyAddress: account_base.proxy,
    moduleId,
  }) as InstanceType<TModule>
}

type TQueryFnData<TModule extends ModuleMutationClientConstructor> =
  | InstanceType<TModule>
  | undefined
type TQueryData<TModule extends ModuleMutationClientConstructor> =
  | InstanceType<TModule>
  | undefined
type TQueryKey = readonly [
  'module-mutation-client',
  string,
  string | undefined,
  AbstractAccountId,
  ChainInfo[] | undefined,
  string,
  SigningCosmWasmClient | undefined,
]

export function useModuleMutationClient<
  TModule extends ModuleMutationClientConstructor,
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
  const { data: client } = useCosmWasmSigningClient()
  const { accountId } = useAccountId()
  const { data: chainInfos } = useRecentChains()
  const { apiUrl } = useConfig()
  const { data: account } = useAccount()

  const sender = account?.bech32Address

  const queryKey = React.useMemo(
    () =>
      [
        'module-mutation-client',
        moduleId,
        sender,
        accountId,
        chainInfos,
        apiUrl,
        client,
      ] as const,
    [moduleId, sender, accountId, chainInfos, apiUrl, client],
  )

  const queryFn = React.useCallback(() => {
    if (!client) throw new Error('client is not defined')
    if (!sender) throw new Error('sender is not defined')

    // Retrieve the first chain from the list
    if (!chainInfos?.[0]) throw new Error('chain infos are empty')

    return getModuleMutationClient({
      sender,
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
