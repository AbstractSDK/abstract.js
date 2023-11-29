/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.28.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

export type Binary = string
export type Namespace = string
export type ModuleVersion =
  | 'latest'
  | {
      version: string
    }
export type GovernanceDetailsForString =
  | {
      Monarchy: {
        monarch: string
      }
    }
  | {
      SubAccount: {
        manager: string
        proxy: string
      }
    }
  | {
      External: {
        governance_address: string
        governance_type: string
      }
    }
export interface InstantiateMsg {
  account_id: number
  description?: string | null
  install_modules: ModuleInstallConfig[]
  link?: string | null
  module_factory_address: string
  name: string
  owner: GovernanceDetailsForString
  version_control_address: string
}
export interface ModuleInstallConfig {
  init_msg?: Binary | null
  module: ModuleInfo
}
export interface ModuleInfo {
  name: string
  namespace: Namespace
  version: ModuleVersion
}
export type ExecuteMsg =
  | {
      exec_on_module: {
        exec_msg: Binary
        module_id: string
      }
    }
  | {
      update_internal_config: Binary
    }
  | {
      install_modules: {
        modules: ModuleInstallConfig[]
      }
    }
  | {
      register_module: {
        module: Module
        module_addr: string
      }
    }
  | {
      uninstall_module: {
        module_id: string
      }
    }
  | {
      upgrade: {
        modules: [ModuleInfo, Binary | null][]
      }
    }
  | {
      create_sub_account: {
        base_asset?: AssetEntry | null
        description?: string | null
        install_modules: ModuleInstallConfig[]
        link?: string | null
        name: string
        namespace?: string | null
      }
    }
  | {
      update_info: {
        description?: string | null
        link?: string | null
        name?: string | null
      }
    }
  | {
      set_owner: {
        owner: GovernanceDetailsForString
      }
    }
  | {
      update_status: {
        is_suspended?: boolean | null
      }
    }
  | {
      update_settings: {
        ibc_enabled?: boolean | null
      }
    }
  | {
      update_sub_account: UpdateSubAccountAction
    }
  | {
      callback: CallbackMsg
    }
  | {
      update_ownership: Action
    }
export type ModuleReference =
  | {
      account_base: number
    }
  | {
      native: Addr
    }
  | {
      adapter: Addr
    }
  | {
      app: number
    }
  | {
      standalone: number
    }
export type Addr = string
export type AssetEntry = string
export type UpdateSubAccountAction =
  | {
      unregister_sub_account: {
        id: number
      }
    }
  | {
      register_sub_account: {
        id: number
      }
    }
export type Action =
  | {
      transfer_ownership: {
        expiry?: Expiration | null
        new_owner: string
      }
    }
  | 'accept_ownership'
  | 'renounce_ownership'
export type Expiration =
  | {
      at_height: number
    }
  | {
      at_time: Timestamp
    }
  | {
      never: {}
    }
export type Timestamp = Uint64
export type Uint64 = string
export interface Module {
  info: ModuleInfo
  reference: ModuleReference
}
export type CallbackMsg = {}
export type QueryMsg =
  | {
      module_versions: {
        ids: string[]
      }
    }
  | {
      module_addresses: {
        ids: string[]
      }
    }
  | {
      module_infos: {
        limit?: number | null
        start_after?: string | null
      }
    }
  | {
      config: {}
    }
  | {
      info: {}
    }
  | {
      sub_account_ids: {
        limit?: number | null
        start_after?: number | null
      }
    }
  | {
      ownership: {}
    }
export type MigrateMsg = {}
export interface ConfigResponse {
  account_id: Uint64
  is_suspended: boolean
  module_factory_address: Addr
  version_control_address: Addr
}
export type GovernanceDetailsForAddr =
  | {
      Monarchy: {
        monarch: Addr
      }
    }
  | {
      SubAccount: {
        manager: Addr
        proxy: Addr
      }
    }
  | {
      External: {
        governance_address: Addr
        governance_type: string
      }
    }
export interface InfoResponse {
  info: AccountInfoForAddr
}
export interface AccountInfoForAddr {
  chain_id: string
  description?: string | null
  governance_details: GovernanceDetailsForAddr
  link?: string | null
  name: string
}
export interface ModuleAddressesResponse {
  modules: [string, Addr][]
}
export interface ModuleInfosResponse {
  module_infos: ManagerModuleInfo[]
}
export interface SubAccountIdsResponse {
  sub_accounts: number[]
}
export interface ManagerModuleInfo {
  address: Addr
  id: string
  version: ContractVersion
}
export interface ContractVersion {
  contract: string
  version: string
}
export interface ModuleVersionsResponse {
  versions: ContractVersion[]
}
export interface OwnershipForString {
  owner?: string | null
  pending_expiry?: Expiration | null
  pending_owner?: string | null
}
export interface SubAccountIdsResponse {
  sub_accounts: number[]
}
export type ManagerExecuteMsg = ExecuteMsg