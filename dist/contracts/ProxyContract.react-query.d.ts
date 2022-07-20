/**
* This file was automatically generated by cosmwasm-typescript-gen@0.2.14.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/
import { UseQueryOptions } from "react-query";
import { ConfigResponse, HoldingAmountResponse, HoldingValueResponse, TotalValueResponse, VaultAssetConfigResponse } from "./ProxyContract";
import { ProxyQueryClient } from "./ProxyContract";
export interface ProxyVaultAssetConfigQuery {
    client: ProxyQueryClient;
    options?: UseQueryOptions<VaultAssetConfigResponse, Error, VaultAssetConfigResponse, (string | undefined)[]>;
    args: {
        identifier: string;
    };
}
export declare function useProxyVaultAssetConfigQuery({ client, args, options }: ProxyVaultAssetConfigQuery): import("react-query").UseQueryResult<VaultAssetConfigResponse, Error>;
export interface ProxyHoldingAmountQuery {
    client: ProxyQueryClient;
    options?: UseQueryOptions<HoldingAmountResponse, Error, HoldingAmountResponse, (string | undefined)[]>;
    args: {
        identifier: string;
    };
}
export declare function useProxyHoldingAmountQuery({ client, args, options }: ProxyHoldingAmountQuery): import("react-query").UseQueryResult<HoldingAmountResponse, Error>;
export interface ProxyHoldingValueQuery {
    client: ProxyQueryClient;
    options?: UseQueryOptions<HoldingValueResponse, Error, HoldingValueResponse, (string | undefined)[]>;
    args: {
        identifier: string;
    };
}
export declare function useProxyHoldingValueQuery({ client, args, options }: ProxyHoldingValueQuery): import("react-query").UseQueryResult<HoldingValueResponse, Error>;
export interface ProxyTotalValueQuery {
    client: ProxyQueryClient;
    options?: UseQueryOptions<TotalValueResponse, Error, TotalValueResponse, (string | undefined)[]>;
}
export declare function useProxyTotalValueQuery({ client, options }: ProxyTotalValueQuery): import("react-query").UseQueryResult<TotalValueResponse, Error>;
export interface ProxyConfigQuery {
    client: ProxyQueryClient;
    options?: UseQueryOptions<ConfigResponse, Error, ConfigResponse, (string | undefined)[]>;
}
export declare function useProxyConfigQuery({ client, options }: ProxyConfigQuery): import("react-query").UseQueryResult<ConfigResponse, Error>;
