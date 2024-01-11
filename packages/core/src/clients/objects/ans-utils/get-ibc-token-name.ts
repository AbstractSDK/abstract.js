import { CHAIN_SEPARATOR } from './separators'
export function getIbcTokenName(chainName: string, asset: string) {
  return `${chainName
    .toLowerCase()
    .replace('testnet', '')}${CHAIN_SEPARATOR}${asset}` as const
}
