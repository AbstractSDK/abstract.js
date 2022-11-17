/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from '@tanstack/react-query'
import { ExecuteResult } from '@cosmjs/cosmwasm-stargate'
import { StdFee, Coin } from '@cosmjs/amino'
import {
  InstantiateMsg,
  ExecuteMsg,
  Uint128,
  Binary,
  GovernanceDetails,
  Cw20ReceiveMsg,
  QueryMsg,
  MigrateMsg,
  ConfigResponse,
} from './Factory.types'
import { FactoryQueryClient, FactoryClient } from './Factory.client'
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
export interface FactoryCreateOsMutation {
  client: FactoryClient
  msg: {
    description?: string
    governance: GovernanceDetails
    link?: string
    name: string
  }
  args?: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: Coin[]
  }
}
export function useFactoryCreateOsMutation(
  options?: Omit<UseMutationOptions<ExecuteResult, Error, FactoryCreateOsMutation>, 'mutationFn'>
) {
  return useMutation<ExecuteResult, Error, FactoryCreateOsMutation>(
    ({ client, msg, args: { fee, memo, funds } = {} }) => client.createOs(msg, fee, memo, funds),
    options
  )
}
export interface FactoryUpdateConfigMutation {
  client: FactoryClient
  msg: {
    admin?: string
    ansHostContract?: string
    moduleFactoryAddress?: string
    subscriptionAddress?: string
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
export interface FactoryReceiveMutation {
  client: FactoryClient
  msg: Cw20ReceiveMsg
  args?: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: Coin[]
  }
}
export function useFactoryReceiveMutation(
  options?: Omit<UseMutationOptions<ExecuteResult, Error, FactoryReceiveMutation>, 'mutationFn'>
) {
  return useMutation<ExecuteResult, Error, FactoryReceiveMutation>(
    ({ client, msg, args: { fee, memo, funds } = {} }) => client.receive(msg, fee, memo, funds),
    options
  )
}
