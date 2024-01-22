'use client'

import {
  SigningCosmWasmClient,
  CosmWasmClient,
  ExecuteResult,
} from '@cosmjs/cosmwasm-stargate'
import { UseMutationOptions } from '@tanstack/react-query'
import { useMemo, useState, useEffect } from 'react'

import {
  useAbstractModuleClient,
  useAbstractModuleQueryClient,
} from '@abstract-money/react/utils'

import { AccountId } from '@abstract-money/core'

import { useChain } from '@cosmos-kit/react'

import {
  useAccountWalletClient,
  useApiClient,
} from '@abstract-money/react/utils'
import {
  useDeposit as _useDeposit,
  useWithdraw as _useWithdraw,
  useExecute as _useExecute,
  useAccounts as _useAccounts,
} from '@abstract-money/react/hooks'

import {
  useBettingBetsQuery,
  useBettingConfigQuery,
  useBettingListOddsQuery,
  useBettingOddsQuery,
  useBettingListRoundsQuery,
  useBettingRoundQuery,
  useBettingUpdateConfigMutation,
  BettingUpdateConfigMutation,
  useBettingCloseRoundMutation,
  BettingCloseRoundMutation,
  useBettingDistributeWinningsMutation,
  BettingDistributeWinningsMutation,
  useBettingPlaceBetMutation,
  BettingPlaceBetMutation,
  useBettingUpdateAccountsMutation,
  BettingUpdateAccountsMutation,
  useBettingRegisterMutation,
  BettingRegisterMutation,
  useBettingCreateRoundMutation,
  BettingCreateRoundMutation,
} from './cosmwasm-codegen/Betting.react-query'

import * as BettingTypes from './cosmwasm-codegen/Betting.types'

import {
  BettingAppQueryClient,
  BettingAppClient,
} from './cosmwasm-codegen/Betting.client'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Betting
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function useCosmosKitAbstractModuleQueryClient(
  args: Omit<Parameters<typeof useAbstractModuleQueryClient>[0], 'client'>,
  options?: Parameters<typeof useAbstractModuleQueryClient>[1],
) {
  const [client, setClient] = useState<CosmWasmClient | undefined>(undefined)
  const { getCosmWasmClient: _getCosmWasmClient } = useChain(
    args.chain ?? 'neutron',
  )

  const getCosmWasmClient = useMemo(() => {
    if (!args.chain) return undefined
    return _getCosmWasmClient
  }, [_getCosmWasmClient, args.chain])

  useEffect(() => {
    if (!getCosmWasmClient) return
    getCosmWasmClient().then((client) => setClient(client))
  }, [getCosmWasmClient])

  return useAbstractModuleQueryClient(
    {
      client,
      ...args,
    },
    options,
  )
}

function useCosmosKitAbstractModuleClient(
  args: Omit<
    Parameters<typeof useAbstractModuleClient>[0],
    'client' | 'sender'
  >,
  options?: Parameters<typeof useAbstractModuleClient>[1],
) {
  const [client, setClient] = useState<SigningCosmWasmClient | undefined>(
    undefined,
  )
  const {
    getSigningCosmWasmClient: _getSigningCosmWasmClient,
    address,
    isWalletConnected,
  } = useChain(args.chain ?? 'neutron')

  const getSigningCosmWasmClient = useMemo(() => {
    if (!args.chain || !isWalletConnected) return undefined
    return _getSigningCosmWasmClient
  }, [_getSigningCosmWasmClient, args.chain])

  useEffect(() => {
    if (!getSigningCosmWasmClient) return
    getSigningCosmWasmClient().then((client) => setClient(client))
  }, [getSigningCosmWasmClient])

  return useAbstractModuleClient(
    {
      client,
      sender: address,
      ...args,
    },
    options,
  )
}

