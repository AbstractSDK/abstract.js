/**
* This file was automatically generated by cosmwasm-typescript-gen@0.2.15.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { CosmosMsg_for_Empty, BankMsg, Uint128, StakingMsg, DistributionMsg, WasmMsg, Binary, Coin, Empty, Executor, Addr, Duration, Threshold, Decimal, InstantiateMsg, Expiration, Timestamp, Uint64, Status, ThresholdResponse, ListProposalsResponse, ProposalResponseFor_Empty, ListVotersResponse, VoterDetail, Vote, ListVotesResponse, VoteInfo, ProposalResponse, ReverseProposalsResponse, VoteResponse, VoterResponse } from "../contracts/Cw3FlexMultisigContract";
import { Cw3FlexMultisigQueryClient } from "../contracts/Cw3FlexMultisigContract";
export interface Cw3FlexMultisigListVotersQuery {
  client?: Cw3FlexMultisigQueryClient;
  options?: Omit<UseQueryOptions<ListVotersResponse | undefined, Error, ListVotersResponse, (string | undefined)[]>, 'queryKey' | 'queryFn' | 'initialData'> & { initialData?: () => undefined }
  args: {
    limit?: number;
    startAfter?: string;
  };
}
export function useCw3FlexMultisigListVotersQuery({
  client,
  args,
  options
}: Cw3FlexMultisigListVotersQuery) {
  return useQuery<ListVotersResponse | undefined, Error, ListVotersResponse, (string | undefined)[]>(["cw3FlexMultisigListVoters", client?.contractAddress], () => client ? client.listVoters({
    limit: args.limit,
    startAfter: args.startAfter
  }) : undefined, {
    ...options,
    enabled: !!client  && options?.enabled
  });
}
export interface Cw3FlexMultisigVoterQuery {
  client?: Cw3FlexMultisigQueryClient;
  options?: Omit<UseQueryOptions<VoterResponse | undefined, Error, VoterResponse, (string | undefined)[]>, 'queryKey' | 'queryFn' | 'initialData'> & { initialData?: () => undefined }
  args: {
    address: string;
  };
}
export function useCw3FlexMultisigVoterQuery({
  client,
  args,
  options
}: Cw3FlexMultisigVoterQuery) {
  return useQuery<VoterResponse | undefined, Error, VoterResponse, (string | undefined)[]>(["cw3FlexMultisigVoter", client?.contractAddress], () => client ? client.voter({
    address: args.address
  }) : undefined, {
    ...options,
    enabled: !!client  && options?.enabled
  });
}
export interface Cw3FlexMultisigListVotesQuery {
  client?: Cw3FlexMultisigQueryClient;
  options?: Omit<UseQueryOptions<ListVotesResponse | undefined, Error, ListVotesResponse, (string | undefined)[]>, 'queryKey' | 'queryFn' | 'initialData'> & { initialData?: () => undefined }
  args: {
    limit?: number;
    proposalId: number;
    startAfter?: string;
  };
}
export function useCw3FlexMultisigListVotesQuery({
  client,
  args,
  options
}: Cw3FlexMultisigListVotesQuery) {
  return useQuery<ListVotesResponse | undefined, Error, ListVotesResponse, (string | undefined)[]>(["cw3FlexMultisigListVotes", client?.contractAddress], () => client ? client.listVotes({
    limit: args.limit,
    proposalId: args.proposalId,
    startAfter: args.startAfter
  }) : undefined, {
    ...options,
    enabled: !!client  && options?.enabled
  });
}
export interface Cw3FlexMultisigVoteQuery {
  client?: Cw3FlexMultisigQueryClient;
  options?: Omit<UseQueryOptions<VoteResponse | undefined, Error, VoteResponse, (string | undefined)[]>, 'queryKey' | 'queryFn' | 'initialData'> & { initialData?: () => undefined }
  args: {
    proposalId: number;
    voter: string;
  };
}
export function useCw3FlexMultisigVoteQuery({
  client,
  args,
  options
}: Cw3FlexMultisigVoteQuery) {
  return useQuery<VoteResponse | undefined, Error, VoteResponse, (string | undefined)[]>(["cw3FlexMultisigVote", client?.contractAddress], () => client ? client.queryVote({
    proposalId: args.proposalId,
    voter: args.voter
  }) : undefined, {
    ...options,
    enabled: !!client  && options?.enabled
  });
}
export interface Cw3FlexMultisigReverseProposalsQuery {
  client?: Cw3FlexMultisigQueryClient;
  options?: Omit<UseQueryOptions<ReverseProposalsResponse | undefined, Error, ReverseProposalsResponse, (string | undefined)[]>, 'queryKey' | 'queryFn' | 'initialData'> & { initialData?: () => undefined }
  args: {
    limit?: number;
    startBefore?: number;
  };
}
export function useCw3FlexMultisigReverseProposalsQuery({
  client,
  args,
  options
}: Cw3FlexMultisigReverseProposalsQuery) {
  return useQuery<ReverseProposalsResponse | undefined, Error, ReverseProposalsResponse, (string | undefined)[]>(["cw3FlexMultisigReverseProposals", client?.contractAddress], () => client ? client.reverseProposals({
    limit: args.limit,
    startBefore: args.startBefore
  }) : undefined, {
    ...options,
    enabled: !!client  && options?.enabled
  });
}
export interface Cw3FlexMultisigListProposalsQuery {
  client?: Cw3FlexMultisigQueryClient;
  options?: Omit<UseQueryOptions<ListProposalsResponse | undefined, Error, ListProposalsResponse, (string | undefined)[]>, 'queryKey' | 'queryFn' | 'initialData'> & { initialData?: () => undefined }
  args: {
    limit?: number;
    startAfter?: number;
  };
}
export function useCw3FlexMultisigListProposalsQuery({
  client,
  args,
  options
}: Cw3FlexMultisigListProposalsQuery) {
  return useQuery<ListProposalsResponse | undefined, Error, ListProposalsResponse, (string | undefined)[]>(["cw3FlexMultisigListProposals", client?.contractAddress], () => client ? client.listProposals({
    limit: args.limit,
    startAfter: args.startAfter
  }) : undefined, {
    ...options,
    enabled: !!client  && options?.enabled
  });
}
export interface Cw3FlexMultisigProposalQuery {
  client?: Cw3FlexMultisigQueryClient;
  options?: Omit<UseQueryOptions<ProposalResponse | undefined, Error, ProposalResponse, (string | undefined)[]>, 'queryKey' | 'queryFn' | 'initialData'> & { initialData?: () => undefined }
  args: {
    proposalId: number;
  };
}
export function useCw3FlexMultisigProposalQuery({
  client,
  args,
  options
}: Cw3FlexMultisigProposalQuery) {
  return useQuery<ProposalResponse | undefined, Error, ProposalResponse, (string | undefined)[]>(["cw3FlexMultisigProposal", client?.contractAddress], () => client ? client.proposal({
    proposalId: args.proposalId
  }) : undefined, {
    ...options,
    enabled: !!client  && options?.enabled
  });
}
export interface Cw3FlexMultisigThresholdQuery {
  client?: Cw3FlexMultisigQueryClient;
  options?: Omit<UseQueryOptions<ThresholdResponse | undefined, Error, ThresholdResponse, (string | undefined)[]>, 'queryKey' | 'queryFn' | 'initialData'> & { initialData?: () => undefined }
}
export function useCw3FlexMultisigThresholdQuery({
  client,
  options
}: Cw3FlexMultisigThresholdQuery) {
  return useQuery<ThresholdResponse | undefined, Error, ThresholdResponse, (string | undefined)[]>(["cw3FlexMultisigThreshold", client?.contractAddress], () => client ? client.threshold() : undefined, {
    ...options,
    enabled: !!client  && options?.enabled
  });
}
