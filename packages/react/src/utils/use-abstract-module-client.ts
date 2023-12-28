import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'

import { AbstractAccountId, AbstractClient } from '@abstract-money/core'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { useAccountId } from '../contexts'
import { useAbstractClient } from './use-abstract-client'

interface AbstractModuleClientConstructor {
  new (args: {
    abstractClient: AbstractClient
    accountId: AbstractAccountId
    managerAddress: string
    proxyAddress: string
    moduleId: string
  }): any
}

async function getAbstractModuleClient<
  TModule extends AbstractModuleClientConstructor,
>({
  abstractClient,
  accountId,
  moduleId,
  Module,
}: {
  abstractClient: AbstractClient
  accountId: AbstractAccountId
  moduleId: string
  Module: TModule
}) {
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

export function useAbstractModuleClient<
  TModule extends AbstractModuleClientConstructor,
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
    InstanceType<TModule> | undefined,
    unknown,
    InstanceType<TModule> | undefined,
    readonly [
      'module-mutation-client',
      string,
      AbstractAccountId,
      TModule,
      AbstractClient | undefined,
    ]
  > = {},
) {
  const { accountId } = useAccountId()
  const {
    data: abstractClient,
    isLoading: isAbstractClientLoading,
    isError: isAbstractClientError,
    error: abstractClientError,
  } = useAbstractClient({ client, chain, sender }, { enabled: enabled_ })

  const queryKey = React.useMemo(
    () =>
      [
        'module-mutation-client',
        moduleId,
        accountId,
        Module,
        abstractClient,
      ] as const,
    [moduleId, accountId, abstractClient, Module],
  )

  const queryFn = React.useCallback(() => {
    if (!abstractClient) throw new Error('abstractClient is not defined')

    return getAbstractModuleClient({
      abstractClient,
      accountId,
      moduleId,
      Module,
    })
  }, [abstractClient, accountId, moduleId, Module])

  const enabled = React.useMemo(
    () => Boolean(client && chain && enabled_),
    [enabled_, client, chain],
  )

  const {
    data,
    isLoading: isAbstractModuleClientLoading,
    isError: isAbstractModuleClientError,
    error: abstractModuleClientError,
  } = useQuery(queryKey, queryFn, { enabled, ...rest })

  if (isAbstractClientError)
    return {
      data: undefined,
      isLoading: false,
      isError: true,
      isSuccess: false,
      error: abstractClientError,
    } as const
  if (isAbstractModuleClientError)
    return {
      data: undefined,
      isLoading: false,
      isError: true,
      isSuccess: false,
      error: abstractModuleClientError,
    } as const
  if (isAbstractClientLoading || isAbstractModuleClientLoading)
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