function useCosmosKitAccountWalletClient(args?: { chain?: string }) {
  const [signingCosmWasmClient, setClient] = useState<
    SigningCosmWasmClient | undefined
  >(undefined)
  const {
    getSigningCosmWasmClient: _getSigningCosmWasmClient,
    address,
    isWalletConnected,
  } = useChain(args?.chain ?? 'neutron')

  const getSigningCosmWasmClient = useMemo(() => {
    if (!args?.chain || !isWalletConnected) return undefined
    return _getSigningCosmWasmClient
  }, [_getSigningCosmWasmClient, args?.chain])

  useEffect(() => {
    if (!getSigningCosmWasmClient) return
    getSigningCosmWasmClient().then((client) => setClient(client))
  }, [getSigningCosmWasmClient])

  return useAccountWalletClient({
    signingCosmWasmClient,
    sender: address,
  })
}

export function useAccounts(
  { chain, owner }: Omit<Parameters<typeof _useAccounts>[0], 'client'>,
  opts?: Parameters<typeof _useAccounts>[1],
) {
  const apiClient = useApiClient()

  return _useAccounts({ chain, owner, client: apiClient }, opts)
}

export function useDeposit(
  { chain }: Parameters<typeof useCosmosKitAccountWalletClient>[0] = {},
  ...args: Parameters<typeof _useDeposit>
) {
  const accountWalletClient = useCosmosKitAccountWalletClient({ chain })

  const {
    mutate: mutate_,
    mutateAsync: mutateAsync_,
    ...rest
  } = _useDeposit(...args)

  const mutate = useMemo(() => {
    if (!accountWalletClient) return undefined

    return (
      variables: Omit<Parameters<typeof mutate_>[0], 'accountWalletClient'>,
      options?: Parameters<typeof mutate_>[1],
    ) => mutate_({ accountWalletClient, ...variables }, options)
  }, [mutate_, accountWalletClient])

  const mutateAsync = useMemo(() => {
    if (!accountWalletClient) return undefined

    return (
      variables: Omit<
        Parameters<typeof mutateAsync_>[0],
        'accountWalletClient'
      >,
      options?: Parameters<typeof mutateAsync_>[1],
    ) => mutateAsync_({ accountWalletClient, ...variables }, options)
  }, [mutateAsync_, accountWalletClient])

  return { mutate, mutateAsync, ...rest } as const
}

export function useWithdraw(
  { chain }: Parameters<typeof useCosmosKitAccountWalletClient>[0] = {},
  ...args: Parameters<typeof _useWithdraw>
) {
  const accountWalletClient = useCosmosKitAccountWalletClient({ chain })

  const {
    mutate: mutate_,
    mutateAsync: mutateAsync_,
    ...rest
  } = _useWithdraw(...args)

  const mutate = useMemo(() => {
    if (!accountWalletClient) return undefined

    return (
      variables: Omit<Parameters<typeof mutate_>[0], 'accountWalletClient'>,
      options?: Parameters<typeof mutate_>[1],
    ) => mutate_({ accountWalletClient, ...variables }, options)
  }, [mutate_, accountWalletClient])

  const mutateAsync = useMemo(() => {
    if (!accountWalletClient) return undefined

    return (
      variables: Omit<
        Parameters<typeof mutateAsync_>[0],
        'accountWalletClient'
      >,
      options?: Parameters<typeof mutateAsync_>[1],
    ) => mutateAsync_({ accountWalletClient, ...variables }, options)
  }, [mutateAsync_, accountWalletClient])

  return { mutate, mutateAsync, ...rest } as const
}

export function useExecute(
  { chain }: Parameters<typeof useCosmosKitAccountWalletClient>[0] = {},
  ...args: Parameters<typeof _useExecute>
) {
  const accountWalletClient = useCosmosKitAccountWalletClient({ chain })

  const {
    mutate: mutate_,
    mutateAsync: mutateAsync_,
    ...rest
  } = _useExecute(...args)

  const mutate = useMemo(() => {
    if (!accountWalletClient) return undefined

    return (
      variables: Omit<Parameters<typeof mutate_>[0], 'accountWalletClient'>,
      options?: Parameters<typeof mutate_>[1],
    ) => mutate_({ accountWalletClient, ...variables }, options)
  }, [mutate_, accountWalletClient])

  const mutateAsync = useMemo(() => {
    if (!accountWalletClient) return undefined

    return (
      variables: Omit<
        Parameters<typeof mutateAsync_>[0],
        'accountWalletClient'
      >,
      options?: Parameters<typeof mutateAsync_>[1],
    ) => mutateAsync_({ accountWalletClient, ...variables }, options)
  }, [mutateAsync_, accountWalletClient])

  return { mutate, mutateAsync, ...rest } as const
}

