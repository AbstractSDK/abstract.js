/**
* This file was automatically generated by cosmwasm-typescript-gen@0.2.15.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/

import { useQuery, UseQueryOptions } from "react-query";
import { InstantiateMsg, ModuleInfo, Addr, QueryApiAddressResponse, ContractVersion, QueryApiAddressesResponse, Uint64, QueryCodeIdResponse, QueryCodeIdsResponse, QueryConfigResponse, QueryOsCoreResponse, Core } from "../contracts/VersionControlContract";
import { VersionControlQueryClient } from "../contracts/VersionControlContract";
export interface VersionControlQueryApiAddressesQuery {
  client: VersionControlQueryClient;
  options?: UseQueryOptions<QueryApiAddressesResponse, Error, QueryApiAddressesResponse, (string | undefined)[]>;
  args: {
    iterLimit?: number;
    lastApiModule?: ContractVersion;
  };
}
export function useVersionControlQueryApiAddressesQuery({
  client,
  args,
  options
}: VersionControlQueryApiAddressesQuery) {
  return useQuery<QueryApiAddressesResponse, Error, QueryApiAddressesResponse, (string | undefined)[]>(["versionControlQueryApiAddresses", client.contractAddress], () => client.queryApiAddresses({
    iterLimit: args.iterLimit,
    lastApiModule: args.lastApiModule
  }), options);
}
export interface VersionControlQueryCodeIdsQuery {
  client: VersionControlQueryClient;
  options?: UseQueryOptions<QueryCodeIdsResponse, Error, QueryCodeIdsResponse, (string | undefined)[]>;
  args: {
    iterLimit?: number;
    lastModule?: ContractVersion;
  };
}
export function useVersionControlQueryCodeIdsQuery({
  client,
  args,
  options
}: VersionControlQueryCodeIdsQuery) {
  return useQuery<QueryCodeIdsResponse, Error, QueryCodeIdsResponse, (string | undefined)[]>(["versionControlQueryCodeIds", client.contractAddress], () => client.queryCodeIds({
    iterLimit: args.iterLimit,
    lastModule: args.lastModule
  }), options);
}
export interface VersionControlQueryConfigQuery {
  client: VersionControlQueryClient;
  options?: UseQueryOptions<QueryConfigResponse, Error, QueryConfigResponse, (string | undefined)[]>;
}
export function useVersionControlQueryConfigQuery({
  client,
  options
}: VersionControlQueryConfigQuery) {
  return useQuery<QueryConfigResponse, Error, QueryConfigResponse, (string | undefined)[]>(["versionControlQueryConfig", client.contractAddress], () => client.queryConfig(), options);
}
export interface VersionControlQueryApiAddressQuery {
  client: VersionControlQueryClient;
  options?: UseQueryOptions<QueryApiAddressResponse, Error, QueryApiAddressResponse, (string | undefined)[]>;
  args: {
    module: ModuleInfo;
  };
}
export function useVersionControlQueryApiAddressQuery({
  client,
  args,
  options
}: VersionControlQueryApiAddressQuery) {
  return useQuery<QueryApiAddressResponse, Error, QueryApiAddressResponse, (string | undefined)[]>(["versionControlQueryApiAddress", client.contractAddress], () => client.queryApiAddress({
    module: args.module
  }), options);
}
export interface VersionControlQueryCodeIdQuery {
  client: VersionControlQueryClient;
  options?: UseQueryOptions<QueryCodeIdResponse, Error, QueryCodeIdResponse, (string | undefined)[]>;
  args: {
    module: ModuleInfo;
  };
}
export function useVersionControlQueryCodeIdQuery({
  client,
  args,
  options
}: VersionControlQueryCodeIdQuery) {
  return useQuery<QueryCodeIdResponse, Error, QueryCodeIdResponse, (string | undefined)[]>(["versionControlQueryCodeId", client.contractAddress], () => client.queryCodeId({
    module: args.module
  }), options);
}
export interface VersionControlQueryOsCoreQuery {
  client: VersionControlQueryClient;
  options?: UseQueryOptions<QueryOsCoreResponse, Error, QueryOsCoreResponse, (string | undefined)[]>;
  args: {
    osId: number;
  };
}
export function useVersionControlQueryOsCoreQuery({
  client,
  args,
  options
}: VersionControlQueryOsCoreQuery) {
  return useQuery<QueryOsCoreResponse, Error, QueryOsCoreResponse, (string | undefined)[]>(["versionControlQueryOsCore", client.contractAddress], () => client.queryOsCore({
    osId: args.osId
  }), options);
}