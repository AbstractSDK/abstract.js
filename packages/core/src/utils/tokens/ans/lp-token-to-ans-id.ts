import { joinAssetNames } from './join-asset-names'
import { AnsId } from './types'

export function lpTokenToAnsId(dexName: string, assetNames: string[]): string {
  return `${dexName.toLowerCase()}/${joinAssetNames(
    assetNames,
  )}` satisfies AnsId
}
