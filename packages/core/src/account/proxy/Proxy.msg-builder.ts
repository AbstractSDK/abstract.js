/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.28.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import { CamelCasedProperties } from 'type-fest'
import {
  AccountValue,
  Addr,
  AssetBaseForAddr,
  AssetConfigResponse,
  AssetEntry,
  AssetInfoBaseForAddr,
  AssetsConfigResponse,
  AssetsInfoResponse,
  BankMsg,
  BankQuery,
  BaseAssetResponse,
  Binary,
  CallbackInfo,
  Coin,
  ConfigResponse,
  CosmosMsgForEmpty,
  Decimal,
  DexAssetPairing,
  DistributionMsg,
  Empty,
  ExecuteMsg,
  ExecuteMsg1,
  GovMsg,
  HoldingAmountResponse,
  HostAction,
  IbcMsg,
  IbcQuery,
  IbcTimeout,
  IbcTimeoutBlock,
  InstantiateMsg,
  InternalAction,
  MigrateMsg,
  OracleAsset,
  PoolAddressBaseForAddr,
  PriceSource,
  QueryMsg,
  QueryRequestForEmpty,
  StakingMsg,
  StakingQuery,
  Timestamp,
  TokenValueResponse,
  Uint64,
  Uint128,
  UncheckedPriceSource,
  VoteOption,
  WasmMsg,
  WasmQuery,
} from './Proxy.types'
export abstract class ProxyExecuteMsgBuilder {
  static setAdmin = ({
    admin,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        set_admin: unknown
      }
    >['set_admin']
  >): ExecuteMsg => {
    return {
      set_admin: {
        admin,
      } as const,
    }
  }
  static moduleAction = ({
    msgs,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        module_action: unknown
      }
    >['module_action']
  >): ExecuteMsg => {
    return {
      module_action: {
        msgs,
      } as const,
    }
  }
  static moduleActionWithData = ({
    msg,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        module_action_with_data: unknown
      }
    >['module_action_with_data']
  >): ExecuteMsg => {
    return {
      module_action_with_data: {
        msg,
      } as const,
    }
  }
  static ibcAction = ({
    msgs,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        ibc_action: unknown
      }
    >['ibc_action']
  >): ExecuteMsg => {
    return {
      ibc_action: {
        msgs,
      } as const,
    }
  }
  static addModule = ({
    module,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        add_module: unknown
      }
    >['add_module']
  >): ExecuteMsg => {
    return {
      add_module: {
        module,
      } as const,
    }
  }
  static removeModule = ({
    module,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        remove_module: unknown
      }
    >['remove_module']
  >): ExecuteMsg => {
    return {
      remove_module: {
        module,
      } as const,
    }
  }
  static updateAssets = ({
    toAdd,
    toRemove,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        update_assets: unknown
      }
    >['update_assets']
  >): ExecuteMsg => {
    return {
      update_assets: {
        to_add: toAdd,
        to_remove: toRemove,
      } as const,
    }
  }
}
export abstract class ProxyQueryMsgBuilder {
  static config = (): QueryMsg => {
    return {
      config: {} as const,
    }
  }
  static totalValue = (): QueryMsg => {
    return {
      total_value: {} as const,
    }
  }
  static tokenValue = ({
    identifier,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        token_value: unknown
      }
    >['token_value']
  >): QueryMsg => {
    return {
      token_value: {
        identifier,
      } as const,
    }
  }
  static holdingAmount = ({
    identifier,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        holding_amount: unknown
      }
    >['holding_amount']
  >): QueryMsg => {
    return {
      holding_amount: {
        identifier,
      } as const,
    }
  }
  static assetConfig = ({
    identifier,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        asset_config: unknown
      }
    >['asset_config']
  >): QueryMsg => {
    return {
      asset_config: {
        identifier,
      } as const,
    }
  }
  static assetsConfig = ({
    limit,
    startAfter,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        assets_config: unknown
      }
    >['assets_config']
  >): QueryMsg => {
    return {
      assets_config: {
        limit,
        start_after: startAfter,
      } as const,
    }
  }
  static assetsInfo = ({
    limit,
    startAfter,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        assets_info: unknown
      }
    >['assets_info']
  >): QueryMsg => {
    return {
      assets_info: {
        limit,
        start_after: startAfter,
      } as const,
    }
  }
  static baseAsset = (): QueryMsg => {
    return {
      base_asset: {} as const,
    }
  }
}