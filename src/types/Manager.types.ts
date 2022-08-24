/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.10.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

export type Binary = string
export type Uint64 = string
export interface ConfigResponse {
  module_factory_address: string
  os_id: Uint64
  root: string
  version_control_address: string
}
export type ExecuteMsg =
  | {
      set_admin: {
        admin: string
        governance_type?: string | null
      }
    }
  | {
      create_module: {
        init_msg?: Binary | null
        module: Module
      }
    }
  | {
      register_module: {
        module: Module
        module_addr: string
      }
    }
  | {
      remove_module: {
        module_name: string
      }
    }
  | {
      exec_on_module: {
        exec_msg: Binary
        module_name: string
      }
    }
  | {
      update_config: {
        root?: string | null
        vc_addr?: string | null
      }
    }
  | {
      upgrade: {
        migrate_msg?: Binary | null
        module: Module
      }
    }
  | {
      suspend_os: {
        new_status: boolean
      }
    }
  | {
      update_info: {
        description?: string | null
        link?: string | null
        name?: string | null
      }
    }
export type ModuleKind = 'add_on' | 'a_p_i' | 'service' | 'perk'
export interface Module {
  info: ModuleInfo
  kind: ModuleKind
}
export interface ModuleInfo {
  name: string
  version?: string | null
}
export interface InfoResponse {
  info: OsInfo
}
export interface OsInfo {
  chain_id: string
  description?: string | null
  governance_type: string
  link?: string | null
  name: string
}
export interface InstantiateMsg {
  description?: string | null
  governance_type: string
  link?: string | null
  module_factory_address: string
  name: string
  os_id: number
  root_user: string
  subscription_address?: string | null
  version_control_address: string
}
export interface ManagerModuleInfo {
  address: string
  name: string
  version: ContractVersion
}
export interface ContractVersion {
  contract: string
  version: string
}
export interface ModuleAddressesResponse {
  modules: [string, string][]
}
export interface ModuleInfosResponse {
  module_infos: ManagerModuleInfo[]
}
export interface ModuleVersionsResponse {
  versions: ContractVersion[]
}
export type QueryMsg =
  | {
      module_versions: {
        names: string[]
      }
    }
  | {
      module_addresses: {
        names: string[]
      }
    }
  | {
      module_infos: {
        iter_limit?: number | null
        last_module_name?: string | null
      }
    }
  | {
      config: {}
    }
  | {
      info: {}
    }
export interface QueryOsConfigResponse {
  module_factory_address: string
  os_id: Uint64
  root: string
  version_control_address: string
}
