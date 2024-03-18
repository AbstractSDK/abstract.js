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
      const {
        data: bettingAppQueryClient,
        isLoading: isBettingAppQueryClientLoading,
        isError: isBettingAppQueryClientError,
        error: bettingAppQueryClientError,
      } = useAbstractModuleQueryClient({
        moduleId: BETTING_MODULE_ID,
        ...rest,
        Module: BettingAppQueryClient,
        query: { enabled: options?.enabled },
      })

      const {
        data,
        isLoading: isBettingBetsQueryLoading,
        isError: isBettingBetsQueryError,
        error: bettingBetsQueryError,
      } = useBettingBetsQuery({
        client: bettingAppQueryClient,
        options,
        args,
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
      ...rest
    }: Omit<
      Parameters<typeof useBettingConfigQuery<BettingTypes.ConfigResponse>>[0],
      'client'
    > & {
      accountId: AccountId | undefined
      chainName: string | undefined
    }) => {
      const {
        data: bettingAppQueryClient,
        isLoading: isBettingAppQueryClientLoading,
        isError: isBettingAppQueryClientError,
        error: bettingAppQueryClientError,
      } = useAbstractModuleQueryClient({
        moduleId: BETTING_MODULE_ID,
        ...rest,
        Module: BettingAppQueryClient,
        query: { enabled: options?.enabled },
      })

      const {
        data,
        isLoading: isBettingConfigQueryLoading,
        isError: isBettingConfigQueryError,
        error: bettingConfigQueryError,
      } = useBettingConfigQuery({
        client: bettingAppQueryClient,
        options,
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
      const {
        data: bettingAppQueryClient,
        isLoading: isBettingAppQueryClientLoading,
        isError: isBettingAppQueryClientError,
        error: bettingAppQueryClientError,
      } = useAbstractModuleQueryClient({
        moduleId: BETTING_MODULE_ID,
        ...rest,
        Module: BettingAppQueryClient,
        query: { enabled: options?.enabled },
      })

      const {
        data,
        isLoading: isBettingListOddsQueryLoading,
        isError: isBettingListOddsQueryError,
        error: bettingListOddsQueryError,
      } = useBettingListOddsQuery({
        client: bettingAppQueryClient,
        options,
        args,
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
      args,
      ...rest
    }: Omit<
      Parameters<typeof useBettingOddsQuery<BettingTypes.OddsResponse>>[0],
      'client'
    > & {
      accountId: AccountId | undefined
      chainName: string | undefined
    }) => {
      const {
        data: bettingAppQueryClient,
        isLoading: isBettingAppQueryClientLoading,
        isError: isBettingAppQueryClientError,
        error: bettingAppQueryClientError,
      } = useAbstractModuleQueryClient({
        moduleId: BETTING_MODULE_ID,
        ...rest,
        Module: BettingAppQueryClient,
        query: { enabled: options?.enabled },
      })

      const {
        data,
        isLoading: isBettingOddsQueryLoading,
        isError: isBettingOddsQueryError,
        error: bettingOddsQueryError,
      } = useBettingOddsQuery({
        client: bettingAppQueryClient,
        options,
        args,
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
      const {
        data: bettingAppQueryClient,
        isLoading: isBettingAppQueryClientLoading,
        isError: isBettingAppQueryClientError,
        error: bettingAppQueryClientError,
      } = useAbstractModuleQueryClient({
        moduleId: BETTING_MODULE_ID,
        ...rest,
        Module: BettingAppQueryClient,
        query: { enabled: options?.enabled },
      })

      const {
        data,
        isLoading: isBettingListRoundsQueryLoading,
        isError: isBettingListRoundsQueryError,
        error: bettingListRoundsQueryError,
      } = useBettingListRoundsQuery({
        client: bettingAppQueryClient,
        options,
        args,
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
      args,
      ...rest
    }: Omit<
      Parameters<typeof useBettingRoundQuery<BettingTypes.RoundResponse>>[0],
      'client'
    > & {
      accountId: AccountId | undefined
      chainName: string | undefined
    }) => {
      const {
        data: bettingAppQueryClient,
        isLoading: isBettingAppQueryClientLoading,
        isError: isBettingAppQueryClientError,
        error: bettingAppQueryClientError,
      } = useAbstractModuleQueryClient({
        moduleId: BETTING_MODULE_ID,
        ...rest,
        Module: BettingAppQueryClient,
        query: { enabled: options?.enabled },
      })

      const {
        data,
        isLoading: isBettingRoundQueryLoading,
        isError: isBettingRoundQueryError,
        error: bettingRoundQueryError,
      } = useBettingRoundQuery({
        client: bettingAppQueryClient,
        options,
        args,
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
        accountId,
        chainName,
      }: { accountId: AccountId | undefined; chainName: string | undefined },
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
      }: { accountId: AccountId | undefined; chainName: string | undefined },
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
      }: { accountId: AccountId | undefined; chainName: string | undefined },
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
      }: { accountId: AccountId | undefined; chainName: string | undefined },
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
      }: { accountId: AccountId | undefined; chainName: string | undefined },
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
      }: { accountId: AccountId | undefined; chainName: string | undefined },
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
      }: { accountId: AccountId | undefined; chainName: string | undefined },
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
