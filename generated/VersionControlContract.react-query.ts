/**
* This file was automatically generated by cosmwasm-typescript-gen@0.2.15.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/

import { useQuery, UseQueryOptions } from "react-query";
import { InstantiateMsg, ModuleInfo, QueryApiAddressesResponse, ContractVersion, Uint64, QueryCodeIdResponse, QueryConfigResponse, Addr, QueryOsCoreResponse, Core } from "./VersionControlContract";
import { VersionControlQueryClient } from "./VersionControlContract.ts";
export interface VersionControlApiAddressesQuery {
  client: VersionControlQueryClient;
  options?: UseQueryOptions<ApiAddressesResponse, Error, ApiAddressesResponse, (string | undefined)[]>;
  args: {
    iterLimit?: number;
    lastApiModule?: ContractVersion;
  };
}
export function useVersionControlApiAddressesQuery({
  client,
  args,
  options
}: VersionControlApiAddressesQuery) {
  return useQuery<ApiAddressesResponse, Error, ApiAddressesResponse, (string | undefined)[]>(["versionControlApiAddresses", client.contractAddress], () => client.apiAddresses({
    iterLimit: args.iterLimit,
    lastApiModule: args.lastApiModule
  }), options);
}
export interface VersionControlCodeIdsQuery {
  client: VersionControlQueryClient;
  options?: UseQueryOptions<CodeIdsResponse, Error, CodeIdsResponse, (string | undefined)[]>;
  args: {
    iterLimit?: number;
    lastModule?: ContractVersion;
  };
}
export function useVersionControlCodeIdsQuery({
  client,
  args,
  options
}: VersionControlCodeIdsQuery) {
  return useQuery<CodeIdsResponse, Error, CodeIdsResponse, (string | undefined)[]>(["versionControlCodeIds", client.contractAddress], () => client.codeIds({
    iterLimit: args.iterLimit,
    lastModule: args.lastModule
  }), options);
}
export interface VersionControlConfigQuery {
  client: VersionControlQueryClient;
  options?: UseQueryOptions<ConfigResponse, Error, ConfigResponse, (string | undefined)[]>;
}
export function useVersionControlConfigQuery({
  client,
  options
}: VersionControlConfigQuery) {
  return useQuery<ConfigResponse, Error, ConfigResponse, (string | undefined)[]>(["versionControlConfig", client.contractAddress], () => client.config(), options);
}
export interface VersionControlApiAddressQuery {
  client: VersionControlQueryClient;
  options?: UseQueryOptions<ApiAddressResponse, Error, ApiAddressResponse, (string | undefined)[]>;
  args: {
    module: ModuleInfo;
  };
}
export function useVersionControlApiAddressQuery({
  client,
  args,
  options
}: VersionControlApiAddressQuery) {
  return useQuery<ApiAddressResponse, Error, ApiAddressResponse, (string | undefined)[]>(["versionControlApiAddress", client.contractAddress], () => client.apiAddress({
    module: args.module
  }), options);
}
export interface VersionControlCodeIdQuery {
  client: VersionControlQueryClient;
  options?: UseQueryOptions<CodeIdResponse, Error, CodeIdResponse, (string | undefined)[]>;
  args: {
    module: ModuleInfo;
  };
}
export function useVersionControlCodeIdQuery({
  client,
  args,
  options
}: VersionControlCodeIdQuery) {
  return useQuery<CodeIdResponse, Error, CodeIdResponse, (string | undefined)[]>(["versionControlCodeId", client.contractAddress], () => client.codeId({
    module: args.module
  }), options);
}
export interface VersionControlOsCoreQuery {
  client: VersionControlQueryClient;
  options?: UseQueryOptions<OsCoreResponse, Error, OsCoreResponse, (string | undefined)[]>;
  args: {
    osId: number;
  };
}
export function useVersionControlOsCoreQuery({
  client,
  args,
  options
}: VersionControlOsCoreQuery) {
  return useQuery<OsCoreResponse, Error, OsCoreResponse, (string | undefined)[]>(["versionControlOsCore", client.contractAddress], () => client.osCore({
    osId: args.osId
  }), options);
}