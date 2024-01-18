export abstract class AnsName {
  static chainNameIbcAsset(chainName: string, asset: string): string {
    return `${chainName.toLowerCase().replace('testnet', '')}>${asset}`
  }

  /**
   * `staking/wyndex/juno>juno,juno>wynd`
   */
  static stakingContract(providerName: string, assetNames: string[]) {
    return ['staking', providerName, this.joinAssetNames(assetNames)].join('/')
  }

  /**
   * `wyndex/juno>juno,juno>wynd`
   */
  static lpToken(dexName: string, assetNames: string[]): string {
    return `${dexName.toLowerCase()}/${this.joinAssetNames(assetNames)}`
  }

  /** asset names sorted by name and lowercased */
  static joinAssetNames(assetNames: string[]) {
    return assetNames
      .map((s) => s.toLowerCase())
      .sort()
      .join(',')
  }
}
