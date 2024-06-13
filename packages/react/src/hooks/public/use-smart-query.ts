import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { QueryFunction } from '@tanstack/react-query'
import React from 'react'
import {
  UseQueryParameters,
  UseQueryReturnType,
  useQuery,
} from '../../types/queries'
import { useCosmWasmClient } from './use-cosm-wasm-client'

type QueryFnData = Record<string, unknown>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'smartQuery',
  CosmWasmClient | undefined,
  string,
  Record<string, unknown>,
]
type QueryResult<TData = QueryData> = UseQueryReturnType<TData, QueryError>

type QueryOptions<TData = QueryData> = UseQueryParameters<
  QueryFnData,
  QueryError,
  TData,
  QueryKey
>

export type UseSmartQueryParameters<TData = QueryData> = {
  chainName?: string | undefined
  query?: QueryOptions<TData>
  address: string
  queryMsg: Record<string, unknown>
}

export function useSmartQuery<TData = QueryData>({
  chainName,
  query = {},
  address,
  queryMsg,
}: UseSmartQueryParameters<TData>): QueryResult<TData> {
  const { data: cosmWasmClient, isSuccess } = useCosmWasmClient({ chainName })

  const queryKey = React.useMemo(
    () => ['smartQuery', cosmWasmClient, address, queryMsg] as const,
    [cosmWasmClient, address, queryMsg],
  )

  const queryFn = React.useCallback<QueryFunction<QueryFnData, QueryKey>>(
    async ({ queryKey: [_, cosmWasmClient] }) => {
      if (!cosmWasmClient) {
        throw new Error('client is not defined')
      }
      return cosmWasmClient.queryContractSmart(address, queryMsg)
    },
    [],
  )

  const enabled = Boolean(isSuccess && (query.enabled ?? true))

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
