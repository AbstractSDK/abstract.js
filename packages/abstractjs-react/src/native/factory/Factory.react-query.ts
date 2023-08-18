/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.28.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import {
  type UseQueryOptions,
  useQuery,
  useMutation,
  type UseMutationOptions,
} from '@tanstack/react-query'
import { type ExecuteResult } from '@cosmjs/cosmwasm-stargate'
import { type StdFee, type Coin } from '@cosmjs/amino'
import {
  InstantiateMsg,
  ExecuteMsg,
  type GovernanceDetailsForString,
  type Action,
  Expiration,
  Timestamp,
  Uint64,
  QueryMsg,
  MigrateMsg,
  Addr,
  type ConfigResponse,
  type OwnershipForString,
} from '@abstract-money/abstract.js/lib/native/factory/Factory.types'
import { FactoryClient, FactoryQueryClient } from '@abstract-money/abstract.js'
export const factoryQueryKeys = {
  contract: [
    {
      contract: 'factory',
    },
  ] as const,
  address: (contractAddress: string | undefined) =>
    [{ ...factoryQueryKeys.contract[0], address: contractAddress }] as const,
  config: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [{ ...factoryQueryKeys.address(contractAddress)[0], method: 'config', args }] as const,
  ownership: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [{ ...factoryQueryKeys.address(contractAddress)[0], method: 'ownership', args }] as const,
}
export const factoryQueries = {
  config: <TData = ConfigResponse>({
    client,
    options,
  }: FactoryConfigQuery<TData>): UseQueryOptions<ConfigResponse, Error, TData> => ({
    queryKey: factoryQueryKeys.config(client?.contractAddress),
    queryFn: () => (client ? client.config() : Promise.reject(new Error('Invalid client'))),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true),
  }),
  ownership: <TData = OwnershipForString>({
    client,
    options,
  }: FactoryOwnershipQuery<TData>): UseQueryOptions<OwnershipForString, Error, TData> => ({
    queryKey: factoryQueryKeys.ownership(client?.contractAddress),
    queryFn: () => (client ? client.ownership() : Promise.reject(new Error('Invalid client'))),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true),
  }),
}
export interface FactoryReactQuery<TResponse, TData = TResponse> {
  client: FactoryQueryClient | undefined
  options?: Omit<
    UseQueryOptions<TResponse, Error, TData>,
    "'queryKey' | 'queryFn' | 'initialData'"
  > & {
    initialData?: undefined
  }
}
export interface FactoryOwnershipQuery<TData>
  extends FactoryReactQuery<OwnershipForString, TData> {}
export function useFactoryOwnershipQuery<TData = OwnershipForString>({
  client,
  options,
}: FactoryOwnershipQuery<TData>) {
  return useQuery<OwnershipForString, Error, TData>(
    factoryQueryKeys.ownership(client?.contractAddress),
    () => (client ? client.ownership() : Promise.reject(new Error('Invalid client'))),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface FactoryConfigQuery<TData> extends FactoryReactQuery<ConfigResponse, TData> {}
export function useFactoryConfigQuery<TData = ConfigResponse>({
  client,
  options,
}: FactoryConfigQuery<TData>) {
  return useQuery<ConfigResponse, Error, TData>(
    factoryQueryKeys.config(client?.contractAddress),
    () => (client ? client.config() : Promise.reject(new Error('Invalid client'))),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface FactoryUpdateOwnershipMutation {
  client: FactoryClient
  msg: Action
  args?: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: Coin[]
  }
}
export function useFactoryUpdateOwnershipMutation(
  options?: Omit<
    UseMutationOptions<ExecuteResult, Error, FactoryUpdateOwnershipMutation>,
    'mutationFn'
  >
) {
  return useMutation<ExecuteResult, Error, FactoryUpdateOwnershipMutation>(
    ({ client, msg, args: { fee, memo, funds } = {} }) =>
      client.updateOwnership(msg, fee, memo, funds),
    options
  )
}
export interface FactoryCreateAccountMutation {
  client: FactoryClient
  msg: {
    description?: string
    governance: GovernanceDetailsForString
    link?: string
    name: string
  }
  args?: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: Coin[]
  }
}
export function useFactoryCreateAccountMutation(
  options?: Omit<
    UseMutationOptions<ExecuteResult, Error, FactoryCreateAccountMutation>,
    'mutationFn'
  >
) {
  return useMutation<ExecuteResult, Error, FactoryCreateAccountMutation>(
    ({ client, msg, args: { fee, memo, funds } = {} }) =>
      client.createAccount(msg, fee, memo, funds),
    options
  )
}
export interface FactoryUpdateConfigMutation {
  client: FactoryClient
  msg: {
    ansHostContract?: string
    moduleFactoryAddress?: string
    versionControlContract?: string
  }
  args?: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: Coin[]
  }
}
export function useFactoryUpdateConfigMutation(
  options?: Omit<
    UseMutationOptions<ExecuteResult, Error, FactoryUpdateConfigMutation>,
    'mutationFn'
  >
) {
  return useMutation<ExecuteResult, Error, FactoryUpdateConfigMutation>(
    ({ client, msg, args: { fee, memo, funds } = {} }) =>
      client.updateConfig(msg, fee, memo, funds),
    options
  )
}
