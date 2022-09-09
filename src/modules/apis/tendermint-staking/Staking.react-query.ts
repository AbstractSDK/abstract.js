/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.14.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import { UseQueryOptions, useMutation, UseMutationOptions } from '@tanstack/react-query'
import { ExecuteResult } from '@cosmjs/cosmwasm-stargate'
import { StdFee, Coin } from '@cosmjs/amino'
import {
  BaseResponse,
  ExecuteMsg,
  RequestMsg,
  Uint128,
  BaseExecuteMsg,
  ApiRequestMsgForRequestMsg,
  QueryMsg,
} from './Staking.types'
import { StakingQueryClient, StakingClient } from './Staking.client'
export const stakingQueryKeys = {
  contract: [
    {
      contract: 'staking',
    },
  ] as const,
  address: (contractAddress: string | undefined) =>
    [{ ...stakingQueryKeys.contract[0], address: contractAddress }] as const,
}
export interface StakingReactQuery<TResponse, TData = TResponse> {
  client: StakingQueryClient | undefined
  options?: Omit<
    UseQueryOptions<TResponse, Error, TData>,
    "'queryKey' | 'queryFn' | 'initialData'"
  > & {
    initialData?: undefined
  }
}
export interface StakingConfigureMutation {
  client: StakingClient
  msg: BaseExecuteMsg
  args?: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: Coin[]
  }
}
export function useStakingConfigureMutation(
  options?: Omit<UseMutationOptions<ExecuteResult, Error, StakingConfigureMutation>, 'mutationFn'>
) {
  return useMutation<ExecuteResult, Error, StakingConfigureMutation>(
    ({ client, msg, args: { fee, memo, funds } = {} }) => client.configure(msg, fee, memo, funds),
    options
  )
}
export interface StakingRequestMutation {
  client: StakingClient
  msg: ApiRequestMsgForRequestMsg
  args?: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: Coin[]
  }
}
export function useStakingRequestMutation(
  options?: Omit<UseMutationOptions<ExecuteResult, Error, StakingRequestMutation>, 'mutationFn'>
) {
  return useMutation<ExecuteResult, Error, StakingRequestMutation>(
    ({ client, msg, args: { fee, memo, funds } = {} }) => client.request(msg, fee, memo, funds),
    options
  )
}
