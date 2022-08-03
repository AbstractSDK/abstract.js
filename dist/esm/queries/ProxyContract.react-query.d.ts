/**
* This file was automatically generated by cosmwasm-typescript-gen@0.3.9.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/
import { UseQueryOptions } from "react-query";
import { ConfigResponse, HoldingAmountResponse, HoldingValueResponse, ProxyAssetConfigResponse, ProxyAssetsResponse, TotalValueResponse } from "../contracts/ProxyContract";
import { ProxyQueryClient } from "../contracts/ProxyContract";
export interface ProxyProxyAssetsQuery {
    client?: ProxyQueryClient;
    options?: Omit<UseQueryOptions<ProxyAssetsResponse | undefined, Error, ProxyAssetsResponse, (string | undefined)[]>, 'queryKey' | 'queryFn' | 'initialData'> & { initialData?: () => undefined }
    args: {
        iterLimit?: number;
        lastAssetName?: string;
    };
}
export declare function useProxyProxyAssetsQuery({ client, args, options }: ProxyProxyAssetsQuery): import("react-query").UseQueryResult<ProxyAssetsResponse, Error>;
export interface ProxyProxyAssetConfigQuery {
    client?: ProxyQueryClient;
    options?: Omit<UseQueryOptions<ProxyAssetConfigResponse | undefined, Error, ProxyAssetConfigResponse, (string | undefined)[]>, 'queryKey' | 'queryFn' | 'initialData'> & { initialData?: () => undefined }
    args: {
        identifier: string;
    };
}
export declare function useProxyProxyAssetConfigQuery({ client, args, options }: ProxyProxyAssetConfigQuery): import("react-query").UseQueryResult<ProxyAssetConfigResponse, Error>;
export interface ProxyHoldingAmountQuery {
    client?: ProxyQueryClient;
    options?: Omit<UseQueryOptions<HoldingAmountResponse | undefined, Error, HoldingAmountResponse, (string | undefined)[]>, 'queryKey' | 'queryFn' | 'initialData'> & { initialData?: () => undefined }
    args: {
        identifier: string;
    };
}
export declare function useProxyHoldingAmountQuery({ client, args, options }: ProxyHoldingAmountQuery): import("react-query").UseQueryResult<HoldingAmountResponse, Error>;
export interface ProxyHoldingValueQuery {
    client?: ProxyQueryClient;
    options?: Omit<UseQueryOptions<HoldingValueResponse | undefined, Error, HoldingValueResponse, (string | undefined)[]>, 'queryKey' | 'queryFn' | 'initialData'> & { initialData?: () => undefined }
    args: {
        identifier: string;
    };
}
export declare function useProxyHoldingValueQuery({ client, args, options }: ProxyHoldingValueQuery): import("react-query").UseQueryResult<HoldingValueResponse, Error>;
export interface ProxyTotalValueQuery {
    client?: ProxyQueryClient;
    options?: Omit<UseQueryOptions<TotalValueResponse | undefined, Error, TotalValueResponse, (string | undefined)[]>, 'queryKey' | 'queryFn' | 'initialData'> & { initialData?: () => undefined }
}
export declare function useProxyTotalValueQuery({ client, options }: ProxyTotalValueQuery): import("react-query").UseQueryResult<TotalValueResponse, Error>;
export interface ProxyConfigQuery {
    client?: ProxyQueryClient;
    options?: Omit<UseQueryOptions<ConfigResponse | undefined, Error, ConfigResponse, (string | undefined)[]>, 'queryKey' | 'queryFn' | 'initialData'> & { initialData?: () => undefined }
}
export declare function useProxyConfigQuery({ client, options }: ProxyConfigQuery): import("react-query").UseQueryResult<ConfigResponse, Error>;