/**
* This file was automatically generated by cosmwasm-typescript-gen@0.3.9.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AdminResponse, AllowedResponse, ChannelResponse, ConfigResponse, ListAllowedResponse, ListChannelsResponse, PortResponse } from "../contracts/Cw20IcsContract";
import { Cw20IcsQueryClient } from "../contracts/Cw20IcsContract";

export interface Cw20IcsListAllowedQuery {
  client?: Cw20IcsQueryClient;
  options?: Omit<UseQueryOptions<ListAllowedResponse | undefined, Error, ListAllowedResponse, (string | undefined)[]>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
  args: {
    limit?: number;
    startAfter?: string;
  };
}
export function useCw20IcsListAllowedQuery({
  client,
  args,
  options
}: Cw20IcsListAllowedQuery) {
  return useQuery<ListAllowedResponse | undefined, Error, ListAllowedResponse, (string | undefined)[]>(["cw20IcsListAllowed", client?.contractAddress, JSON.stringify(args)], () => client ? client.listAllowed({
    limit: args.limit,
    startAfter: args.startAfter
  }) : undefined, {
    enabled: !!client && options?.enabled,
    ...options
  });
}
export interface Cw20IcsAllowedQuery {
  client?: Cw20IcsQueryClient;
  options?: Omit<UseQueryOptions<AllowedResponse | undefined, Error, AllowedResponse, (string | undefined)[]>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
  args: {
    contract: string;
  };
}
export function useCw20IcsAllowedQuery({
  client,
  args,
  options
}: Cw20IcsAllowedQuery) {
  return useQuery<AllowedResponse | undefined, Error, AllowedResponse, (string | undefined)[]>(["cw20IcsAllowed", client?.contractAddress, JSON.stringify(args)], () => client ? client.allowed({
    contract: args.contract
  }) : undefined, {
    enabled: !!client && options?.enabled,
    ...options
  });
}
export interface Cw20IcsAdminQuery {
  client?: Cw20IcsQueryClient;
  options?: Omit<UseQueryOptions<AdminResponse | undefined, Error, AdminResponse, (string | undefined)[]>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export function useCw20IcsAdminQuery({
  client,
  options
}: Cw20IcsAdminQuery) {
  return useQuery<AdminResponse | undefined, Error, AdminResponse, (string | undefined)[]>(["cw20IcsAdmin", client?.contractAddress], () => client ? client.admin() : undefined, {
    enabled: !!client && options?.enabled,
    ...options
  });
}
export interface Cw20IcsConfigQuery {
  client?: Cw20IcsQueryClient;
  options?: Omit<UseQueryOptions<ConfigResponse | undefined, Error, ConfigResponse, (string | undefined)[]>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export function useCw20IcsConfigQuery({
  client,
  options
}: Cw20IcsConfigQuery) {
  return useQuery<ConfigResponse | undefined, Error, ConfigResponse, (string | undefined)[]>(["cw20IcsConfig", client?.contractAddress], () => client ? client.config() : undefined, {
    enabled: !!client && options?.enabled,
    ...options
  });
}
export interface Cw20IcsChannelQuery {
  client?: Cw20IcsQueryClient;
  options?: Omit<UseQueryOptions<ChannelResponse | undefined, Error, ChannelResponse, (string | undefined)[]>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
  args: {
    id: string;
  };
}
export function useCw20IcsChannelQuery({
  client,
  args,
  options
}: Cw20IcsChannelQuery) {
  return useQuery<ChannelResponse | undefined, Error, ChannelResponse, (string | undefined)[]>(["cw20IcsChannel", client?.contractAddress, JSON.stringify(args)], () => client ? client.channel({
    id: args.id
  }) : undefined, {
    enabled: !!client && options?.enabled,
    ...options
  });
}
export interface Cw20IcsListChannelsQuery {
  client?: Cw20IcsQueryClient;
  options?: Omit<UseQueryOptions<ListChannelsResponse | undefined, Error, ListChannelsResponse, (string | undefined)[]>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export function useCw20IcsListChannelsQuery({
  client,
  options
}: Cw20IcsListChannelsQuery) {
  return useQuery<ListChannelsResponse | undefined, Error, ListChannelsResponse, (string | undefined)[]>(["cw20IcsListChannels", client?.contractAddress], () => client ? client.listChannels() : undefined, {
    enabled: !!client && options?.enabled,
    ...options
  });
}
export interface Cw20IcsPortQuery {
  client?: Cw20IcsQueryClient;
  options?: Omit<UseQueryOptions<PortResponse | undefined, Error, PortResponse, (string | undefined)[]>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export function useCw20IcsPortQuery({
  client,
  options
}: Cw20IcsPortQuery) {
  return useQuery<PortResponse | undefined, Error, PortResponse, (string | undefined)[]>(["cw20IcsPort", client?.contractAddress], () => client ? client.port() : undefined, {
    enabled: !!client && options?.enabled,
    ...options
  });
}
