'use client'
import {
  useModuleQueryClient,
  useModuleMutationClient,
} from '@abstract-money/react/utils'

import {
  WagemosAppClient,
  WagemosAppQueryClient,
} from './cosmwasm-codegen/Wagemos.client'
import {
  WagemosBetsQuery,
  WagemosCloseRoundMutation,
  WagemosConfigQuery,
  WagemosCreateRoundMutation,
  WagemosDistributeWinningsMutation,
  WagemosListOddsQuery,
  WagemosListRoundsQuery,
  WagemosOddsQuery,
  WagemosPlaceBetMutation,
  WagemosRegisterMutation,
  WagemosRoundQuery,
  WagemosUpdateAccountsMutation,
  WagemosUpdateConfigMutation,
  useWagemosBetsQuery,
  useWagemosCloseRoundMutation,
  useWagemosConfigQuery,
  useWagemosCreateRoundMutation,
  useWagemosDistributeWinningsMutation,
  useWagemosListOddsQuery,
  useWagemosListRoundsQuery,
  useWagemosOddsQuery,
  useWagemosPlaceBetMutation,
  useWagemosRegisterMutation,
  useWagemosRoundQuery,
  useWagemosUpdateAccountsMutation,
  useWagemosUpdateConfigMutation,
} from './cosmwasm-codegen/Wagemos.react-query'
import {
  BetsResponse,
  ConfigResponse,
  ListOddsResponse,
  OddsResponse,
  RoundResponse,
  RoundsResponse,
} from './cosmwasm-codegen/Wagemos.types'
import { UseMutationOptions } from '@tanstack/react-query'
import { ExecuteResult } from '@cosmjs/cosmwasm-stargate'
import { useMemo } from 'react'

enum ModuleType {
  APP = 'app',
  ADAPTER = 'adapter',
}

type Module = {
  name: string
  type: ModuleType
  queries: Record<string, (args: any) => unknown>
  mutations: Record<string, (args: any) => unknown>
  dependencies?: Module[]
}

const WAGEMOS_MODULE_ID = 'abstract:betting'

