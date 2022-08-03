/**
* This file was automatically generated by cosmwasm-typescript-gen@0.2.15.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { UseQueryOptions, UseMutationOptions } from "@tanstack/react-query";
import { ConfigResponse, GovernanceDetails } from "../contracts/FactoryContract";
import { FactoryQueryClient, FactoryClient } from "../contracts/FactoryContract";
export interface FactoryConfigQuery {
    client: FactoryQueryClient;
    options?: Omit<UseQueryOptions<ConfigResponse, Error, ConfigResponse, (string | undefined)[]>, 'queryKey' | 'queryFn' | 'initialData'> & {
        initialData?: () => undefined;
    };
}
export declare function useFactoryConfigQuery({ client, options }: FactoryConfigQuery): import("@tanstack/react-query").UseQueryResult<ConfigResponse, Error>;
export interface FactoryCreateOsMutation {
    client: FactoryClient;
    msg: {
        description?: string;
        governance: GovernanceDetails;
        link?: string;
        osName: string;
    };
    args: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: readonly Coin[];
    };
}
export declare function useFactoryCreateOsMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, FactoryCreateOsMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, FactoryCreateOsMutation, unknown>;
export interface FactoryUpdateConfigMutation {
    client: FactoryClient;
    msg: {
        admin?: string;
        memoryContract?: string;
        moduleFactoryAddress?: string;
        subscriptionAddress?: string;
        versionControlContract?: string;
    };
    args: {
        fee?: number | StdFee | "auto";
        memo?: string;
        funds?: readonly Coin[];
    };
}
export declare function useFactoryUpdateConfigMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, FactoryUpdateConfigMutation>, "mutationFn">): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, FactoryUpdateConfigMutation, unknown>;
