import type { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { type UseQueryResult, useQuery } from '@tanstack/react-query'

export function useQuerySmart<TData, TError>(args?: {
  client: CosmWasmClient | undefined
  address: string | undefined
  queryMsg: Record<string, unknown> | undefined
}): UseQueryResult<TData, TError> {
  const query: UseQueryResult<TData, TError> = useQuery(
    ['useQuerySmart', args?.address, args?.queryMsg, args?.client],
    ({ queryKey: [, _address] }) => {
      if (!args?.address || !args.queryMsg)
        throw new Error('address or queryMsg undefined')
      return getQuerySmart(args.address, args.queryMsg, args.client)
    },
    {
      enabled:
        Boolean(args?.address) &&
        Boolean(args?.queryMsg) &&
        Boolean(args?.client),
    },
  )

  return query
}

async function getQuerySmart<TData>(
  address: string,
  queryMsg: Record<string, unknown>,
  client?: CosmWasmClient,
): Promise<TData> {
  if (!client) {
    throw new Error('CosmWasm client is not ready')
  }

  const result = (await client.queryContractSmart(address, queryMsg)) as TData
  return result
}
