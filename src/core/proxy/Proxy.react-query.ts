/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from '@tanstack/react-query'
import { ExecuteResult } from '@cosmjs/cosmwasm-stargate'
import { StdFee } from '@cosmjs/amino'
import {
  InstantiateMsg,
  ExecuteMsg,
  CosmosMsgForEmpty,
  BankMsg,
  Uint128,
  StakingMsg,
  DistributionMsg,
  Binary,
  IbcMsg,
  Timestamp,
  Uint64,
  WasmMsg,
  GovMsg,
  VoteOption,
  ExecuteMsg1,
  HostAction,
  QueryRequestForEmpty,
  BankQuery,
  StakingQuery,
  IbcQuery,
  WasmQuery,
  InternalAction,
  UncheckedValueRef,
  Decimal,
  Coin,
  Empty,
  IbcTimeout,
  IbcTimeoutBlock,
  CallbackInfo,
  UncheckedProxyAsset,
  QueryMsg,
  MigrateMsg,
  AssetEntry,
  ValueRef,
  AssetConfigResponse,
  ProxyAsset,
  ContractEntry,
  AssetsResponse,
  BaseAssetResponse,
  ValidityResponse,
  ConfigResponse,
  HoldingAmountResponse,
  HoldingValueResponse,
  TokenValueResponse,
  TotalValueResponse,
} from './Proxy.types'
import { ProxyQueryClient, ProxyClient } from './Proxy.client'
export const proxyQueryKeys = {
  contract: [
    {
      contract: 'proxy',
    },
  ] as const,
  address: (contractAddress: string | undefined) =>
    [{ ...proxyQueryKeys.contract[0], address: contractAddress }] as const,
  config: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [{ ...proxyQueryKeys.address(contractAddress)[0], method: 'config', args }] as const,
  totalValue: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [{ ...proxyQueryKeys.address(contractAddress)[0], method: 'total_value', args }] as const,
  tokenValue: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [{ ...proxyQueryKeys.address(contractAddress)[0], method: 'token_value', args }] as const,
  holdingValue: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [{ ...proxyQueryKeys.address(contractAddress)[0], method: 'holding_value', args }] as const,
  holdingAmount: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [{ ...proxyQueryKeys.address(contractAddress)[0], method: 'holding_amount', args }] as const,
  assetConfig: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [{ ...proxyQueryKeys.address(contractAddress)[0], method: 'asset_config', args }] as const,
  assets: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [{ ...proxyQueryKeys.address(contractAddress)[0], method: 'assets', args }] as const,
  checkValidity: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [{ ...proxyQueryKeys.address(contractAddress)[0], method: 'check_validity', args }] as const,
  baseAsset: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [{ ...proxyQueryKeys.address(contractAddress)[0], method: 'base_asset', args }] as const,
}
export const proxyQueries = {
  config: <TData = ConfigResponse>({
    client,
    options,
  }: ProxyConfigQuery<TData>): UseQueryOptions<ConfigResponse, Error, TData> => ({
    queryKey: proxyQueryKeys.config(client?.contractAddress),
    queryFn: () => (client ? client.config() : Promise.reject(new Error('Invalid client'))),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true),
  }),
  totalValue: <TData = TotalValueResponse>({
    client,
    options,
  }: ProxyTotalValueQuery<TData>): UseQueryOptions<TotalValueResponse, Error, TData> => ({
    queryKey: proxyQueryKeys.totalValue(client?.contractAddress),
    queryFn: () => (client ? client.totalValue() : Promise.reject(new Error('Invalid client'))),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true),
  }),
  tokenValue: <TData = TokenValueResponse>({
    client,
    args,
    options,
  }: ProxyTokenValueQuery<TData>): UseQueryOptions<TokenValueResponse, Error, TData> => ({
    queryKey: proxyQueryKeys.tokenValue(client?.contractAddress, args),
    queryFn: () =>
      client
        ? client.tokenValue({
            amount: args.amount,
            identifier: args.identifier,
          })
        : Promise.reject(new Error('Invalid client')),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true),
  }),
  holdingValue: <TData = HoldingValueResponse>({
    client,
    args,
    options,
  }: ProxyHoldingValueQuery<TData>): UseQueryOptions<HoldingValueResponse, Error, TData> => ({
    queryKey: proxyQueryKeys.holdingValue(client?.contractAddress, args),
    queryFn: () =>
      client
        ? client.holdingValue({
            identifier: args.identifier,
          })
        : Promise.reject(new Error('Invalid client')),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true),
  }),
  holdingAmount: <TData = HoldingAmountResponse>({
    client,
    args,
    options,
  }: ProxyHoldingAmountQuery<TData>): UseQueryOptions<HoldingAmountResponse, Error, TData> => ({
    queryKey: proxyQueryKeys.holdingAmount(client?.contractAddress, args),
    queryFn: () =>
      client
        ? client.holdingAmount({
            identifier: args.identifier,
          })
        : Promise.reject(new Error('Invalid client')),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true),
  }),
  assetConfig: <TData = AssetConfigResponse>({
    client,
    args,
    options,
  }: ProxyAssetConfigQuery<TData>): UseQueryOptions<AssetConfigResponse, Error, TData> => ({
    queryKey: proxyQueryKeys.assetConfig(client?.contractAddress, args),
    queryFn: () =>
      client
        ? client.assetConfig({
            identifier: args.identifier,
          })
        : Promise.reject(new Error('Invalid client')),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true),
  }),
  assets: <TData = AssetsResponse>({
    client,
    args,
    options,
  }: ProxyAssetsQuery<TData>): UseQueryOptions<AssetsResponse, Error, TData> => ({
    queryKey: proxyQueryKeys.assets(client?.contractAddress, args),
    queryFn: () =>
      client
        ? client.assets({
            pageSize: args.pageSize,
            pageToken: args.pageToken,
          })
        : Promise.reject(new Error('Invalid client')),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true),
  }),
  checkValidity: <TData = ValidityResponse>({
    client,
    options,
  }: ProxyCheckValidityQuery<TData>): UseQueryOptions<ValidityResponse, Error, TData> => ({
    queryKey: proxyQueryKeys.checkValidity(client?.contractAddress),
    queryFn: () => (client ? client.checkValidity() : Promise.reject(new Error('Invalid client'))),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true),
  }),
  baseAsset: <TData = BaseAssetResponse>({
    client,
    options,
  }: ProxyBaseAssetQuery<TData>): UseQueryOptions<BaseAssetResponse, Error, TData> => ({
    queryKey: proxyQueryKeys.baseAsset(client?.contractAddress),
    queryFn: () => (client ? client.baseAsset() : Promise.reject(new Error('Invalid client'))),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true),
  }),
}
export interface ProxyReactQuery<TResponse, TData = TResponse> {
  client: ProxyQueryClient | undefined
  options?: Omit<
    UseQueryOptions<TResponse, Error, TData>,
    "'queryKey' | 'queryFn' | 'initialData'"
  > & {
    initialData?: undefined
  }
}
export interface ProxyBaseAssetQuery<TData> extends ProxyReactQuery<BaseAssetResponse, TData> {}
export function useProxyBaseAssetQuery<TData = BaseAssetResponse>({
  client,
  options,
}: ProxyBaseAssetQuery<TData>) {
  return useQuery<BaseAssetResponse, Error, TData>(
    proxyQueryKeys.baseAsset(client?.contractAddress),
    () => (client ? client.baseAsset() : Promise.reject(new Error('Invalid client'))),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface ProxyCheckValidityQuery<TData> extends ProxyReactQuery<ValidityResponse, TData> {}
export function useProxyCheckValidityQuery<TData = ValidityResponse>({
  client,
  options,
}: ProxyCheckValidityQuery<TData>) {
  return useQuery<ValidityResponse, Error, TData>(
    proxyQueryKeys.checkValidity(client?.contractAddress),
    () => (client ? client.checkValidity() : Promise.reject(new Error('Invalid client'))),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface ProxyAssetsQuery<TData> extends ProxyReactQuery<AssetsResponse, TData> {
  args: {
    pageSize?: number
    pageToken?: string
  }
}
export function useProxyAssetsQuery<TData = AssetsResponse>({
  client,
  args,
  options,
}: ProxyAssetsQuery<TData>) {
  return useQuery<AssetsResponse, Error, TData>(
    proxyQueryKeys.assets(client?.contractAddress, args),
    () =>
      client
        ? client.assets({
            pageSize: args.pageSize,
            pageToken: args.pageToken,
          })
        : Promise.reject(new Error('Invalid client')),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface ProxyAssetConfigQuery<TData> extends ProxyReactQuery<AssetConfigResponse, TData> {
  args: {
    identifier: string
  }
}
export function useProxyAssetConfigQuery<TData = AssetConfigResponse>({
  client,
  args,
  options,
}: ProxyAssetConfigQuery<TData>) {
  return useQuery<AssetConfigResponse, Error, TData>(
    proxyQueryKeys.assetConfig(client?.contractAddress, args),
    () =>
      client
        ? client.assetConfig({
            identifier: args.identifier,
          })
        : Promise.reject(new Error('Invalid client')),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface ProxyHoldingAmountQuery<TData>
  extends ProxyReactQuery<HoldingAmountResponse, TData> {
  args: {
    identifier: string
  }
}
export function useProxyHoldingAmountQuery<TData = HoldingAmountResponse>({
  client,
  args,
  options,
}: ProxyHoldingAmountQuery<TData>) {
  return useQuery<HoldingAmountResponse, Error, TData>(
    proxyQueryKeys.holdingAmount(client?.contractAddress, args),
    () =>
      client
        ? client.holdingAmount({
            identifier: args.identifier,
          })
        : Promise.reject(new Error('Invalid client')),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface ProxyHoldingValueQuery<TData>
  extends ProxyReactQuery<HoldingValueResponse, TData> {
  args: {
    identifier: string
  }
}
export function useProxyHoldingValueQuery<TData = HoldingValueResponse>({
  client,
  args,
  options,
}: ProxyHoldingValueQuery<TData>) {
  return useQuery<HoldingValueResponse, Error, TData>(
    proxyQueryKeys.holdingValue(client?.contractAddress, args),
    () =>
      client
        ? client.holdingValue({
            identifier: args.identifier,
          })
        : Promise.reject(new Error('Invalid client')),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface ProxyTokenValueQuery<TData> extends ProxyReactQuery<TokenValueResponse, TData> {
  args: {
    amount?: Uint128
    identifier: string
  }
}
export function useProxyTokenValueQuery<TData = TokenValueResponse>({
  client,
  args,
  options,
}: ProxyTokenValueQuery<TData>) {
  return useQuery<TokenValueResponse, Error, TData>(
    proxyQueryKeys.tokenValue(client?.contractAddress, args),
    () =>
      client
        ? client.tokenValue({
            amount: args.amount,
            identifier: args.identifier,
          })
        : Promise.reject(new Error('Invalid client')),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface ProxyTotalValueQuery<TData> extends ProxyReactQuery<TotalValueResponse, TData> {}
export function useProxyTotalValueQuery<TData = TotalValueResponse>({
  client,
  options,
}: ProxyTotalValueQuery<TData>) {
  return useQuery<TotalValueResponse, Error, TData>(
    proxyQueryKeys.totalValue(client?.contractAddress),
    () => (client ? client.totalValue() : Promise.reject(new Error('Invalid client'))),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface ProxyConfigQuery<TData> extends ProxyReactQuery<ConfigResponse, TData> {}
export function useProxyConfigQuery<TData = ConfigResponse>({
  client,
  options,
}: ProxyConfigQuery<TData>) {
  return useQuery<ConfigResponse, Error, TData>(
    proxyQueryKeys.config(client?.contractAddress),
    () => (client ? client.config() : Promise.reject(new Error('Invalid client'))),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface ProxyUpdateAssetsMutation {
  client: ProxyClient
  msg: {
    toAdd: UncheckedProxyAsset[]
    toRemove: string[]
  }
  args?: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: Coin[]
  }
}
export function useProxyUpdateAssetsMutation(
  options?: Omit<UseMutationOptions<ExecuteResult, Error, ProxyUpdateAssetsMutation>, 'mutationFn'>
) {
  return useMutation<ExecuteResult, Error, ProxyUpdateAssetsMutation>(
    ({ client, msg, args: { fee, memo, funds } = {} }) =>
      client.updateAssets(msg, fee, memo, funds),
    options
  )
}
export interface ProxyRemoveModuleMutation {
  client: ProxyClient
  msg: {
    module: string
  }
  args?: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: Coin[]
  }
}
export function useProxyRemoveModuleMutation(
  options?: Omit<UseMutationOptions<ExecuteResult, Error, ProxyRemoveModuleMutation>, 'mutationFn'>
) {
  return useMutation<ExecuteResult, Error, ProxyRemoveModuleMutation>(
    ({ client, msg, args: { fee, memo, funds } = {} }) =>
      client.removeModule(msg, fee, memo, funds),
    options
  )
}
export interface ProxyAddModuleMutation {
  client: ProxyClient
  msg: {
    module: string
  }
  args?: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: Coin[]
  }
}
export function useProxyAddModuleMutation(
  options?: Omit<UseMutationOptions<ExecuteResult, Error, ProxyAddModuleMutation>, 'mutationFn'>
) {
  return useMutation<ExecuteResult, Error, ProxyAddModuleMutation>(
    ({ client, msg, args: { fee, memo, funds } = {} }) => client.addModule(msg, fee, memo, funds),
    options
  )
}
export interface ProxyIbcActionMutation {
  client: ProxyClient
  msg: {
    msgs: ExecuteMsg[]
  }
  args?: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: Coin[]
  }
}
export function useProxyIbcActionMutation(
  options?: Omit<UseMutationOptions<ExecuteResult, Error, ProxyIbcActionMutation>, 'mutationFn'>
) {
  return useMutation<ExecuteResult, Error, ProxyIbcActionMutation>(
    ({ client, msg, args: { fee, memo, funds } = {} }) => client.ibcAction(msg, fee, memo, funds),
    options
  )
}
export interface ProxyModuleActionMutation {
  client: ProxyClient
  msg: {
    msgs: CosmosMsgForEmpty[]
  }
  args?: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: Coin[]
  }
}
export function useProxyModuleActionMutation(
  options?: Omit<UseMutationOptions<ExecuteResult, Error, ProxyModuleActionMutation>, 'mutationFn'>
) {
  return useMutation<ExecuteResult, Error, ProxyModuleActionMutation>(
    ({ client, msg, args: { fee, memo, funds } = {} }) =>
      client.moduleAction(msg, fee, memo, funds),
    options
  )
}
export interface ProxySetAdminMutation {
  client: ProxyClient
  msg: {
    admin: string
  }
  args?: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: Coin[]
  }
}
export function useProxySetAdminMutation(
  options?: Omit<UseMutationOptions<ExecuteResult, Error, ProxySetAdminMutation>, 'mutationFn'>
) {
  return useMutation<ExecuteResult, Error, ProxySetAdminMutation>(
    ({ client, msg, args: { fee, memo, funds } = {} }) => client.setAdmin(msg, fee, memo, funds),
    options
  )
}
