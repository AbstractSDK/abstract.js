/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.10.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { UseQueryOptions, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee, Coin } from "@cosmjs/amino";
import { Binary, ConfigResponse, Module, InfoResponse, ModuleAddressesResponse, ModuleInfosResponse, ModuleVersionsResponse } from "../types/Manager.types";
import { ManagerQueryClient, ManagerClient } from "../contracts/Manager.client";
export interface ManagerReactQuery<TResponse> {
    client: ManagerQueryClient | undefined;
    options?: Omit<UseQueryOptions<TResponse, Error, TResponse, (string | undefined)[]>, "'queryKey' | 'queryFn' | 'initialData'"> & {
        initialData?: undefined;
    };
}
export interface ManagerInfoQuery extends ManagerReactQuery<InfoResponse> {
}
export declare function useManagerInfoQuery({ client, options }: ManagerInfoQuery): import("@tanstack/react-query").UseQueryResult<InfoResponse, Error>;
export interface ManagerConfigQuery extends ManagerReactQuery<ConfigResponse> {
}
export declare function useManagerConfigQuery({ client, options }: ManagerConfigQuery): import("@tanstack/react-query").UseQueryResult<ConfigResponse, Error>;
export interface ManagerModuleInfosQuery extends ManagerReactQuery<ModuleInfosResponse> {
    args: {
        iterLimit?: number;
        lastModuleName?: string;
    };
}
export declare function useManagerModuleInfosQuery({ client, args, options }: ManagerModuleInfosQuery): import("@tanstack/react-query").UseQueryResult<ModuleInfosResponse, Error>;
export interface ManagerModuleAddressesQuery extends ManagerReactQuery<ModuleAddressesResponse> {
    args: {
        names: string[];
    };
}
export declare function useManagerModuleAddressesQuery({ client, args, options }: ManagerModuleAddressesQuery): import("@tanstack/react-query").UseQueryResult<ModuleAddressesResponse, Error>;
export interface ManagerModuleVersionsQuery extends ManagerReactQuery<ModuleVersionsResponse> {
    args: {
        names: string[];
    };
}
export declare function useManagerModuleVersionsQuery({ client, args, options }: ManagerModuleVersionsQuery): import("@tanstack/react-query").UseQueryResult<ModuleVersionsResponse, Error>;
export interface ManagerUpdateInfoMutation {
    client: ManagerClient;
    msg: {
        description?: string;
        link?: string;
        name?: string;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useManagerUpdateInfoMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ManagerUpdateInfoMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, ManagerUpdateInfoMutation, unknown>;
export interface ManagerSuspendOsMutation {
    client: ManagerClient;
    msg: {
        newStatus: boolean;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useManagerSuspendOsMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ManagerSuspendOsMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, ManagerSuspendOsMutation, unknown>;
export interface ManagerUpgradeMutation {
    client: ManagerClient;
    msg: {
        migrateMsg?: Binary;
        module: Module;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useManagerUpgradeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ManagerUpgradeMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, ManagerUpgradeMutation, unknown>;
export interface ManagerUpdateConfigMutation {
    client: ManagerClient;
    msg: {
        root?: string;
        vcAddr?: string;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useManagerUpdateConfigMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ManagerUpdateConfigMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, ManagerUpdateConfigMutation, unknown>;
export interface ManagerExecOnModuleMutation {
    client: ManagerClient;
    msg: {
        execMsg: Binary;
        moduleName: string;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useManagerExecOnModuleMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ManagerExecOnModuleMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, ManagerExecOnModuleMutation, unknown>;
export interface ManagerRemoveModuleMutation {
    client: ManagerClient;
    msg: {
        moduleName: string;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useManagerRemoveModuleMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ManagerRemoveModuleMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, ManagerRemoveModuleMutation, unknown>;
export interface ManagerRegisterModuleMutation {
    client: ManagerClient;
    msg: {
        module: Module;
        moduleAddr: string;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useManagerRegisterModuleMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ManagerRegisterModuleMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, ManagerRegisterModuleMutation, unknown>;
export interface ManagerCreateModuleMutation {
    client: ManagerClient;
    msg: {
        initMsg?: Binary;
        module: Module;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useManagerCreateModuleMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ManagerCreateModuleMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, ManagerCreateModuleMutation, unknown>;
export interface ManagerSetAdminMutation {
    client: ManagerClient;
    msg: {
        admin: string;
        governanceType?: string;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useManagerSetAdminMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ManagerSetAdminMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, ManagerSetAdminMutation, unknown>;
