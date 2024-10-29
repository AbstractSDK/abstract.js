import { chainNameToId } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import type { UseQueryOptions } from '@tanstack/react-query/src/types'

export function getCosmWasmClientQueryKey(chainName: string) {
  return ['cosmWasmClient', chainName]
}

/**
 * Get the proxy URL for the given chain id. TODO: remove...
 * @deprecated
 * @param chainId
 */
const chainIdToRpc = (chainId: string) => {
  return `https://rpc-proxy.abstract-os.workers.dev/${chainId}/rpc`
}

async function getCosmWasmClient(chainName: string) {
  const chainId = chainNameToId(chainName)

  const endpoint = chainIdToRpc(chainName)

  const client = await CosmWasmClient.connect(endpoint).catch((e) => {
    console.error('Failed to connect to chain', chainName, e)
    throw e
  })

  const clientChainId = await client.getChainId()
  console.debug('Retrieved chain ID', clientChainId, chainName)
  if (chainId !== clientChainId) {
    throw new Error(
      `Expected client for ${chainId}, got ${clientChainId} instead`,
    )
  }
  return client
}

/**
 * Query options for the CosmWasmClient.
 * @param chainName
 */
export const cosmWasmClientQueryOptions = (chainName: string) =>
  ({
    queryKey: getCosmWasmClientQueryKey(chainName),
    queryFn: async () => {
      return await getCosmWasmClient(chainName)
    },
  }) satisfies UseQueryOptions<CosmWasmClient, Error>
