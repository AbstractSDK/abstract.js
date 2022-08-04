/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.5.8.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import { ExecuteResult } from '@cosmjs/cosmwasm-stargate'
import { StdFee } from '@cosmjs/amino'
import { useQuery, UseQueryOptions, useMutation, UseMutationOptions } from '@tanstack/react-query'
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
} from '../contracts/Cw3FlexMultisigContract'
import {
  Cw3FlexMultisigQueryClient,
  Cw3FlexMultisigClient,
} from '../contracts/Cw3FlexMultisigContract'
export interface Cw3FlexMultisigListVotersQuery {
  client?: Cw3FlexMultisigQueryClient
  options?: Omit<
    UseQueryOptions<
      ListVotersResponse | undefined,
      Error,
      ListVotersResponse,
      (string | undefined)[]
    >,
    "'queryKey' | 'queryFn' | 'initialData'"
  > & {
    initialData?: undefined
  }
  args: {
    limit?: number
    startAfter?: string
  }
}
export function useCw3FlexMultisigListVotersQuery({
  client,
  args,
  options,
}: Cw3FlexMultisigListVotersQuery) {
  return useQuery<
    ListVotersResponse | undefined,
    Error,
    ListVotersResponse,
    (string | undefined)[]
  >(
    ['cw3FlexMultisigListVoters', client?.contractAddress, JSON.stringify(args)],
    () =>
      client
        ? client.listVoters({
            limit: args.limit,
            startAfter: args.startAfter,
          })
        : undefined,
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface Cw3FlexMultisigVoterQuery {
  client?: Cw3FlexMultisigQueryClient
  options?: Omit<
    UseQueryOptions<VoterResponse | undefined, Error, VoterResponse, (string | undefined)[]>,
    "'queryKey' | 'queryFn' | 'initialData'"
  > & {
    initialData?: undefined
  }
  args: {
    address: string
  }
}
export function useCw3FlexMultisigVoterQuery({ client, args, options }: Cw3FlexMultisigVoterQuery) {
  return useQuery<VoterResponse | undefined, Error, VoterResponse, (string | undefined)[]>(
    ['cw3FlexMultisigVoter', client?.contractAddress, JSON.stringify(args)],
    () =>
      client
        ? client.voter({
            address: args.address,
          })
        : undefined,
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface Cw3FlexMultisigListVotesQuery {
  client?: Cw3FlexMultisigQueryClient
  options?: Omit<
    UseQueryOptions<
      ListVotesResponse | undefined,
      Error,
      ListVotesResponse,
      (string | undefined)[]
    >,
    "'queryKey' | 'queryFn' | 'initialData'"
  > & {
    initialData?: undefined
  }
  args: {
    limit?: number
    proposalId: number
    startAfter?: string
  }
}
export function useCw3FlexMultisigListVotesQuery({
  client,
  args,
  options,
}: Cw3FlexMultisigListVotesQuery) {
  return useQuery<ListVotesResponse | undefined, Error, ListVotesResponse, (string | undefined)[]>(
    ['cw3FlexMultisigListVotes', client?.contractAddress, JSON.stringify(args)],
    () =>
      client
        ? client.listVotes({
            limit: args.limit,
            proposalId: args.proposalId,
            startAfter: args.startAfter,
          })
        : undefined,
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface Cw3FlexMultisigVoteQuery {
  client?: Cw3FlexMultisigQueryClient
  options?: Omit<
    UseQueryOptions<VoteResponse | undefined, Error, VoteResponse, (string | undefined)[]>,
    "'queryKey' | 'queryFn' | 'initialData'"
  > & {
    initialData?: undefined
  }
  args: {
    proposalId: number
    voter: string
  }
}
export function useCw3FlexMultisigVoteQuery({ client, args, options }: Cw3FlexMultisigVoteQuery) {
  return useQuery<VoteResponse | undefined, Error, VoteResponse, (string | undefined)[]>(
    ['cw3FlexMultisigVote', client?.contractAddress, JSON.stringify(args)],
    () =>
      client
        ? client.queryVote({
            proposalId: args.proposalId,
            voter: args.voter,
          })
        : undefined,
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface Cw3FlexMultisigReverseProposalsQuery {
  client?: Cw3FlexMultisigQueryClient
  options?: Omit<
    UseQueryOptions<
      ReverseProposalsResponse | undefined,
      Error,
      ReverseProposalsResponse,
      (string | undefined)[]
    >,
    "'queryKey' | 'queryFn' | 'initialData'"
  > & {
    initialData?: undefined
  }
  args: {
    limit?: number
    startBefore?: number
  }
}
export function useCw3FlexMultisigReverseProposalsQuery({
  client,
  args,
  options,
}: Cw3FlexMultisigReverseProposalsQuery) {
  return useQuery<
    ReverseProposalsResponse | undefined,
    Error,
    ReverseProposalsResponse,
    (string | undefined)[]
  >(
    ['cw3FlexMultisigReverseProposals', client?.contractAddress, JSON.stringify(args)],
    () =>
      client
        ? client.reverseProposals({
            limit: args.limit,
            startBefore: args.startBefore,
          })
        : undefined,
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface Cw3FlexMultisigListProposalsQuery {
  client?: Cw3FlexMultisigQueryClient
  options?: Omit<
    UseQueryOptions<
      ListProposalsResponse | undefined,
      Error,
      ListProposalsResponse,
      (string | undefined)[]
    >,
    "'queryKey' | 'queryFn' | 'initialData'"
  > & {
    initialData?: undefined
  }
  args: {
    limit?: number
    startAfter?: number
  }
}
export function useCw3FlexMultisigListProposalsQuery({
  client,
  args,
  options,
}: Cw3FlexMultisigListProposalsQuery) {
  return useQuery<
    ListProposalsResponse | undefined,
    Error,
    ListProposalsResponse,
    (string | undefined)[]
  >(
    ['cw3FlexMultisigListProposals', client?.contractAddress, JSON.stringify(args)],
    () =>
      client
        ? client.listProposals({
            limit: args.limit,
            startAfter: args.startAfter,
          })
        : undefined,
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface Cw3FlexMultisigProposalQuery {
  client?: Cw3FlexMultisigQueryClient
  options?: Omit<
    UseQueryOptions<ProposalResponse | undefined, Error, ProposalResponse, (string | undefined)[]>,
    "'queryKey' | 'queryFn' | 'initialData'"
  > & {
    initialData?: undefined
  }
  args: {
    proposalId: number
  }
}
export function useCw3FlexMultisigProposalQuery({
  client,
  args,
  options,
}: Cw3FlexMultisigProposalQuery) {
  return useQuery<ProposalResponse | undefined, Error, ProposalResponse, (string | undefined)[]>(
    ['cw3FlexMultisigProposal', client?.contractAddress, JSON.stringify(args)],
    () =>
      client
        ? client.proposal({
            proposalId: args.proposalId,
          })
        : undefined,
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface Cw3FlexMultisigThresholdQuery {
  client?: Cw3FlexMultisigQueryClient
  options?: Omit<
    UseQueryOptions<
      ThresholdResponse | undefined,
      Error,
      ThresholdResponse,
      (string | undefined)[]
    >,
    "'queryKey' | 'queryFn' | 'initialData'"
  > & {
    initialData?: undefined
  }
}
export function useCw3FlexMultisigThresholdQuery({
  client,
  options,
}: Cw3FlexMultisigThresholdQuery) {
  return useQuery<ThresholdResponse | undefined, Error, ThresholdResponse, (string | undefined)[]>(
    ['cw3FlexMultisigThreshold', client?.contractAddress],
    () => (client ? client.threshold() : undefined),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) }
  )
}
export interface Cw3FlexMultisigMemberChangedHookMutation {
  client: Cw3FlexMultisigClient
  msg: {
    diffs: MemberDiff[]
  }
  args: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: readonly Coin[]
  }
}
export function useCw3FlexMultisigMemberChangedHookMutation(
  options?: Omit<
    UseMutationOptions<ExecuteResult, Error, Cw3FlexMultisigMemberChangedHookMutation>,
    'mutationFn'
  >
) {
  return useMutation<ExecuteResult, Error, Cw3FlexMultisigMemberChangedHookMutation>(
    ({ client, msg, args: { fee, memo, funds } }) =>
      client.memberChangedHook(msg, fee, memo, funds),
    options
  )
}
export interface Cw3FlexMultisigCloseMutation {
  client: Cw3FlexMultisigClient
  msg: {
    proposalId: number
  }
  args: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: readonly Coin[]
  }
}
export function useCw3FlexMultisigCloseMutation(
  options?: Omit<
    UseMutationOptions<ExecuteResult, Error, Cw3FlexMultisigCloseMutation>,
    'mutationFn'
  >
) {
  return useMutation<ExecuteResult, Error, Cw3FlexMultisigCloseMutation>(
    ({ client, msg, args: { fee, memo, funds } }) => client.close(msg, fee, memo, funds),
    options
  )
}
export interface Cw3FlexMultisigExecuteMutation {
  client: Cw3FlexMultisigClient
  msg: {
    proposalId: number
  }
  args: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: readonly Coin[]
  }
}
export function useCw3FlexMultisigExecuteMutation(
  options?: Omit<
    UseMutationOptions<ExecuteResult, Error, Cw3FlexMultisigExecuteMutation>,
    'mutationFn'
  >
) {
  return useMutation<ExecuteResult, Error, Cw3FlexMultisigExecuteMutation>(
    ({ client, msg, args: { fee, memo, funds } }) => client.execute(msg, fee, memo, funds),
    options
  )
}
export interface Cw3FlexMultisigVoteMutation {
  client: Cw3FlexMultisigClient
  msg: {
    proposalId: number
    vote: string
  }
  args: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: readonly Coin[]
  }
}
export function useCw3FlexMultisigVoteMutation(
  options?: Omit<
    UseMutationOptions<ExecuteResult, Error, Cw3FlexMultisigVoteMutation>,
    'mutationFn'
  >
) {
  return useMutation<ExecuteResult, Error, Cw3FlexMultisigVoteMutation>(
    ({ client, msg, args: { fee, memo, funds } }) => client.vote(msg, fee, memo, funds),
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
    funds?: readonly Coin[]
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
