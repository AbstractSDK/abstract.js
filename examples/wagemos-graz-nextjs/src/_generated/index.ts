import { ExecuteResult } from '@cosmjs/cosmwasm-stargate'
import { UseMutationOptions } from '@tanstack/react-query'
import { useMemo } from 'react'

import {
  useAbstractModuleClient,
  useAbstractModuleQueryClient,
} from '@abstract-money/react/utils'

import { useAccount, useCosmWasmClient, useCosmWasmSigningClient } from 'graz'

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

import {
  BetsResponse,
  ConfigResponse,
  ListOddsResponse,
  OddsResponse,
  RoundsResponse,
  RoundResponse,
} from './cosmwasm-codegen/Betting.types'

import {
  BettingAppQueryClient,
  BettingAppClient,
} from './cosmwasm-codegen/Betting.client'

import { useAbstractClient } from '@abstract-money/react/utils'
import {
  useDeposit as _useDeposit,
  useWithdraw as _useWithdraw,
  useExecute as _useExecute,
} from '@abstract-money/react/hooks'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Betting
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const BETTING_MODULE_ID = 'abstract:betting'

function useGrazAbstractModuleQueryClient(
  args: Omit<Parameters<typeof useAbstractModuleQueryClient>[0], 'client'>,
  options?: Parameters<typeof useAbstractModuleQueryClient>[1],
) {
  const { data: client } = useCosmWasmClient()
  return useAbstractModuleQueryClient(
    {
      client,
      ...args,
    },
    options,
  )
}

function useGrazAbstractModuleClient(
  args: Omit<
    Parameters<typeof useAbstractModuleClient>[0],
    'client' | 'sender'
  >,
  options?: Parameters<typeof useAbstractModuleClient>[1],
) {
  const { data: client } = useCosmWasmSigningClient()
  const { data: account } = useAccount()
  const sender = account?.bech32Address
  return useAbstractModuleClient(
    {
      client,
      sender,
      ...args,
    },
    options,
  )
}

function useGrazAbstractClient(
  args: Omit<Parameters<typeof useAbstractClient>[0], 'client' | 'sender'>,
  options?: Parameters<typeof useAbstractClient>[1],
) {
  const { data: client } = useCosmWasmSigningClient()
  const { data: account } = useAccount()
  const sender = account?.bech32Address
  return useAbstractClient(
    {
      client,
      sender,
      ...args,
    },
    options,
  )
}

export function useDeposit(
  { chain }: { chain: string | undefined },
  ...args: Parameters<typeof _useDeposit>
) {
  const {
    data: abstractClient,
    // TODO: figure out what to do with those
    // isLoading: isAbstractClientLoading,
    // isError: isAbstractClientError,
    // error: abstractClientError,
  } = useGrazAbstractClient({ chain })

  const {
    mutate: mutate_,
    mutateAsync: mutateAsync_,
    ...rest
  } = _useDeposit(...args)

  const mutate = useMemo(() => {
    if (!abstractClient) return undefined

    return (
      variables: Omit<Parameters<typeof mutate_>[0], 'abstractClient'>,
      options?: Parameters<typeof mutate_>[1],
    ) => mutate_({ abstractClient, ...variables }, options)
  }, [mutate_, abstractClient])

  const mutateAsync = useMemo(() => {
    if (!abstractClient) return undefined

    return (
      variables: Omit<Parameters<typeof mutateAsync_>[0], 'abstractClient'>,
      options?: Parameters<typeof mutateAsync_>[1],
    ) => mutateAsync_({ abstractClient, ...variables }, options)
  }, [mutateAsync_, abstractClient])

  return { mutate, mutateAsync, ...rest } as const
}

export function useWithdraw(
  { chain }: { chain: string | undefined },
  ...args: Parameters<typeof _useWithdraw>
) {
  const {
    data: abstractClient,
    // TODO: figure out what to do with those
    // isLoading: isAbstractClientLoading,
    // isError: isAbstractClientError,
    // error: abstractClientError,
  } = useGrazAbstractClient({ chain })

  const {
    mutate: mutate_,
    mutateAsync: mutateAsync_,
    ...rest
  } = _useWithdraw(...args)

  const mutate = useMemo(() => {
    if (!abstractClient) return undefined

    return (
      variables: Omit<Parameters<typeof mutate_>[0], 'abstractClient'>,
      options?: Parameters<typeof mutate_>[1],
    ) => mutate_({ abstractClient, ...variables }, options)
  }, [mutate_, abstractClient])

  const mutateAsync = useMemo(() => {
    if (!abstractClient) return undefined

    return (
      variables: Omit<Parameters<typeof mutateAsync_>[0], 'abstractClient'>,
      options?: Parameters<typeof mutateAsync_>[1],
    ) => mutateAsync_({ abstractClient, ...variables }, options)
  }, [mutateAsync_, abstractClient])

  return { mutate, mutateAsync, ...rest } as const
}

