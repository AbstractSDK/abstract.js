/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.11.1.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from '@cosmjs/cosmwasm-stargate'
import { Coin, StdFee } from '@cosmjs/amino'
import {
  AdminResponse,
  ExecuteMsg,
  Member,
  HooksResponse,
  InstantiateMsg,
  ListMembersResponse,
  MemberListResponse,
  MemberResponse,
  QueryMsg,
  TotalWeightResponse,
} from './Cw4Group.types'
export interface Cw4GroupReadOnlyInterface {
  contractAddress: string
  admin: () => Promise<AdminResponse>
  totalWeight: () => Promise<TotalWeightResponse>
  listMembers: ({
    limit,
    startAfter,
  }: {
    limit?: number
    startAfter?: string
  }) => Promise<ListMembersResponse>
  member: ({ addr, atHeight }: { addr: string; atHeight?: number }) => Promise<MemberResponse>
  hooks: () => Promise<HooksResponse>
}
export class Cw4GroupQueryClient implements Cw4GroupReadOnlyInterface {
  client: CosmWasmClient
  contractAddress: string

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client
    this.contractAddress = contractAddress
    this.admin = this.admin.bind(this)
    this.totalWeight = this.totalWeight.bind(this)
    this.listMembers = this.listMembers.bind(this)
    this.member = this.member.bind(this)
    this.hooks = this.hooks.bind(this)
  }

  admin = async (): Promise<AdminResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      admin: {},
    })
  }
  totalWeight = async (): Promise<TotalWeightResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      total_weight: {},
    })
  }
  listMembers = async ({
    limit,
    startAfter,
  }: {
    limit?: number
    startAfter?: string
  }): Promise<ListMembersResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list_members: {
        limit,
        start_after: startAfter,
      },
    })
  }
  member = async ({
    addr,
    atHeight,
  }: {
    addr: string
    atHeight?: number
  }): Promise<MemberResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      member: {
        addr,
        at_height: atHeight,
      },
    })
  }
  hooks = async (): Promise<HooksResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      hooks: {},
    })
  }
}
export interface Cw4GroupInterface extends Cw4GroupReadOnlyInterface {
  contractAddress: string
  sender: string
  updateAdmin: (
    {
      admin,
    }: {
      admin?: string
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>
  updateMembers: (
    {
      add,
      remove,
    }: {
      add: Member[]
      remove: string[]
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>
  addHook: (
    {
      addr,
    }: {
      addr: string
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>
  removeHook: (
    {
      addr,
    }: {
      addr: string
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>
}
export class Cw4GroupClient extends Cw4GroupQueryClient implements Cw4GroupInterface {
  client: SigningCosmWasmClient
  sender: string
  contractAddress: string

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress)
    this.client = client
    this.sender = sender
    this.contractAddress = contractAddress
    this.updateAdmin = this.updateAdmin.bind(this)
    this.updateMembers = this.updateMembers.bind(this)
    this.addHook = this.addHook.bind(this)
    this.removeHook = this.removeHook.bind(this)
  }

  updateAdmin = async (
    {
      admin,
    }: {
      admin?: string
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        update_admin: {
          admin,
        },
      },
      fee,
      memo,
      funds
    )
  }
  updateMembers = async (
    {
      add,
      remove,
    }: {
      add: Member[]
      remove: string[]
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        update_members: {
          add,
          remove,
        },
      },
      fee,
      memo,
      funds
    )
  }
  addHook = async (
    {
      addr,
    }: {
      addr: string
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        add_hook: {
          addr,
        },
      },
      fee,
      memo,
      funds
    )
  }
  removeHook = async (
    {
      addr,
    }: {
      addr: string
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        remove_hook: {
          addr,
        },
      },
      fee,
      memo,
      funds
    )
  }
}
