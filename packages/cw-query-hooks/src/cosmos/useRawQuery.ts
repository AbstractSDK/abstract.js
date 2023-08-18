import { defaultContext, useQueries, useQuery } from '@tanstack/react-query'
import { rawQuery } from '@abstract-money/cosmwasm'

import {
  type CombinedQueries,
  QueryOptions,
  type ReactQueryOptions,
  useCombinedQueries,
} from 'react-query-helpers'
import { useRpcClients } from '../contexts'

type RawQueryParams = {
  address: string
  key: string
}

interface RawQuery<TResponse, TData> extends ReactQueryOptions<TResponse, TData> {
  args: RawQueryParams
}

/**
 * Static query keys for raw queries.
 */
export const rawQueryKeys = {
  contract: (address: string, key: string) =>
    ['queryContractRaw', JSON.stringify({ address, key })] as const,
}

/**
 * Execute a raw query on a cosmwasm contract.
 * @param client
 * @param options
 * @param args key can be a string! This will encode it
 */
export const useRawQuery = <TResponse = unknown, TData = TResponse>({
  options,
  args,
}: RawQuery<TResponse, TData>) => {
  const { readOnlyClient } = useRpcClients()

  const { address, key } = args
  return useQuery<TResponse, Error, TData>(
    rawQueryKeys.contract(address, key),
    (): Promise<TResponse> => rawQuery({ client: readOnlyClient, address, key }),
    {
      context: defaultContext,
      ...options,
      ...QueryOptions.DISABLE_WITHOUT(readOnlyClient, options?.enabled),
    }
  )
}

interface RawQueries {
  addresses: string[]
  key: string
  options?: {
    enabled: boolean
  }
}

export const useRawQueries = <TResponse = unknown>({
  addresses,
  key,
  options,
}: RawQueries): CombinedQueries<TResponse, string> => {
  const { readOnlyClient } = useRpcClients()

  const queries = useQueries({
    queries: addresses.map((address) => ({
      queryKey: rawQueryKeys.contract(address, key),
      queryFn: (): Promise<TResponse> => rawQuery({ client: readOnlyClient, address, key }),
      ...QueryOptions.DISABLE_WITHOUT(readOnlyClient, options?.enabled),
      retry: false,
    })),
  })

  return useCombinedQueries({ keys: addresses, queries })
}
