/**
* This file was automatically generated by cosmwasm-typescript-gen@0.2.15.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/
import { CosmWasmClient, ExecuteResult, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
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
export interface VersionControlReadOnlyInterface {
    contractAddress: string;
    osCore: ({ osId }: {
        osId: number;
    }) => Promise<OsCoreResponse>;
    codeId: ({ module }: {
        module: ModuleInfo;
    }) => Promise<CodeIdResponse>;
    apiAddress: ({ module }: {
        module: ModuleInfo;
    }) => Promise<ApiAddressResponse>;
    config: () => Promise<ConfigResponse>;
    codeIds: ({ iterLimit, lastModule }: {
        iterLimit?: number;
        lastModule?: ContractVersion;
    }) => Promise<CodeIdsResponse>;
    apiAddresses: ({ iterLimit, lastApiModule }: {
        iterLimit?: number;
        lastApiModule?: ContractVersion;
    }) => Promise<ApiAddressesResponse>;
}
export declare class VersionControlQueryClient implements VersionControlReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    osCore: ({ osId }: {
        osId: number;
    }) => Promise<OsCoreResponse>;
    codeId: ({ module }: {
        module: ModuleInfo;
    }) => Promise<CodeIdResponse>;
    apiAddress: ({ module }: {
        module: ModuleInfo;
    }) => Promise<ApiAddressResponse>;
    config: () => Promise<ConfigResponse>;
    codeIds: ({ iterLimit, lastModule }: {
        iterLimit?: number | undefined;
        lastModule?: ContractVersion | undefined;
    }) => Promise<CodeIdsResponse>;
    apiAddresses: ({ iterLimit, lastApiModule }: {
        iterLimit?: number | undefined;
        lastApiModule?: ContractVersion | undefined;
    }) => Promise<ApiAddressesResponse>;
}
export interface VersionControlInterface extends VersionControlReadOnlyInterface {
    contractAddress: string;
    sender: string;
    addCodeId: ({ codeId, module, version }: {
        codeId: number;
        module: string;
        version: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    removeCodeId: ({ module, version }: {
        module: string;
        version: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    addApi: ({ address, module, version }: {
        address: string;
        module: string;
        version: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    removeApi: ({ module, version }: {
        module: string;
        version: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    addOs: ({ managerAddress, osId, proxyAddress }: {
        managerAddress: string;
        osId: number;
        proxyAddress: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    setAdmin: ({ newAdmin }: {
        newAdmin: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    setFactory: ({ newFactory }: {
        newFactory: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}
export declare class VersionControlClient extends VersionControlQueryClient implements VersionControlInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    addCodeId: ({ codeId, module, version }: {
        codeId: number;
        module: string;
        version: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    removeCodeId: ({ module, version }: {
        module: string;
        version: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    addApi: ({ address, module, version }: {
        address: string;
        module: string;
        version: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    removeApi: ({ module, version }: {
        module: string;
        version: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    addOs: ({ managerAddress, osId, proxyAddress }: {
        managerAddress: string;
        osId: number;
        proxyAddress: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    setAdmin: ({ newAdmin }: {
        newAdmin: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    setFactory: ({ newFactory }: {
        newFactory: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}
