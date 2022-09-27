/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.14.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
import { UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { ExecuteResult } from '@cosmjs/cosmwasm-stargate';
import { StdFee } from '@cosmjs/amino';
import { AssetConfigResponse, AssetsResponse, BaseAssetResponse, CheckValidityResponse, ConfigResponse, CosmosMsgForEmpty, Coin, UncheckedProxyAsset, HoldingAmountResponse, HoldingValueResponse, TotalValueResponse } from './Proxy.types';
import { ProxyQueryClient, ProxyClient } from './Proxy.client';
export declare const proxyQueryKeys: {
    contract: readonly [{
        readonly contract: "proxy";
    }];
    address: (contractAddress: string | undefined) => readonly [{
        readonly address: string | undefined;
        readonly contract: "proxy";
    }];
    config: (contractAddress: string | undefined, args?: Record<string, unknown>) => readonly [{
        readonly method: "config";
        readonly args: Record<string, unknown> | undefined;
        readonly address: string | undefined;
        readonly contract: "proxy";
    }];
    totalValue: (contractAddress: string | undefined, args?: Record<string, unknown>) => readonly [{
        readonly method: "total_value";
        readonly args: Record<string, unknown> | undefined;
        readonly address: string | undefined;
        readonly contract: "proxy";
    }];
    holdingValue: (contractAddress: string | undefined, args?: Record<string, unknown>) => readonly [{
        readonly method: "holding_value";
        readonly args: Record<string, unknown> | undefined;
        readonly address: string | undefined;
        readonly contract: "proxy";
    }];
    holdingAmount: (contractAddress: string | undefined, args?: Record<string, unknown>) => readonly [{
        readonly method: "holding_amount";
        readonly args: Record<string, unknown> | undefined;
        readonly address: string | undefined;
        readonly contract: "proxy";
    }];
    assetConfig: (contractAddress: string | undefined, args?: Record<string, unknown>) => readonly [{
        readonly method: "asset_config";
        readonly args: Record<string, unknown> | undefined;
        readonly address: string | undefined;
        readonly contract: "proxy";
    }];
    assets: (contractAddress: string | undefined, args?: Record<string, unknown>) => readonly [{
        readonly method: "assets";
        readonly args: Record<string, unknown> | undefined;
        readonly address: string | undefined;
        readonly contract: "proxy";
    }];
    checkValidity: (contractAddress: string | undefined, args?: Record<string, unknown>) => readonly [{
        readonly method: "check_validity";
        readonly args: Record<string, unknown> | undefined;
        readonly address: string | undefined;
        readonly contract: "proxy";
    }];
    baseAsset: (contractAddress: string | undefined, args?: Record<string, unknown>) => readonly [{
        readonly method: "base_asset";
        readonly args: Record<string, unknown> | undefined;
        readonly address: string | undefined;
        readonly contract: "proxy";
    }];
};
export interface ProxyReactQuery<TResponse, TData = TResponse> {
    client: ProxyQueryClient | undefined;
    options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
        initialData?: undefined;
    };
}
export interface ProxyBaseAssetQuery<TData> extends ProxyReactQuery<BaseAssetResponse, TData> {
}
export declare function useProxyBaseAssetQuery<TData = BaseAssetResponse>({ client, options, }: ProxyBaseAssetQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface ProxyCheckValidityQuery<TData> extends ProxyReactQuery<CheckValidityResponse, TData> {
}
export declare function useProxyCheckValidityQuery<TData = CheckValidityResponse>({ client, options, }: ProxyCheckValidityQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface ProxyAssetsQuery<TData> extends ProxyReactQuery<AssetsResponse, TData> {
    args: {
        pageSize?: number;
        pageToken?: string;
    };
}
export declare function useProxyAssetsQuery<TData = AssetsResponse>({ client, args, options, }: ProxyAssetsQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface ProxyAssetConfigQuery<TData> extends ProxyReactQuery<AssetConfigResponse, TData> {
    args: {
        identifier: string;
    };
}
export declare function useProxyAssetConfigQuery<TData = AssetConfigResponse>({ client, args, options, }: ProxyAssetConfigQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface ProxyHoldingAmountQuery<TData> extends ProxyReactQuery<HoldingAmountResponse, TData> {
    args: {
        identifier: string;
    };
}
export declare function useProxyHoldingAmountQuery<TData = HoldingAmountResponse>({ client, args, options, }: ProxyHoldingAmountQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface ProxyHoldingValueQuery<TData> extends ProxyReactQuery<HoldingValueResponse, TData> {
    args: {
        identifier: string;
    };
}
export declare function useProxyHoldingValueQuery<TData = HoldingValueResponse>({ client, args, options, }: ProxyHoldingValueQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface ProxyTotalValueQuery<TData> extends ProxyReactQuery<TotalValueResponse, TData> {
}
export declare function useProxyTotalValueQuery<TData = TotalValueResponse>({ client, options, }: ProxyTotalValueQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface ProxyConfigQuery<TData> extends ProxyReactQuery<ConfigResponse, TData> {
}
export declare function useProxyConfigQuery<TData = ConfigResponse>({ client, options, }: ProxyConfigQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface ProxyUpdateAssetsMutation {
    client: ProxyClient;
    msg: {
        toAdd: UncheckedProxyAsset[];
        toRemove: string[];
    };
    args?: {
        fee?: number | StdFee | 'auto';
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useProxyUpdateAssetsMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ProxyUpdateAssetsMutation>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, ProxyUpdateAssetsMutation, unknown>;
export interface ProxyRemoveModuleMutation {
    client: ProxyClient;
    msg: {
        module: string;
    };
    args?: {
        fee?: number | StdFee | 'auto';
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useProxyRemoveModuleMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ProxyRemoveModuleMutation>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, ProxyRemoveModuleMutation, unknown>;
export interface ProxyAddModuleMutation {
    client: ProxyClient;
    msg: {
        module: string;
    };
    args?: {
        fee?: number | StdFee | 'auto';
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useProxyAddModuleMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ProxyAddModuleMutation>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, ProxyAddModuleMutation, unknown>;
export interface ProxyModuleActionMutation {
    client: ProxyClient;
    msg: {
        msgs: CosmosMsgForEmpty[];
    };
    args?: {
        fee?: number | StdFee | 'auto';
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useProxyModuleActionMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ProxyModuleActionMutation>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, ProxyModuleActionMutation, unknown>;
export interface ProxySetAdminMutation {
    client: ProxyClient;
    msg: {
        admin: string;
    };
    args?: {
        fee?: number | StdFee | 'auto';
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useProxySetAdminMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ProxySetAdminMutation>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, ProxySetAdminMutation, unknown>;