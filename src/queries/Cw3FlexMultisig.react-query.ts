/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.11.1.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from '@tanstack/react-query'
import { ExecuteResult } from '@cosmjs/cosmwasm-stargate'
import { StdFee } from '@cosmjs/amino'
import {
  CosmosMsgForEmpty,
  BankMsg,
  Uint128,
  StakingMsg,
  DistributionMsg,
  WasmMsg,
  Binary,
  Coin,
  Empty,
  ExecuteMsg,
  Expiration,
  Timestamp,
  Uint64,
  Vote,
  MemberChangedHookMsg,
  MemberDiff,
  Executor,
  Addr,
  Duration,
  Threshold,
  Decimal,
  InstantiateMsg,
  Status,
  ThresholdResponse,
  ListProposalsResponse,
  ProposalResponseForEmpty,
  ListVotersResponse,
  VoterDetail,
  ListVotesResponse,
  VoteInfo,
  ProposalResponse,
  QueryMsg,
  ReverseProposalsResponse,
  VoteResponse,
  VoterResponse,
} from '../types/Cw3FlexMultisig.types'
import {
  Cw3FlexMultisigQueryClient,
  Cw3FlexMultisigClient,
} from '../contracts/Cw3FlexMultisig.client'
export const cw3FlexMultisigQueryKeys = {
  contract: [
    {
      contract: 'cw3FlexMultisig',
    },
  ] as const,
  address: (contractAddress: string | undefined) =>
    [{ ...cw3FlexMultisigQueryKeys.contract[0], address: contractAddress }] as const,
  threshold: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [
      { ...cw3FlexMultisigQueryKeys.address(contractAddress)[0], method: 'threshold', args },
    ] as const,
  proposal: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [
      { ...cw3FlexMultisigQueryKeys.address(contractAddress)[0], method: 'proposal', args },
    ] as const,
  listProposals: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [
      { ...cw3FlexMultisigQueryKeys.address(contractAddress)[0], method: 'list_proposals', args },
    ] as const,
  reverseProposals: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [
      {
        ...cw3FlexMultisigQueryKeys.address(contractAddress)[0],
        method: 'reverse_proposals',
        args,
      },
    ] as const,
  vote: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [{ ...cw3FlexMultisigQueryKeys.address(contractAddress)[0], method: 'vote', args }] as const,
  listVotes: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [
      { ...cw3FlexMultisigQueryKeys.address(contractAddress)[0], method: 'list_votes', args },
    ] as const,
  voter: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [{ ...cw3FlexMultisigQueryKeys.address(contractAddress)[0], method: 'voter', args }] as const,
  listVoters: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [
      { ...cw3FlexMultisigQueryKeys.address(contractAddress)[0], method: 'list_voters', args },
    ] as const,
}
export interface Cw3FlexMultisigReactQuery<TResponse, TData = TResponse> {
  client: Cw3FlexMultisigQueryClient | undefined
  options?: Omit<
    UseQueryOptions<TResponse, Error, TData>,
    "'queryKey' | 'queryFn' | 'initialData'"
  > & {
    initialData?: undefined
  }
}
export interface Cw3FlexMultisigListVotersQuery<TData>
  extends Cw3FlexMultisigReactQuery<ListVotersResponse, TData> {
  args: {
    limit?: number
    startAfter?: string
  }
}
export function useCw3FlexMultisigListVotersQuery<TData = ListVotersResponse>({
  client,
  args,
  options,
}: Cw3FlexMultisigListVotersQuery<TData>) {
  return useQuery<ListVotersResponse, Error, TData>(
    cw3FlexMultisigQueryKeys.listVoters(client?.contractAddress, args),
    () =>
      client
        ? client.listVoters({
            limit: args.limit,
            startAfter: args.startAfter,
          })
        : Promise.reject(new Error('Invalid client')),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface Cw3FlexMultisigVoterQuery<TData>
  extends Cw3FlexMultisigReactQuery<VoterResponse, TData> {
  args: {
    address: string
  }
}
export function useCw3FlexMultisigVoterQuery<TData = VoterResponse>({
  client,
  args,
  options,
}: Cw3FlexMultisigVoterQuery<TData>) {
  return useQuery<VoterResponse, Error, TData>(
    cw3FlexMultisigQueryKeys.voter(client?.contractAddress, args),
    () =>
      client
        ? client.voter({
            address: args.address,
          })
        : Promise.reject(new Error('Invalid client')),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface Cw3FlexMultisigListVotesQuery<TData>
  extends Cw3FlexMultisigReactQuery<ListVotesResponse, TData> {
  args: {
    limit?: number
    proposalId: number
    startAfter?: string
  }
}
export function useCw3FlexMultisigListVotesQuery<TData = ListVotesResponse>({
  client,
  args,
  options,
}: Cw3FlexMultisigListVotesQuery<TData>) {
  return useQuery<ListVotesResponse, Error, TData>(
    cw3FlexMultisigQueryKeys.listVotes(client?.contractAddress, args),
    () =>
      client
        ? client.listVotes({
            limit: args.limit,
            proposalId: args.proposalId,
            startAfter: args.startAfter,
          })
        : Promise.reject(new Error('Invalid client')),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface Cw3FlexMultisigVoteQuery<TData>
  extends Cw3FlexMultisigReactQuery<VoteResponse, TData> {
  args: {
    proposalId: number
    voter: string
  }
}
export function useCw3FlexMultisigVoteQuery<TData = VoteResponse>({
  client,
  args,
  options,
}: Cw3FlexMultisigVoteQuery<TData>) {
  return useQuery<VoteResponse, Error, TData>(
    cw3FlexMultisigQueryKeys.vote(client?.contractAddress, args),
    () =>
      client
        ? client.queryVote({
            proposalId: args.proposalId,
            voter: args.voter,
          })
        : Promise.reject(new Error('Invalid client')),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface Cw3FlexMultisigReverseProposalsQuery<TData>
  extends Cw3FlexMultisigReactQuery<ReverseProposalsResponse, TData> {
  args: {
    limit?: number
    startBefore?: number
  }
}
export function useCw3FlexMultisigReverseProposalsQuery<TData = ReverseProposalsResponse>({
  client,
  args,
  options,
}: Cw3FlexMultisigReverseProposalsQuery<TData>) {
  return useQuery<ReverseProposalsResponse, Error, TData>(
    cw3FlexMultisigQueryKeys.reverseProposals(client?.contractAddress, args),
    () =>
      client
        ? client.reverseProposals({
            limit: args.limit,
            startBefore: args.startBefore,
          })
        : Promise.reject(new Error('Invalid client')),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface Cw3FlexMultisigListProposalsQuery<TData>
  extends Cw3FlexMultisigReactQuery<ListProposalsResponse, TData> {
  args: {
    limit?: number
    startAfter?: number
  }
}
export function useCw3FlexMultisigListProposalsQuery<TData = ListProposalsResponse>({
  client,
  args,
  options,
}: Cw3FlexMultisigListProposalsQuery<TData>) {
  return useQuery<ListProposalsResponse, Error, TData>(
    cw3FlexMultisigQueryKeys.listProposals(client?.contractAddress, args),
    () =>
      client
        ? client.listProposals({
            limit: args.limit,
            startAfter: args.startAfter,
          })
        : Promise.reject(new Error('Invalid client')),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface Cw3FlexMultisigProposalQuery<TData>
  extends Cw3FlexMultisigReactQuery<ProposalResponse, TData> {
  args: {
    proposalId: number
  }
}
export function useCw3FlexMultisigProposalQuery<TData = ProposalResponse>({
  client,
  args,
  options,
}: Cw3FlexMultisigProposalQuery<TData>) {
  return useQuery<ProposalResponse, Error, TData>(
    cw3FlexMultisigQueryKeys.proposal(client?.contractAddress, args),
    () =>
      client
        ? client.proposal({
            proposalId: args.proposalId,
          })
        : Promise.reject(new Error('Invalid client')),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface Cw3FlexMultisigThresholdQuery<TData>
  extends Cw3FlexMultisigReactQuery<ThresholdResponse, TData> {}
export function useCw3FlexMultisigThresholdQuery<TData = ThresholdResponse>({
  client,
  options,
}: Cw3FlexMultisigThresholdQuery<TData>) {
  return useQuery<ThresholdResponse, Error, TData>(
    cw3FlexMultisigQueryKeys.threshold(client?.contractAddress),
    () => (client ? client.threshold() : Promise.reject(new Error('Invalid client'))),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface Cw3FlexMultisigMemberChangedHookMutation {
  client: Cw3FlexMultisigClient
  msg: MemberChangedHookMsg
  args?: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: Coin[]
  }
}
export function useCw3FlexMultisigMemberChangedHookMutation(
  options?: Omit<
    UseMutationOptions<ExecuteResult, Error, Cw3FlexMultisigMemberChangedHookMutation>,
    'mutationFn'
  >
) {
  return useMutation<ExecuteResult, Error, Cw3FlexMultisigMemberChangedHookMutation>(
    ({ client, msg, args: { fee, memo, funds } = {} }) =>
      client.memberChangedHook(msg, fee, memo, funds),
    options
  )
}
export interface Cw3FlexMultisigCloseMutation {
  client: Cw3FlexMultisigClient
  msg: {
    proposalId: number
  }
  args?: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: Coin[]
  }
}
export function useCw3FlexMultisigCloseMutation(
  options?: Omit<
    UseMutationOptions<ExecuteResult, Error, Cw3FlexMultisigCloseMutation>,
    'mutationFn'
  >
) {
  return useMutation<ExecuteResult, Error, Cw3FlexMultisigCloseMutation>(
    ({ client, msg, args: { fee, memo, funds } = {} }) => client.close(msg, fee, memo, funds),
    options
  )
}
export interface Cw3FlexMultisigExecuteMutation {
  client: Cw3FlexMultisigClient
  msg: {
    proposalId: number
  }
  args?: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: Coin[]
  }
}
export function useCw3FlexMultisigExecuteMutation(
  options?: Omit<
    UseMutationOptions<ExecuteResult, Error, Cw3FlexMultisigExecuteMutation>,
    'mutationFn'
  >
) {
  return useMutation<ExecuteResult, Error, Cw3FlexMultisigExecuteMutation>(
    ({ client, msg, args: { fee, memo, funds } = {} }) => client.execute(msg, fee, memo, funds),
    options
  )
}
export interface Cw3FlexMultisigVoteMutation {
  client: Cw3FlexMultisigClient
  msg: {
    proposalId: number
    vote: Vote
  }
  args?: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: Coin[]
  }
}
export function useCw3FlexMultisigVoteMutation(
  options?: Omit<
    UseMutationOptions<ExecuteResult, Error, Cw3FlexMultisigVoteMutation>,
    'mutationFn'
  >
) {
  return useMutation<ExecuteResult, Error, Cw3FlexMultisigVoteMutation>(
    ({ client, msg, args: { fee, memo, funds } = {} }) => client.vote(msg, fee, memo, funds),
    options
  )
}
export interface Cw3FlexMultisigProposeMutation {
  client: Cw3FlexMultisigClient
  msg: {
    description: string
    latest?: Expiration
    msgs: CosmosMsgForEmpty[]
    title: string
  }
  args?: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: Coin[]
  }
}
export function useCw3FlexMultisigProposeMutation(
  options?: Omit<
    UseMutationOptions<ExecuteResult, Error, Cw3FlexMultisigProposeMutation>,
    'mutationFn'
  >
) {
  return useMutation<ExecuteResult, Error, Cw3FlexMultisigProposeMutation>(
    ({ client, msg, args: { fee, memo, funds } = {} }) => client.propose(msg, fee, memo, funds),
    options
  )
}
