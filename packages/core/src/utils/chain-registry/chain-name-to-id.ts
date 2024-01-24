import { chains } from './chains'

export function chainNameToId(chainName: string) {
  if (chainName === 'terra2testnet') return 'pisco-1'
  const chainId = chains.find(
    ({ chain_name }) => chain_name === chainName,
  )?.chain_id
  if (!chainId) {
    throw new Error(`Chain not found by chainName: ${chainName}`)
  }
  return chainId
}
