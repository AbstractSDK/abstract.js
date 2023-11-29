/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.28.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import { CamelCasedProperties } from 'type-fest'
import {
  Action,
  Addr,
  AssetEntry,
  AssetFilter,
  AssetInfoBaseForAddr,
  AssetInfoBaseForString,
  AssetInfoFilter,
  AssetInfoListResponse,
  AssetListResponse,
  AssetPairingFilter,
  AssetsResponse,
  ChannelEntry,
  ChannelFilter,
  ChannelListResponse,
  ChannelsResponse,
  ConfigResponse,
  ContractEntry,
  ContractFilter,
  ContractListResponse,
  ContractsResponse,
  DexAssetPairing,
  ExecuteMsg,
  Expiration,
  InstantiateMsg,
  MigrateMsg,
  OwnershipForString,
  PoolAddressBaseForAddr,
  PoolAddressBaseForString,
  PoolAddressListResponse,
  PoolMetadata,
  PoolMetadataFilter,
  PoolMetadataListResponse,
  PoolMetadatasResponse,
  PoolReference,
  PoolType,
  PoolsResponse,
  QueryMsg,
  RegisteredDexesResponse,
  Timestamp,
  Uint64,
  UncheckedChannelEntry,
  UncheckedContractEntry,
  UniquePoolId,
} from './AnsHost.types'
export abstract class AnsHostExecuteMsgBuilder {
  static updateContractAddresses = ({
    toAdd,
    toRemove,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        update_contract_addresses: unknown
      }
    >['update_contract_addresses']
  >): ExecuteMsg => {
    return {
      update_contract_addresses: {
        to_add: toAdd,
        to_remove: toRemove,
      } as const,
    }
  }
  static updateAssetAddresses = ({
    toAdd,
    toRemove,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        update_asset_addresses: unknown
      }
    >['update_asset_addresses']
  >): ExecuteMsg => {
    return {
      update_asset_addresses: {
        to_add: toAdd,
        to_remove: toRemove,
      } as const,
    }
  }
  static updateChannels = ({
    toAdd,
    toRemove,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        update_channels: unknown
      }
    >['update_channels']
  >): ExecuteMsg => {
    return {
      update_channels: {
        to_add: toAdd,
        to_remove: toRemove,
      } as const,
    }
  }
  static updateDexes = ({
    toAdd,
    toRemove,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        update_dexes: unknown
      }
    >['update_dexes']
  >): ExecuteMsg => {
    return {
      update_dexes: {
        to_add: toAdd,
        to_remove: toRemove,
      } as const,
    }
  }
  static updatePools = ({
    toAdd,
    toRemove,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        update_pools: unknown
      }
    >['update_pools']
  >): ExecuteMsg => {
    return {
      update_pools: {
        to_add: toAdd,
        to_remove: toRemove,
      } as const,
    }
  }
  static updateOwnership = (action: Action): ExecuteMsg => {
    return {
      update_ownership: action,
    }
  }
}
export abstract class AnsHostQueryMsgBuilder {
  static config = (): QueryMsg => {
    return {
      config: {} as const,
    }
  }
  static assets = ({
    names,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        assets: unknown
      }
    >['assets']
  >): QueryMsg => {
    return {
      assets: {
        names,
      } as const,
    }
  }
  static assetList = ({
    filter,
    limit,
    startAfter,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        asset_list: unknown
      }
    >['asset_list']
  >): QueryMsg => {
    return {
      asset_list: {
        filter,
        limit,
        start_after: startAfter,
      } as const,
    }
  }
  static assetInfos = ({
    infos,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        asset_infos: unknown
      }
    >['asset_infos']
  >): QueryMsg => {
    return {
      asset_infos: {
        infos,
      } as const,
    }
  }
  static assetInfoList = ({
    filter,
    limit,
    startAfter,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        asset_info_list: unknown
      }
    >['asset_info_list']
  >): QueryMsg => {
    return {
      asset_info_list: {
        filter,
        limit,
        start_after: startAfter,
      } as const,
    }
  }
  static contracts = ({
    entries,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        contracts: unknown
      }
    >['contracts']
  >): QueryMsg => {
    return {
      contracts: {
        entries,
      } as const,
    }
  }
  static contractList = ({
    filter,
    limit,
    startAfter,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        contract_list: unknown
      }
    >['contract_list']
  >): QueryMsg => {
    return {
      contract_list: {
        filter,
        limit,
        start_after: startAfter,
      } as const,
    }
  }
  static channels = ({
    entries,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        channels: unknown
      }
    >['channels']
  >): QueryMsg => {
    return {
      channels: {
        entries,
      } as const,
    }
  }
  static channelList = ({
    filter,
    limit,
    startAfter,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        channel_list: unknown
      }
    >['channel_list']
  >): QueryMsg => {
    return {
      channel_list: {
        filter,
        limit,
        start_after: startAfter,
      } as const,
    }
  }
  static registeredDexes = (): QueryMsg => {
    return {
      registered_dexes: {} as const,
    }
  }
  static pools = ({
    pairings,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        pools: unknown
      }
    >['pools']
  >): QueryMsg => {
    return {
      pools: {
        pairings,
      } as const,
    }
  }
  static poolList = ({
    filter,
    limit,
    startAfter,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        pool_list: unknown
      }
    >['pool_list']
  >): QueryMsg => {
    return {
      pool_list: {
        filter,
        limit,
        start_after: startAfter,
      } as const,
    }
  }
  static poolMetadatas = ({
    ids,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        pool_metadatas: unknown
      }
    >['pool_metadatas']
  >): QueryMsg => {
    return {
      pool_metadatas: {
        ids,
      } as const,
    }
  }
  static poolMetadataList = ({
    filter,
    limit,
    startAfter,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        pool_metadata_list: unknown
      }
    >['pool_metadata_list']
  >): QueryMsg => {
    return {
      pool_metadata_list: {
        filter,
        limit,
        start_after: startAfter,
      } as const,
    }
  }
  static ownership = (): QueryMsg => {
    return {
      ownership: {} as const,
    }
  }
}