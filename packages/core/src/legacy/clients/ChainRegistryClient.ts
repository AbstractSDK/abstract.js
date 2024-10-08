import { assets as assetsUtils, chains as chainsUtils } from '../../utils'

export type Chain = typeof chainsUtils[number]
type AssetList = typeof assetsUtils[number]
type Asset = AssetList['assets'][number]

import _ from 'lodash'
import { AnsName } from './objects/AnsName'

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? DeepPartial<U>[]
    : T[P] extends ReadonlyArray<infer U>
    ? readonly DeepPartial<U>[]
    : DeepPartial<T[P]>
}

export class ChainRegistryClient {
  _chains: readonly Chain[]
  _assetLists: readonly AssetList[]

  constructor(chains: Chain[], assetLists: AssetList[]) {
    this._chains = chains
    this._assetLists = assetLists
  }

  get chains(): readonly Chain[] {
    return this._chains
  }

  get assetLists(): readonly AssetList[] {
    return this._assetLists
  }

  public chainIdToName(chainId: string): string {
    if (chainId === 'pisco-1') return 'terra2testnet'
    const chainName = this.findChainBy({ chain_id: chainId }).chain_name
    if (!chainName) {
      throw new Error(`Chain not found by chainId: ${chainId}`)
    }
    return chainName
  }

  public findChainBy<K extends keyof Chain>(
    filters: { [P in K]?: Chain[P] },
  ): Chain {
    const filteredChains = this.findChainsBy(filters)
    if (filteredChains.length > 1) {
      // console.log(filteredChains)
      throw new Error(
        `${filteredChains.length} chains found by filters: ${JSON.stringify(
          filters,
        )}`,
      )
    }

    // TODO: Remove this hack
    return filteredChains[0] as Chain
  }

  /**
   * Find chains by filters.
   * @param filters
   */
  public findChainsBy<K extends keyof Chain>(
    filters: {
      [P in K]?: Chain[P]
    },
  ): readonly Chain[] {
    let filteredChains = this.chains

    // Apply each filter
    for (const key in filters) {
      const value = filters[key as K]
      filteredChains = filteredChains.filter((chain) =>
        _.isEqual(chain[key as K], value),
      )
    }

    if (!filteredChains.length) {
      throw new Error(`Chain not found by filters: ${JSON.stringify(filters)}`)
    }

    return filteredChains
  }

  public findAssetsBy<K extends keyof Asset>(
    filters: {
      [P in K]?: DeepPartial<Asset[P]>
    },
    options: {
      chainNameFilter?: string
      throwIfNotFound?: boolean
    } = {
      throwIfNotFound: true,
    },
  ): Asset[] {
    let filteredAssets = this.assetLists
      .filter(({ chain_name }) =>
        options.chainNameFilter ? options.chainNameFilter === chain_name : true,
      )
      .flatMap(({ assets }) => assets)

    // Apply each filter
    for (const key in filters) {
      const value = filters[key as K]
      if (Array.isArray(value)) {
        // Array value, assume nested objects
        filteredAssets = filteredAssets.filter(
          (asset) =>
            Array.isArray(asset[key as K]) &&
            (asset[key as K] as []).some((item: any) =>
              // @ts-ignore
              Object.keys(value[0]).every((k) => item[k] === value[0][k]),
            ),
        )
      } else {
        // Regular value
        filteredAssets = filteredAssets.filter((asset) =>
          _.isEqual(asset[key as K], value),
        )
      }
    }

    if (!filteredAssets.length && options.throwIfNotFound) {
      throw new Error(`Asset not found by filters: ${JSON.stringify(filters)}`)
    }

    return filteredAssets
  }

  public findAssetBy<K extends keyof Asset>(
    filters: {
      [P in K]?: DeepPartial<Asset[P]>
    },
    options: { chainNameFilter?: string } = {},
  ): Asset {
    const filteredAssets = this.findAssetsBy(filters, options)
    if (filteredAssets.length > 1) {
      throw new Error(
        `${filteredAssets.length} assets found by filters: ${JSON.stringify(
          filters,
        )}`,
      )
    }

    // TODO: Remove this hack
    return filteredAssets[0] as Asset
  }

  private static findLogoUri(asset: Asset): string | null {
    return (
      asset.logo_URIs?.png ||
      asset.logo_URIs?.svg ||
      asset.logo_URIs?.jpeg ||
      null
    )
  }

  public externalChainDenomToAnsName(searchDenom: string): string {
    let found: { chain: string; symbol: string } | undefined
    for (const list of this.assetLists) {
      const { chain_name, assets } = list
      const foundAsset = assets.find((unit) =>
        unit.denom_units.some((unit) => unit.denom === searchDenom),
      )
      if (foundAsset) {
        found = { chain: chain_name, symbol: foundAsset.symbol.toLowerCase() }
        break
      }
    }
    if (!found) {
      throw new Error(`Asset not found: ${searchDenom}`)
    }
    return AnsName.chainNameIbcAsset(found.chain, found.symbol)
  }

  public findSymbol(chainId: string, denom: string): string {
    const chainName = this.chainIdToName(chainId)
    const asset = this.findAssetBy(
      {
        denom_units: [{ denom }],
      },
      {
        chainNameFilter: chainName,
      },
    )

    if (!asset) {
      throw new Error(`Asset not found by denom: ${denom}`)
    }
    return asset.symbol.toLowerCase()
  }

  public assetBySymbol(assetSymbol: string): Asset | undefined {
    return this.assetLists
      .flatMap(({ assets }) => assets)
      .find(
        ({ symbol, denom_units }) =>
          denom_units.find(
            ({ aliases, denom }) =>
              aliases?.includes(assetSymbol) || denom === assetSymbol,
          ) || symbol.toLowerCase() === assetSymbol.toLowerCase(),
      )
  }
}
