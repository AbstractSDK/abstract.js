import {
  SigningCosmWasmClient,
  CosmWasmClient,
  ExecuteResult,
} from '@cosmjs/cosmwasm-stargate'
import { UseMutationOptions } from '@tanstack/react-query'
import { useMemo } from 'react'

import {
  useModuleMutationClient,
  useModuleQueryClient,
} from '@abstract-money/react/utils'

import {
  useBettingBetsQuery,
  useBettingConfigQuery,
  useBettingListOddsQuery,
  useBettingOddsQuery,
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
} from './cosmwasm-codegen/Betting.react-query'

import {
  BettingAppQueryClient,
  BettingAppClient,
} from './cosmwasm-codegen/Betting.client'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// betting
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const MODULE_ID = 'betting'

export const betting = {
  queries: {
    useBettingBetsQuery: ({
      options,
      client,
      chainId,
      ...rest
    }: Omit<Parameters<typeof useBettingBetsQuery>[0], 'client'> & {
      chainId: string | undefined
      client: CosmWasmClient | undefined
    }) => {
      const {
        data: bettingAppQueryClient,
        isLoading: isBettingAppQueryClientLoading,
        isError: isBettingAppQueryClientError,
        error: bettingAppQueryClientError,
      } = useModuleQueryClient(
        {
          moduleId: MODULE_ID,
          client,
          chain: chainId,
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
    useBettingConfigQuery: ({
      options,
      client,
      chainId,
      ...rest
    }: Omit<Parameters<typeof useBettingConfigQuery>[0], 'client'> & {
      chainId: string | undefined
      client: CosmWasmClient | undefined
    }) => {
      const {
        data: bettingAppQueryClient,
        isLoading: isBettingAppQueryClientLoading,
        isError: isBettingAppQueryClientError,
        error: bettingAppQueryClientError,
      } = useModuleQueryClient(
        {
          moduleId: MODULE_ID,
          client,
          chain: chainId,
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
    useBettingListOddsQuery: ({
      options,
      client,
      chainId,
      ...rest
    }: Omit<Parameters<typeof useBettingListOddsQuery>[0], 'client'> & {
      chainId: string | undefined
      client: CosmWasmClient | undefined
    }) => {
      const {
        data: bettingAppQueryClient,
        isLoading: isBettingAppQueryClientLoading,
        isError: isBettingAppQueryClientError,
        error: bettingAppQueryClientError,
      } = useModuleQueryClient(
        {
          moduleId: MODULE_ID,
          client,
          chain: chainId,
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
    useBettingOddsQuery: ({
      options,
      client,
      chainId,
      ...rest
    }: Omit<Parameters<typeof useBettingOddsQuery>[0], 'client'> & {
      chainId: string | undefined
      client: CosmWasmClient | undefined
    }) => {
      const {
        data: bettingAppQueryClient,
        isLoading: isBettingAppQueryClientLoading,
        isError: isBettingAppQueryClientError,
        error: bettingAppQueryClientError,
      } = useModuleQueryClient(
        {
          moduleId: MODULE_ID,
          client,
          chain: chainId,
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
    useBettingRoundQuery: ({
      options,
      client,
      chainId,
      ...rest
    }: Omit<Parameters<typeof useBettingRoundQuery>[0], 'client'> & {
      chainId: string | undefined
      client: CosmWasmClient | undefined
    }) => {
      const {
        data: bettingAppQueryClient,
        isLoading: isBettingAppQueryClientLoading,
        isError: isBettingAppQueryClientError,
        error: bettingAppQueryClientError,
      } = useModuleQueryClient(
        {
          moduleId: MODULE_ID,
          client,
          chain: chainId,
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
    useBettingUpdateConfigMutation: (
      {
        client,
        chainId,
        sender,
      }: {
        client: SigningCosmWasmClient | undefined
        chainId: string | undefined
        sender: string | undefined
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
        data: bettingMutationClient,
        // TODO: figure out what to do with those
        // isLoading: isBettingMutationClientLoading,
        // isError: isBettingMutationClientError,
        // error: bettingMutationClientError,
      } = useModuleMutationClient({
        moduleId: MODULE_ID,
        client,
        sender,
        chain: chainId,
        Module: BettingAppClient,
      })

      const {
        mutate: mutate_,
        mutateAsync: mutateAsync_,
        ...rest
      } = useBettingUpdateConfigMutation(options)

      const mutate = useMemo(() => {
        if (!bettingMutationClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutate_>[0], 'client'>,
          options?: Parameters<typeof mutate_>[1],
        ) => mutate_({ client: bettingMutationClient, ...variables }, options)
      }, [mutate_, bettingMutationClient])

      const mutateAsync = useMemo(() => {
        if (!bettingMutationClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutateAsync_>[0], 'client'>,
          options?: Parameters<typeof mutateAsync_>[1],
        ) =>
          mutateAsync_({ client: bettingMutationClient, ...variables }, options)
      }, [mutateAsync_, bettingMutationClient])

      return { mutate, mutateAsync, ...rest } as const
    },
    useBettingCloseRoundMutation: (
      {
        client,
        chainId,
        sender,
      }: {
        client: SigningCosmWasmClient | undefined
        chainId: string | undefined
        sender: string | undefined
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
        data: bettingMutationClient,
        // TODO: figure out what to do with those
        // isLoading: isBettingMutationClientLoading,
        // isError: isBettingMutationClientError,
        // error: bettingMutationClientError,
      } = useModuleMutationClient({
        moduleId: MODULE_ID,
        client,
        sender,
        chain: chainId,
        Module: BettingAppClient,
      })

      const {
        mutate: mutate_,
        mutateAsync: mutateAsync_,
        ...rest
      } = useBettingCloseRoundMutation(options)

      const mutate = useMemo(() => {
        if (!bettingMutationClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutate_>[0], 'client'>,
          options?: Parameters<typeof mutate_>[1],
        ) => mutate_({ client: bettingMutationClient, ...variables }, options)
      }, [mutate_, bettingMutationClient])

      const mutateAsync = useMemo(() => {
        if (!bettingMutationClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutateAsync_>[0], 'client'>,
          options?: Parameters<typeof mutateAsync_>[1],
        ) =>
          mutateAsync_({ client: bettingMutationClient, ...variables }, options)
      }, [mutateAsync_, bettingMutationClient])

      return { mutate, mutateAsync, ...rest } as const
    },
    useBettingDistributeWinningsMutation: (
      {
        client,
        chainId,
        sender,
      }: {
        client: SigningCosmWasmClient | undefined
        chainId: string | undefined
        sender: string | undefined
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
        data: bettingMutationClient,
        // TODO: figure out what to do with those
        // isLoading: isBettingMutationClientLoading,
        // isError: isBettingMutationClientError,
        // error: bettingMutationClientError,
      } = useModuleMutationClient({
        moduleId: MODULE_ID,
        client,
        sender,
        chain: chainId,
        Module: BettingAppClient,
      })

      const {
        mutate: mutate_,
        mutateAsync: mutateAsync_,
        ...rest
      } = useBettingDistributeWinningsMutation(options)

      const mutate = useMemo(() => {
        if (!bettingMutationClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutate_>[0], 'client'>,
          options?: Parameters<typeof mutate_>[1],
        ) => mutate_({ client: bettingMutationClient, ...variables }, options)
      }, [mutate_, bettingMutationClient])

      const mutateAsync = useMemo(() => {
        if (!bettingMutationClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutateAsync_>[0], 'client'>,
          options?: Parameters<typeof mutateAsync_>[1],
        ) =>
          mutateAsync_({ client: bettingMutationClient, ...variables }, options)
      }, [mutateAsync_, bettingMutationClient])

      return { mutate, mutateAsync, ...rest } as const
    },
    useBettingPlaceBetMutation: (
      {
        client,
        chainId,
        sender,
      }: {
        client: SigningCosmWasmClient | undefined
        chainId: string | undefined
        sender: string | undefined
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
        data: bettingMutationClient,
        // TODO: figure out what to do with those
        // isLoading: isBettingMutationClientLoading,
        // isError: isBettingMutationClientError,
        // error: bettingMutationClientError,
      } = useModuleMutationClient({
        moduleId: MODULE_ID,
        client,
        sender,
        chain: chainId,
        Module: BettingAppClient,
      })

      const {
        mutate: mutate_,
        mutateAsync: mutateAsync_,
        ...rest
      } = useBettingPlaceBetMutation(options)

      const mutate = useMemo(() => {
        if (!bettingMutationClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutate_>[0], 'client'>,
          options?: Parameters<typeof mutate_>[1],
        ) => mutate_({ client: bettingMutationClient, ...variables }, options)
      }, [mutate_, bettingMutationClient])

      const mutateAsync = useMemo(() => {
        if (!bettingMutationClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutateAsync_>[0], 'client'>,
          options?: Parameters<typeof mutateAsync_>[1],
        ) =>
          mutateAsync_({ client: bettingMutationClient, ...variables }, options)
      }, [mutateAsync_, bettingMutationClient])

      return { mutate, mutateAsync, ...rest } as const
    },
    useBettingUpdateAccountsMutation: (
      {
        client,
        chainId,
        sender,
      }: {
        client: SigningCosmWasmClient | undefined
        chainId: string | undefined
        sender: string | undefined
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
        data: bettingMutationClient,
        // TODO: figure out what to do with those
        // isLoading: isBettingMutationClientLoading,
        // isError: isBettingMutationClientError,
        // error: bettingMutationClientError,
      } = useModuleMutationClient({
        moduleId: MODULE_ID,
        client,
        sender,
        chain: chainId,
        Module: BettingAppClient,
      })

      const {
        mutate: mutate_,
        mutateAsync: mutateAsync_,
        ...rest
      } = useBettingUpdateAccountsMutation(options)

      const mutate = useMemo(() => {
        if (!bettingMutationClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutate_>[0], 'client'>,
          options?: Parameters<typeof mutate_>[1],
        ) => mutate_({ client: bettingMutationClient, ...variables }, options)
      }, [mutate_, bettingMutationClient])

      const mutateAsync = useMemo(() => {
        if (!bettingMutationClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutateAsync_>[0], 'client'>,
          options?: Parameters<typeof mutateAsync_>[1],
        ) =>
          mutateAsync_({ client: bettingMutationClient, ...variables }, options)
      }, [mutateAsync_, bettingMutationClient])

      return { mutate, mutateAsync, ...rest } as const
    },
    useBettingRegisterMutation: (
      {
        client,
        chainId,
        sender,
      }: {
        client: SigningCosmWasmClient | undefined
        chainId: string | undefined
        sender: string | undefined
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
        data: bettingMutationClient,
        // TODO: figure out what to do with those
        // isLoading: isBettingMutationClientLoading,
        // isError: isBettingMutationClientError,
        // error: bettingMutationClientError,
      } = useModuleMutationClient({
        moduleId: MODULE_ID,
        client,
        sender,
        chain: chainId,
        Module: BettingAppClient,
      })

      const {
        mutate: mutate_,
        mutateAsync: mutateAsync_,
        ...rest
      } = useBettingRegisterMutation(options)

      const mutate = useMemo(() => {
        if (!bettingMutationClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutate_>[0], 'client'>,
          options?: Parameters<typeof mutate_>[1],
        ) => mutate_({ client: bettingMutationClient, ...variables }, options)
      }, [mutate_, bettingMutationClient])

      const mutateAsync = useMemo(() => {
        if (!bettingMutationClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutateAsync_>[0], 'client'>,
          options?: Parameters<typeof mutateAsync_>[1],
        ) =>
          mutateAsync_({ client: bettingMutationClient, ...variables }, options)
      }, [mutateAsync_, bettingMutationClient])

      return { mutate, mutateAsync, ...rest } as const
    },
  },
}
