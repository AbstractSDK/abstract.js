/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.11.1.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
import { UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { ExecuteResult } from '@cosmjs/cosmwasm-stargate';
import { StdFee, Coin } from '@cosmjs/amino';
import { Binary, ConfigResponse, Module, InfoResponse, ModuleAddressesResponse, ModuleInfosResponse, ModuleVersionsResponse } from '../types/Manager.types';
import { ManagerQueryClient, ManagerClient } from '../contracts/Manager.client';
export declare const managerQueryKeys: {
    contract: readonly [{
        readonly contract: "manager";
    }];
    address: (contractAddress: string | undefined) => readonly [{
        readonly address: string | undefined;
        readonly contract: "manager";
    }];
    moduleVersions: (contractAddress: string | undefined, args?: Record<string, unknown>) => readonly [{
        readonly method: "module_versions";
        readonly args: Record<string, unknown> | undefined;
        readonly address: string | undefined;
        readonly contract: "manager";
    }];
    moduleAddresses: (contractAddress: string | undefined, args?: Record<string, unknown>) => readonly [{
        readonly method: "module_addresses";
        readonly args: Record<string, unknown> | undefined;
        readonly address: string | undefined;
        readonly contract: "manager";
    }];
    moduleInfos: (contractAddress: string | undefined, args?: Record<string, unknown>) => readonly [{
        readonly method: "module_infos";
        readonly args: Record<string, unknown> | undefined;
        readonly address: string | undefined;
        readonly contract: "manager";
    }];
    config: (contractAddress: string | undefined, args?: Record<string, unknown>) => readonly [{
        readonly method: "config";
        readonly args: Record<string, unknown> | undefined;
        readonly address: string | undefined;
        readonly contract: "manager";
    }];
    info: (contractAddress: string | undefined, args?: Record<string, unknown>) => readonly [{
        readonly method: "info";
        readonly args: Record<string, unknown> | undefined;
        readonly address: string | undefined;
        readonly contract: "manager";
    }];
};
export interface ManagerReactQuery<TResponse, TData = TResponse> {
    client: ManagerQueryClient | undefined;
    options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
        initialData?: undefined;
    };
}
export interface ManagerInfoQuery<TData> extends ManagerReactQuery<InfoResponse, TData> {
}
export declare function useManagerInfoQuery<TData = InfoResponse>({ client, options, }: ManagerInfoQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface ManagerConfigQuery<TData> extends ManagerReactQuery<ConfigResponse, TData> {
}
export declare function useManagerConfigQuery<TData = ConfigResponse>({ client, options, }: ManagerConfigQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface ManagerModuleInfosQuery<TData> extends ManagerReactQuery<ModuleInfosResponse, TData> {
    args: {
        iterLimit?: number;
        lastModuleName?: string;
    };
}
export declare function useManagerModuleInfosQuery<TData = ModuleInfosResponse>({ client, args, options, }: ManagerModuleInfosQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface ManagerModuleAddressesQuery<TData> extends ManagerReactQuery<ModuleAddressesResponse, TData> {
    args: {
        names: string[];
    };
}
export declare function useManagerModuleAddressesQuery<TData = ModuleAddressesResponse>({ client, args, options, }: ManagerModuleAddressesQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface ManagerModuleVersionsQuery<TData> extends ManagerReactQuery<ModuleVersionsResponse, TData> {
    args: {
        names: string[];
    };
}
export declare function useManagerModuleVersionsQuery<TData = ModuleVersionsResponse>({ client, args, options, }: ManagerModuleVersionsQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface ManagerUpdateInfoMutation {
    client: ManagerClient;
    msg: {
        description?: string;
        link?: string;
        name?: string;
    };
    args?: {
        fee?: number | StdFee | 'auto';
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useManagerUpdateInfoMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ManagerUpdateInfoMutation>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, ManagerUpdateInfoMutation, unknown>;
export interface ManagerSuspendOsMutation {
    client: ManagerClient;
    msg: {
        newStatus: boolean;
    };
    args?: {
        fee?: number | StdFee | 'auto';
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useManagerSuspendOsMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ManagerSuspendOsMutation>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, ManagerSuspendOsMutation, unknown>;
export interface ManagerUpgradeMutation {
    client: ManagerClient;
    msg: {
        migrateMsg?: Binary;
        module: Module;
    };
    args?: {
        fee?: number | StdFee | 'auto';
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useManagerUpgradeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ManagerUpgradeMutation>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, ManagerUpgradeMutation, unknown>;
export interface ManagerUpdateConfigMutation {
    client: ManagerClient;
    msg: {
        root?: string;
        vcAddr?: string;
    };
    args?: {
        fee?: number | StdFee | 'auto';
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useManagerUpdateConfigMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ManagerUpdateConfigMutation>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, ManagerUpdateConfigMutation, unknown>;
export interface ManagerExecOnModuleMutation {
    client: ManagerClient;
    msg: {
        execMsg: Binary;
        moduleName: string;
    };
    args?: {
        fee?: number | StdFee | 'auto';
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useManagerExecOnModuleMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ManagerExecOnModuleMutation>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, ManagerExecOnModuleMutation, unknown>;
export interface ManagerRemoveModuleMutation {
    client: ManagerClient;
    msg: {
        moduleName: string;
    };
    args?: {
        fee?: number | StdFee | 'auto';
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useManagerRemoveModuleMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ManagerRemoveModuleMutation>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, ManagerRemoveModuleMutation, unknown>;
export interface ManagerRegisterModuleMutation {
    client: ManagerClient;
    msg: {
        module: Module;
        moduleAddr: string;
    };
    args?: {
        fee?: number | StdFee | 'auto';
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useManagerRegisterModuleMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ManagerRegisterModuleMutation>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, ManagerRegisterModuleMutation, unknown>;
export interface ManagerCreateModuleMutation {
    client: ManagerClient;
    msg: {
        initMsg?: Binary;
        module: Module;
    };
    args?: {
        fee?: number | StdFee | 'auto';
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useManagerCreateModuleMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ManagerCreateModuleMutation>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, ManagerCreateModuleMutation, unknown>;
export interface ManagerSetAdminMutation {
    client: ManagerClient;
    msg: {
        admin: string;
        governanceType?: string;
    };
    args?: {
        fee?: number | StdFee | 'auto';
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useManagerSetAdminMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ManagerSetAdminMutation>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, ManagerSetAdminMutation, unknown>;
