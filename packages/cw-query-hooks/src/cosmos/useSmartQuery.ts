import { defaultContext, useQuery } from '@tanstack/react-query'
import { JsonObject } from '@cosmjs/cosmwasm-stargate'
import { QueryOptions, ReactQueryOptions } from 'react-query-helpers'
import { useRpcClients } from '../contexts'

interface SmartQuery<TData> extends ReactQueryOptions<Record<string, unknown>, TData> {
  args: {
    contract: string
    queryMsg: Record<string, unknown> | string
  }
}
// const queryContractKeys = {
//   queryContract: (contract: string, queryMsg: Record<string, unknown> | string) =>
//     [{ query: 'smart', contract, queryMsg }] as const,
// }
/**
 * Execute a smart query on a cosmwasm contract.
 * @param options
 * @param args key can be a string! This will encode it
 */
export const useSmartQuery = <TData = Record<string, unknown>>({
  options,
  args,
}: SmartQuery<TData>) => {
  const { readOnlyClient } = useRpcClients()

  const { contract, queryMsg } = args
  return useQuery(
    ['queryContractSmart', JSON.stringify(args)],
    (): Promise<JsonObject> => {
      if (!readOnlyClient) return Promise.reject(new Error('No readonly client'))
      return readOnlyClient
        .queryContractSmart(
          contract,
          typeof queryMsg === 'string' ? JSON.parse(queryMsg) : queryMsg
        )
        .then((response) => response as Record<string, unknown>)
    },
    {
      context: defaultContext,
      ...options,
      ...QueryOptions.DISABLE_WITHOUT(readOnlyClient, options?.enabled),
    }
  )
}
