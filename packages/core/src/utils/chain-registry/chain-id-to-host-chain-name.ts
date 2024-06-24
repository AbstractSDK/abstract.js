const CHAIN_ID_SEPARATOR = '-'

export const chainIdToHostChainName = (chainId: string) => {
  return chainId.split(CHAIN_ID_SEPARATOR)[0]
}
