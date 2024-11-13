import { chainNameToId } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import type { UseQueryOptions } from '@tanstack/react-query'

export function getCosmWasmClientQueryKey(chainName: string) {
  return ['cosmWasmClient', chainName]
}

/**
 * Get a polkachu URL for the given chain id. TODO: replace with something from the Abstract API.
 * @deprecated
 * @param chainName
 */
const chainNameToRpc = (chainName: string) => {
  const hyphenatedChainName = chainName.replace('testnet', '-testnet')
  return `https://${hyphenatedChainName}-rpc.polkachu.com/`
}

async function getCosmWasmClient(chainName: string) {
  const endpoint = chainNameToRpc(chainName)

  const client = await CosmWasmClient.connect(endpoint).catch((e) => {
    console.error('Failed to connect to chain', chainName, e)
    throw e
  })

  const chainId = chainNameToId(chainName)

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
