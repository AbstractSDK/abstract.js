/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.14.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

export type Addr = string
export interface AddOnState {
  memory: Memory
  proxy_address: Addr
  [k: string]: unknown
}
export interface Memory {
  address: Addr
  [k: string]: unknown
}
export type BaseResponse =
  | {
      config: {
        [k: string]: unknown
      }
    }
  | {
      admin: {
        [k: string]: unknown
      }
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
        [k: string]: unknown
      }
    }
  | {
      update_pool: {
        assets_to_add: string[]
        assets_to_remove: string[]
        deposit_asset?: string | null
        [k: string]: unknown
      }
    }
  | {
      import: {
        [k: string]: unknown
      }
    }
  | {
      set_fee: {
        fee: Decimal
        [k: string]: unknown
      }
    }
export type AddOnExecuteMsg = {
  update_config: {
    memory_address?: string | null
    [k: string]: unknown
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
  [k: string]: unknown
}
export interface AssetBaseForString {
  amount: Uint128
  info: AssetInfoBaseForString
  [k: string]: unknown
}
export interface InstantiateMsg {
  base: AddOnInstantiateMsg
  deposit_asset: string
  fee: Decimal
  provider_addr: string
  token_code_id: number
  token_name?: string | null
  token_symbol?: string | null
  [k: string]: unknown
}
export interface AddOnInstantiateMsg {
  memory_address: string
  [k: string]: unknown
}
export type QueryMsg =
  | {
      base: AddOnQueryMsg
    }
  | {
      state: {
        [k: string]: unknown
      }
    }
export type AddOnQueryMsg =
  | {
      config: {
        [k: string]: unknown
      }
    }
  | {
      admin: {
        [k: string]: unknown
      }
    }
export interface StateResponse {
  liquidity_token: string
  [k: string]: unknown
}
