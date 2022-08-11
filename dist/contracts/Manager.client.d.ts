/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.10.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from '@cosmjs/cosmwasm-stargate';
import { Coin, StdFee } from '@cosmjs/amino';
import { Binary, ConfigResponse, Module, InfoResponse, ModuleAddressesResponse, ModuleInfosResponse, ModuleVersionsResponse } from '../types/Manager.types';
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
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    createModule: ({ initMsg, module, }: {
        initMsg?: Binary;
        module: Module;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    registerModule: ({ module, moduleAddr, }: {
        module: Module;
        moduleAddr: string;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    removeModule: ({ moduleName, }: {
        moduleName: string;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    execOnModule: ({ execMsg, moduleName, }: {
        execMsg: Binary;
        moduleName: string;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateConfig: ({ root, vcAddr, }: {
        root?: string;
        vcAddr?: string;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    upgrade: ({ migrateMsg, module, }: {
        migrateMsg?: Binary;
        module: Module;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    suspendOs: ({ newStatus, }: {
        newStatus: boolean;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateInfo: ({ description, link, name, }: {
        description?: string;
        link?: string;
        name?: string;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class ManagerClient extends ManagerQueryClient implements ManagerInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    setAdmin: ({ admin, governanceType, }: {
        admin: string;
        governanceType?: string | undefined;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    createModule: ({ initMsg, module, }: {
        initMsg?: string | undefined;
        module: Module;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    registerModule: ({ module, moduleAddr, }: {
        module: Module;
        moduleAddr: string;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    removeModule: ({ moduleName, }: {
        moduleName: string;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    execOnModule: ({ execMsg, moduleName, }: {
        execMsg: Binary;
        moduleName: string;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateConfig: ({ root, vcAddr, }: {
        root?: string | undefined;
        vcAddr?: string | undefined;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    upgrade: ({ migrateMsg, module, }: {
        migrateMsg?: string | undefined;
        module: Module;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    suspendOs: ({ newStatus, }: {
        newStatus: boolean;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateInfo: ({ description, link, name, }: {
        description?: string | undefined;
        link?: string | undefined;
        name?: string | undefined;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
