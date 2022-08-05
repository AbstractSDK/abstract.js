/**
 * This file was automatically generated by cosmwasm-typescript-gen@0.2.15.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the cosmwasm-typescript-gen generate command to regenerate this file.
 */
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { UseQueryOptions, UseMutationOptions } from "@tanstack/react-query";
import { ApiAddressResponse, ContractVersion, ApiAddressesResponse, CodeIdResponse, CodeIdsResponse, ConfigResponse, ModuleInfo, OsCoreResponse } from "../contracts/VersionControlContract";
import { VersionControlQueryClient, VersionControlClient } from "../contracts/VersionControlContract";
export interface VersionControlApiAddressesQuery {
    client?: VersionControlQueryClient;
    options?: Omit<UseQueryOptions<ApiAddressesResponse | undefined, Error, ApiAddressesResponse, (string | undefined)[]>, 'queryKey' | 'queryFn' | 'initialData'> & {
        initialData?: () => undefined;
    };
    args: {
        iterLimit?: number;
        lastApiModule?: ContractVersion;
    };
}
export declare function useVersionControlApiAddressesQuery({ client, args, options, }: VersionControlApiAddressesQuery): import("@tanstack/react-query").UseQueryResult<ApiAddressesResponse, Error>;
export interface VersionControlCodeIdsQuery {
    client?: VersionControlQueryClient;
    options?: Omit<UseQueryOptions<CodeIdsResponse | undefined, Error, CodeIdsResponse, (string | undefined)[]>, 'queryKey' | 'queryFn' | 'initialData'> & {
        initialData?: () => undefined;
    };
    args: {
        iterLimit?: number;
        lastModule?: ContractVersion;
    };
}
export declare function useVersionControlCodeIdsQuery({ client, args, options, }: VersionControlCodeIdsQuery): import("@tanstack/react-query").UseQueryResult<CodeIdsResponse, Error>;
export interface VersionControlConfigQuery {
    client?: VersionControlQueryClient;
    options?: Omit<UseQueryOptions<ConfigResponse | undefined, Error, ConfigResponse, (string | undefined)[]>, 'queryKey' | 'queryFn' | 'initialData'> & {
        initialData?: () => undefined;
    };
}
export declare function useVersionControlConfigQuery({ client, options }: VersionControlConfigQuery): import("@tanstack/react-query").UseQueryResult<ConfigResponse, Error>;
export interface VersionControlApiAddressQuery {
    client?: VersionControlQueryClient;
    options?: Omit<UseQueryOptions<ApiAddressResponse | undefined, Error, ApiAddressResponse, (string | undefined)[]>, 'queryKey' | 'queryFn' | 'initialData'> & {
        initialData?: () => undefined;
    };
    args: {
        module: ModuleInfo;
    };
}
export declare function useVersionControlApiAddressQuery({ client, args, options, }: VersionControlApiAddressQuery): import("@tanstack/react-query").UseQueryResult<ApiAddressResponse, Error>;
export interface VersionControlCodeIdQuery {
    client?: VersionControlQueryClient;
    options?: Omit<UseQueryOptions<CodeIdResponse | undefined, Error, CodeIdResponse, (string | undefined)[]>, 'queryKey' | 'queryFn' | 'initialData'> & {
        initialData?: () => undefined;
    };
    args: {
        module: ModuleInfo;
    };
}
export declare function useVersionControlCodeIdQuery({ client, args, options }: VersionControlCodeIdQuery): import("@tanstack/react-query").UseQueryResult<CodeIdResponse, Error>;
interface VersionControlReactQuery<QueryResponse> {
    client?: VersionControlQueryClient;
    options?: Omit<UseQueryOptions<QueryResponse | undefined, Error, QueryResponse, (string | undefined)[]>, 'queryKey' | 'queryFn' | 'initialData'> & {
        initialData?: () => undefined;
    };
}
export interface VersionControlOsCoreQuery extends VersionControlReactQuery<OsCoreResponse> {
    args: {
        osId: number;
    };
}
export declare function useVersionControlOsCoreQuery({ client, args, options }: VersionControlOsCoreQuery): import("@tanstack/react-query").UseQueryResult<OsCoreResponse, Error>;
export interface VersionControlSetFactoryMutation {
    client: VersionControlClient;
    msg: {
        newFactory: string;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: readonly Coin[];
    };
}
export declare function useVersionControlSetFactoryMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, VersionControlSetFactoryMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, VersionControlSetFactoryMutation, unknown>;
export interface VersionControlSetAdminMutation {
    client: VersionControlClient;
    msg: {
        newAdmin: string;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: readonly Coin[];
    };
}
export declare function useVersionControlSetAdminMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, VersionControlSetAdminMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, VersionControlSetAdminMutation, unknown>;
export interface VersionControlAddOsMutation {
    client: VersionControlClient;
    msg: {
        managerAddress: string;
        osId: number;
        proxyAddress: string;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: readonly Coin[];
    };
}
export declare function useVersionControlAddOsMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, VersionControlAddOsMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, VersionControlAddOsMutation, unknown>;
export interface VersionControlRemoveApiMutation {
    client: VersionControlClient;
    msg: {
        module: string;
        version: string;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: readonly Coin[];
    };
}
export declare function useVersionControlRemoveApiMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, VersionControlRemoveApiMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, VersionControlRemoveApiMutation, unknown>;
export interface VersionControlAddApiMutation {
    client: VersionControlClient;
    msg: {
        address: string;
        module: string;
        version: string;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: readonly Coin[];
    };
}
export declare function useVersionControlAddApiMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, VersionControlAddApiMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, VersionControlAddApiMutation, unknown>;
export interface VersionControlRemoveCodeIdMutation {
    client: VersionControlClient;
    msg: {
        module: string;
        version: string;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: readonly Coin[];
    };
}
export declare function useVersionControlRemoveCodeIdMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, VersionControlRemoveCodeIdMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, VersionControlRemoveCodeIdMutation, unknown>;
export interface VersionControlAddCodeIdMutation {
    client: VersionControlClient;
    msg: {
        codeId: number;
        module: string;
        version: string;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: readonly Coin[];
    };
}
export declare function useVersionControlAddCodeIdMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, VersionControlAddCodeIdMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, VersionControlAddCodeIdMutation, unknown>;
export {};
