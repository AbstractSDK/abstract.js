import {
  type assets as assetsType,
  type chains as chainsType,
} from 'chain-registry'

export type Chain = typeof chainsType[number]
export type AssetList = typeof assetsType[number]
export type Asset = AssetList['assets'][number]
