import { chainIdToHostChainName, chains } from '@abstract-money/core'

export function hostChainNameToName(hostChainName: string) {
  const chainName = chains.find(
    ({ chain_name, chain_id }) =>
      chain_name === hostChainName ||
      chainIdToHostChainName(chain_id) === hostChainName,
  )?.chain_name
  if (!chainName) {
    throw new Error(`Chain not found by hostChain: ${hostChainName}`)
  }
  return chainName
}
