/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
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
      }
    }
  | {
      burn: {
        amount: Coin[]
      }
    }
export type Uint128 = string
export type StakingMsg =
  | {
      delegate: {
        amount: Coin
        validator: string
      }
    }
  | {
      undelegate: {
        amount: Coin
        validator: string
      }
    }
  | {
      redelegate: {
        amount: Coin
        dst_validator: string
        src_validator: string
      }
    }
export type DistributionMsg =
  | {
      set_withdraw_address: {
        address: string
      }
    }
  | {
      withdraw_delegator_reward: {
        validator: string
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
      }
    }
  | {
      send_packet: {
        channel_id: string
        data: Binary
        timeout: IbcTimeout
      }
    }
  | {
      close_channel: {
        channel_id: string
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
      }
    }
  | {
      instantiate: {
        admin?: string | null
        code_id: number
        funds: Coin[]
        label: string
        msg: Binary
      }
    }
  | {
      migrate: {
        contract_addr: string
        msg: Binary
        new_code_id: number
      }
    }
  | {
      update_admin: {
        admin: string
        contract_addr: string
      }
    }
  | {
      clear_admin: {
        contract_addr: string
      }
    }
export type GovMsg = {
  vote: {
    proposal_id: number
    vote: VoteOption
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
      }
    }
  | {
      all_balances: {
        address: string
      }
    }
export type StakingQuery =
  | {
      bonded_denom: {}
    }
  | {
      all_delegations: {
        delegator: string
      }
    }
  | {
      delegation: {
        delegator: string
        validator: string
      }
    }
  | {
      all_validators: {}
    }
  | {
      validator: {
        address: string
      }
    }
export type IbcQuery =
  | {
      port_id: {}
    }
  | {
      list_channels: {
        port_id?: string | null
      }
    }
  | {
      channel: {
        channel_id: string
        port_id?: string | null
      }
    }
export type WasmQuery =
  | {
      smart: {
        contract_addr: string
        msg: Binary
      }
    }
  | {
      raw: {
        contract_addr: string
        key: Binary
      }
    }
  | {
      contract_info: {
        contract_addr: string
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
      }
    }
  | {
      LiquidityToken: {}
    }
  | {
      ValueAs: {
        asset: string
        multiplier: Decimal
      }
    }
  | {
      External: {
        extension_name: string
      }
    }
export type Decimal = string
export interface Coin {
  amount: Uint128
  denom: string
}
export interface Empty {}
export interface IbcTimeout {
  block?: IbcTimeoutBlock | null
  timestamp?: Timestamp | null
}
export interface IbcTimeoutBlock {
  height: number
  revision: number
}
export interface CallbackInfo {
  id: string
  receiver: string
}
export interface UncheckedProxyAsset {
  asset: string
  value_reference?: UncheckedValueRef | null
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
      }
    }
  | {
      LiquidityToken: {}
    }
  | {
      ValueAs: {
        asset: AssetEntry
        multiplier: Decimal
      }
    }
  | {
      External: {
        extension_name: string
      }
    }
export interface AssetConfigResponse {
  proxy_asset: ProxyAsset
}
export interface ProxyAsset {
  asset: AssetEntry
  value_reference?: ValueRef | null
}
export interface ContractEntry {
  contract: string
  protocol: string
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
