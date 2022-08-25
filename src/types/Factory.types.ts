/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.11.1.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

export interface ConfigResponse {
  memory_contract: string
  module_factory_address: string
  next_os_id: number
  owner: string
  subscription_address?: string | null
  version_control_contract: string
}
export type ExecuteMsg =
  | {
      receive: Cw20ReceiveMsg
    }
  | {
      update_config: {
        admin?: string | null
        memory_contract?: string | null
        module_factory_address?: string | null
        subscription_address?: string | null
        version_control_contract?: string | null
      }
    }
  | {
      create_os: {
        description?: string | null
        governance: GovernanceDetails
        link?: string | null
        name: string
      }
    }
export type Uint128 = string
export type Binary = string
export type GovernanceDetails =
  | {
      monarchy: {
        monarch: string
      }
    }
  | {
      external: {
        governance_address: string
        governance_type: string
      }
    }
export interface Cw20ReceiveMsg {
  amount: Uint128
  msg: Binary
  sender: string
}
export interface InstantiateMsg {
  memory_address: string
  module_factory_address: string
  version_control_address: string
}
export type QueryMsg = {
  config: {}
}
