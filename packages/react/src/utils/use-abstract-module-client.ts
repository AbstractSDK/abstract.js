import * as React from 'react'

import { AccountId, accountIdToParameter } from '@abstract-money/core'
import {
  AbstractAccountId,
  AbstractClient,
  accountIdToLegacyAccountId,
} from '@abstract-money/core/legacy'
import { UseQueryParameters, useQuery } from '../types/queries'
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
  accountId: AccountId
  moduleId: string
  Module: TModule
}) {
  const { account_base } = await abstractClient.registryQueryClient.accountBase(
    {
      accountId: accountIdToParameter(accountId),
    },
  )
  return new Module({
    abstractClient: abstractClient,
    accountId: accountIdToLegacyAccountId(accountId),
    managerAddress: account_base.manager,
    proxyAddress: account_base.proxy,
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
    readonly [
      'module-mutation-client',
      string,
      AccountId | undefined,
      TModule,
      AbstractClient | undefined,
    ]
  >
  sender?: string | undefined
}

export function useAbstractModuleClient<
  TModule extends AbstractModuleClientConstructor,
>({
  moduleId,
  accountId,
  chainName,
  Module,
  query = {},
  sender,
}: UseAbstractModuleClientParameters<TModule>) {
  const {
    data: abstractClient,
    isLoading: isAbstractClientLoading,
    isError: isAbstractClientError,
    error: abstractClientError,
  } = useAbstractClient({
    chainName,
    sender,
    query: { enabled: query.enabled ?? true },
  })

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
    if (!accountId) throw new Error('accountId is not defined')

    return getAbstractModuleClient({
      abstractClient,
      accountId,
      moduleId,
      Module,
    })
  }, [abstractClient, accountId, moduleId, Module])

  const enabled = Boolean(
    abstractClient && accountId && (query.enabled ?? true),
  )

  const {
    data,
    isLoading: isAbstractModuleClientLoading,
    isError: isAbstractModuleClientError,
    error: abstractModuleClientError,
  } = useQuery({ queryKey, queryFn, ...query, enabled })

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
