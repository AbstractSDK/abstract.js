import { joinAssetNames } from './utils'

export function lpToken(dexName: string, assetNames: string[]): string {
  return `${dexName.toLowerCase()}/${joinAssetNames(assetNames)}`
}
