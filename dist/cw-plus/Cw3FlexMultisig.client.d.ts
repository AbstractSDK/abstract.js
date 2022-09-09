/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.10.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from '@cosmjs/cosmwasm-stargate';
import { StdFee } from '@cosmjs/amino';
import { CosmosMsgForEmpty, Coin, Expiration, Vote, MemberDiff, ThresholdResponse, ListProposalsResponse, ListVotersResponse, ListVotesResponse, ProposalResponse, ReverseProposalsResponse, VoteResponse, VoterResponse } from './Cw3FlexMultisig.types';
export interface Cw3FlexMultisigReadOnlyInterface {
    contractAddress: string;
    threshold: () => Promise<ThresholdResponse>;
    proposal: ({ proposalId }: {
        proposalId: number;
    }) => Promise<ProposalResponse>;
    listProposals: ({ limit, startAfter, }: {
        limit?: number;
        startAfter?: number;
    }) => Promise<ListProposalsResponse>;
    reverseProposals: ({ limit, startBefore, }: {
        limit?: number;
        startBefore?: number;
    }) => Promise<ReverseProposalsResponse>;
    queryVote: ({ proposalId, voter }: {
        proposalId: number;
        voter: string;
    }) => Promise<VoteResponse>;
    listVotes: ({ limit, proposalId, startAfter, }: {
        limit?: number;
        proposalId: number;
        startAfter?: string;
    }) => Promise<ListVotesResponse>;
    voter: ({ address }: {
        address: string;
    }) => Promise<VoterResponse>;
    listVoters: ({ limit, startAfter, }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<ListVotersResponse>;
}
export declare class Cw3FlexMultisigQueryClient implements Cw3FlexMultisigReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    threshold: () => Promise<ThresholdResponse>;
    proposal: ({ proposalId }: {
        proposalId: number;
    }) => Promise<ProposalResponse>;
    listProposals: ({ limit, startAfter, }: {
        limit?: number | undefined;
        startAfter?: number | undefined;
    }) => Promise<ListProposalsResponse>;
    reverseProposals: ({ limit, startBefore, }: {
        limit?: number | undefined;
        startBefore?: number | undefined;
    }) => Promise<ReverseProposalsResponse>;
    queryVote: ({ proposalId, voter, }: {
        proposalId: number;
        voter: string;
    }) => Promise<VoteResponse>;
    listVotes: ({ limit, proposalId, startAfter, }: {
        limit?: number | undefined;
        proposalId: number;
        startAfter?: string | undefined;
    }) => Promise<ListVotesResponse>;
    voter: ({ address }: {
        address: string;
    }) => Promise<VoterResponse>;
    listVoters: ({ limit, startAfter, }: {
        limit?: number | undefined;
        startAfter?: string | undefined;
    }) => Promise<ListVotersResponse>;
}
export interface Cw3FlexMultisigInterface extends Cw3FlexMultisigReadOnlyInterface {
    contractAddress: string;
    sender: string;
    propose: ({ description, latest, msgs, title, }: {
        description: string;
        latest?: Expiration;
        msgs: CosmosMsgForEmpty[];
        title: string;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    vote: ({ proposalId, vote, }: {
        proposalId: number;
        vote: Vote;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    execute: ({ proposalId, }: {
        proposalId: number;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    close: ({ proposalId, }: {
        proposalId: number;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    memberChangedHook: ({ diffs, }: {
        diffs: MemberDiff[];
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class Cw3FlexMultisigClient extends Cw3FlexMultisigQueryClient implements Cw3FlexMultisigInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    propose: ({ description, latest, msgs, title, }: {
        description: string;
        latest?: Expiration | undefined;
        msgs: CosmosMsgForEmpty[];
        title: string;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    vote: ({ proposalId, vote, }: {
        proposalId: number;
        vote: Vote;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    execute: ({ proposalId, }: {
        proposalId: number;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    close: ({ proposalId, }: {
        proposalId: number;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    memberChangedHook: ({ diffs, }: {
        diffs: MemberDiff[];
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
