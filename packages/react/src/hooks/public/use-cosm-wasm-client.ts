import { PublicClient } from '@abstract-money/core'
import { QueryFunction } from '@tanstack/react-query'
import React from 'react'
import { useConfig } from '../../contexts'
import {
  UseQueryParameters,
  UseQueryReturnType,
  useQuery,
} from '../../types/queries'
import { MaybeChainName } from './index'

type QueryFnData = Awaited<ReturnType<PublicClient['getCosmWasmClient']>>

type QueryError = unknown
type QueryData = QueryFnData
type QueryKey = readonly [
  'cosmWasmClient',
  MaybeChainName,
  PublicClient | undefined,
]
type QueryResult = UseQueryReturnType<QueryData, QueryError>

type QueryOptions = UseQueryParameters<
  QueryFnData,
  QueryError,
  QueryData,
  QueryKey
>

export type UseCosmWasmClientParameters = {
  chainName?: string | undefined
  query?: QueryOptions
}

export function useCosmWasmClient({
  chainName,
  query = {},
}: UseCosmWasmClientParameters): QueryResult {
  const config = useConfig()
  const publicClient = config.usePublicClient({ chainName })

  const queryKey = React.useMemo(
    () => ['cosmWasmClient', chainName, publicClient] as const,
    [chainName, publicClient],
  )

  const queryFn = React.useCallback<QueryFunction<QueryFnData, QueryKey>>(
    ({ queryKey: [_, chainName, publicClient] }) => {
      if (!publicClient)
        throw new Error(`client is not defined for ${chainName}`)

      return publicClient.getCosmWasmClient()
    },
    [],
  )

  const enabled = Boolean(publicClient && (query.enabled ?? true))

  return useQuery({ queryKey, queryFn, ...query, enabled })
}
