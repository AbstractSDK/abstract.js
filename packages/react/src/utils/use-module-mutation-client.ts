import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'

import {
  ABSTRACT_API_URL,
  AbstractAccountId,
  AbstractClient,
} from '@abstract-money/core'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { useAccountId, useConfig } from '../contexts'
import { getAbstractClient } from './get-abstract-client'

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
  chain,
  overrideApiUrl = ABSTRACT_API_URL,
  accountId,
  moduleId,
  Module,
}: {
  sender: string
  client: SigningCosmWasmClient
  chain: string
  overrideApiUrl?: string
  accountId: AbstractAccountId
  moduleId: string
  Module: TModule
}) {
  const abstractClient = await getAbstractClient({
    sender,
    client,
    chain,
    overrideApiUrl,
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
  string | undefined,
  string,
  SigningCosmWasmClient | undefined,
]

export function useModuleMutationClient<
  TModule extends ModuleMutationClientConstructor,
>(
  {
    moduleId,
    Module,
    client,
    chain,
    sender,
  }: {
    chain: string | undefined
    sender: string | undefined
    moduleId: string
    Module: TModule
    client: SigningCosmWasmClient | undefined
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
        'module-mutation-client',
        moduleId,
        sender,
        accountId,
        chain,
        apiUrl,
        client,
      ] as const,
    [moduleId, sender, accountId, chain, apiUrl, client],
  )

  const queryFn = React.useCallback(() => {
    if (!client) throw new Error('client is not defined')
    if (!sender) throw new Error('sender is not defined')
    if (!chain) throw new Error('chain is not defined')

    return getModuleMutationClient({
      sender,
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
