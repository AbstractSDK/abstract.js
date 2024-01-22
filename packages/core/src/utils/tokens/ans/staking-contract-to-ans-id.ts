import { joinAssetNames } from './join-asset-names'
import { AnsId } from './types'

export function stakingContractToAnsId(
  providerName: string,
  assetNames: string[],
) {
  return ['staking', providerName, joinAssetNames(assetNames)].join(
    '/',
  ) satisfies AnsId
}
