/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.19.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

export interface InstantiateMsg {}
export type ExecuteMsg =
  | {
      update_contract_addresses: {
        to_add: [UncheckedContractEntry, string][]
        to_remove: UncheckedContractEntry[]
      }
    }
  | {
      update_asset_addresses: {
        to_add: [string, AssetInfoBaseForString][]
        to_remove: string[]
      }
    }
  | {
      update_channels: {
        to_add: [UncheckedChannelEntry, string][]
        to_remove: UncheckedChannelEntry[]
      }
    }
  | {
      update_dexes: {
        to_add: string[]
        to_remove: string[]
      }
    }
  | {
      update_pools: {
        to_add: [PoolIdBaseForString, PoolMetadata][]
        to_remove: UniquePoolId[]
      }
    }
  | {
      set_admin: {
        admin: string
      }
    }
export type AssetInfoBaseForString =
  | {
      native: string
    }
  | {
      cw20: string
    }
  | {
      cw1155: [string, string]
    }
export type PoolIdBaseForString =
  | {
      contract: string
    }
  | {
      id: number
    }
export type PoolType = 'ConstantProduct' | 'Stable' | 'Weighted' | 'LiquidityBootstrap'
export type UniquePoolId = number
export interface UncheckedContractEntry {
  contract: string
  protocol: string
  [k: string]: unknown
}
export interface UncheckedChannelEntry {
  connected_chain: string
  protocol: string
  [k: string]: unknown
}
export interface PoolMetadata {
  assets: string[]
  dex: string
  pool_type: PoolType
  [k: string]: unknown
}
export type QueryMsg =
  | {
      assets: {
        names: string[]
      }
    }
  | {
      asset_list: {
        page_size?: number | null
        page_token?: string | null
      }
    }
  | {
      contracts: {
        names: ContractEntry[]
      }
    }
  | {
      contract_list: {
        page_size?: number | null
        page_token?: ContractEntry | null
      }
    }
  | {
      channels: {
        names: ChannelEntry[]
      }
    }
  | {
      channel_list: {
        page_size?: number | null
        page_token?: ChannelEntry | null
      }
    }
  | {
      registered_dexes: {}
    }
  | {
      pools: {
        keys: DexAssetPairing[]
      }
    }
  | {
      pool_list: {
        filter?: AssetPairingFilter | null
        page_size?: number | null
        page_token?: DexAssetPairing | null
      }
    }
  | {
      pool_metadatas: {
        keys: UniquePoolId[]
      }
    }
  | {
      pool_metadata_list: {
        filter?: PoolMetadataFilter | null
        page_size?: number | null
        page_token?: UniquePoolId | null
      }
    }
export type DexAssetPairing = [string, string, string]
export interface ContractEntry {
  contract: string
  protocol: string
  [k: string]: unknown
}
export interface ChannelEntry {
  connected_chain: string
  protocol: string
  [k: string]: unknown
}
export interface AssetPairingFilter {
  asset_pair?: [string, string] | null
  dex?: string | null
}
export interface PoolMetadataFilter {
  pool_type?: PoolType | null
}
export interface MigrateMsg {}
export type AssetEntry = string
export type AssetInfoBaseForAddr =
  | {
      native: string
    }
  | {
      cw20: Addr
    }
  | {
      cw1155: [Addr, string]
    }
export type Addr = string
export interface AssetListResponse {
  assets: [AssetEntry, AssetInfoBaseForAddr][]
}
export interface AssetsResponse {
  assets: [AssetEntry, AssetInfoBaseForAddr][]
}
export interface ChannelListResponse {
  channels: [ChannelEntry, string][]
}
export interface ChannelsResponse {
  channels: [ChannelEntry, string][]
}
export interface ContractListResponse {
  contracts: [ContractEntry, string][]
}
export interface ContractsResponse {
  contracts: [ContractEntry, string][]
}
export type PoolIdBaseForAddr =
  | {
      contract: Addr
    }
  | {
      id: number
    }
export interface PoolIdListResponse {
  pools: [DexAssetPairing, PoolReference[]][]
}
export interface PoolReference {
  id: UniquePoolId
  pool_id: PoolIdBaseForAddr
}
export interface PoolMetadataListResponse {
  metadatas: [UniquePoolId, PoolMetadata][]
}
export interface PoolMetadatasResponse {
  metadatas: [UniquePoolId, PoolMetadata][]
}
export interface PoolsResponse {
  pools: [DexAssetPairing, PoolReference[]][]
}
export interface RegisteredDexesResponse {
  dexes: string[]
}
