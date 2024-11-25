import { ModuleExecuteMsg, ModuleQueryMsg } from './Module.types'

export type AdapterBaseExecuteMsg = {
  update_authorized_addresses: {
    to_add?: string[] | null
    to_remove?: string[] | null
  }
}
export type AdapterRequestMsg<TAppMsg> = {
  account_address?: string | null
  request: TAppMsg
}

export type AdapterExecuteMsg<TAppMsg> = ModuleExecuteMsg<
  AdapterBaseExecuteMsg,
  AdapterRequestMsg<TAppMsg>
>
export type AdapterBaseQueryMsg =
  | {
      authorized_addresses: {
        account_address?: string | null
      }
    }
  | {
      base_config: Record<string, never>
    }
  | {
      module_data: Record<string, never>
    }

export type AdapterQueryMsg<TAppMsg> = ModuleQueryMsg<
  AdapterBaseQueryMsg,
  TAppMsg
>

export type AdapterBaseInitMsg = {
  ans_host_address: string
  registry_address: string
}

export interface AdapterAuthorizedAddressesResponse {
  addresses: string[]
}

export interface AdapterConfigResponse {
  registry_address: string
  ans_host_address: string
  dependencies: string[]
}
