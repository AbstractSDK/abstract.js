/**
 * This file was automatically generated by cosmwasm-typescript-gen@0.2.15.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the cosmwasm-typescript-gen generate command to regenerate this file.
 */
import { CosmWasmClient, ExecuteResult, SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { Coin, StdFee } from '@cosmjs/amino';
export declare type Binary = string;
export declare type Uint64 = string;
export interface ConfigResponse {
    module_factory_address: string;
    os_id: Uint64;
    root: string;
    version_control_address: string;
}
export interface InfoResponse {
    info: OsInfo;
}
export interface OsInfo {
    chain_id: string;
    description?: string | null;
    governance_type: string;
    link?: string | null;
    name: string;
}
export interface InstantiateMsg {
    chain_id: string;
    description?: string | null;
    governance_type: string;
    link?: string | null;
    module_factory_address: string;
    os_id: number;
    os_name: string;
    root_user: string;
    subscription_address?: string | null;
    version_control_address: string;
}
export interface ManagerModuleInfo {
    address: string;
    name: string;
    version: ContractVersion;
}
export interface ContractVersion {
    contract: string;
    version: string;
}
export interface ModuleAddressesResponse {
    modules: [string, string][];
}
export interface ModuleInfosResponse {
    module_infos: ManagerModuleInfo[];
}
export interface ModuleVersionsResponse {
    versions: ContractVersion[];
}
export declare type ModuleKind = 'add_on' | 'a_p_i' | 'service' | 'perk';
export interface Module {
    info: ModuleInfo;
    kind: ModuleKind;
}
export interface ModuleInfo {
    name: string;
    version?: string | null;
}
export interface QueryOsConfigResponse {
    module_factory_address: string;
    os_id: Uint64;
    root: string;
    version_control_address: string;
}
export interface ManagerReadOnlyInterface {
    contractAddress: string;
    moduleVersions: ({ names }: {
        names: string[];
    }) => Promise<ModuleVersionsResponse>;
    moduleAddresses: ({ names }: {
        names: string[];
    }) => Promise<ModuleAddressesResponse>;
    moduleInfos: ({ iterLimit, lastModuleName, }: {
        iterLimit?: number;
        lastModuleName?: string;
    }) => Promise<ModuleInfosResponse>;
    config: () => Promise<ConfigResponse>;
    info: () => Promise<InfoResponse>;
}
export declare class ManagerQueryClient implements ManagerReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    moduleVersions: ({ names }: {
        names: string[];
    }) => Promise<ModuleVersionsResponse>;
    moduleAddresses: ({ names }: {
        names: string[];
    }) => Promise<ModuleAddressesResponse>;
    moduleInfos: ({ iterLimit, lastModuleName, }: {
        iterLimit?: number | undefined;
        lastModuleName?: string | undefined;
    }) => Promise<ModuleInfosResponse>;
    config: () => Promise<ConfigResponse>;
    info: () => Promise<InfoResponse>;
}
export interface ManagerInterface extends ManagerReadOnlyInterface {
    contractAddress: string;
    sender: string;
    setAdmin: ({ admin, governanceType, }: {
        admin: string;
        governanceType?: string;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    createModule: ({ initMsg, module, }: {
        initMsg?: Binary;
        module: Module;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    registerModule: ({ module, moduleAddr, }: {
        module: Module;
        moduleAddr: string;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    removeModule: ({ moduleName, }: {
        moduleName: string;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    execOnModule: ({ execMsg, moduleName, }: {
        execMsg: Binary;
        moduleName: string;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    updateConfig: ({ root, vcAddr, }: {
        root?: string;
        vcAddr?: string;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    upgrade: ({ migrateMsg, module, }: {
        migrateMsg?: Binary;
        module: Module;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    suspendOs: ({ newStatus, }: {
        newStatus: boolean;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    updateInfo: ({ description, link, osName, }: {
        description?: string;
        link?: string;
        osName?: string;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}
export declare class ManagerClient extends ManagerQueryClient implements ManagerInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    setAdmin: ({ admin, governanceType, }: {
        admin: string;
        governanceType?: string | undefined;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    createModule: ({ initMsg, module, }: {
        initMsg?: string | undefined;
        module: Module;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    registerModule: ({ module, moduleAddr, }: {
        module: Module;
        moduleAddr: string;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    removeModule: ({ moduleName, }: {
        moduleName: string;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    execOnModule: ({ execMsg, moduleName, }: {
        execMsg: Binary;
        moduleName: string;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    updateConfig: ({ root, vcAddr, }: {
        root?: string | undefined;
        vcAddr?: string | undefined;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    upgrade: ({ migrateMsg, module, }: {
        migrateMsg?: string | undefined;
        module: Module;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    suspendOs: ({ newStatus, }: {
        newStatus: boolean;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    updateInfo: ({ description, link, osName, }: {
        description?: string | undefined;
        link?: string | undefined;
        osName?: string | undefined;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}
