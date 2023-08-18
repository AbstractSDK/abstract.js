import { type CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import {
  type CombinedQueries,
  QueryOptions,
  type ReactQueryOptions,
  RefetchOptions,
} from 'react-query-helpers'
import { rawQueryKeys, useRawQueries, useRawQuery } from '../../cosmos'
import { rawQuery } from '@abstract-money/cosmwasm'

const CONTRACT_INFO_KEY = 'contract_info'

export interface Cw2Response {
  contract: string
  version: string
}

// or null because raw could return null

interface Cw2VersionQuery<TData> extends ReactQueryOptions<Cw2Response, TData> {
  args: {
    contract: string
  }
}

export const cw2VersionQueryKeys = {
  contract: (contract: string) => rawQueryKeys.contract(contract, CONTRACT_INFO_KEY),
}

/**
 * Hook to retrieve the contract identifier and version of a given contract.
 * @param client
 * @param args
 * @param options
 * @see https://github.com/CosmWasm/cw-plus/tree/main/packages/cw2
 */
export const useCw2VersionQuery = <TData = Cw2Response>({
  args,
  options,
}: Cw2VersionQuery<TData>) => {
  return useRawQuery<Cw2Response, TData>({
    args: {
      address: args.contract,
      key: CONTRACT_INFO_KEY,
    },
    options: {
      ...options,
      ...RefetchOptions.NEVER,
      ...QueryOptions.DISABLE_WITHOUT(options?.enabled),
    },
  })
}

/**
 * Function to perform a raw cw2 version query.
 * @param readOnlyClient
 * @param contract
 */
export const cw2VersionQuery = async ({
  readOnlyClient,
  address,
}: {
  readOnlyClient: CosmWasmClient | undefined
  address: string
}): Promise<Cw2Response> =>
  rawQuery<Cw2Response>({
    client: readOnlyClient,
    address: address,
    key: CONTRACT_INFO_KEY,
  })

interface Cw2VersionQueries {
  addresses: string[]
  options?: {
    enabled: boolean
  }
}

export const useCw2VersionQueries = ({
  addresses,
  options,
}: Cw2VersionQueries): CombinedQueries<Cw2Response, string> =>
  useRawQueries({
    addresses,
    key: CONTRACT_INFO_KEY,
    options,
  })
