import { CHAIN_SEPARATOR } from './constants'
import { AnsId } from './types'
export function ibcTokenToAnsId(chainName: string, asset: string) {
  return `${chainName
    .toLowerCase()
    .replace('testnet', '')}${CHAIN_SEPARATOR}${asset}` as const satisfies AnsId
}
