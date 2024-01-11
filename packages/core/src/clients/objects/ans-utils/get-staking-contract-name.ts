import { joinAssetNames } from './utils'

export function stakingContract(providerName: string, assetNames: string[]) {
  return ['staking', providerName, joinAssetNames(assetNames)].join('/')
}
