import { ModuleExecuteMsg, ModuleQueryMsg } from './Module.types'

export type AppBaseExecuteMsg = {
  update_config: {
    ans_host_address?: string | null
  }
}

export type AppExecuteMsg<TAppMsg> = ModuleExecuteMsg<
  AppBaseExecuteMsg,
  TAppMsg
>
export type AppBaseQueryMsg =
  | {
      base_admin: Record<string, never>
    }
  | {
      base_config: Record<string, never>
    }
  | {
      module_data: Record<string, never>
    }
  | {
      top_level_owner: Record<string, never>
    }

export type AppQueryMsg<TAppMsg> = ModuleQueryMsg<AppBaseQueryMsg, TAppMsg>

export type AppBaseInitMsg = {
  ans_host_address: string
  registry_address: string
}

// Empty migrate msg
export type AppBaseMigrateMsg = Record<string, never>

export interface AppConfigResponse {
  account: string
  ans_host_address: string
  registry_address: string
}
