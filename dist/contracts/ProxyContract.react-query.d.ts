/**
* This file was automatically generated by cosmwasm-typescript-gen@0.2.14.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/
import { UseQueryOptions } from "react-query";
import { ConfigResponse, HoldingAmountResponse, HoldingValueResponse, TotalValueResponse, VaultAssetConfigResponse } from "../contracts/ProxyContract";
import { ProxyQueryClient } from "../contracts/ProxyContract";
export interface ProxyVaultAssetConfigQuery {
    client: ProxyQueryClient;
    options?: Omit<UseQueryOptions<VaultAssetConfigResponse, Error, VaultAssetConfigResponse, (string | undefined)[]>, 'queryKey' | 'queryFn' | 'initialData'> & { initialData?: () => undefined }
    args: {
        identifier: string;
    };
}
export declare function useProxyVaultAssetConfigQuery({ client, args, options }: ProxyVaultAssetConfigQuery): import("react-query").UseQueryResult<VaultAssetConfigResponse, Error>;
export interface ProxyHoldingAmountQuery {
    client: ProxyQueryClient;
    options?: Omit<UseQueryOptions<HoldingAmountResponse, Error, HoldingAmountResponse, (string | undefined)[]>, 'queryKey' | 'queryFn' | 'initialData'> & { initialData?: () => undefined }
    args: {
        identifier: string;
    };
}
export declare function useProxyHoldingAmountQuery({ client, args, options }: ProxyHoldingAmountQuery): import("react-query").UseQueryResult<HoldingAmountResponse, Error>;
export interface ProxyHoldingValueQuery {
    client: ProxyQueryClient;
    options?: Omit<UseQueryOptions<HoldingValueResponse, Error, HoldingValueResponse, (string | undefined)[]>, 'queryKey' | 'queryFn' | 'initialData'> & { initialData?: () => undefined }
    args: {
        identifier: string;
    };
}
export declare function useProxyHoldingValueQuery({ client, args, options }: ProxyHoldingValueQuery): import("react-query").UseQueryResult<HoldingValueResponse, Error>;
export interface ProxyTotalValueQuery {
    client: ProxyQueryClient;
    options?: Omit<UseQueryOptions<TotalValueResponse, Error, TotalValueResponse, (string | undefined)[]>, 'queryKey' | 'queryFn' | 'initialData'> & { initialData?: () => undefined }
}
export declare function useProxyTotalValueQuery({ client, options }: ProxyTotalValueQuery): import("react-query").UseQueryResult<TotalValueResponse, Error>;
export interface ProxyConfigQuery {
    client: ProxyQueryClient;
    options?: Omit<UseQueryOptions<ConfigResponse, Error, ConfigResponse, (string | undefined)[]>, 'queryKey' | 'queryFn' | 'initialData'> & { initialData?: () => undefined }
}
export declare function useProxyConfigQuery({ client, options }: ProxyConfigQuery): import("react-query").UseQueryResult<ConfigResponse, Error>;
