/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.14.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
import { UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { ExecuteResult } from '@cosmjs/cosmwasm-stargate';
import { StdFee, Coin } from '@cosmjs/amino';
import { AssetListResponse, AssetsResponse, ContractListResponse, ContractEntry, ContractsResponse, UncheckedContractEntry } from './Memory.types';
import { MemoryQueryClient, MemoryClient } from './Memory.client';
export declare const memoryQueryKeys: {
    contract: readonly [{
        readonly contract: "memory";
    }];
    address: (contractAddress: string | undefined) => readonly [{
        readonly address: string | undefined;
        readonly contract: "memory";
    }];
    assets: (contractAddress: string | undefined, args?: Record<string, unknown>) => readonly [{
        readonly method: "assets";
        readonly args: Record<string, unknown> | undefined;
        readonly address: string | undefined;
        readonly contract: "memory";
    }];
    contracts: (contractAddress: string | undefined, args?: Record<string, unknown>) => readonly [{
        readonly method: "contracts";
        readonly args: Record<string, unknown> | undefined;
        readonly address: string | undefined;
        readonly contract: "memory";
    }];
    contractList: (contractAddress: string | undefined, args?: Record<string, unknown>) => readonly [{
        readonly method: "contract_list";
        readonly args: Record<string, unknown> | undefined;
        readonly address: string | undefined;
        readonly contract: "memory";
    }];
    assetList: (contractAddress: string | undefined, args?: Record<string, unknown>) => readonly [{
        readonly method: "asset_list";
        readonly args: Record<string, unknown> | undefined;
        readonly address: string | undefined;
        readonly contract: "memory";
    }];
};
export interface MemoryReactQuery<TResponse, TData = TResponse> {
    client: MemoryQueryClient | undefined;
    options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
        initialData?: undefined;
    };
}
export interface MemoryAssetListQuery<TData> extends MemoryReactQuery<AssetListResponse, TData> {
    args: {
        pageSize?: number;
        pageToken?: string;
    };
}
export declare function useMemoryAssetListQuery<TData = AssetListResponse>({ client, args, options, }: MemoryAssetListQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface MemoryContractListQuery<TData> extends MemoryReactQuery<ContractListResponse, TData> {
    args: {
        pageSize?: number;
        pageToken?: ContractEntry;
    };
}
export declare function useMemoryContractListQuery<TData = ContractListResponse>({ client, args, options, }: MemoryContractListQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface MemoryContractsQuery<TData> extends MemoryReactQuery<ContractsResponse, TData> {
    args: {
        names: ContractEntry[];
    };
}
export declare function useMemoryContractsQuery<TData = ContractsResponse>({ client, args, options, }: MemoryContractsQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface MemoryAssetsQuery<TData> extends MemoryReactQuery<AssetsResponse, TData> {
    args: {
        names: string[];
    };
}
export declare function useMemoryAssetsQuery<TData = AssetsResponse>({ client, args, options, }: MemoryAssetsQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface MemorySetAdminMutation {
    client: MemoryClient;
    msg: {
        admin: string;
    };
    args?: {
        fee?: number | StdFee | 'auto';
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useMemorySetAdminMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, MemorySetAdminMutation>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, MemorySetAdminMutation, unknown>;
export interface MemoryUpdateAssetAddressesMutation {
    client: MemoryClient;
    msg: {
        toAdd: string[][];
        toRemove: string[];
    };
    args?: {
        fee?: number | StdFee | 'auto';
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useMemoryUpdateAssetAddressesMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, MemoryUpdateAssetAddressesMutation>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, MemoryUpdateAssetAddressesMutation, unknown>;
export interface MemoryUpdateContractAddressesMutation {
    client: MemoryClient;
    msg: {
        toAdd: UncheckedContractEntry[][];
        toRemove: UncheckedContractEntry[];
    };
    args?: {
        fee?: number | StdFee | 'auto';
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useMemoryUpdateContractAddressesMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, MemoryUpdateContractAddressesMutation>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, MemoryUpdateContractAddressesMutation, unknown>;
