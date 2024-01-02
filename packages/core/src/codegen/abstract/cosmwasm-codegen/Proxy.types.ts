/**
 * This file was automatically generated by @abstract-money/ts-codegen@0.35.4.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @abstract-money/ts-codegen generate command to regenerate this file.
 */

export type AccountTrace =
  | 'local'
  | {
      remote: ChainName[]
    }
export type ChainName = string
export interface InstantiateMsg {
  account_id: AccountId
  ans_host_address: string
}
export interface AccountId {
  seq: number
  trace: AccountTrace
}
export type ExecuteMsg =
  | {
      set_admin: {
        admin: string
      }
    }
  | {
      module_action: {
        msgs: CosmosMsgForEmpty[]
      }
    }
  | {
      module_action_with_data: {
        msg: CosmosMsgForEmpty
      }
    }
  | {
      ibc_action: {
        msgs: ExecuteMsg1[]
      }
    }
  | {
      add_modules: {
        modules: string[]
      }
    }
  | {
      remove_module: {
        module: string
      }
    }
  | {
      update_assets: {
        to_add: [AssetEntry, UncheckedPriceSource][]
        to_remove: AssetEntry[]
      }
    }
export type CosmosMsgForEmpty =
  | {
      bank: BankMsg
    }
  | {
      custom: Empty
    }
  | {
      staking: StakingMsg
    }
  | {
      distribution: DistributionMsg
    }
  | {
      stargate: {
        type_url: string
        value: Binary
        [k: string]: unknown
      }
    }
  | {
      ibc: IbcMsg
    }
  | {
      wasm: WasmMsg
    }
  | {
      gov: GovMsg
    }
export type BankMsg =
  | {
      send: {
        amount: Coin[]
        to_address: string
        [k: string]: unknown
      }
    }
  | {
      burn: {
        amount: Coin[]
        [k: string]: unknown
      }
    }
export type Uint128 = string
export type StakingMsg =
  | {
      delegate: {
        amount: Coin
        validator: string
        [k: string]: unknown
      }
    }
  | {
      undelegate: {
        amount: Coin
        validator: string
        [k: string]: unknown
      }
    }
  | {
      redelegate: {
        amount: Coin
        dst_validator: string
        src_validator: string
        [k: string]: unknown
      }
    }
export type DistributionMsg =
  | {
      set_withdraw_address: {
        address: string
        [k: string]: unknown
      }
    }
  | {
      withdraw_delegator_reward: {
        validator: string
        [k: string]: unknown
      }
    }
export type Binary = string
export type IbcMsg =
  | {
      transfer: {
        amount: Coin
        channel_id: string
        timeout: IbcTimeout
        to_address: string
        [k: string]: unknown
      }
    }
  | {
      send_packet: {
        channel_id: string
        data: Binary
        timeout: IbcTimeout
        [k: string]: unknown
      }
    }
  | {
      close_channel: {
        channel_id: string
        [k: string]: unknown
      }
    }
export type Timestamp = Uint64
export type Uint64 = string
export type WasmMsg =
  | {
      execute: {
        contract_addr: string
        funds: Coin[]
        msg: Binary
        [k: string]: unknown
      }
    }
  | {
      instantiate: {
        admin?: string | null
        code_id: number
        funds: Coin[]
        label: string
        msg: Binary
        [k: string]: unknown
      }
    }
  | {
      migrate: {
        contract_addr: string
        msg: Binary
        new_code_id: number
        [k: string]: unknown
      }
    }
  | {
      update_admin: {
        admin: string
        contract_addr: string
        [k: string]: unknown
      }
    }
  | {
      clear_admin: {
        contract_addr: string
        [k: string]: unknown
      }
    }
export type GovMsg = {
  vote: {
    proposal_id: number
    vote: VoteOption
    [k: string]: unknown
  }
}
export type VoteOption = 'yes' | 'no' | 'abstain' | 'no_with_veto'
export type ExecuteMsg1 =
  | {
      update_admin: {
        admin: string
      }
    }
  | {
      update_config: {
        ans_host?: string | null
        version_control?: string | null
      }
    }
  | {
      send_funds: {
        funds: Coin[]
        host_chain: string
      }
    }
  | {
      register: {
        host_chain: string
      }
    }
  | {
      send_packet: {
        action: HostAction
        callback_info?: CallbackInfo | null
        host_chain: string
        retries: number
      }
    }
  | {
      remove_host: {
        host_chain: string
      }
    }
export type HostAction =
  | {
      app: {
        msg: Binary
      }
    }
  | {
      dispatch: {
        msgs: CosmosMsgForEmpty[]
      }
    }
  | {
      query: {
        msgs: QueryRequestForEmpty[]
      }
    }
  | {
      send_all_back: {}
    }
  | {
      balances: {}
    }
  | {
      internal: InternalAction
    }
