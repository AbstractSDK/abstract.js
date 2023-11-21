/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.14.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

export type Addr = string
export interface AddOnState {
  memory: Memory
  proxy_address: Addr
}
export interface Memory {
  address: Addr
}
export interface ConfigValidityResponse {
  is_valid: boolean
}
export type ExecuteMsg =
  | {
      base: AddOnExecuteMsg
    }
  | {
      receive: Cw20ReceiveMsg
    }
  | {
      provide_liquidity: {
        asset: AssetBaseForString
      }
    }
  | {
      update_pool: {
        assets_to_add: string[]
        assets_to_remove: string[]
        deposit_asset?: string | null
      }
    }
  | {
      import: {}
    }
  | {
      set_fee: {
        fee: Decimal
      }
    }
export type AddOnExecuteMsg = {
  update_config: {
    memory_address?: string | null
  }
}
export type Uint128 = string
export type Binary = string
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
export type Decimal = string
export interface Cw20ReceiveMsg {
  amount: Uint128
  msg: Binary
  sender: string
}
export interface AssetBaseForString {
  amount: Uint128
  info: AssetInfoBaseForString
}
export interface InstantiateMsg {
  base: AddOnInstantiateMsg
  deposit_asset: string
  fee: Decimal
  provider_addr: string
  token_code_id: number
  token_name?: string | null
  token_symbol?: string | null
}
export interface AddOnInstantiateMsg {
  memory_address: string
}
export type QueryMsg =
  | {
      base: AddOnQueryMsg
    }
  | {
      state: {}
    }
  | {
      config_validity: {}
    }
export type AddOnQueryMsg =
  | {
      config: {}
    }
  | {
      admin: {}
    }
export type AssetEntry = string
export interface StateResponse {
  deposit_asset: AssetEntry
  etf_assets: AssetEntry[]
  liquidity_token: string
}