export const wagemos = {
  name: 'payment',
  type: ModuleType.APP,
  queries: {
    useListRounds: (
      {
        args = {},
        options,
      }: Omit<WagemosListRoundsQuery<RoundsResponse>, 'client'> = { args: {} },
    ) => {
      const {
        data: wagemosQueryClient,
        isLoading: isWagemosQueryClientLoading,
        isError: isWagemosQueryClientError,
        error: wagemosQueryClientError,
      } = useModuleQueryClient(
        {
          moduleId: WAGEMOS_MODULE_ID,
          Module: WagemosAppQueryClient,
        },
        { enabled: options?.enabled },
      )
      const {
        data,
        isLoading: isWagemosListRoundsQueryLoading,
        isError: isWagemosListRoundsQueryError,
        error: wagemosListRoundsQueryError,
      } = useWagemosListRoundsQuery({
        client: wagemosQueryClient,
        args,
        options,
      })

      if (isWagemosQueryClientError)
        return {
          data: undefined,
          isLoading: false,
          isError: true,
          isSuccess: false,
          error: wagemosQueryClientError,
        } as const
      if (isWagemosListRoundsQueryError)
        return {
          data: undefined,
          isLoading: false,
          isError: true,
          isSuccess: false,
          error: wagemosListRoundsQueryError,
        } as const
      if (isWagemosQueryClientLoading || isWagemosListRoundsQueryLoading)
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

    useBets: ({
      args,
      options,
    }: Omit<WagemosBetsQuery<BetsResponse>, 'client'>) => {
      const {
        data: wagemosQueryClient,
        isLoading: isWagemosQueryClientLoading,
        isError: isWagemosQueryClientError,
        error: wagemosQueryClientError,
      } = useModuleQueryClient(
        {
          moduleId: WAGEMOS_MODULE_ID,
          Module: WagemosAppQueryClient,
        },
        { enabled: options?.enabled },
      )
      const {
        data,
        isLoading: isWagemosBetsQueryLoading,
        isError: isWagemosBetsQueryError,
        error: wagemosBetsQueryError,
      } = useWagemosBetsQuery({
        client: wagemosQueryClient,
        args,
        options,
      })

      if (isWagemosQueryClientError)
        return {
          data: undefined,
          isLoading: false,
          isError: true,
          isSuccess: false,
          error: wagemosQueryClientError,
        } as const
      if (isWagemosBetsQueryError)
        return {
          data: undefined,
          isLoading: false,
          isError: true,
          isSuccess: false,
          error: wagemosBetsQueryError,
        } as const
      if (isWagemosQueryClientLoading || isWagemosBetsQueryLoading)
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
      args,
      options,
    }: Omit<WagemosRoundQuery<RoundResponse>, 'client'>) => {
      const {
        data: wagemosQueryClient,
        isLoading: isWagemosQueryClientLoading,
        isError: isWagemosQueryClientError,
        error: wagemosQueryClientError,
      } = useModuleQueryClient(
        {
          moduleId: WAGEMOS_MODULE_ID,
          Module: WagemosAppQueryClient,
        },
        { enabled: options?.enabled },
      )
      const {
        data,
        isLoading: isWagemosRoundQueryLoading,
        isError: isWagemosRoundQueryError,
        error: wagemosRoundQueryError,
      } = useWagemosRoundQuery({
        client: wagemosQueryClient,
        args,
        options,
      })

      if (isWagemosQueryClientError)
        return {
          data: undefined,
          isLoading: false,
          isError: true,
          isSuccess: false,
          error: wagemosQueryClientError,
        } as const
      if (isWagemosRoundQueryError)
        return {
          data: undefined,
          isLoading: false,
          isError: true,
          isSuccess: false,
          error: wagemosRoundQueryError,
        } as const
      if (isWagemosQueryClientLoading || isWagemosRoundQueryLoading)
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
      args,
      options,
    }: Omit<WagemosOddsQuery<OddsResponse>, 'client'>) => {
      const {
        data: wagemosQueryClient,
        isLoading: isWagemosQueryClientLoading,
        isError: isWagemosQueryClientError,
        error: wagemosQueryClientError,
      } = useModuleQueryClient(
        {
          moduleId: WAGEMOS_MODULE_ID,
          Module: WagemosAppQueryClient,
        },
        { enabled: options?.enabled },
      )
      const {
        data,
        isLoading: isWagemosOddsQueryLoading,
        isError: isWagemosOddsQueryError,
        error: wagemosOddsQueryError,
      } = useWagemosOddsQuery({
        client: wagemosQueryClient,
        args,
        options,
      })

      if (isWagemosQueryClientError)
        return {
          data: undefined,
          isLoading: false,
          isError: true,
          isSuccess: false,
          error: wagemosQueryClientError,
        } as const
      if (isWagemosOddsQueryError)
        return {
          data: undefined,
          isLoading: false,
          isError: true,
          isSuccess: false,
          error: wagemosOddsQueryError,
        } as const
      if (isWagemosQueryClientLoading || isWagemosOddsQueryLoading)
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
      args,
      options,
    }: Omit<WagemosListOddsQuery<ListOddsResponse>, 'client'>) => {
      const {
        data: wagemosQueryClient,
        isLoading: isWagemosQueryClientLoading,
        isError: isWagemosQueryClientError,
        error: wagemosQueryClientError,
      } = useModuleQueryClient(
        {
          moduleId: WAGEMOS_MODULE_ID,
          Module: WagemosAppQueryClient,
        },
        { enabled: options?.enabled },
      )
      const {
        data,
        isLoading: isWagemosListOddsQueryLoading,
        isError: isWagemosListOddsQueryError,
        error: wagemosListOddsQueryError,
      } = useWagemosListOddsQuery({
        client: wagemosQueryClient,
        args,
        options,
      })

      if (isWagemosQueryClientError)
        return {
          data: undefined,
          isLoading: false,
          isError: true,
          isSuccess: false,
          error: wagemosQueryClientError,
        } as const
      if (isWagemosListOddsQueryError)
        return {
          data: undefined,
          isLoading: false,
          isError: true,
          isSuccess: false,
          error: wagemosListOddsQueryError,
        } as const
      if (isWagemosQueryClientLoading || isWagemosListOddsQueryLoading)
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
    }: Omit<WagemosConfigQuery<ConfigResponse>, 'client'>) => {
      const {
        data: wagemosQueryClient,
        isLoading: isWagemosQueryClientLoading,
        isError: isWagemosQueryClientError,
        error: wagemosQueryClientError,
      } = useModuleQueryClient(
        {
          moduleId: WAGEMOS_MODULE_ID,
          Module: WagemosAppQueryClient,
        },
        { enabled: options?.enabled },
      )
      const {
        data,
        isLoading: isWagemosConfigQueryLoading,
        isError: isWagemosConfigQueryError,
        error: wagemosConfigQueryError,
      } = useWagemosConfigQuery({
        client: wagemosQueryClient,
        options,
      })

      if (isWagemosQueryClientError)
        return {
          data: undefined,
          isLoading: false,
          isError: true,
          isSuccess: false,
          error: wagemosQueryClientError,
        } as const
      if (isWagemosConfigQueryError)
        return {
          data: undefined,
          isLoading: false,
          isError: true,
          isSuccess: false,
          error: wagemosConfigQueryError,
        } as const
      if (isWagemosQueryClientLoading || isWagemosConfigQueryLoading)
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
    useCreateRound: (
      options: Omit<
        UseMutationOptions<
          ExecuteResult,
          Error,
          Omit<WagemosCreateRoundMutation, 'client'>
        >,
        'mutationFn'
      >,
    ) => {
      const {
        data: wagemosMutationClient,
        // TODO: figure out what to do with those
        // isLoading: isWagemosMutationClientLoading,
        // isError: isWagemosMutationClientError,
        // error: wagemosMutationClientError,
      } = useModuleMutationClient({
        moduleId: WAGEMOS_MODULE_ID,
        Module: WagemosAppClient,
      })

      const {
        mutate: mutate_,
        mutateAsync: mutateAsync_,
        ...rest
      } = useWagemosCreateRoundMutation(options)

      const mutate = useMemo(() => {
        if (!wagemosMutationClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutate_>[0], 'client'>,
          options: Parameters<typeof mutate_>[1],
        ) => mutate_({ client: wagemosMutationClient, ...variables }, options)
      }, [mutate_, wagemosMutationClient])

      const mutateAsync = useMemo(() => {
        if (!wagemosMutationClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutateAsync_>[0], 'client'>,
          options: Parameters<typeof mutateAsync_>[1],
        ) =>
          mutateAsync_({ client: wagemosMutationClient, ...variables }, options)
      }, [mutateAsync_, wagemosMutationClient])

      return { mutate, mutateAsync, ...rest } as const
    },
    useRegister: (
      options: Omit<
        UseMutationOptions<
          ExecuteResult,
          Error,
          Omit<WagemosRegisterMutation, 'client'>
        >,
        'mutationFn'
      >,
    ) => {
      const {
        data: wagemosMutationClient,
        // TODO: figure out what to do with those
        // isLoading: isWagemosMutationClientLoading,
        // isError: isWagemosMutationClientError,
        // error: wagemosMutationClientError,
      } = useModuleMutationClient({
        moduleId: WAGEMOS_MODULE_ID,
        Module: WagemosAppClient,
      })

      const {
        mutate: mutate_,
        mutateAsync: mutateAsync_,
        ...rest
      } = useWagemosRegisterMutation(options)

      const mutate = useMemo(() => {
        if (!wagemosMutationClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutate_>[0], 'client'>,
          options: Parameters<typeof mutate_>[1],
        ) => mutate_({ client: wagemosMutationClient, ...variables }, options)
      }, [mutate_, wagemosMutationClient])

      const mutateAsync = useMemo(() => {
        if (!wagemosMutationClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutateAsync_>[0], 'client'>,
          options: Parameters<typeof mutateAsync_>[1],
        ) =>
          mutateAsync_({ client: wagemosMutationClient, ...variables }, options)
      }, [mutateAsync_, wagemosMutationClient])

      return { mutate, mutateAsync, ...rest } as const
    },
    useUpdateAccounts: (
      options: Omit<
        UseMutationOptions<
          ExecuteResult,
          Error,
          Omit<WagemosUpdateAccountsMutation, 'client'>
        >,
        'mutationFn'
      >,
    ) => {
      const {
        data: wagemosMutationClient,
        // TODO: figure out what to do with those
        // isLoading: isWagemosMutationClientLoading,
        // isError: isWagemosMutationClientError,
        // error: wagemosMutationClientError,
      } = useModuleMutationClient({
        moduleId: WAGEMOS_MODULE_ID,
        Module: WagemosAppClient,
      })

      const {
        mutate: mutate_,
        mutateAsync: mutateAsync_,
        ...rest
      } = useWagemosUpdateAccountsMutation(options)

      const mutate = useMemo(() => {
        if (!wagemosMutationClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutate_>[0], 'client'>,
          options: Parameters<typeof mutate_>[1],
        ) => mutate_({ client: wagemosMutationClient, ...variables }, options)
      }, [mutate_, wagemosMutationClient])

      const mutateAsync = useMemo(() => {
        if (!wagemosMutationClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutateAsync_>[0], 'client'>,
          options: Parameters<typeof mutateAsync_>[1],
        ) =>
          mutateAsync_({ client: wagemosMutationClient, ...variables }, options)
      }, [mutateAsync_, wagemosMutationClient])

      return { mutate, mutateAsync, ...rest } as const
    },
    usePlaceBet: (
      options: Omit<
        UseMutationOptions<
          ExecuteResult,
          Error,
          Omit<WagemosPlaceBetMutation, 'client'>
        >,
        'mutationFn'
      >,
    ) => {
      const {
        data: wagemosMutationClient,
        // TODO: figure out what to do with those
        // isLoading: isWagemosMutationClientLoading,
        // isError: isWagemosMutationClientError,
        // error: wagemosMutationClientError,
      } = useModuleMutationClient({
        moduleId: WAGEMOS_MODULE_ID,
        Module: WagemosAppClient,
      })

      const {
        mutate: mutate_,
        mutateAsync: mutateAsync_,
        ...rest
      } = useWagemosPlaceBetMutation(options)

      const mutate = useMemo(() => {
        if (!wagemosMutationClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutate_>[0], 'client'>,
          options: Parameters<typeof mutate_>[1],
        ) => mutate_({ client: wagemosMutationClient, ...variables }, options)
      }, [mutate_, wagemosMutationClient])

      const mutateAsync = useMemo(() => {
        if (!wagemosMutationClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutateAsync_>[0], 'client'>,
          options: Parameters<typeof mutateAsync_>[1],
        ) =>
          mutateAsync_({ client: wagemosMutationClient, ...variables }, options)
      }, [mutateAsync_, wagemosMutationClient])

      return { mutate, mutateAsync, ...rest } as const
    },
    useDistributeWinnings: (
      options: Omit<
        UseMutationOptions<
          ExecuteResult,
          Error,
          Omit<WagemosDistributeWinningsMutation, 'client'>
        >,
        'mutationFn'
      >,
    ) => {
      const {
        data: wagemosMutationClient,
        // TODO: figure out what to do with those
        // isLoading: isWagemosMutationClientLoading,
        // isError: isWagemosMutationClientError,
        // error: wagemosMutationClientError,
      } = useModuleMutationClient({
        moduleId: WAGEMOS_MODULE_ID,
        Module: WagemosAppClient,
      })

      const {
        mutate: mutate_,
        mutateAsync: mutateAsync_,
        ...rest
      } = useWagemosDistributeWinningsMutation(options)

      const mutate = useMemo(() => {
        if (!wagemosMutationClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutate_>[0], 'client'>,
          options: Parameters<typeof mutate_>[1],
        ) => mutate_({ client: wagemosMutationClient, ...variables }, options)
      }, [mutate_, wagemosMutationClient])

      const mutateAsync = useMemo(() => {
        if (!wagemosMutationClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutateAsync_>[0], 'client'>,
          options: Parameters<typeof mutateAsync_>[1],
        ) =>
          mutateAsync_({ client: wagemosMutationClient, ...variables }, options)
      }, [mutateAsync_, wagemosMutationClient])

      return { mutate, mutateAsync, ...rest } as const
    },
    useCloseRound: (
      options: Omit<
        UseMutationOptions<
          ExecuteResult,
          Error,
          Omit<WagemosCloseRoundMutation, 'client'>
        >,
        'mutationFn'
      >,
    ) => {
      const {
        data: wagemosMutationClient,
        // TODO: figure out what to do with those
        // isLoading: isWagemosMutationClientLoading,
        // isError: isWagemosMutationClientError,
        // error: wagemosMutationClientError,
      } = useModuleMutationClient({
        moduleId: WAGEMOS_MODULE_ID,
        Module: WagemosAppClient,
      })

      const {
        mutate: mutate_,
        mutateAsync: mutateAsync_,
        ...rest
      } = useWagemosCloseRoundMutation(options)

      const mutate = useMemo(() => {
        if (!wagemosMutationClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutate_>[0], 'client'>,
          options: Parameters<typeof mutate_>[1],
        ) => mutate_({ client: wagemosMutationClient, ...variables }, options)
      }, [mutate_, wagemosMutationClient])

      const mutateAsync = useMemo(() => {
        if (!wagemosMutationClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutateAsync_>[0], 'client'>,
          options: Parameters<typeof mutateAsync_>[1],
        ) =>
          mutateAsync_({ client: wagemosMutationClient, ...variables }, options)
      }, [mutateAsync_, wagemosMutationClient])

      return { mutate, mutateAsync, ...rest } as const
    },
    useUpdateConfig: (
      options: Omit<
        UseMutationOptions<
          ExecuteResult,
          Error,
          Omit<WagemosUpdateConfigMutation, 'client'>
        >,
        'mutationFn'
      >,
    ) => {
      const {
        data: wagemosMutationClient,
        // TODO: figure out what to do with those
        // isLoading: isWagemosMutationClientLoading,
        // isError: isWagemosMutationClientError,
        // error: wagemosMutationClientError,
      } = useModuleMutationClient({
        moduleId: WAGEMOS_MODULE_ID,
        Module: WagemosAppClient,
      })

      const {
        mutate: mutate_,
        mutateAsync: mutateAsync_,
        ...rest
      } = useWagemosUpdateConfigMutation(options)

      const mutate = useMemo(() => {
        if (!wagemosMutationClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutate_>[0], 'client'>,
          options: Parameters<typeof mutate_>[1],
        ) => mutate_({ client: wagemosMutationClient, ...variables }, options)
      }, [mutate_, wagemosMutationClient])

      const mutateAsync = useMemo(() => {
        if (!wagemosMutationClient) return undefined

        return (
          variables: Omit<Parameters<typeof mutateAsync_>[0], 'client'>,
          options: Parameters<typeof mutateAsync_>[1],
        ) =>
          mutateAsync_({ client: wagemosMutationClient, ...variables }, options)
      }, [mutateAsync_, wagemosMutationClient])

      return { mutate, mutateAsync, ...rest } as const
    },
  },
} satisfies Module
