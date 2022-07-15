/**
* This file was automatically generated by cosmwasm-typescript-gen@0.2.15.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/

import { useQuery, UseQueryOptions } from "react-query";
import { ConfigResponse, GovernanceDetails, InstantiateMsg } from "../contracts/FactoryContract";
import { FactoryQueryClient } from "../contracts/FactoryContract";
export interface FactoryConfigQuery {
  client: FactoryQueryClient;
  options?: UseQueryOptions<ConfigResponse, Error, ConfigResponse, (string | undefined)[]>;
}
export function useFactoryConfigQuery({
  client,
  options
}: FactoryConfigQuery) {
  return useQuery<ConfigResponse, Error, ConfigResponse, (string | undefined)[]>(["factoryConfig", client.contractAddress], () => client.config(), options);
}