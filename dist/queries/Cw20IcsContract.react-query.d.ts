/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.6.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { UseQueryOptions, UseMutationOptions } from "@tanstack/react-query";
import { AdminResponse, AllowedResponse, ChannelResponse, Coin, ConfigResponse, ListAllowedResponse, ListChannelsResponse, PortResponse } from "../contracts/Cw20IcsContract";
import { Cw20IcsQueryClient, Cw20IcsClient } from "../contracts/Cw20IcsContract";
export interface Cw20IcsReactQuery<TResponse> {
    client: Cw20IcsQueryClient | undefined;
    options?: Omit<UseQueryOptions<TResponse | undefined, Error, TResponse, (string | undefined)[]>, "'queryKey' | 'queryFn' | 'initialData'"> & {
        initialData?: undefined;
    };
}
export interface Cw20IcsListAllowedQuery extends Cw20IcsReactQuery<ListAllowedResponse> {
    args: {
        limit?: number;
        startAfter?: string;
    };
}
export declare function useCw20IcsListAllowedQuery({ client, args, options }: Cw20IcsListAllowedQuery): import("@tanstack/react-query").UseQueryResult<ListAllowedResponse, Error>;
export interface Cw20IcsAllowedQuery extends Cw20IcsReactQuery<AllowedResponse> {
    args: {
        contract: string;
    };
}
export declare function useCw20IcsAllowedQuery({ client, args, options }: Cw20IcsAllowedQuery): import("@tanstack/react-query").UseQueryResult<AllowedResponse, Error>;
export interface Cw20IcsAdminQuery extends Cw20IcsReactQuery<AdminResponse> {
}
export declare function useCw20IcsAdminQuery({ client, options }: Cw20IcsAdminQuery): import("@tanstack/react-query").UseQueryResult<AdminResponse, Error>;
export interface Cw20IcsConfigQuery extends Cw20IcsReactQuery<ConfigResponse> {
}
export declare function useCw20IcsConfigQuery({ client, options }: Cw20IcsConfigQuery): import("@tanstack/react-query").UseQueryResult<ConfigResponse, Error>;
export interface Cw20IcsChannelQuery extends Cw20IcsReactQuery<ChannelResponse> {
    args: {
        id: string;
    };
}
export declare function useCw20IcsChannelQuery({ client, args, options }: Cw20IcsChannelQuery): import("@tanstack/react-query").UseQueryResult<ChannelResponse, Error>;
export interface Cw20IcsListChannelsQuery extends Cw20IcsReactQuery<ListChannelsResponse> {
}
export declare function useCw20IcsListChannelsQuery({ client, options }: Cw20IcsListChannelsQuery): import("@tanstack/react-query").UseQueryResult<ListChannelsResponse, Error>;
export interface Cw20IcsPortQuery extends Cw20IcsReactQuery<PortResponse> {
}
export declare function useCw20IcsPortQuery({ client, options }: Cw20IcsPortQuery): import("@tanstack/react-query").UseQueryResult<PortResponse, Error>;
export interface Cw20IcsUpdateAdminMutation {
    client: Cw20IcsClient;
    msg: {
        admin: string;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: readonly Coin[];
    };
}
export declare function useCw20IcsUpdateAdminMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Cw20IcsUpdateAdminMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, Cw20IcsUpdateAdminMutation, unknown>;
export interface Cw20IcsAllowMutation {
    client: Cw20IcsClient;
    msg: {
        contract: string;
        gasLimit?: number;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: readonly Coin[];
    };
}
export declare function useCw20IcsAllowMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Cw20IcsAllowMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, Cw20IcsAllowMutation, unknown>;
export interface Cw20IcsTransferMutation {
    client: Cw20IcsClient;
    msg: {
        channel: string;
        remoteAddress: string;
        timeout?: number;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: readonly Coin[];
    };
}
export declare function useCw20IcsTransferMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Cw20IcsTransferMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, Cw20IcsTransferMutation, unknown>;
export interface Cw20IcsReceiveMutation {
    client: Cw20IcsClient;
    msg: {
        amount: string;
        msg: string;
        sender: string;
    };
    args?: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: readonly Coin[];
    };
}
export declare function useCw20IcsReceiveMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Cw20IcsReceiveMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, Cw20IcsReceiveMutation, unknown>;
