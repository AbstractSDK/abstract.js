/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.10.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
export declare type Addr = string;
export interface ApiAddressResponse {
    address: Addr;
    info: ContractVersion;
}
export interface ContractVersion {
    contract: string;
    version: string;
}
export interface ApiAddressesResponse {
    api_addresses: [ContractVersion, string][];
}
export declare type Uint64 = string;
export interface CodeIdResponse {
    code_id: Uint64;
    info: ContractVersion;
}
export interface CodeIdsResponse {
    module_code_ids: [ContractVersion, number][];
}
export interface ConfigResponse {
    admin: string;
    factory: string;
}
export declare type ExecuteMsg = {
    add_code_id: {
        code_id: number;
        module: string;
        version: string;
    };
} | {
    remove_code_id: {
        module: string;
        version: string;
    };
} | {
    add_api: {
        address: string;
        module: string;
        version: string;
    };
} | {
    remove_api: {
        module: string;
        version: string;
    };
} | {
    add_os: {
        manager_address: string;
        os_id: number;
        proxy_address: string;
    };
} | {
    set_admin: {
        new_admin: string;
    };
} | {
    set_factory: {
        new_factory: string;
    };
};
export interface InstantiateMsg {
}
export interface ModuleInfo {
    name: string;
    version?: string | null;
}
export interface OsCoreResponse {
    os_core: Core;
}
export interface Core {
    manager: Addr;
    proxy: Addr;
}
export declare type QueryMsg = {
    os_core: {
        os_id: number;
    };
} | {
    code_id: {
        module: ModuleInfo;
    };
} | {
    api_address: {
        module: ModuleInfo;
    };
} | {
    config: {};
} | {
    code_ids: {
        iter_limit?: number | null;
        last_module?: ContractVersion | null;
    };
} | {
    api_addresses: {
        iter_limit?: number | null;
        last_api_module?: ContractVersion | null;
    };
};
