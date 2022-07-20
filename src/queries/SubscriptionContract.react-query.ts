/**
* This file was automatically generated by cosmwasm-typescript-gen@0.3.9.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/

import { useQuery, UseQueryOptions } from "react-query";
import { BaseResponse, ConfigResponse,  ContributorStateResponse,  FeeResponse, StateResponse, SubscriberStateResponse } from "../contracts/SubscriptionContract";
import { SubscriptionQueryClient } from "../contracts/SubscriptionContract";
export interface SubscriptionContributorStateQuery {
  client?: SubscriptionQueryClient;
  options?: UseQueryOptions<ContributorStateResponse | undefined, Error, ContributorStateResponse, (string | undefined)[]>;
  args: {
    osId: number;
  };
}
export function useSubscriptionContributorStateQuery({
  client,
  args,
  options
}: SubscriptionContributorStateQuery) {
  return useQuery<ContributorStateResponse | undefined, Error, ContributorStateResponse, (string | undefined)[]>(["subscriptionContributorState", client?.contractAddress], () => client ? client.contributorState({
    osId: args.osId
  }) : undefined, {
    enabled: !!client,
    ...options
  });
}
export interface SubscriptionSubscriberStateQuery {
  client?: SubscriptionQueryClient;
  options?: UseQueryOptions<SubscriberStateResponse | undefined, Error, SubscriberStateResponse, (string | undefined)[]>;
  args: {
    osId: number;
  };
}
export function useSubscriptionSubscriberStateQuery({
  client,
  args,
  options
}: SubscriptionSubscriberStateQuery) {
  return useQuery<SubscriberStateResponse | undefined, Error, SubscriberStateResponse, (string | undefined)[]>(["subscriptionSubscriberState", client?.contractAddress], () => client ? client.subscriberState({
    osId: args.osId
  }) : undefined, {
    enabled: !!client,
    ...options
  });
}
export interface SubscriptionFeeQuery {
  client?: SubscriptionQueryClient;
  options?: UseQueryOptions<FeeResponse | undefined, Error, FeeResponse, (string | undefined)[]>;
}
export function useSubscriptionFeeQuery({
  client,
  options
}: SubscriptionFeeQuery) {
  return useQuery<FeeResponse | undefined, Error, FeeResponse, (string | undefined)[]>(["subscriptionFee", client?.contractAddress], () => client ? client.fee() : undefined, {
    enabled: !!client,
    ...options
  });
}
export interface SubscriptionConfigQuery {
  client?: SubscriptionQueryClient;
  options?: UseQueryOptions<ConfigResponse | undefined, Error, ConfigResponse, (string | undefined)[]>;
}
export function useSubscriptionConfigQuery({
  client,
  options
}: SubscriptionConfigQuery) {
  return useQuery<ConfigResponse | undefined, Error, ConfigResponse, (string | undefined)[]>(["subscriptionConfig", client?.contractAddress], () => client ? client.config() : undefined, {
    enabled: !!client,
    ...options
  });
}
export interface SubscriptionStateQuery {
  client?: SubscriptionQueryClient;
  options?: UseQueryOptions<StateResponse | undefined, Error, StateResponse, (string | undefined)[]>;
}
export function useSubscriptionStateQuery({
  client,
  options
}: SubscriptionStateQuery) {
  return useQuery<StateResponse | undefined, Error, StateResponse, (string | undefined)[]>(["subscriptionState", client?.contractAddress], () => client ? client.state() : undefined, {
    enabled: !!client,
    ...options
  });
}
export interface SubscriptionBaseQuery {
  client?: SubscriptionQueryClient;
  options?: UseQueryOptions<BaseResponse | undefined, Error, BaseResponse, (string | undefined)[]>;
}
export function useSubscriptionBaseQuery({
  client,
  options
}: SubscriptionBaseQuery) {
  return useQuery<BaseResponse | undefined, Error, BaseResponse, (string | undefined)[]>(["subscriptionBase", client?.contractAddress], () => client ? client.queryBase() : undefined, {
    enabled: !!client,
    ...options
  });
}
