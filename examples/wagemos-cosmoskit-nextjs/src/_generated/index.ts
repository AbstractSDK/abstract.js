'use client'

import { ExecuteResult } from '@abstract-money/cli/cosmjs'
import { UseMutationOptions } from '@tanstack/react-query'
import { useMemo } from 'react'

import {
  useAbstractModuleClient,
  useAbstractModuleQueryClient,
} from '@abstract-money/react'

import { AccountId } from '@abstract-money/core'

import {
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
  useBettingBetsQuery,
  useBettingConfigQuery,
  useBettingListOddsQuery,
  useBettingOddsQuery,
  useBettingListRoundsQuery,
  useBettingRoundQuery,
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

export const BETTING_MODULE_ID = 'abstract:betting'

export const betting = {
  queries: {
    useBets: ({
      options,
      args,
      ...rest
    }: Omit<
      Parameters<typeof useBettingBetsQuery<BettingTypes.BetsResponse>>[0],
      'client'
    > & {
      accountId: AccountId | undefined
      chainName: string | undefined
    }) => {
      const { data: bettingAppQueryClient } = useAbstractModuleQueryClient({
        moduleId: BETTING_MODULE_ID,
        ...rest,
        Module: BettingAppQueryClient,
        query: { enabled: options?.enabled },
      })

      return useBettingBetsQuery({
        client: bettingAppQueryClient,
        options,
        args,
      })
    },
    useConfig: ({
      options,
      ...rest
    }: Omit<
      Parameters<typeof useBettingConfigQuery<BettingTypes.ConfigResponse>>[0],
      'client'
    > & {
      accountId: AccountId | undefined
      chainName: string | undefined
    }) => {
      const { data: bettingAppQueryClient } = useAbstractModuleQueryClient({
        moduleId: BETTING_MODULE_ID,
        ...rest,
        Module: BettingAppQueryClient,
        query: { enabled: options?.enabled },
      })

      return useBettingConfigQuery({
        client: bettingAppQueryClient,
        options,
      })
    },
    useListOdds: ({
      options,
      args,
      ...rest
    }: Omit<
      Parameters<
        typeof useBettingListOddsQuery<BettingTypes.ListOddsResponse>
      >[0],
      'client'
    > & {
      accountId: AccountId | undefined
      chainName: string | undefined
    }) => {
      const { data: bettingAppQueryClient } = useAbstractModuleQueryClient({
        moduleId: BETTING_MODULE_ID,
        ...rest,
        Module: BettingAppQueryClient,
        query: { enabled: options?.enabled },
      })

      return useBettingListOddsQuery({
        client: bettingAppQueryClient,
        options,
        args,
      })
    },
    useOdds: ({
      options,
      args,
      ...rest
    }: Omit<
      Parameters<typeof useBettingOddsQuery<BettingTypes.OddsResponse>>[0],
      'client'
    > & {
      accountId: AccountId | undefined
      chainName: string | undefined
    }) => {
      const { data: bettingAppQueryClient } = useAbstractModuleQueryClient({
        moduleId: BETTING_MODULE_ID,
        ...rest,
        Module: BettingAppQueryClient,
        query: { enabled: options?.enabled },
      })

      return useBettingOddsQuery({
        client: bettingAppQueryClient,
        options,
        args,
      })
    },
    useListRounds: ({
      options,
      args,
      ...rest
    }: Omit<
      Parameters<
        typeof useBettingListRoundsQuery<BettingTypes.RoundsResponse>
      >[0],
      'client'
    > & {
      accountId: AccountId | undefined
      chainName: string | undefined
    }) => {
      const { data: bettingAppQueryClient } = useAbstractModuleQueryClient({
        moduleId: BETTING_MODULE_ID,
        ...rest,
        Module: BettingAppQueryClient,
        query: { enabled: options?.enabled },
      })

      return useBettingListRoundsQuery({
        client: bettingAppQueryClient,
        options,
        args,
      })
    },
    useRound: ({
      options,
      args,
      ...rest
    }: Omit<
      Parameters<typeof useBettingRoundQuery<BettingTypes.RoundResponse>>[0],
      'client'
    > & {
      accountId: AccountId | undefined
      chainName: string | undefined
    }) => {
      const { data: bettingAppQueryClient } = useAbstractModuleQueryClient({
        moduleId: BETTING_MODULE_ID,
        ...rest,
        Module: BettingAppQueryClient,
        query: { enabled: options?.enabled },
      })

      return useBettingRoundQuery({
        client: bettingAppQueryClient,
        options,
        args,
      })
    },
  },
  mutations: {
    useUpdateConfig: (
      {
        accountId,
        chainName,
        sender,
      }: {
        accountId: AccountId | undefined
        chainName: string | undefined
        sender?: string | undefined
      },
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
        data: bettingAppClient,
        // TODO: figure out what to do with those
        // isLoading: isBettingAppClientLoading,
        // isError: isBettingAppClientError,
        // error: bettingAppClientError,
      } = useAbstractModuleClient({
        moduleId: BETTING_MODULE_ID,
        accountId,
        chainName,
        sender,

        Module: BettingAppClient,
      })

      const {
        mutate: mutate_,
        mutateAsync: mutateAsync_,
        ...rest
      } = useBettingUpdateConfigMutation(options)

      const mutate = useMemo(() => {
        if (!bettingAppClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutate_>[0], 'client'>,
          options?: Parameters<typeof mutate_>[1],
        ) => mutate_({ client: bettingAppClient, ...variables }, options)
      }, [mutate_, bettingAppClient])

      const mutateAsync = useMemo(() => {
        if (!bettingAppClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutateAsync_>[0], 'client'>,
          options?: Parameters<typeof mutateAsync_>[1],
        ) => mutateAsync_({ client: bettingAppClient, ...variables }, options)
      }, [mutateAsync_, bettingAppClient])

      return { mutate, mutateAsync, ...rest } as const
    },
    useCloseRound: (
      {
        accountId,
        chainName,
        sender,
      }: {
        accountId: AccountId | undefined
        chainName: string | undefined
        sender?: string | undefined
      },
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
        data: bettingAppClient,
        // TODO: figure out what to do with those
        // isLoading: isBettingAppClientLoading,
        // isError: isBettingAppClientError,
        // error: bettingAppClientError,
      } = useAbstractModuleClient({
        moduleId: BETTING_MODULE_ID,
        accountId,
        chainName,
        sender,

        Module: BettingAppClient,
      })

      const {
        mutate: mutate_,
        mutateAsync: mutateAsync_,
        ...rest
      } = useBettingCloseRoundMutation(options)

      const mutate = useMemo(() => {
        if (!bettingAppClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutate_>[0], 'client'>,
          options?: Parameters<typeof mutate_>[1],
        ) => mutate_({ client: bettingAppClient, ...variables }, options)
      }, [mutate_, bettingAppClient])

      const mutateAsync = useMemo(() => {
        if (!bettingAppClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutateAsync_>[0], 'client'>,
          options?: Parameters<typeof mutateAsync_>[1],
        ) => mutateAsync_({ client: bettingAppClient, ...variables }, options)
      }, [mutateAsync_, bettingAppClient])

      return { mutate, mutateAsync, ...rest } as const
    },
    useDistributeWinnings: (
      {
        accountId,
        chainName,
        sender,
      }: {
        accountId: AccountId | undefined
        chainName: string | undefined
        sender?: string | undefined
      },
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
        data: bettingAppClient,
        // TODO: figure out what to do with those
        // isLoading: isBettingAppClientLoading,
        // isError: isBettingAppClientError,
        // error: bettingAppClientError,
      } = useAbstractModuleClient({
        moduleId: BETTING_MODULE_ID,
        accountId,
        chainName,
        sender,

        Module: BettingAppClient,
      })

      const {
        mutate: mutate_,
        mutateAsync: mutateAsync_,
        ...rest
      } = useBettingDistributeWinningsMutation(options)

      const mutate = useMemo(() => {
        if (!bettingAppClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutate_>[0], 'client'>,
          options?: Parameters<typeof mutate_>[1],
        ) => mutate_({ client: bettingAppClient, ...variables }, options)
      }, [mutate_, bettingAppClient])

      const mutateAsync = useMemo(() => {
        if (!bettingAppClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutateAsync_>[0], 'client'>,
          options?: Parameters<typeof mutateAsync_>[1],
        ) => mutateAsync_({ client: bettingAppClient, ...variables }, options)
      }, [mutateAsync_, bettingAppClient])

      return { mutate, mutateAsync, ...rest } as const
    },
    usePlaceBet: (
      {
        accountId,
        chainName,
        sender,
      }: {
        accountId: AccountId | undefined
        chainName: string | undefined
        sender?: string | undefined
      },
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
        data: bettingAppClient,
        // TODO: figure out what to do with those
        // isLoading: isBettingAppClientLoading,
        // isError: isBettingAppClientError,
        // error: bettingAppClientError,
      } = useAbstractModuleClient({
        moduleId: BETTING_MODULE_ID,
        accountId,
        chainName,
        sender,

        Module: BettingAppClient,
      })

      const {
        mutate: mutate_,
        mutateAsync: mutateAsync_,
        ...rest
      } = useBettingPlaceBetMutation(options)

      const mutate = useMemo(() => {
        if (!bettingAppClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutate_>[0], 'client'>,
          options?: Parameters<typeof mutate_>[1],
        ) => mutate_({ client: bettingAppClient, ...variables }, options)
      }, [mutate_, bettingAppClient])

      const mutateAsync = useMemo(() => {
        if (!bettingAppClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutateAsync_>[0], 'client'>,
          options?: Parameters<typeof mutateAsync_>[1],
        ) => mutateAsync_({ client: bettingAppClient, ...variables }, options)
      }, [mutateAsync_, bettingAppClient])

      return { mutate, mutateAsync, ...rest } as const
    },
    useUpdateAccounts: (
      {
        accountId,
        chainName,
        sender,
      }: {
        accountId: AccountId | undefined
        chainName: string | undefined
        sender?: string | undefined
      },
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
        data: bettingAppClient,
        // TODO: figure out what to do with those
        // isLoading: isBettingAppClientLoading,
        // isError: isBettingAppClientError,
        // error: bettingAppClientError,
      } = useAbstractModuleClient({
        moduleId: BETTING_MODULE_ID,
        accountId,
        chainName,
        sender,

        Module: BettingAppClient,
      })

      const {
        mutate: mutate_,
        mutateAsync: mutateAsync_,
        ...rest
      } = useBettingUpdateAccountsMutation(options)

      const mutate = useMemo(() => {
        if (!bettingAppClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutate_>[0], 'client'>,
          options?: Parameters<typeof mutate_>[1],
        ) => mutate_({ client: bettingAppClient, ...variables }, options)
      }, [mutate_, bettingAppClient])

      const mutateAsync = useMemo(() => {
        if (!bettingAppClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutateAsync_>[0], 'client'>,
          options?: Parameters<typeof mutateAsync_>[1],
        ) => mutateAsync_({ client: bettingAppClient, ...variables }, options)
      }, [mutateAsync_, bettingAppClient])

      return { mutate, mutateAsync, ...rest } as const
    },
    useRegister: (
      {
        accountId,
        chainName,
        sender,
      }: {
        accountId: AccountId | undefined
        chainName: string | undefined
        sender?: string | undefined
      },
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
        data: bettingAppClient,
        // TODO: figure out what to do with those
        // isLoading: isBettingAppClientLoading,
        // isError: isBettingAppClientError,
        // error: bettingAppClientError,
      } = useAbstractModuleClient({
        moduleId: BETTING_MODULE_ID,
        accountId,
        chainName,
        sender,

        Module: BettingAppClient,
      })

      const {
        mutate: mutate_,
        mutateAsync: mutateAsync_,
        ...rest
      } = useBettingRegisterMutation(options)

      const mutate = useMemo(() => {
        if (!bettingAppClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutate_>[0], 'client'>,
          options?: Parameters<typeof mutate_>[1],
        ) => mutate_({ client: bettingAppClient, ...variables }, options)
      }, [mutate_, bettingAppClient])

      const mutateAsync = useMemo(() => {
        if (!bettingAppClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutateAsync_>[0], 'client'>,
          options?: Parameters<typeof mutateAsync_>[1],
        ) => mutateAsync_({ client: bettingAppClient, ...variables }, options)
      }, [mutateAsync_, bettingAppClient])

      return { mutate, mutateAsync, ...rest } as const
    },
    useCreateRound: (
      {
        accountId,
        chainName,
        sender,
      }: {
        accountId: AccountId | undefined
        chainName: string | undefined
        sender?: string | undefined
      },
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
        data: bettingAppClient,
        // TODO: figure out what to do with those
        // isLoading: isBettingAppClientLoading,
        // isError: isBettingAppClientError,
        // error: bettingAppClientError,
      } = useAbstractModuleClient({
        moduleId: BETTING_MODULE_ID,
        accountId,
        chainName,
        sender,

        Module: BettingAppClient,
      })

      const {
        mutate: mutate_,
        mutateAsync: mutateAsync_,
        ...rest
      } = useBettingCreateRoundMutation(options)

      const mutate = useMemo(() => {
        if (!bettingAppClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutate_>[0], 'client'>,
          options?: Parameters<typeof mutate_>[1],
        ) => mutate_({ client: bettingAppClient, ...variables }, options)
      }, [mutate_, bettingAppClient])

      const mutateAsync = useMemo(() => {
        if (!bettingAppClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutateAsync_>[0], 'client'>,
          options?: Parameters<typeof mutateAsync_>[1],
        ) => mutateAsync_({ client: bettingAppClient, ...variables }, options)
      }, [mutateAsync_, bettingAppClient])

      return { mutate, mutateAsync, ...rest } as const
    },
  },
}