const BETTING_MODULE_ID = 'abstract:betting'

export const betting = {
  queries: {
    useBets: ({
      options,
      accountId,
      chain,
      ...rest
    }: Omit<
      Parameters<typeof useBettingBetsQuery<BettingTypes.BetsResponse>>[0],
      'client'
    > & { accountId?: AccountId; chain: string | undefined }) => {
      const {
        data: bettingAppQueryClient,
        isLoading: isBettingAppQueryClientLoading,
        isError: isBettingAppQueryClientError,
        error: bettingAppQueryClientError,
      } = useCosmosKitAbstractModuleQueryClient(
        {
          moduleId: BETTING_MODULE_ID,
          accountId,

          chain,
          Module: BettingAppQueryClient,
        },
        { enabled: options?.enabled },
      )

      const {
        data,
        isLoading: isBettingBetsQueryLoading,
        isError: isBettingBetsQueryError,
        error: bettingBetsQueryError,
      } = useBettingBetsQuery({
        client: bettingAppQueryClient,
        options,
        ...rest,
      })

      if (isBettingAppQueryClientError)
        return {
          data: undefined,
          isLoading: false,
          isError: true,
          isSuccess: false,
          error: bettingAppQueryClientError,
        } as const
      if (isBettingBetsQueryError)
        return {
          data: undefined,
          isLoading: false,
          isError: true,
          isSuccess: false,
          error: bettingBetsQueryError,
        } as const
      if (isBettingAppQueryClientLoading || isBettingBetsQueryLoading)
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
    },
    useConfig: ({
      options,
      accountId,
      chain,
      ...rest
    }: Omit<
      Parameters<typeof useBettingConfigQuery<BettingTypes.ConfigResponse>>[0],
      'client'
    > & { accountId?: AccountId; chain: string | undefined }) => {
      const {
        data: bettingAppQueryClient,
        isLoading: isBettingAppQueryClientLoading,
        isError: isBettingAppQueryClientError,
        error: bettingAppQueryClientError,
      } = useCosmosKitAbstractModuleQueryClient(
        {
          moduleId: BETTING_MODULE_ID,
          accountId,

          chain,
          Module: BettingAppQueryClient,
        },
        { enabled: options?.enabled },
      )

      const {
        data,
        isLoading: isBettingConfigQueryLoading,
        isError: isBettingConfigQueryError,
        error: bettingConfigQueryError,
      } = useBettingConfigQuery({
        client: bettingAppQueryClient,
        options,
        ...rest,
      })

      if (isBettingAppQueryClientError)
        return {
          data: undefined,
          isLoading: false,
          isError: true,
          isSuccess: false,
          error: bettingAppQueryClientError,
        } as const
      if (isBettingConfigQueryError)
        return {
          data: undefined,
          isLoading: false,
          isError: true,
          isSuccess: false,
          error: bettingConfigQueryError,
        } as const
      if (isBettingAppQueryClientLoading || isBettingConfigQueryLoading)
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
    },
    useListOdds: ({
      options,
      accountId,
      chain,
      ...rest
    }: Omit<
      Parameters<
        typeof useBettingListOddsQuery<BettingTypes.ListOddsResponse>
      >[0],
      'client'
    > & { accountId?: AccountId; chain: string | undefined }) => {
      const {
        data: bettingAppQueryClient,
        isLoading: isBettingAppQueryClientLoading,
        isError: isBettingAppQueryClientError,
        error: bettingAppQueryClientError,
      } = useCosmosKitAbstractModuleQueryClient(
        {
          moduleId: BETTING_MODULE_ID,
          accountId,

          chain,
          Module: BettingAppQueryClient,
        },
        { enabled: options?.enabled },
      )

      const {
        data,
        isLoading: isBettingListOddsQueryLoading,
        isError: isBettingListOddsQueryError,
        error: bettingListOddsQueryError,
      } = useBettingListOddsQuery({
        client: bettingAppQueryClient,
        options,
        ...rest,
      })

      if (isBettingAppQueryClientError)
        return {
          data: undefined,
          isLoading: false,
          isError: true,
          isSuccess: false,
          error: bettingAppQueryClientError,
        } as const
      if (isBettingListOddsQueryError)
        return {
          data: undefined,
          isLoading: false,
          isError: true,
          isSuccess: false,
          error: bettingListOddsQueryError,
        } as const
      if (isBettingAppQueryClientLoading || isBettingListOddsQueryLoading)
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
    },
    useOdds: ({
      options,
      accountId,
      chain,
      ...rest
    }: Omit<
      Parameters<typeof useBettingOddsQuery<BettingTypes.OddsResponse>>[0],
      'client'
    > & { accountId?: AccountId; chain: string | undefined }) => {
      const {
        data: bettingAppQueryClient,
        isLoading: isBettingAppQueryClientLoading,
        isError: isBettingAppQueryClientError,
        error: bettingAppQueryClientError,
      } = useCosmosKitAbstractModuleQueryClient(
        {
          moduleId: BETTING_MODULE_ID,
          accountId,

          chain,
          Module: BettingAppQueryClient,
        },
        { enabled: options?.enabled },
      )

      const {
        data,
        isLoading: isBettingOddsQueryLoading,
        isError: isBettingOddsQueryError,
        error: bettingOddsQueryError,
      } = useBettingOddsQuery({
        client: bettingAppQueryClient,
        options,
        ...rest,
      })

      if (isBettingAppQueryClientError)
        return {
          data: undefined,
          isLoading: false,
          isError: true,
          isSuccess: false,
          error: bettingAppQueryClientError,
        } as const
      if (isBettingOddsQueryError)
        return {
          data: undefined,
          isLoading: false,
          isError: true,
          isSuccess: false,
          error: bettingOddsQueryError,
        } as const
      if (isBettingAppQueryClientLoading || isBettingOddsQueryLoading)
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
    },
    useListRounds: ({
      options,
      accountId,
      chain,
      ...rest
    }: Omit<
      Parameters<
        typeof useBettingListRoundsQuery<BettingTypes.RoundsResponse>
      >[0],
      'client'
    > & { accountId?: AccountId; chain: string | undefined }) => {
      const {
        data: bettingAppQueryClient,
        isLoading: isBettingAppQueryClientLoading,
        isError: isBettingAppQueryClientError,
        error: bettingAppQueryClientError,
      } = useCosmosKitAbstractModuleQueryClient(
        {
          moduleId: BETTING_MODULE_ID,
          accountId,

          chain,
          Module: BettingAppQueryClient,
        },
        { enabled: options?.enabled },
      )

      const {
        data,
        isLoading: isBettingListRoundsQueryLoading,
        isError: isBettingListRoundsQueryError,
        error: bettingListRoundsQueryError,
      } = useBettingListRoundsQuery({
        client: bettingAppQueryClient,
        options,
        ...rest,
      })

      if (isBettingAppQueryClientError)
        return {
          data: undefined,
          isLoading: false,
          isError: true,
          isSuccess: false,
          error: bettingAppQueryClientError,
        } as const
      if (isBettingListRoundsQueryError)
        return {
          data: undefined,
          isLoading: false,
          isError: true,
          isSuccess: false,
          error: bettingListRoundsQueryError,
        } as const
      if (isBettingAppQueryClientLoading || isBettingListRoundsQueryLoading)
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
    },
    useRound: ({
      options,
      accountId,
      chain,
      ...rest
    }: Omit<
      Parameters<typeof useBettingRoundQuery<BettingTypes.RoundResponse>>[0],
      'client'
    > & { accountId?: AccountId; chain: string | undefined }) => {
      const {
        data: bettingAppQueryClient,
        isLoading: isBettingAppQueryClientLoading,
        isError: isBettingAppQueryClientError,
        error: bettingAppQueryClientError,
      } = useCosmosKitAbstractModuleQueryClient(
        {
          moduleId: BETTING_MODULE_ID,
          accountId,

          chain,
          Module: BettingAppQueryClient,
        },
        { enabled: options?.enabled },
      )

      const {
        data,
        isLoading: isBettingRoundQueryLoading,
        isError: isBettingRoundQueryError,
        error: bettingRoundQueryError,
      } = useBettingRoundQuery({
        client: bettingAppQueryClient,
        options,
        ...rest,
      })

      if (isBettingAppQueryClientError)
        return {
          data: undefined,
          isLoading: false,
          isError: true,
          isSuccess: false,
          error: bettingAppQueryClientError,
        } as const
      if (isBettingRoundQueryError)
        return {
          data: undefined,
          isLoading: false,
          isError: true,
          isSuccess: false,
          error: bettingRoundQueryError,
        } as const
      if (isBettingAppQueryClientLoading || isBettingRoundQueryLoading)
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
    },
  },
  mutations: {
    useUpdateConfig: (
      {
        chain,
        accountId,
      }: { chain: string | undefined; accountId?: AccountId },
      options?: Omit<
        UseMutationOptions<
          ExecuteResult,
          Error,
          Omit<BettingUpdateConfigMutation, 'client'>
        >,
        'mutationFn'
      >,
    ) => {
      const {
        data: bettingAbstractModuleClient,
        // TODO: figure out what to do with those
        // isLoading: isBettingAbstractModuleClientLoading,
        // isError: isBettingAbstractModuleClientError,
        // error: bettingAbstractModuleClientError,
      } = useCosmosKitAbstractModuleClient({
        moduleId: BETTING_MODULE_ID,
        accountId,
        chain,
        Module: BettingAppClient,
      })

      const {
        mutate: mutate_,
        mutateAsync: mutateAsync_,
        ...rest
      } = useBettingUpdateConfigMutation(options)

      const mutate = useMemo(() => {
        if (!bettingAbstractModuleClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutate_>[0], 'client'>,
          options?: Parameters<typeof mutate_>[1],
        ) =>
          mutate_(
            { client: bettingAbstractModuleClient, ...variables },
            options,
          )
      }, [mutate_, bettingAbstractModuleClient])

      const mutateAsync = useMemo(() => {
        if (!bettingAbstractModuleClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutateAsync_>[0], 'client'>,
          options?: Parameters<typeof mutateAsync_>[1],
        ) =>
          mutateAsync_(
            { client: bettingAbstractModuleClient, ...variables },
            options,
          )
      }, [mutateAsync_, bettingAbstractModuleClient])

      return { mutate, mutateAsync, ...rest } as const
    },
    useCloseRound: (
      {
        chain,
        accountId,
      }: { chain: string | undefined; accountId?: AccountId },
      options?: Omit<
        UseMutationOptions<
          ExecuteResult,
          Error,
          Omit<BettingCloseRoundMutation, 'client'>
        >,
        'mutationFn'
      >,
    ) => {
      const {
        data: bettingAbstractModuleClient,
        // TODO: figure out what to do with those
        // isLoading: isBettingAbstractModuleClientLoading,
        // isError: isBettingAbstractModuleClientError,
        // error: bettingAbstractModuleClientError,
      } = useCosmosKitAbstractModuleClient({
        moduleId: BETTING_MODULE_ID,
        accountId,
        chain,
        Module: BettingAppClient,
      })

      const {
        mutate: mutate_,
        mutateAsync: mutateAsync_,
        ...rest
      } = useBettingCloseRoundMutation(options)

      const mutate = useMemo(() => {
        if (!bettingAbstractModuleClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutate_>[0], 'client'>,
          options?: Parameters<typeof mutate_>[1],
        ) =>
          mutate_(
            { client: bettingAbstractModuleClient, ...variables },
            options,
          )
      }, [mutate_, bettingAbstractModuleClient])

      const mutateAsync = useMemo(() => {
        if (!bettingAbstractModuleClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutateAsync_>[0], 'client'>,
          options?: Parameters<typeof mutateAsync_>[1],
        ) =>
          mutateAsync_(
            { client: bettingAbstractModuleClient, ...variables },
            options,
          )
      }, [mutateAsync_, bettingAbstractModuleClient])

      return { mutate, mutateAsync, ...rest } as const
    },
    useDistributeWinnings: (
      {
        chain,
        accountId,
      }: { chain: string | undefined; accountId?: AccountId },
      options?: Omit<
        UseMutationOptions<
          ExecuteResult,
          Error,
          Omit<BettingDistributeWinningsMutation, 'client'>
        >,
        'mutationFn'
      >,
    ) => {
      const {
        data: bettingAbstractModuleClient,
        // TODO: figure out what to do with those
        // isLoading: isBettingAbstractModuleClientLoading,
        // isError: isBettingAbstractModuleClientError,
        // error: bettingAbstractModuleClientError,
      } = useCosmosKitAbstractModuleClient({
        moduleId: BETTING_MODULE_ID,
        accountId,
        chain,
        Module: BettingAppClient,
      })

      const {
        mutate: mutate_,
        mutateAsync: mutateAsync_,
        ...rest
      } = useBettingDistributeWinningsMutation(options)

      const mutate = useMemo(() => {
        if (!bettingAbstractModuleClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutate_>[0], 'client'>,
          options?: Parameters<typeof mutate_>[1],
        ) =>
          mutate_(
            { client: bettingAbstractModuleClient, ...variables },
            options,
          )
      }, [mutate_, bettingAbstractModuleClient])

      const mutateAsync = useMemo(() => {
        if (!bettingAbstractModuleClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutateAsync_>[0], 'client'>,
          options?: Parameters<typeof mutateAsync_>[1],
        ) =>
          mutateAsync_(
            { client: bettingAbstractModuleClient, ...variables },
            options,
          )
      }, [mutateAsync_, bettingAbstractModuleClient])

      return { mutate, mutateAsync, ...rest } as const
    },
    usePlaceBet: (
      {
        chain,
        accountId,
      }: { chain: string | undefined; accountId?: AccountId },
      options?: Omit<
        UseMutationOptions<
          ExecuteResult,
          Error,
          Omit<BettingPlaceBetMutation, 'client'>
        >,
        'mutationFn'
      >,
    ) => {
      const {
        data: bettingAbstractModuleClient,
        // TODO: figure out what to do with those
        // isLoading: isBettingAbstractModuleClientLoading,
        // isError: isBettingAbstractModuleClientError,
        // error: bettingAbstractModuleClientError,
      } = useCosmosKitAbstractModuleClient({
        moduleId: BETTING_MODULE_ID,
        accountId,
        chain,
        Module: BettingAppClient,
      })

      const {
        mutate: mutate_,
        mutateAsync: mutateAsync_,
        ...rest
      } = useBettingPlaceBetMutation(options)

      const mutate = useMemo(() => {
        if (!bettingAbstractModuleClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutate_>[0], 'client'>,
          options?: Parameters<typeof mutate_>[1],
        ) =>
          mutate_(
            { client: bettingAbstractModuleClient, ...variables },
            options,
          )
      }, [mutate_, bettingAbstractModuleClient])

      const mutateAsync = useMemo(() => {
        if (!bettingAbstractModuleClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutateAsync_>[0], 'client'>,
          options?: Parameters<typeof mutateAsync_>[1],
        ) =>
          mutateAsync_(
            { client: bettingAbstractModuleClient, ...variables },
            options,
          )
      }, [mutateAsync_, bettingAbstractModuleClient])

      return { mutate, mutateAsync, ...rest } as const
    },
    useUpdateAccounts: (
      {
        chain,
        accountId,
      }: { chain: string | undefined; accountId?: AccountId },
      options?: Omit<
        UseMutationOptions<
          ExecuteResult,
          Error,
          Omit<BettingUpdateAccountsMutation, 'client'>
        >,
        'mutationFn'
      >,
    ) => {
      const {
        data: bettingAbstractModuleClient,
        // TODO: figure out what to do with those
        // isLoading: isBettingAbstractModuleClientLoading,
        // isError: isBettingAbstractModuleClientError,
        // error: bettingAbstractModuleClientError,
      } = useCosmosKitAbstractModuleClient({
        moduleId: BETTING_MODULE_ID,
        accountId,
        chain,
        Module: BettingAppClient,
      })

      const {
        mutate: mutate_,
        mutateAsync: mutateAsync_,
        ...rest
      } = useBettingUpdateAccountsMutation(options)

      const mutate = useMemo(() => {
        if (!bettingAbstractModuleClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutate_>[0], 'client'>,
          options?: Parameters<typeof mutate_>[1],
        ) =>
          mutate_(
            { client: bettingAbstractModuleClient, ...variables },
            options,
          )
      }, [mutate_, bettingAbstractModuleClient])

      const mutateAsync = useMemo(() => {
        if (!bettingAbstractModuleClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutateAsync_>[0], 'client'>,
          options?: Parameters<typeof mutateAsync_>[1],
        ) =>
          mutateAsync_(
            { client: bettingAbstractModuleClient, ...variables },
            options,
          )
      }, [mutateAsync_, bettingAbstractModuleClient])

      return { mutate, mutateAsync, ...rest } as const
    },
    useRegister: (
      {
        chain,
        accountId,
      }: { chain: string | undefined; accountId?: AccountId },
      options?: Omit<
        UseMutationOptions<
          ExecuteResult,
          Error,
          Omit<BettingRegisterMutation, 'client'>
        >,
        'mutationFn'
      >,
    ) => {
      const {
        data: bettingAbstractModuleClient,
        // TODO: figure out what to do with those
        // isLoading: isBettingAbstractModuleClientLoading,
        // isError: isBettingAbstractModuleClientError,
        // error: bettingAbstractModuleClientError,
      } = useCosmosKitAbstractModuleClient({
        moduleId: BETTING_MODULE_ID,
        accountId,
        chain,
        Module: BettingAppClient,
      })

      const {
        mutate: mutate_,
        mutateAsync: mutateAsync_,
        ...rest
      } = useBettingRegisterMutation(options)

      const mutate = useMemo(() => {
        if (!bettingAbstractModuleClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutate_>[0], 'client'>,
          options?: Parameters<typeof mutate_>[1],
        ) =>
          mutate_(
            { client: bettingAbstractModuleClient, ...variables },
            options,
          )
      }, [mutate_, bettingAbstractModuleClient])

      const mutateAsync = useMemo(() => {
        if (!bettingAbstractModuleClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutateAsync_>[0], 'client'>,
          options?: Parameters<typeof mutateAsync_>[1],
        ) =>
          mutateAsync_(
            { client: bettingAbstractModuleClient, ...variables },
            options,
          )
      }, [mutateAsync_, bettingAbstractModuleClient])

      return { mutate, mutateAsync, ...rest } as const
    },
    useCreateRound: (
      {
        chain,
        accountId,
      }: { chain: string | undefined; accountId?: AccountId },
      options?: Omit<
        UseMutationOptions<
          ExecuteResult,
          Error,
          Omit<BettingCreateRoundMutation, 'client'>
        >,
        'mutationFn'
      >,
    ) => {
      const {
        data: bettingAbstractModuleClient,
        // TODO: figure out what to do with those
        // isLoading: isBettingAbstractModuleClientLoading,
        // isError: isBettingAbstractModuleClientError,
        // error: bettingAbstractModuleClientError,
      } = useCosmosKitAbstractModuleClient({
        moduleId: BETTING_MODULE_ID,
        accountId,
        chain,
        Module: BettingAppClient,
      })

      const {
        mutate: mutate_,
        mutateAsync: mutateAsync_,
        ...rest
      } = useBettingCreateRoundMutation(options)

      const mutate = useMemo(() => {
        if (!bettingAbstractModuleClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutate_>[0], 'client'>,
          options?: Parameters<typeof mutate_>[1],
        ) =>
          mutate_(
            { client: bettingAbstractModuleClient, ...variables },
            options,
          )
      }, [mutate_, bettingAbstractModuleClient])

      const mutateAsync = useMemo(() => {
        if (!bettingAbstractModuleClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutateAsync_>[0], 'client'>,
          options?: Parameters<typeof mutateAsync_>[1],
        ) =>
          mutateAsync_(
            { client: bettingAbstractModuleClient, ...variables },
            options,
          )
      }, [mutateAsync_, bettingAbstractModuleClient])

      return { mutate, mutateAsync, ...rest } as const
    },
  },
}
