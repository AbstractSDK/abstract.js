'use client'
import { useModuleClientQuery } from '@abstract-money/react/utils'

import { WagemosAppQueryClient } from './cosmwasm-codegen/Wagemos.client'
import {
  WagemosBetsQuery,
  WagemosListRoundsQuery,
  useWagemosBetsQuery,
  useWagemosListRoundsQuery,
} from './cosmwasm-codegen/Wagemos.react-query'
import { BetsResponse, RoundsResponse } from './cosmwasm-codegen/Wagemos.types'

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
        isSuccess: isWagemosQueryClientSuccess,
        isError: isWagemosQueryClientError,
      } = useModuleClientQuery(
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
        isSuccess: isWagemosListRoundsQuerySuccess,
      } = useWagemosListRoundsQuery({
        client: wagemosQueryClient,
        args,
        options,
      })
      return {
        data,
        isLoading:
          isWagemosListRoundsQueryLoading || isWagemosQueryClientLoading,
        isError: isWagemosListRoundsQueryError || isWagemosQueryClientError,
        isSuccess:
          isWagemosListRoundsQuerySuccess && isWagemosQueryClientSuccess,
      }
    },
    useBets: ({
      args,
      options,
    }: Omit<WagemosBetsQuery<BetsResponse>, 'client'>) => {
      const {
        data: wagemosQueryClient,
        isLoading: isWagemosQueryClientLoading,
        isSuccess: isWagemosQueryClientSuccess,
        isError: isWagemosQueryClientError,
      } = useModuleClientQuery(
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
        isSuccess: isWagemosBetsQuerySuccess,
      } = useWagemosBetsQuery({
        client: wagemosQueryClient,
        args,
        options,
      })
      return {
        data,
        isLoading: isWagemosBetsQueryLoading || isWagemosQueryClientLoading,
        isError: isWagemosBetsQueryError || isWagemosQueryClientError,
        isSuccess: isWagemosBetsQuerySuccess && isWagemosQueryClientSuccess,
      }
    },
  },
  mutations: {},
} satisfies Module
