/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
import { UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { ExecuteResult } from '@cosmjs/cosmwasm-stargate';
import { StdFee } from '@cosmjs/amino';
import { ExecuteMsg, CosmosMsgForEmpty, Uint128, Coin, UncheckedProxyAsset, AssetConfigResponse, AssetsResponse, BaseAssetResponse, ValidityResponse, ConfigResponse, HoldingAmountResponse, HoldingValueResponse, TokenValueResponse, TotalValueResponse } from './Proxy.types';
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
    tokenValue: (contractAddress: string | undefined, args?: Record<string, unknown>) => readonly [{
        readonly method: "token_value";
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
export declare const proxyQueries: {
    config: <TData = ConfigResponse>({ client, options, }: ProxyConfigQuery<TData>) => UseQueryOptions<ConfigResponse, Error, TData, import("@tanstack/react-query").QueryKey>;
    totalValue: <TData_1 = TotalValueResponse>({ client, options, }: ProxyTotalValueQuery<TData_1>) => UseQueryOptions<TotalValueResponse, Error, TData_1, import("@tanstack/react-query").QueryKey>;
    tokenValue: <TData_2 = TokenValueResponse>({ client, args, options, }: ProxyTokenValueQuery<TData_2>) => UseQueryOptions<TokenValueResponse, Error, TData_2, import("@tanstack/react-query").QueryKey>;
    holdingValue: <TData_3 = HoldingValueResponse>({ client, args, options, }: ProxyHoldingValueQuery<TData_3>) => UseQueryOptions<HoldingValueResponse, Error, TData_3, import("@tanstack/react-query").QueryKey>;
    holdingAmount: <TData_4 = HoldingAmountResponse>({ client, args, options, }: ProxyHoldingAmountQuery<TData_4>) => UseQueryOptions<HoldingAmountResponse, Error, TData_4, import("@tanstack/react-query").QueryKey>;
    assetConfig: <TData_5 = AssetConfigResponse>({ client, args, options, }: ProxyAssetConfigQuery<TData_5>) => UseQueryOptions<AssetConfigResponse, Error, TData_5, import("@tanstack/react-query").QueryKey>;
    assets: <TData_6 = AssetsResponse>({ client, args, options, }: ProxyAssetsQuery<TData_6>) => UseQueryOptions<AssetsResponse, Error, TData_6, import("@tanstack/react-query").QueryKey>;
    checkValidity: <TData_7 = ValidityResponse>({ client, options, }: ProxyCheckValidityQuery<TData_7>) => UseQueryOptions<ValidityResponse, Error, TData_7, import("@tanstack/react-query").QueryKey>;
    baseAsset: <TData_8 = BaseAssetResponse>({ client, options, }: ProxyBaseAssetQuery<TData_8>) => UseQueryOptions<BaseAssetResponse, Error, TData_8, import("@tanstack/react-query").QueryKey>;
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
export interface ProxyCheckValidityQuery<TData> extends ProxyReactQuery<ValidityResponse, TData> {
}
export declare function useProxyCheckValidityQuery<TData = ValidityResponse>({ client, options, }: ProxyCheckValidityQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
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
export interface ProxyTokenValueQuery<TData> extends ProxyReactQuery<TokenValueResponse, TData> {
    args: {
        amount?: Uint128;
        identifier: string;
    };
}
export declare function useProxyTokenValueQuery<TData = TokenValueResponse>({ client, args, options, }: ProxyTokenValueQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
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
export interface ProxyIbcActionMutation {
    client: ProxyClient;
    msg: {
        msgs: ExecuteMsg[];
    };
    args?: {
        fee?: number | StdFee | 'auto';
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useProxyIbcActionMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ProxyIbcActionMutation>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, ProxyIbcActionMutation, unknown>;
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
