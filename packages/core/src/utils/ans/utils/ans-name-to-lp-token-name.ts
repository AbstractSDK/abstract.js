import { joinAssetNames } from './join-asset-names'

export function ansNameToLpTokenName(
  dexName: string,
  assetNames: string[],
): string {
  return `${dexName.toLowerCase()}/${joinAssetNames(assetNames)}`
}
