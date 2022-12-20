/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.19.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

export interface InstantiateMsg {
  ans_host_address: string
  os_id: number
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
      ibc_action: {
        msgs: ExecuteMsg1[]
      }
    }
  | {
      add_module: {
        module: string
      }
    }
  | {
      remove_module: {
        module: string
      }
    }
  | {
      update_assets: {
        to_add: UncheckedProxyAsset[]
        to_remove: string[]
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
        os_proxy_address: string
      }
    }
export type UncheckedValueRef =
  | {
      Pool: {
        exchange: string
        pair: string
        [k: string]: unknown
      }
    }
  | {
      LiquidityToken: {
        [k: string]: unknown
      }
    }
  | {
      ValueAs: {
        asset: string
        multiplier: Decimal
        [k: string]: unknown
      }
    }
  | {
      External: {
        api_name: string
        [k: string]: unknown
      }
    }
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
export interface UncheckedProxyAsset {
  asset: string
  value_reference?: UncheckedValueRef | null
  [k: string]: unknown
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
        amount?: Uint128 | null
        identifier: string
      }
    }
  | {
      holding_value: {
        identifier: string
      }
    }
  | {
      holding_amount: {
        identifier: string
      }
    }
  | {
      asset_config: {
        identifier: string
      }
    }
  | {
      assets: {
        page_size?: number | null
        page_token?: string | null
      }
    }
  | {
      check_validity: {}
    }
  | {
      base_asset: {}
    }
export interface MigrateMsg {}
export type AssetEntry = string
export type ValueRef =
  | {
      Pool: {
        pair: ContractEntry
        [k: string]: unknown
      }
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
  | {
      External: {
        api_name: string
        [k: string]: unknown
      }
    }
export interface AssetConfigResponse {
  proxy_asset: ProxyAsset
}
export interface ProxyAsset {
  asset: AssetEntry
  value_reference?: ValueRef | null
  [k: string]: unknown
}
export interface ContractEntry {
  contract: string
  protocol: string
  [k: string]: unknown
}
export interface AssetsResponse {
  assets: [AssetEntry, ProxyAsset][]
}
export interface BaseAssetResponse {
  base_asset: ProxyAsset
}
export interface ValidityResponse {
  missing_dependencies?: AssetEntry[] | null
  unresolvable_assets?: AssetEntry[] | null
}
export interface ConfigResponse {
  modules: string[]
}
export interface HoldingAmountResponse {
  amount: Uint128
}
export interface HoldingValueResponse {
  value: Uint128
}
export interface TokenValueResponse {
  value: Uint128
}
export interface TotalValueResponse {
  value: Uint128
}
