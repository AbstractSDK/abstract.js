/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.11.1.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
import { UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { ExecuteResult } from '@cosmjs/cosmwasm-stargate';
import { StdFee, Coin } from '@cosmjs/amino';
import { AssetInfoBaseForString, BaseResponse, Decimal, Uint128, ConfigResponse, Uint64, ContributorStateResponse, AddOnExecuteMsg, Cw20ReceiveMsg, FeeResponse, StateResponse, SubscriberStateResponse } from './Subscription.types';
import { SubscriptionQueryClient, SubscriptionClient } from './Subscription.client';
export declare const subscriptionQueryKeys: {
    contract: readonly [{
        readonly contract: "subscription";
    }];
    address: (contractAddress: string | undefined) => readonly [{
        readonly address: string | undefined;
        readonly contract: "subscription";
    }];
    base: (contractAddress: string | undefined, args?: Record<string, unknown>) => readonly [{
        readonly method: "base";
        readonly args: Record<string, unknown> | undefined;
        readonly address: string | undefined;
        readonly contract: "subscription";
    }];
    state: (contractAddress: string | undefined, args?: Record<string, unknown>) => readonly [{
        readonly method: "state";
        readonly args: Record<string, unknown> | undefined;
        readonly address: string | undefined;
        readonly contract: "subscription";
    }];
    config: (contractAddress: string | undefined, args?: Record<string, unknown>) => readonly [{
        readonly method: "config";
        readonly args: Record<string, unknown> | undefined;
        readonly address: string | undefined;
        readonly contract: "subscription";
    }];
    fee: (contractAddress: string | undefined, args?: Record<string, unknown>) => readonly [{
        readonly method: "fee";
        readonly args: Record<string, unknown> | undefined;
        readonly address: string | undefined;
        readonly contract: "subscription";
    }];
    subscriberState: (contractAddress: string | undefined, args?: Record<string, unknown>) => readonly [{
        readonly method: "subscriber_state";
        readonly args: Record<string, unknown> | undefined;
        readonly address: string | undefined;
        readonly contract: "subscription";
    }];
    contributorState: (contractAddress: string | undefined, args?: Record<string, unknown>) => readonly [{
        readonly method: "contributor_state";
        readonly args: Record<string, unknown> | undefined;
        readonly address: string | undefined;
        readonly contract: "subscription";
    }];
};
export interface SubscriptionReactQuery<TResponse, TData = TResponse> {
    client: SubscriptionQueryClient | undefined;
    options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
        initialData?: undefined;
    };
}
export interface SubscriptionContributorStateQuery<TData> extends SubscriptionReactQuery<ContributorStateResponse, TData> {
    args: {
        osId: number;
    };
}
export declare function useSubscriptionContributorStateQuery<TData = ContributorStateResponse>({ client, args, options, }: SubscriptionContributorStateQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface SubscriptionSubscriberStateQuery<TData> extends SubscriptionReactQuery<SubscriberStateResponse, TData> {
    args: {
        osId: number;
    };
}
export declare function useSubscriptionSubscriberStateQuery<TData = SubscriberStateResponse>({ client, args, options, }: SubscriptionSubscriberStateQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface SubscriptionFeeQuery<TData> extends SubscriptionReactQuery<FeeResponse, TData> {
}
export declare function useSubscriptionFeeQuery<TData = FeeResponse>({ client, options, }: SubscriptionFeeQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface SubscriptionConfigQuery<TData> extends SubscriptionReactQuery<ConfigResponse, TData> {
}
export declare function useSubscriptionConfigQuery<TData = ConfigResponse>({ client, options, }: SubscriptionConfigQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface SubscriptionStateQuery<TData> extends SubscriptionReactQuery<StateResponse, TData> {
}
export declare function useSubscriptionStateQuery<TData = StateResponse>({ client, options, }: SubscriptionStateQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface SubscriptionBaseQuery<TData> extends SubscriptionReactQuery<BaseResponse, TData> {
}
export declare function useSubscriptionBaseQuery<TData = BaseResponse>({ client, options, }: SubscriptionBaseQuery<TData>): import("@tanstack/react-query").UseQueryResult<TData, Error>;
export interface SubscriptionUpdateContributionConfigMutation {
    client: SubscriptionClient;
    msg: {
        emissionUserShare?: Decimal;
        emissionsAmpFactor?: Uint128;
        emissionsOffset?: Uint128;
        maxEmissionsMultiple?: Decimal;
        projectTokenInfo?: AssetInfoBaseForString;
        protocolIncomeShare?: Decimal;
    };
    args?: {
        fee?: number | StdFee | 'auto';
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useSubscriptionUpdateContributionConfigMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, SubscriptionUpdateContributionConfigMutation>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, SubscriptionUpdateContributionConfigMutation, unknown>;
export interface SubscriptionUpdateSubscriptionConfigMutation {
    client: SubscriptionClient;
    msg: {
        factoryAddress?: string;
        paymentAsset?: AssetInfoBaseForString;
        subscriptionCost?: Decimal;
        versionControlAddress?: string;
    };
    args?: {
        fee?: number | StdFee | 'auto';
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useSubscriptionUpdateSubscriptionConfigMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, SubscriptionUpdateSubscriptionConfigMutation>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, SubscriptionUpdateSubscriptionConfigMutation, unknown>;
export interface SubscriptionRemoveContributorMutation {
    client: SubscriptionClient;
    msg: {
        osId: number;
    };
    args?: {
        fee?: number | StdFee | 'auto';
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useSubscriptionRemoveContributorMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, SubscriptionRemoveContributorMutation>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, SubscriptionRemoveContributorMutation, unknown>;
export interface SubscriptionUpdateContributorMutation {
    client: SubscriptionClient;
    msg: {
        basePerBlock?: Decimal;
        contributorOsId: number;
        expirationBlock?: Uint64;
        weight?: Uint64;
    };
    args?: {
        fee?: number | StdFee | 'auto';
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useSubscriptionUpdateContributorMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, SubscriptionUpdateContributorMutation>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, SubscriptionUpdateContributorMutation, unknown>;
export interface SubscriptionClaimEmissionsMutation {
    client: SubscriptionClient;
    msg: {
        osId: number;
    };
    args?: {
        fee?: number | StdFee | 'auto';
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useSubscriptionClaimEmissionsMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, SubscriptionClaimEmissionsMutation>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, SubscriptionClaimEmissionsMutation, unknown>;
export interface SubscriptionClaimCompensationMutation {
    client: SubscriptionClient;
    msg: {
        osId: number;
    };
    args?: {
        fee?: number | StdFee | 'auto';
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useSubscriptionClaimCompensationMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, SubscriptionClaimCompensationMutation>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, SubscriptionClaimCompensationMutation, unknown>;
export interface SubscriptionUnsubscribeMutation {
    client: SubscriptionClient;
    msg: {
        osIds: number[];
    };
    args?: {
        fee?: number | StdFee | 'auto';
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useSubscriptionUnsubscribeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, SubscriptionUnsubscribeMutation>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, SubscriptionUnsubscribeMutation, unknown>;
export interface SubscriptionPayMutation {
    client: SubscriptionClient;
    msg: {
        osId: number;
    };
    args?: {
        fee?: number | StdFee | 'auto';
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useSubscriptionPayMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, SubscriptionPayMutation>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, SubscriptionPayMutation, unknown>;
export interface SubscriptionReceiveMutation {
    client: SubscriptionClient;
    msg: Cw20ReceiveMsg;
    args?: {
        fee?: number | StdFee | 'auto';
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useSubscriptionReceiveMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, SubscriptionReceiveMutation>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, SubscriptionReceiveMutation, unknown>;
export interface SubscriptionBaseMutation {
    client: SubscriptionClient;
    msg: AddOnExecuteMsg;
    args?: {
        fee?: number | StdFee | 'auto';
        memo?: string;
        funds?: Coin[];
    };
}
export declare function useSubscriptionBaseMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, SubscriptionBaseMutation>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ExecuteResult, Error, SubscriptionBaseMutation, unknown>;