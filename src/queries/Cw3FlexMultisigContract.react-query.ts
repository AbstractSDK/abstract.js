/**
* This file was automatically generated by cosmwasm-typescript-gen@0.2.15.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/

import { useQuery, UseQueryOptions } from "react-query";
import { CosmosMsg_for_Empty, BankMsg, Uint128, StakingMsg, DistributionMsg, WasmMsg, Binary, Coin, Empty, Executor, Addr, Duration, Threshold, Decimal, InstantiateMsg, Expiration, Timestamp, Uint64, Status, ThresholdResponse, ListProposalsResponse, ProposalResponseFor_Empty, ListVotersResponse, VoterDetail, Vote, ListVotesResponse, VoteInfo, ProposalResponse, ReverseProposalsResponse, VoteResponse, VoterResponse } from "./Cw3FlexMultisigContract";
import { Cw3FlexMultisigQueryClient } from "../contracts/Cw3FlexMultisigContract"
export interface Cw3FlexMultisigListVotersQuery {
  client: Cw3FlexMultisigQueryClient;
  options?: UseQueryOptions<ListVotersResponse, Error, ListVotersResponse, (string | undefined)[]>;
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
  return useQuery<ListVotersResponse, Error, ListVotersResponse, (string | undefined)[]>(["cw3FlexMultisigListVoters", client.contractAddress], () => client.listVoters({
    limit: args.limit,
    startAfter: args.startAfter
  }), options);
}
export interface Cw3FlexMultisigVoterQuery {
  client: Cw3FlexMultisigQueryClient;
  options?: UseQueryOptions<VoterResponse, Error, VoterResponse, (string | undefined)[]>;
  args: {
    address: string;
  };
}
export function useCw3FlexMultisigVoterQuery({
  client,
  args,
  options
}: Cw3FlexMultisigVoterQuery) {
  return useQuery<VoterResponse, Error, VoterResponse, (string | undefined)[]>(["cw3FlexMultisigVoter", client.contractAddress], () => client.voter({
    address: args.address
  }), options);
}
export interface Cw3FlexMultisigListVotesQuery {
  client: Cw3FlexMultisigQueryClient;
  options?: UseQueryOptions<ListVotesResponse, Error, ListVotesResponse, (string | undefined)[]>;
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
  return useQuery<ListVotesResponse, Error, ListVotesResponse, (string | undefined)[]>(["cw3FlexMultisigListVotes", client.contractAddress], () => client.listVotes({
    limit: args.limit,
    proposalId: args.proposalId,
    startAfter: args.startAfter
  }), options);
}
export interface Cw3FlexMultisigVoteQuery {
  client: Cw3FlexMultisigQueryClient;
  options?: UseQueryOptions<VoteResponse, Error, VoteResponse, (string | undefined)[]>;
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
  return useQuery<VoteResponse, Error, VoteResponse, (string | undefined)[]>(["cw3FlexMultisigVote", client.contractAddress], () => client.queryVote({
    proposalId: args.proposalId,
    voter: args.voter
  }), options);
}
export interface Cw3FlexMultisigReverseProposalsQuery {
  client: Cw3FlexMultisigQueryClient;
  options?: UseQueryOptions<ReverseProposalsResponse, Error, ReverseProposalsResponse, (string | undefined)[]>;
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
  return useQuery<ReverseProposalsResponse, Error, ReverseProposalsResponse, (string | undefined)[]>(["cw3FlexMultisigReverseProposals", client.contractAddress], () => client.reverseProposals({
    limit: args.limit,
    startBefore: args.startBefore
  }), options);
}
export interface Cw3FlexMultisigListProposalsQuery {
  client: Cw3FlexMultisigQueryClient;
  options?: UseQueryOptions<ListProposalsResponse, Error, ListProposalsResponse, (string | undefined)[]>;
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
  return useQuery<ListProposalsResponse, Error, ListProposalsResponse, (string | undefined)[]>(["cw3FlexMultisigListProposals", client.contractAddress], () => client.listProposals({
    limit: args.limit,
    startAfter: args.startAfter
  }), options);
}
export interface Cw3FlexMultisigProposalQuery {
  client: Cw3FlexMultisigQueryClient;
  options?: UseQueryOptions<ProposalResponse, Error, ProposalResponse, (string | undefined)[]>;
  args: {
    proposalId: number;
  };
}
export function useCw3FlexMultisigProposalQuery({
  client,
  args,
  options
}: Cw3FlexMultisigProposalQuery) {
  return useQuery<ProposalResponse, Error, ProposalResponse, (string | undefined)[]>(["cw3FlexMultisigProposal", client.contractAddress], () => client.proposal({
    proposalId: args.proposalId
  }), options);
}
export interface Cw3FlexMultisigThresholdQuery {
  client: Cw3FlexMultisigQueryClient;
  options?: UseQueryOptions<ThresholdResponse, Error, ThresholdResponse, (string | undefined)[]>;
}
export function useCw3FlexMultisigThresholdQuery({
  client,
  options
}: Cw3FlexMultisigThresholdQuery) {
  return useQuery<ThresholdResponse, Error, ThresholdResponse, (string | undefined)[]>(["cw3FlexMultisigThreshold", client.contractAddress], () => client.threshold(), options);
}
