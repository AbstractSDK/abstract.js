import * as React from 'react'

import { AccountId, accountIdToParameter } from '@abstract-money/core'
import {
  AbstractAccountId,
  AbstractClient,
  accountIdToLegacyAccountId,
} from '@abstract-money/core/legacy'
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

export function useAbstractModuleClient<
  TModule extends AbstractModuleClientConstructor,
>(
  parameters: {
    chainName: string | undefined
    accountId?: AccountId
    moduleId: string
    Module: TModule
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
      AccountId | undefined,
      TModule,
      AbstractClient | undefined,
    ]
  > = {},
) {
  const {
    moduleId,
    accountId: accountIdParameter,
    Module,
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
  const {
    data: abstractClient,
    isLoading: isAbstractClientLoading,
    isError: isAbstractClientError,
    error: abstractClientError,
  } = useAbstractClient({ chainName }, { enabled: enabled_ })

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

  const enabled = React.useMemo(
    () => Boolean(abstractClient && chainName && accountId && enabled_),
    [enabled_, abstractClient, chainName, accountId],
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
