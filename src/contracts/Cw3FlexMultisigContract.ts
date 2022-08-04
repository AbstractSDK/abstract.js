/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.5.1.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import { CosmWasmClient, ExecuteResult, SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { StdFee } from '@cosmjs/amino'
export type CosmosMsgForEmpty =
  | {
      bank: BankMsg
    }
  | {
      custom: Empty
    }
  | {
      staking: StakingMsg
    }
  | {
      distribution: DistributionMsg
    }
  | {
      wasm: WasmMsg
    }
export type BankMsg =
  | {
      send: {
        amount: Coin[]
        to_address: string
      }
    }
  | {
      burn: {
        amount: Coin[]
      }
    }
export type Uint128 = string
export type StakingMsg =
  | {
      delegate: {
        amount: Coin
        validator: string
      }
    }
  | {
      undelegate: {
        amount: Coin
        validator: string
      }
    }
  | {
      redelegate: {
        amount: Coin
        dst_validator: string
        src_validator: string
      }
    }
export type DistributionMsg =
  | {
      set_withdraw_address: {
        address: string
      }
    }
  | {
      withdraw_delegator_reward: {
        validator: string
      }
    }
export type WasmMsg =
  | {
      execute: {
        contract_addr: string
        funds: Coin[]
        msg: Binary
      }
    }
  | {
      instantiate: {
        admin?: string | null
        code_id: number
        funds: Coin[]
        label: string
        msg: Binary
      }
    }
  | {
      migrate: {
        contract_addr: string
        msg: Binary
        new_code_id: number
      }
    }
  | {
      update_admin: {
        admin: string
        contract_addr: string
      }
    }
  | {
      clear_admin: {
        contract_addr: string
      }
    }
export type Binary = string
export interface Coin {
  amount: Uint128
  denom: string
}
export interface Empty {}

export type ExecuteMsg =
  | {
      propose: {
        description: string
        latest?: Expiration | null
        msgs: CosmosMsgForEmpty[]
        title: string
      }
    }
  | {
      vote: {
        proposal_id: number
        vote: Vote
      }
    }
  | {
      execute: {
        proposal_id: number
      }
    }
  | {
      close: {
        proposal_id: number
      }
    }
  | {
      member_changed_hook: MemberChangedHookMsg
    }
export type Expiration =
  | {
      at_height: number
    }
  | {
      at_time: Timestamp
    }
  | {
      never: {}
    }
export type Cw3FlexMultisigExecuteMsg = ExecuteMsg

export type Timestamp = Uint64
export type Uint64 = string
export type Vote = 'yes' | 'no' | 'abstain' | 'veto'
export interface MemberChangedHookMsg {
  diffs: MemberDiff[]
}
export interface MemberDiff {
  key: string
  new?: number | null
  old?: number | null
}
export type Executor =
  | 'Member'
  | {
      Only: Addr
    }
export type Addr = string
export type Duration =
  | {
      height: number
    }
  | {
      time: number
    }
export type Threshold =
  | {
      absolute_count: {
        weight: number
      }
    }
  | {
      absolute_percentage: {
        percentage: Decimal
      }
    }
  | {
      threshold_quorum: {
        quorum: Decimal
        threshold: Decimal
      }
    }
export type Decimal = string
export interface InstantiateMsg {
  executor?: Executor | null
  group_addr: string
  max_voting_period: Duration
  threshold: Threshold
}
export type Status = 'pending' | 'open' | 'rejected' | 'passed' | 'executed'
export type ThresholdResponse =
  | {
      absolute_count: {
        total_weight: number
        weight: number
      }
    }
  | {
      absolute_percentage: {
        percentage: Decimal
        total_weight: number
      }
    }
  | {
      threshold_quorum: {
        quorum: Decimal
        threshold: Decimal
        total_weight: number
      }
    }
export interface ListProposalsResponse {
  proposals: ProposalResponseForEmpty[]
}
export interface ProposalResponseForEmpty {
  description: string
  expires: Expiration
  id: number
  msgs: CosmosMsgForEmpty[]
  status: Status
  threshold: ThresholdResponse
  title: string
}
export interface ListVotersResponse {
  voters: VoterDetail[]
}
export interface VoterDetail {
  addr: string
  weight: number
}
export interface ListVotesResponse {
  votes: VoteInfo[]
}
export interface VoteInfo {
  proposal_id: number
  vote: Vote
  voter: string
  weight: number
}
export interface ProposalResponse {
  description: string
  expires: Expiration
  id: number
  msgs: CosmosMsgForEmpty[]
  status: Status
  threshold: ThresholdResponse
  title: string
}
export type QueryMsg =
  | {
      threshold: {}
    }
  | {
      proposal: {
        proposal_id: number
      }
    }
  | {
      list_proposals: {
        limit?: number | null
        start_after?: number | null
      }
    }
  | {
      reverse_proposals: {
        limit?: number | null
        start_before?: number | null
      }
    }
  | {
      vote: {
        proposal_id: number
        voter: string
      }
    }
  | {
      list_votes: {
        limit?: number | null
        proposal_id: number
        start_after?: string | null
      }
    }
  | {
      voter: {
        address: string
      }
    }
  | {
      list_voters: {
        limit?: number | null
        start_after?: string | null
      }
    }
export interface ReverseProposalsResponse {
  proposals: ProposalResponseForEmpty[]
}
export interface VoteResponse {
  vote?: VoteInfo | null
}
export interface VoterResponse {
  weight?: number | null
}
export interface Cw3FlexMultisigReadOnlyInterface {
  contractAddress: string
  threshold: () => Promise<ThresholdResponse>
  proposal: ({ proposalId }: { proposalId: number }) => Promise<ProposalResponse>
  listProposals: ({
    limit,
    startAfter,
  }: {
    limit?: number
    startAfter?: number
  }) => Promise<ListProposalsResponse>
  reverseProposals: ({
    limit,
    startBefore,
  }: {
    limit?: number
    startBefore?: number
  }) => Promise<ReverseProposalsResponse>
  queryVote: ({ proposalId, voter }: { proposalId: number; voter: string }) => Promise<VoteResponse>
  listVotes: ({
    limit,
    proposalId,
    startAfter,
  }: {
    limit?: number
    proposalId: number
    startAfter?: string
  }) => Promise<ListVotesResponse>
  voter: ({ address }: { address: string }) => Promise<VoterResponse>
  listVoters: ({
    limit,
    startAfter,
  }: {
    limit?: number
    startAfter?: string
  }) => Promise<ListVotersResponse>
}
export class Cw3FlexMultisigQueryClient implements Cw3FlexMultisigReadOnlyInterface {
  client: CosmWasmClient
  contractAddress: string

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client
    this.contractAddress = contractAddress
    this.threshold = this.threshold.bind(this)
    this.proposal = this.proposal.bind(this)
    this.listProposals = this.listProposals.bind(this)
    this.reverseProposals = this.reverseProposals.bind(this)
    this.queryVote = this.queryVote.bind(this)
    this.listVotes = this.listVotes.bind(this)
    this.voter = this.voter.bind(this)
    this.listVoters = this.listVoters.bind(this)
  }

  threshold = async (): Promise<ThresholdResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      threshold: {},
    })
  }
  proposal = async ({ proposalId }: { proposalId: number }): Promise<ProposalResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      proposal: {
        proposal_id: proposalId,
      },
    })
  }
  listProposals = async ({
    limit,
    startAfter,
  }: {
    limit?: number
    startAfter?: number
  }): Promise<ListProposalsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list_proposals: {
        limit,
        start_after: startAfter,
      },
    })
  }
  reverseProposals = async ({
    limit,
    startBefore,
  }: {
    limit?: number
    startBefore?: number
  }): Promise<ReverseProposalsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      reverse_proposals: {
        limit,
        start_before: startBefore,
      },
    })
  }
  queryVote = async ({
    proposalId,
    voter,
  }: {
    proposalId: number
    voter: string
  }): Promise<VoteResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      vote: {
        proposal_id: proposalId,
        voter,
      },
    })
  }
  listVotes = async ({
    limit,
    proposalId,
    startAfter,
  }: {
    limit?: number
    proposalId: number
    startAfter?: string
  }): Promise<ListVotesResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list_votes: {
        limit,
        proposal_id: proposalId,
        start_after: startAfter,
      },
    })
  }
  voter = async ({ address }: { address: string }): Promise<VoterResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      voter: {
        address,
      },
    })
  }
  listVoters = async ({
    limit,
    startAfter,
  }: {
    limit?: number
    startAfter?: string
  }): Promise<ListVotersResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list_voters: {
        limit,
        start_after: startAfter,
      },
    })
  }
}
export interface Cw3FlexMultisigInterface extends Cw3FlexMultisigReadOnlyInterface {
  contractAddress: string
  sender: string
  propose: (
    {
      description,
      latest,
      msgs,
      title,
    }: {
      description: string
      latest?: Expiration
      msgs: CosmosMsgForEmpty[]
      title: string
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>
  vote: (
    {
      proposalId,
      vote,
    }: {
      proposalId: number
      vote: string
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>
  execute: (
    {
      proposalId,
    }: {
      proposalId: number
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>
  close: (
    {
      proposalId,
    }: {
      proposalId: number
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>
  memberChangedHook: (
    {
      diffs,
    }: {
      diffs: MemberDiff[]
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>
}
export class Cw3FlexMultisigClient
  extends Cw3FlexMultisigQueryClient
  implements Cw3FlexMultisigInterface
{
  client: SigningCosmWasmClient
  sender: string
  contractAddress: string

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress)
    this.client = client
    this.sender = sender
    this.contractAddress = contractAddress
    this.propose = this.propose.bind(this)
    this.vote = this.vote.bind(this)
    this.execute = this.execute.bind(this)
    this.close = this.close.bind(this)
    this.memberChangedHook = this.memberChangedHook.bind(this)
  }

  propose = async (
    {
      description,
      latest,
      msgs,
      title,
    }: {
      description: string
      latest?: Expiration
      msgs: CosmosMsgForEmpty[]
      title: string
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        propose: {
          description,
          latest,
          msgs,
          title,
        },
      },
      fee,
      memo,
      funds
    )
  }
  vote = async (
    {
      proposalId,
      vote,
    }: {
      proposalId: number
      vote: string
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        vote: {
          proposal_id: proposalId,
          vote,
        },
      },
      fee,
      memo,
      funds
    )
  }
  execute = async (
    {
      proposalId,
    }: {
      proposalId: number
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        execute: {
          proposal_id: proposalId,
        },
      },
      fee,
      memo,
      funds
    )
  }
  close = async (
    {
      proposalId,
    }: {
      proposalId: number
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        close: {
          proposal_id: proposalId,
        },
      },
      fee,
      memo,
      funds
    )
  }
  memberChangedHook = async (
    {
      diffs,
    }: {
      diffs: MemberDiff[]
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        member_changed_hook: {
          diffs,
        },
      },
      fee,
      memo,
      funds
    )
  }
}
