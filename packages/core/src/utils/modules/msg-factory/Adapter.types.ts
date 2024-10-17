import { ModuleExecuteMsg, ModuleQueryMsg } from './Module.types'

export type AdapterBaseExecuteMsg = {
  update_authorized_addresses: {
    to_add?: string[] | null
    to_remove?: string[] | null
  }
}
export type AdapterRequestMsg<TAppMsg> = {
  proxy_address?: string | null
  request: TAppMsg
}

export type AdapterExecuteMsg<TAppMsg> = ModuleExecuteMsg<
  AdapterBaseExecuteMsg,
  AdapterRequestMsg<TAppMsg>
>
export type AdapterBaseQueryMsg =
  | {
      authorized_addresses: {
        proxy_address?: string | null
      }
    }
  | {
      config: Record<string, never>
    }

export type AdapterQueryMsg<TAppMsg> = ModuleQueryMsg<
  AdapterBaseQueryMsg,
  TAppMsg
>

export type AdapterBaseInitMsg = {
  ans_host_address: string
  version_control_address: string
}

export interface AdapterAuthorizedAddressesResponse {
  addresses: string[]
}

export interface AdapterConfigResponse {
  version_control_address: string
  ans_host_address: string
  dependencies: string[]
}
