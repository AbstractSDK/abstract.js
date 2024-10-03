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
      admin: Record<string, never>
    }
  | {
      config: Record<string, never>
    }

export type AppQueryMsg<TAppMsg> = ModuleQueryMsg<AppBaseQueryMsg, TAppMsg>

export type AppBaseInitMsg = {
  ans_host_address: string
  version_control_address: string
}

// Empty migrate msg
export type AppBaseMigrateMsg = Record<string, never>