export type QueryRequestForEmpty =
  | {
      bank: BankQuery
    }
  | {
      custom: Empty
    }
  | {
      staking: StakingQuery
    }
  | {
      stargate: {
        data: Binary
        path: string
        [k: string]: unknown
      }
    }
  | {
      ibc: IbcQuery
    }
  | {
      wasm: WasmQuery
    }
export type BankQuery =
  | {
      balance: {
        address: string
        denom: string
        [k: string]: unknown
      }
    }
  | {
      all_balances: {
        address: string
        [k: string]: unknown
      }
    }
export type StakingQuery =
  | {
      bonded_denom: {
        [k: string]: unknown
      }
    }
  | {
      all_delegations: {
        delegator: string
        [k: string]: unknown
      }
    }
  | {
      delegation: {
        delegator: string
        validator: string
        [k: string]: unknown
      }
    }
  | {
      all_validators: {
        [k: string]: unknown
      }
    }
  | {
      validator: {
        address: string
        [k: string]: unknown
      }
    }
export type IbcQuery =
  | {
      port_id: {
        [k: string]: unknown
      }
    }
  | {
      list_channels: {
        port_id?: string | null
        [k: string]: unknown
      }
    }
  | {
      channel: {
        channel_id: string
        port_id?: string | null
        [k: string]: unknown
      }
    }
export type WasmQuery =
  | {
      smart: {
        contract_addr: string
        msg: Binary
        [k: string]: unknown
      }
    }
  | {
      raw: {
        contract_addr: string
        key: Binary
        [k: string]: unknown
      }
    }
  | {
      contract_info: {
        contract_addr: string
        [k: string]: unknown
      }
    }
export type InternalAction =
  | 'who_am_i'
  | {
      register: {
        account_proxy_address: string
      }
    }
export type AssetEntry = string
export type UncheckedPriceSource =
  | 'None'
  | {
      Pair: DexAssetPairing
    }
  | {
      LiquidityToken: {
        [k: string]: unknown
      }
    }
  | {
      ValueAs: {
        asset: AssetEntry
        multiplier: Decimal
        [k: string]: unknown
      }
    }
export type DexAssetPairing = [AssetEntry, AssetEntry, string]
export type Decimal = string
export interface Coin {
  amount: Uint128
  denom: string
  [k: string]: unknown
}
export interface Empty {
  [k: string]: unknown
}
export interface IbcTimeout {
  block?: IbcTimeoutBlock | null
  timestamp?: Timestamp | null
  [k: string]: unknown
}
export interface IbcTimeoutBlock {
  height: number
  revision: number
  [k: string]: unknown
}
export interface CallbackInfo {
  id: string
  receiver: string
}
export type QueryMsg =
  | {
      config: {}
    }
  | {
      total_value: {}
    }
  | {
      token_value: {
        identifier: AssetEntry
      }
    }
  | {
      holding_amount: {
        identifier: AssetEntry
      }
    }
  | {
      asset_config: {
        identifier: AssetEntry
      }
    }
  | {
      assets_config: {
        limit?: number | null
        start_after?: AssetEntry | null
      }
    }
  | {
      assets_info: {
        limit?: number | null
        start_after?: AssetInfoBaseForAddr | null
      }
    }
  | {
      base_asset: {}
    }
export type AssetInfoBaseForAddr =
  | {
      native: string
    }
  | {
      cw20: Addr
    }
export type Addr = string
export type MigrateMsg = {}
export interface AssetConfigResponse {
  price_source: UncheckedPriceSource
}
export interface AssetsConfigResponse {
  assets: [AssetEntry, UncheckedPriceSource][]
}
export type PriceSource =
  | 'None'
  | {
      Pool: {
        address: PoolAddressBaseForAddr
        pair: AssetInfoBaseForAddr[]
        [k: string]: unknown
      }
    }
  | {
      LiquidityToken: {
        pool_address: PoolAddressBaseForAddr
        pool_assets: AssetInfoBaseForAddr[]
        [k: string]: unknown
      }
    }
  | {
      ValueAs: {
        asset: AssetInfoBaseForAddr
        multiplier: Decimal
        [k: string]: unknown
      }
    }
export type PoolAddressBaseForAddr =
  | {
      separate_addresses: {
        liquidity: Addr
        swap: Addr
      }
    }
  | {
      contract: Addr
    }
  | {
      id: number
    }
export interface AssetsInfoResponse {
  assets: [AssetInfoBaseForAddr, OracleAsset][]
}
export interface OracleAsset {
  complexity: number
  price_source: PriceSource
}
export interface BaseAssetResponse {
  base_asset: AssetInfoBaseForAddr
}
export interface ConfigResponse {
  modules: string[]
}
export interface HoldingAmountResponse {
  amount: Uint128
}
export interface TokenValueResponse {
  value: Uint128
}
export interface AccountValue {
  breakdown: [AssetInfoBaseForAddr, Uint128][]
  total_value: AssetBaseForAddr
}
export interface AssetBaseForAddr {
  amount: Uint128
  info: AssetInfoBaseForAddr
}