export function useExecute(
  { chain }: { chain: string | undefined },
  ...args: Parameters<typeof _useExecute>
) {
  const {
    data: abstractClient,
    // TODO: figure out what to do with those
    // isLoading: isAbstractClientLoading,
    // isError: isAbstractClientError,
    // error: abstractClientError,
  } = useGrazAbstractClient({ chain })

  const {
    mutate: mutate_,
    mutateAsync: mutateAsync_,
    ...rest
  } = _useExecute(...args)

  const mutate = useMemo(() => {
    if (!abstractClient) return undefined

    return (
      variables: Omit<Parameters<typeof mutate_>[0], 'abstractClient'>,
      options?: Parameters<typeof mutate_>[1],
    ) => mutate_({ abstractClient, ...variables }, options)
  }, [mutate_, abstractClient])

  const mutateAsync = useMemo(() => {
    if (!abstractClient) return undefined

    return (
      variables: Omit<Parameters<typeof mutateAsync_>[0], 'abstractClient'>,
      options?: Parameters<typeof mutateAsync_>[1],
    ) => mutateAsync_({ abstractClient, ...variables }, options)
  }, [mutateAsync_, abstractClient])

  return { mutate, mutateAsync, ...rest } as const
}

export const betting = {
  queries: {
    useBets: ({
      options,
      chain,
      ...rest
    }: Omit<
      Parameters<typeof useBettingBetsQuery<BetsResponse>>[0],
      'client'
    > & { chain: string | undefined }) => {
      const {
        data: bettingAppQueryClient,
        isLoading: isBettingAppQueryClientLoading,
        isError: isBettingAppQueryClientError,
        error: bettingAppQueryClientError,
      } = useGrazAbstractModuleQueryClient(
        {
          moduleId: BETTING_MODULE_ID,

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
      chain,
      ...rest
    }: Omit<
      Parameters<typeof useBettingConfigQuery<ConfigResponse>>[0],
      'client'
    > & { chain: string | undefined }) => {
      const {
        data: bettingAppQueryClient,
        isLoading: isBettingAppQueryClientLoading,
        isError: isBettingAppQueryClientError,
        error: bettingAppQueryClientError,
      } = useGrazAbstractModuleQueryClient(
        {
          moduleId: BETTING_MODULE_ID,

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
      chain,
      ...rest
    }: Omit<
      Parameters<typeof useBettingListOddsQuery<ListOddsResponse>>[0],
      'client'
    > & { chain: string | undefined }) => {
      const {
        data: bettingAppQueryClient,
        isLoading: isBettingAppQueryClientLoading,
        isError: isBettingAppQueryClientError,
        error: bettingAppQueryClientError,
      } = useGrazAbstractModuleQueryClient(
        {
          moduleId: BETTING_MODULE_ID,

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
      chain,
      ...rest
    }: Omit<
      Parameters<typeof useBettingOddsQuery<OddsResponse>>[0],
      'client'
    > & { chain: string | undefined }) => {
      const {
        data: bettingAppQueryClient,
        isLoading: isBettingAppQueryClientLoading,
        isError: isBettingAppQueryClientError,
        error: bettingAppQueryClientError,
      } = useGrazAbstractModuleQueryClient(
        {
          moduleId: BETTING_MODULE_ID,

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
      chain,
      ...rest
    }: Omit<
      Parameters<typeof useBettingListRoundsQuery<RoundsResponse>>[0],
      'client'
    > & { chain: string | undefined }) => {
      const {
        data: bettingAppQueryClient,
        isLoading: isBettingAppQueryClientLoading,
        isError: isBettingAppQueryClientError,
        error: bettingAppQueryClientError,
      } = useGrazAbstractModuleQueryClient(
        {
          moduleId: BETTING_MODULE_ID,

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
      chain,
      ...rest
    }: Omit<
      Parameters<typeof useBettingRoundQuery<RoundResponse>>[0],
      'client'
    > & { chain: string | undefined }) => {
      const {
        data: bettingAppQueryClient,
        isLoading: isBettingAppQueryClientLoading,
        isError: isBettingAppQueryClientError,
        error: bettingAppQueryClientError,
      } = useGrazAbstractModuleQueryClient(
        {
          moduleId: BETTING_MODULE_ID,

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
      { chain }: { chain: string | undefined },
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
      } = useGrazAbstractModuleClient({
        moduleId: BETTING_MODULE_ID,
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
      { chain }: { chain: string | undefined },
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
      } = useGrazAbstractModuleClient({
        moduleId: BETTING_MODULE_ID,
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
      { chain }: { chain: string | undefined },
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
      } = useGrazAbstractModuleClient({
        moduleId: BETTING_MODULE_ID,
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
      { chain }: { chain: string | undefined },
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
      } = useGrazAbstractModuleClient({
        moduleId: BETTING_MODULE_ID,
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
      { chain }: { chain: string | undefined },
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
      } = useGrazAbstractModuleClient({
        moduleId: BETTING_MODULE_ID,
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
      { chain }: { chain: string | undefined },
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
      } = useGrazAbstractModuleClient({
        moduleId: BETTING_MODULE_ID,
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
      { chain }: { chain: string | undefined },
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
      } = useGrazAbstractModuleClient({
        moduleId: BETTING_MODULE_ID,
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
