/**
* This file was automatically generated by cosmwasm-typescript-gen@0.2.15.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/
import { CosmWasmClient, ExecuteResult, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
export declare type CosmosMsg_for_Empty = {
    bank: BankMsg;
} | {
    custom: Empty;
} | {
    staking: StakingMsg;
} | {
    distribution: DistributionMsg;
} | {
    wasm: WasmMsg;
};
export declare type BankMsg = {
    send: {
        amount: Coin[];
        to_address: string;
    };
} | {
    burn: {
        amount: Coin[];
    };
};
export declare type Uint128 = string;
export declare type StakingMsg = {
    delegate: {
        amount: Coin;
        validator: string;
    };
} | {
    undelegate: {
        amount: Coin;
        validator: string;
    };
} | {
    redelegate: {
        amount: Coin;
        dst_validator: string;
        src_validator: string;
    };
};
export declare type DistributionMsg = {
    set_withdraw_address: {
        address: string;
    };
} | {
    withdraw_delegator_reward: {
        validator: string;
    };
};
export declare type WasmMsg = {
    execute: {
        contract_addr: string;
        funds: Coin[];
        msg: Binary;
    };
} | {
    instantiate: {
        admin?: string | null;
        code_id: number;
        funds: Coin[];
        label: string;
        msg: Binary;
    };
} | {
    migrate: {
        contract_addr: string;
        msg: Binary;
        new_code_id: number;
    };
} | {
    update_admin: {
        admin: string;
        contract_addr: string;
    };
} | {
    clear_admin: {
        contract_addr: string;
    };
};
export declare type Binary = string;
export interface Coin {
    amount: Uint128;
    denom: string;
}
export interface Empty {
}
export declare type Executor = "Member" | {
    Only: Addr;
};
export declare type Addr = string;
export declare type Duration = {
    height: number;
} | {
    time: number;
};
export declare type Threshold = {
    absolute_count: {
        weight: number;
    };
} | {
    absolute_percentage: {
        percentage: Decimal;
    };
} | {
    threshold_quorum: {
        quorum: Decimal;
        threshold: Decimal;
    };
};
export declare type Decimal = string;
export interface InstantiateMsg {
    executor?: Executor | null;
    group_addr: string;
    max_voting_period: Duration;
    threshold: Threshold;
}
export declare type Expiration = {
    at_height: number;
} | {
    at_time: Timestamp;
} | {
    never: {};
};
export declare type Timestamp = Uint64;
export declare type Uint64 = string;
export declare type Status = "pending" | "open" | "rejected" | "passed" | "executed";
export declare type ThresholdResponse = {
    absolute_count: {
        total_weight: number;
        weight: number;
    };
} | {
    absolute_percentage: {
        percentage: Decimal;
        total_weight: number;
    };
} | {
    threshold_quorum: {
        quorum: Decimal;
        threshold: Decimal;
        total_weight: number;
    };
};
export interface ListProposalsResponse {
    proposals: ProposalResponseFor_Empty[];
}
export interface ProposalResponseFor_Empty {
    description: string;
    expires: Expiration;
    id: number;
    msgs: CosmosMsg_for_Empty[];
    status: Status;
    threshold: ThresholdResponse;
    title: string;
}
export interface ListVotersResponse {
    voters: VoterDetail[];
}
export interface VoterDetail {
    addr: string;
    weight: number;
}
export declare type Vote = "yes" | "no" | "abstain" | "veto";
export interface ListVotesResponse {
    votes: VoteInfo[];
}
export interface VoteInfo {
    proposal_id: number;
    vote: Vote;
    voter: string;
    weight: number;
}
export interface ProposalResponse {
    description: string;
    expires: Expiration;
    id: number;
    msgs: CosmosMsg_for_Empty[];
    status: Status;
    threshold: ThresholdResponse;
    title: string;
}
export interface ReverseProposalsResponse {
    proposals: ProposalResponseFor_Empty[];
}
export interface VoteResponse {
    vote?: VoteInfo | null;
}
export interface VoterResponse {
    weight?: number | null;
}
export interface Cw3FlexMultisigReadOnlyInterface {
    contractAddress: string;
    threshold: () => Promise<ThresholdResponse>;
    proposal: ({ proposalId }: {
        proposalId: number;
    }) => Promise<ProposalResponse>;
    listProposals: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: number;
    }) => Promise<ListProposalsResponse>;
    reverseProposals: ({ limit, startBefore }: {
        limit?: number;
        startBefore?: number;
    }) => Promise<ReverseProposalsResponse>;
    queryVote: ({ proposalId, voter }: {
        proposalId: number;
        voter: string;
    }) => Promise<VoteResponse>;
    listVotes: ({ limit, proposalId, startAfter }: {
        limit?: number;
        proposalId: number;
        startAfter?: string;
    }) => Promise<ListVotesResponse>;
    voter: ({ address }: {
        address: string;
    }) => Promise<VoterResponse>;
    listVoters: ({ limit, startAfter }: {
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
    listProposals: ({ limit, startAfter }: {
        limit?: number | undefined;
        startAfter?: number | undefined;
    }) => Promise<ListProposalsResponse>;
    reverseProposals: ({ limit, startBefore }: {
        limit?: number | undefined;
        startBefore?: number | undefined;
    }) => Promise<ReverseProposalsResponse>;
    queryVote: ({ proposalId, voter }: {
        proposalId: number;
        voter: string;
    }) => Promise<VoteResponse>;
    listVotes: ({ limit, proposalId, startAfter }: {
        limit?: number | undefined;
        proposalId: number;
        startAfter?: string | undefined;
    }) => Promise<ListVotesResponse>;
    voter: ({ address }: {
        address: string;
    }) => Promise<VoterResponse>;
    listVoters: ({ limit, startAfter }: {
        limit?: number | undefined;
        startAfter?: string | undefined;
    }) => Promise<ListVotersResponse>;
}
export interface Cw3FlexMultisigInterface extends Cw3FlexMultisigReadOnlyInterface {
    contractAddress: string;
    sender: string;
    propose: ({ description, latest, msgs, title }: {
        description: string;
        latest?: Expiration;
        msgs: CosmosMsg_for_Empty[];
        title: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    vote: ({ proposalId, vote }: {
        proposalId: number;
        vote: Vote;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    execute: ({ proposalId }: {
        proposalId: number;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    close: ({ proposalId }: {
        proposalId: number;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    memberChangedHook: (fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}
export declare class Cw3FlexMultisigClient extends Cw3FlexMultisigQueryClient implements Cw3FlexMultisigInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    propose: ({ description, latest, msgs, title }: {
        description: string;
        latest?: Expiration | undefined;
        msgs: CosmosMsg_for_Empty[];
        title: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    vote: ({ proposalId, vote }: {
        proposalId: number;
        vote: Vote;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    execute: ({ proposalId }: {
        proposalId: number;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    close: ({ proposalId }: {
        proposalId: number;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    memberChangedHook: (fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}