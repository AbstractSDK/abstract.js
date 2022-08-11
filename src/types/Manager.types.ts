/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.10.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Binary = string;
export type Uint64 = string;
export interface ConfigResponse {
  module_factory_address: string;
  os_id: Uint64;
  root: string;
  version_control_address: string;
  [k: string]: unknown;
}
export type ExecuteMsg = {
  set_admin: {
    admin: string;
    governance_type?: string | null;
    [k: string]: unknown;
  };
} | {
  create_module: {
    init_msg?: Binary | null;
    module: Module;
    [k: string]: unknown;
  };
} | {
  register_module: {
    module: Module;
    module_addr: string;
    [k: string]: unknown;
  };
} | {
  remove_module: {
    module_name: string;
    [k: string]: unknown;
  };
} | {
  exec_on_module: {
    exec_msg: Binary;
    module_name: string;
    [k: string]: unknown;
  };
} | {
  update_config: {
    root?: string | null;
    vc_addr?: string | null;
    [k: string]: unknown;
  };
} | {
  upgrade: {
    migrate_msg?: Binary | null;
    module: Module;
    [k: string]: unknown;
  };
} | {
  suspend_os: {
    new_status: boolean;
    [k: string]: unknown;
  };
} | {
  update_info: {
    description?: string | null;
    link?: string | null;
    name?: string | null;
    [k: string]: unknown;
  };
};
export type ModuleKind = "add_on" | "a_p_i" | "service" | "perk";
export interface Module {
  info: ModuleInfo;
  kind: ModuleKind;
  [k: string]: unknown;
}
export interface ModuleInfo {
  name: string;
  version?: string | null;
  [k: string]: unknown;
}
export interface InfoResponse {
  info: OsInfo;
  [k: string]: unknown;
}
export interface OsInfo {
  chain_id: string;
  description?: string | null;
  governance_type: string;
  link?: string | null;
  name: string;
  [k: string]: unknown;
}
export interface InstantiateMsg {
  description?: string | null;
  governance_type: string;
  link?: string | null;
  module_factory_address: string;
  name: string;
  os_id: number;
  root_user: string;
  subscription_address?: string | null;
  version_control_address: string;
  [k: string]: unknown;
}
export interface ManagerModuleInfo {
  address: string;
  name: string;
  version: ContractVersion;
  [k: string]: unknown;
}
export interface ContractVersion {
  contract: string;
  version: string;
  [k: string]: unknown;
}
export interface ModuleAddressesResponse {
  modules: [string, string][];
  [k: string]: unknown;
}
export interface ModuleInfosResponse {
  module_infos: ManagerModuleInfo[];
  [k: string]: unknown;
}
export interface ModuleVersionsResponse {
  versions: ContractVersion[];
  [k: string]: unknown;
}
export type QueryMsg = {
  module_versions: {
    names: string[];
    [k: string]: unknown;
  };
} | {
  module_addresses: {
    names: string[];
    [k: string]: unknown;
  };
} | {
  module_infos: {
    iter_limit?: number | null;
    last_module_name?: string | null;
    [k: string]: unknown;
  };
} | {
  config: {
    [k: string]: unknown;
  };
} | {
  info: {
    [k: string]: unknown;
  };
};
export interface QueryOsConfigResponse {
  module_factory_address: string;
  os_id: Uint64;
  root: string;
  version_control_address: string;
  [k: string]: unknown;
}