/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.4.2.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
import { UseQueryOptions } from '@tanstack/react-query';
import { AssetListResponse, AssetsResponse, ContractListResponse, ContractsResponse } from '../contracts/MemoryContract';
import { MemoryQueryClient } from '../contracts/MemoryContract';
export interface MemoryAssetListQuery {
    client?: MemoryQueryClient;
    options?: Omit<UseQueryOptions<AssetListResponse | undefined, Error, AssetListResponse, (string | undefined)[]>, "'queryKey' | 'queryFn' | 'initialData'"> & {
        initialData?: undefined;
    };
    args: {
        iterLimit?: number;
        lastAssetName?: string;
    };
}
export declare function useMemoryAssetListQuery({ client, args, options }: MemoryAssetListQuery): import("@tanstack/react-query").UseQueryResult<AssetListResponse, Error>;
export interface MemoryContractListQuery {
    client?: MemoryQueryClient;
    options?: Omit<UseQueryOptions<ContractListResponse | undefined, Error, ContractListResponse, (string | undefined)[]>, "'queryKey' | 'queryFn' | 'initialData'"> & {
        initialData?: undefined;
    };
    args: {
        iterLimit?: number;
        lastContractName?: string;
    };
}
export declare function useMemoryContractListQuery({ client, args, options }: MemoryContractListQuery): import("@tanstack/react-query").UseQueryResult<ContractListResponse, Error>;
export interface MemoryContractsQuery {
    client?: MemoryQueryClient;
    options?: Omit<UseQueryOptions<ContractsResponse | undefined, Error, ContractsResponse, (string | undefined)[]>, "'queryKey' | 'queryFn' | 'initialData'"> & {
        initialData?: undefined;
    };
    args: {
        names: string[];
    };
}
export declare function useMemoryContractsQuery({ client, args, options }: MemoryContractsQuery): import("@tanstack/react-query").UseQueryResult<ContractsResponse, Error>;
export interface MemoryAssetsQuery {
    client?: MemoryQueryClient;
    options?: Omit<UseQueryOptions<AssetsResponse | undefined, Error, AssetsResponse, (string | undefined)[]>, "'queryKey' | 'queryFn' | 'initialData'"> & {
        initialData?: undefined;
    };
    args: {
        names: string[];
    };
}
export declare function useMemoryAssetsQuery({ client, args, options }: MemoryAssetsQuery): import("@tanstack/react-query").UseQueryResult<AssetsResponse, Error>;
