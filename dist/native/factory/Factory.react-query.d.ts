/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
import { UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { ExecuteResult } from '@cosmjs/cosmwasm-stargate';
import { StdFee, Coin } from '@cosmjs/amino';
import { GovernanceDetails, Cw20ReceiveMsg, ConfigResponse } from './Factory.types';
import { FactoryQueryClient, FactoryClient } from './Factory.client';
export declare const factoryQueryKeys: {
    contract: readonly [{
        readonly contract: "factory";
    }];
    address: (contractAddress: string | undefined) => readonly [{
        readonly address: string | undefined;
        readonly contract: "factory";
    }];
    config: (contractAddress: string | undefined, args?: Record<string, unknown>) => readonly [{
        readonly method: "config";
        readonly args: Record<string, unknown> | undefined;
        readonly address: string | undefined;
        readonly contract: "factory";
    }];
};
export declare const factoryQueries: {
    config: <TData = ConfigResponse>({ client, options, }: FactoryConfigQuery<TData>) => UseQueryOptions<ConfigResponse, Error, TData, import("@tanstack/react-query").QueryKey>;
};
export interface FactoryReactQuery<TResponse, TData = TResponse> {
    client: FactoryQueryClient | undefined;
    options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
        initialData?: undefined;
    };
}
export interface FactoryConfigQuery<TData> extends FactoryReactQuery<ConfigResponse, TData> {
}
export declare function useFactoryConfigQuery<TData = ConfigResponse>({ client, options, }: FactoryConfigQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface FactoryCreateOsMutation {
    client: FactoryClient;
    msg: {
        description?: string;
        governance: GovernanceDetails;
        link?: string;
        name: string;
    };
    args?: {
        fee?: number | StdFee | 'auto';
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useFactoryCreateOsMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, FactoryCreateOsMutation>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, FactoryCreateOsMutation, unknown>;
export interface FactoryUpdateConfigMutation {
    client: FactoryClient;
    msg: {
        admin?: string;
        ansHostContract?: string;
        moduleFactoryAddress?: string;
        subscriptionAddress?: string;
        versionControlContract?: string;
    };
    args?: {
        fee?: number | StdFee | 'auto';
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useFactoryUpdateConfigMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, FactoryUpdateConfigMutation>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, FactoryUpdateConfigMutation, unknown>;
export interface FactoryReceiveMutation {
    client: FactoryClient;
    msg: Cw20ReceiveMsg;
    args?: {
        fee?: number | StdFee | 'auto';
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useFactoryReceiveMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, FactoryReceiveMutation>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, FactoryReceiveMutation, unknown>;
