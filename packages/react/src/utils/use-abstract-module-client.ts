import * as React from 'react'

import { AccountId, AccountWalletClient } from '@abstract-money/core'
import { useConfig } from '../contexts'
import { UseQueryParameters, useQuery } from '../types/queries'

interface AbstractModuleClientConstructor {
  new (args: {
    accountClient: AccountWalletClient
    moduleId: string
  }): any
}

async function getAbstractModuleClient<
  TModule extends AbstractModuleClientConstructor,
>({
  accountClient,
  moduleId,
  Module,
}: {
  accountClient: AccountWalletClient
  moduleId: string
  Module: TModule
}) {
  return new Module({
    accountClient: accountClient,
    moduleId,
  }) as InstanceType<TModule>
}

export type UseAbstractModuleClientParameters<
  TModule extends AbstractModuleClientConstructor,
> = {
  accountId: AccountId | undefined
  chainName: string | undefined
  moduleId: string
  Module: TModule
  query?: UseQueryParameters<
    InstanceType<TModule> | undefined,
    unknown,
    InstanceType<TModule> | undefined,
    readonly ['module-mutation-client', string, AccountId | undefined, TModule]
  >
  sender?: string | undefined
}

export function useAbstractModuleClient<
  TModule extends AbstractModuleClientConstructor,
>({
  accountId,
  moduleId,
  chainName,
  Module,
  query = {},
  sender: _sender,
}: UseAbstractModuleClientParameters<TModule>) {
  const { useAccountWalletClient } = useConfig()

  const accountClient = useAccountWalletClient({
    accountId,
    chainName,
  })

  const queryKey = React.useMemo(
    () => ['module-mutation-client', moduleId, accountId, Module] as const,
    [moduleId, accountId, Module],
  )

  const queryFn = React.useCallback(() => {
    if (!accountClient) throw new Error('accountClient is not defined')

    return getAbstractModuleClient({
      accountClient: accountClient,
      moduleId,
      Module,
    })
  }, [accountClient, moduleId, Module])

  const enabled = Boolean(accountClient && (query.enabled ?? true))

  const {
    data,
    isLoading: isAbstractModuleClientLoading,
    isError: isAbstractModuleClientError,
    error: abstractModuleClientError,
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
  if (isAbstractModuleClientError)
    return {
      data: undefined,
      isLoading: false,
      isError: true,
      isSuccess: false,
      error: abstractModuleClientError,
    } as const
  if (isAbstractModuleClientLoading)
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
