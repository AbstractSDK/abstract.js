import { chains } from './chains'

export function chainIdToName(chainId: string) {
  if (chainId === 'pisco-1') return 'terra2testnet'
  const chainName = chains.find(
    ({ chain_id }) => chain_id === chainId,
  )?.chain_name
  if (!chainName) {
    throw new Error(`Chain not found by chainId: ${chainId}`)
  }
  return chainName
}
