export function joinAssetNames(assetNames: string[]) {
  return assetNames
    .map((s) => s.toLowerCase())
    .sort()
    .join(',')
}
