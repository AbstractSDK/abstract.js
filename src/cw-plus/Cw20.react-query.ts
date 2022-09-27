/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.16.5.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from '@tanstack/react-query'
import { ExecuteResult } from '@cosmjs/cosmwasm-stargate'
import { StdFee, Coin } from '@cosmjs/amino'
import {
  AllAccountsResponse,
  Uint128,
  Expiration,
  Timestamp,
  Uint64,
  AllAllowancesResponse,
  AllowanceInfo,
  AllowanceResponse,
  BalanceResponse,
  Binary,
  DownloadLogoResponse,
  ExecuteMsg,
  Logo,
  EmbeddedLogo,
  InstantiateMsg,
  Cw20Coin,
  InstantiateMarketingInfo,
  MinterResponse,
  LogoInfo,
  Addr,
  MarketingInfoResponse,
  QueryMsg,
  TokenInfoResponse,
} from './Cw20.types'
import { Cw20QueryClient, Cw20Client } from './Cw20.client'
export const cw20QueryKeys = {
  contract: [
    {
      contract: 'cw20',
    },
  ] as const,
  address: (contractAddress: string | undefined) =>
    [{ ...cw20QueryKeys.contract[0], address: contractAddress }] as const,
  balance: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [{ ...cw20QueryKeys.address(contractAddress)[0], method: 'balance', args }] as const,
  tokenInfo: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [{ ...cw20QueryKeys.address(contractAddress)[0], method: 'token_info', args }] as const,
  minter: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [{ ...cw20QueryKeys.address(contractAddress)[0], method: 'minter', args }] as const,
  allowance: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [{ ...cw20QueryKeys.address(contractAddress)[0], method: 'allowance', args }] as const,
  allAllowances: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [{ ...cw20QueryKeys.address(contractAddress)[0], method: 'all_allowances', args }] as const,
  allAccounts: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [{ ...cw20QueryKeys.address(contractAddress)[0], method: 'all_accounts', args }] as const,
  marketingInfo: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [{ ...cw20QueryKeys.address(contractAddress)[0], method: 'marketing_info', args }] as const,
  downloadLogo: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [{ ...cw20QueryKeys.address(contractAddress)[0], method: 'download_logo', args }] as const,
}
export const cw20Queries = {
  balance: <TData = BalanceResponse>({
    client,
    options,
    args,
  }: Cw20BalanceQuery<TData>): UseQueryOptions<BalanceResponse, Error, TData> => ({
    queryKey: cw20QueryKeys.balance(client?.contractAddress, args),
    queryFn: () =>
      client
        ? client.balance({
            address: args.address,
          })
        : Promise.reject(new Error('Invalid client')),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true),
  }),
  tokenInfo: <TData = TokenInfoResponse>({
    client,
    options,
  }: Cw20TokenInfoQuery<TData>): UseQueryOptions<TokenInfoResponse, Error, TData> => ({
    queryKey: cw20QueryKeys.tokenInfo(client?.contractAddress),
    queryFn: () => (client ? client.tokenInfo() : Promise.reject(new Error('Invalid client'))),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true),
  }),
  minter: <TData = MinterResponse>({
    client,
    options,
  }: Cw20MinterQuery<TData>): UseQueryOptions<MinterResponse, Error, TData> => ({
    queryKey: cw20QueryKeys.minter(client?.contractAddress),
    queryFn: () => (client ? client.minter() : Promise.reject(new Error('Invalid client'))),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true),
  }),
  allowance: <TData = AllowanceResponse>({
    client,
    options,
    args,
  }: Cw20AllowanceQuery<TData>): UseQueryOptions<AllowanceResponse, Error, TData> => ({
    queryKey: cw20QueryKeys.allowance(client?.contractAddress, args),
    queryFn: () =>
      client
        ? client.allowance({
            owner: args.owner,
            spender: args.spender,
          })
        : Promise.reject(new Error('Invalid client')),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true),
  }),
  allAllowances: <TData = AllAllowancesResponse>({
    client,
    options,
    args,
  }: Cw20AllAllowancesQuery<TData>): UseQueryOptions<AllAllowancesResponse, Error, TData> => ({
    queryKey: cw20QueryKeys.allAllowances(client?.contractAddress, args),
    queryFn: () =>
      client
        ? client.allAllowances({
            limit: args.limit,
            owner: args.owner,
            startAfter: args.startAfter,
          })
        : Promise.reject(new Error('Invalid client')),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true),
  }),
  allAccounts: <TData = AllAccountsResponse>({
    client,
    options,
    args,
  }: Cw20AllAccountsQuery<TData>): UseQueryOptions<AllAccountsResponse, Error, TData> => ({
    queryKey: cw20QueryKeys.allAccounts(client?.contractAddress, args),
    queryFn: () =>
      client
        ? client.allAccounts({
            limit: args.limit,
            startAfter: args.startAfter,
          })
        : Promise.reject(new Error('Invalid client')),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true),
  }),
  marketingInfo: <TData = MarketingInfoResponse>({
    client,
    options,
  }: Cw20MarketingInfoQuery<TData>): UseQueryOptions<MarketingInfoResponse, Error, TData> => ({
    queryKey: cw20QueryKeys.marketingInfo(client?.contractAddress),
    queryFn: () => (client ? client.marketingInfo() : Promise.reject(new Error('Invalid client'))),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true),
  }),
  downloadLogo: <TData = DownloadLogoResponse>({
    client,
    options,
  }: Cw20DownloadLogoQuery<TData>): UseQueryOptions<DownloadLogoResponse, Error, TData> => ({
    queryKey: cw20QueryKeys.downloadLogo(client?.contractAddress),
    queryFn: () => (client ? client.downloadLogo() : Promise.reject(new Error('Invalid client'))),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true),
  }),
}
export interface Cw20ReactQuery<TResponse, TData = TResponse> {
  client: Cw20QueryClient | undefined
  options?: Omit<
    UseQueryOptions<TResponse, Error, TData>,
    "'queryKey' | 'queryFn' | 'initialData'"
  > & {
    initialData?: undefined
  }
}
export interface Cw20DownloadLogoQuery<TData> extends Cw20ReactQuery<DownloadLogoResponse, TData> {}
export function useCw20DownloadLogoQuery<TData = DownloadLogoResponse>({
  client,
  options,
}: Cw20DownloadLogoQuery<TData>) {
  return useQuery<DownloadLogoResponse, Error, TData>(
    cw20QueryKeys.downloadLogo(client?.contractAddress),
    () => (client ? client.downloadLogo() : Promise.reject(new Error('Invalid client'))),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface Cw20MarketingInfoQuery<TData>
  extends Cw20ReactQuery<MarketingInfoResponse, TData> {}
export function useCw20MarketingInfoQuery<TData = MarketingInfoResponse>({
  client,
  options,
}: Cw20MarketingInfoQuery<TData>) {
  return useQuery<MarketingInfoResponse, Error, TData>(
    cw20QueryKeys.marketingInfo(client?.contractAddress),
    () => (client ? client.marketingInfo() : Promise.reject(new Error('Invalid client'))),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface Cw20AllAccountsQuery<TData> extends Cw20ReactQuery<AllAccountsResponse, TData> {
  args: {
    limit?: number
    startAfter?: string
  }
}
export function useCw20AllAccountsQuery<TData = AllAccountsResponse>({
  client,
  args,
  options,
}: Cw20AllAccountsQuery<TData>) {
  return useQuery<AllAccountsResponse, Error, TData>(
    cw20QueryKeys.allAccounts(client?.contractAddress, args),
    () =>
      client
        ? client.allAccounts({
            limit: args.limit,
            startAfter: args.startAfter,
          })
        : Promise.reject(new Error('Invalid client')),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface Cw20AllAllowancesQuery<TData>
  extends Cw20ReactQuery<AllAllowancesResponse, TData> {
  args: {
    limit?: number
    owner: string
    startAfter?: string
  }
}
export function useCw20AllAllowancesQuery<TData = AllAllowancesResponse>({
  client,
  args,
  options,
}: Cw20AllAllowancesQuery<TData>) {
  return useQuery<AllAllowancesResponse, Error, TData>(
    cw20QueryKeys.allAllowances(client?.contractAddress, args),
    () =>
      client
        ? client.allAllowances({
            limit: args.limit,
            owner: args.owner,
            startAfter: args.startAfter,
          })
        : Promise.reject(new Error('Invalid client')),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface Cw20AllowanceQuery<TData> extends Cw20ReactQuery<AllowanceResponse, TData> {
  args: {
    owner: string
    spender: string
  }
}
export function useCw20AllowanceQuery<TData = AllowanceResponse>({
  client,
  args,
  options,
}: Cw20AllowanceQuery<TData>) {
  return useQuery<AllowanceResponse, Error, TData>(
    cw20QueryKeys.allowance(client?.contractAddress, args),
    () =>
      client
        ? client.allowance({
            owner: args.owner,
            spender: args.spender,
          })
        : Promise.reject(new Error('Invalid client')),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface Cw20MinterQuery<TData> extends Cw20ReactQuery<MinterResponse, TData> {}
export function useCw20MinterQuery<TData = MinterResponse>({
  client,
  options,
}: Cw20MinterQuery<TData>) {
  return useQuery<MinterResponse, Error, TData>(
    cw20QueryKeys.minter(client?.contractAddress),
    () => (client ? client.minter() : Promise.reject(new Error('Invalid client'))),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface Cw20TokenInfoQuery<TData> extends Cw20ReactQuery<TokenInfoResponse, TData> {}
export function useCw20TokenInfoQuery<TData = TokenInfoResponse>({
  client,
  options,
}: Cw20TokenInfoQuery<TData>) {
  return useQuery<TokenInfoResponse, Error, TData>(
    cw20QueryKeys.tokenInfo(client?.contractAddress),
    () => (client ? client.tokenInfo() : Promise.reject(new Error('Invalid client'))),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface Cw20BalanceQuery<TData> extends Cw20ReactQuery<BalanceResponse, TData> {
  args: {
    address: string
  }
}
export function useCw20BalanceQuery<TData = BalanceResponse>({
  client,
  args,
  options,
}: Cw20BalanceQuery<TData>) {
  return useQuery<BalanceResponse, Error, TData>(
    cw20QueryKeys.balance(client?.contractAddress, args),
    () =>
      client
        ? client.balance({
            address: args.address,
          })
        : Promise.reject(new Error('Invalid client')),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface Cw20UploadLogoMutation {
  client: Cw20Client
  msg: Logo
  args?: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: Coin[]
  }
}
export function useCw20UploadLogoMutation(
  options?: Omit<UseMutationOptions<ExecuteResult, Error, Cw20UploadLogoMutation>, 'mutationFn'>
) {
  return useMutation<ExecuteResult, Error, Cw20UploadLogoMutation>(
    ({ client, msg, args: { fee, memo, funds } = {} }) => client.uploadLogo(msg, fee, memo, funds),
    options
  )
}
export interface Cw20UpdateMarketingMutation {
  client: Cw20Client
  msg: {
    description?: string
    marketing?: string
    project?: string
  }
  args?: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: Coin[]
  }
}
export function useCw20UpdateMarketingMutation(
  options?: Omit<
    UseMutationOptions<ExecuteResult, Error, Cw20UpdateMarketingMutation>,
    'mutationFn'
  >
) {
  return useMutation<ExecuteResult, Error, Cw20UpdateMarketingMutation>(
    ({ client, msg, args: { fee, memo, funds } = {} }) =>
      client.updateMarketing(msg, fee, memo, funds),
    options
  )
}
export interface Cw20UpdateMinterMutation {
  client: Cw20Client
  msg: {
    newMinter: string
  }
  args?: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: Coin[]
  }
}
export function useCw20UpdateMinterMutation(
  options?: Omit<UseMutationOptions<ExecuteResult, Error, Cw20UpdateMinterMutation>, 'mutationFn'>
) {
  return useMutation<ExecuteResult, Error, Cw20UpdateMinterMutation>(
    ({ client, msg, args: { fee, memo, funds } = {} }) =>
      client.updateMinter(msg, fee, memo, funds),
    options
  )
}
export interface Cw20MintMutation {
  client: Cw20Client
  msg: {
    amount: Uint128
    recipient: string
  }
  args?: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: Coin[]
  }
}
export function useCw20MintMutation(
  options?: Omit<UseMutationOptions<ExecuteResult, Error, Cw20MintMutation>, 'mutationFn'>
) {
  return useMutation<ExecuteResult, Error, Cw20MintMutation>(
    ({ client, msg, args: { fee, memo, funds } = {} }) => client.mint(msg, fee, memo, funds),
    options
  )
}
export interface Cw20BurnFromMutation {
  client: Cw20Client
  msg: {
    amount: Uint128
    owner: string
  }
  args?: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: Coin[]
  }
}
export function useCw20BurnFromMutation(
  options?: Omit<UseMutationOptions<ExecuteResult, Error, Cw20BurnFromMutation>, 'mutationFn'>
) {
  return useMutation<ExecuteResult, Error, Cw20BurnFromMutation>(
    ({ client, msg, args: { fee, memo, funds } = {} }) => client.burnFrom(msg, fee, memo, funds),
    options
  )
}
export interface Cw20SendFromMutation {
  client: Cw20Client
  msg: {
    amount: Uint128
    contract: string
    msg: Binary
    owner: string
  }
  args?: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: Coin[]
  }
}
export function useCw20SendFromMutation(
  options?: Omit<UseMutationOptions<ExecuteResult, Error, Cw20SendFromMutation>, 'mutationFn'>
) {
  return useMutation<ExecuteResult, Error, Cw20SendFromMutation>(
    ({ client, msg, args: { fee, memo, funds } = {} }) => client.sendFrom(msg, fee, memo, funds),
    options
  )
}
export interface Cw20TransferFromMutation {
  client: Cw20Client
  msg: {
    amount: Uint128
    owner: string
    recipient: string
  }
  args?: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: Coin[]
  }
}
export function useCw20TransferFromMutation(
  options?: Omit<UseMutationOptions<ExecuteResult, Error, Cw20TransferFromMutation>, 'mutationFn'>
) {
  return useMutation<ExecuteResult, Error, Cw20TransferFromMutation>(
    ({ client, msg, args: { fee, memo, funds } = {} }) =>
      client.transferFrom(msg, fee, memo, funds),
    options
  )
}
export interface Cw20DecreaseAllowanceMutation {
  client: Cw20Client
  msg: {
    amount: Uint128
    expires?: Expiration
    spender: string
  }
  args?: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: Coin[]
  }
}
export function useCw20DecreaseAllowanceMutation(
  options?: Omit<
    UseMutationOptions<ExecuteResult, Error, Cw20DecreaseAllowanceMutation>,
    'mutationFn'
  >
) {
  return useMutation<ExecuteResult, Error, Cw20DecreaseAllowanceMutation>(
    ({ client, msg, args: { fee, memo, funds } = {} }) =>
      client.decreaseAllowance(msg, fee, memo, funds),
    options
  )
}
export interface Cw20IncreaseAllowanceMutation {
  client: Cw20Client
  msg: {
    amount: Uint128
    expires?: Expiration
    spender: string
  }
  args?: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: Coin[]
  }
}
export function useCw20IncreaseAllowanceMutation(
  options?: Omit<
    UseMutationOptions<ExecuteResult, Error, Cw20IncreaseAllowanceMutation>,
    'mutationFn'
  >
) {
  return useMutation<ExecuteResult, Error, Cw20IncreaseAllowanceMutation>(
    ({ client, msg, args: { fee, memo, funds } = {} }) =>
      client.increaseAllowance(msg, fee, memo, funds),
    options
  )
}
export interface Cw20SendMutation {
  client: Cw20Client
  msg: {
    amount: Uint128
    contract: string
    msg: Binary
  }
  args?: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: Coin[]
  }
}
export function useCw20SendMutation(
  options?: Omit<UseMutationOptions<ExecuteResult, Error, Cw20SendMutation>, 'mutationFn'>
) {
  return useMutation<ExecuteResult, Error, Cw20SendMutation>(
    ({ client, msg, args: { fee, memo, funds } = {} }) => client.send(msg, fee, memo, funds),
    options
  )
}
export interface Cw20BurnMutation {
  client: Cw20Client
  msg: {
    amount: Uint128
  }
  args?: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: Coin[]
  }
}
export function useCw20BurnMutation(
  options?: Omit<UseMutationOptions<ExecuteResult, Error, Cw20BurnMutation>, 'mutationFn'>
) {
  return useMutation<ExecuteResult, Error, Cw20BurnMutation>(
    ({ client, msg, args: { fee, memo, funds } = {} }) => client.burn(msg, fee, memo, funds),
    options
  )
}
export interface Cw20TransferMutation {
  client: Cw20Client
  msg: {
    amount: Uint128
    recipient: string
  }
  args?: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: Coin[]
  }
}
export function useCw20TransferMutation(
  options?: Omit<UseMutationOptions<ExecuteResult, Error, Cw20TransferMutation>, 'mutationFn'>
) {
  return useMutation<ExecuteResult, Error, Cw20TransferMutation>(
    ({ client, msg, args: { fee, memo, funds } = {} }) => client.transfer(msg, fee, memo, funds),
    options
  )
}
