import { joinAssetNames } from './join-asset-names'

export function stakingContract(providerName: string, assetNames: string[]) {
  return ['staking', providerName, joinAssetNames(assetNames)].join('/')
}
