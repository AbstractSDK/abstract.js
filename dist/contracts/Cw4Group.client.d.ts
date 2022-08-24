/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.11.1.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from '@cosmjs/cosmwasm-stargate';
import { Coin, StdFee } from '@cosmjs/amino';
import { AdminResponse, Member, HooksResponse, ListMembersResponse, MemberResponse, TotalWeightResponse } from '../types/Cw4Group.types';
export interface Cw4GroupReadOnlyInterface {
    contractAddress: string;
    admin: () => Promise<AdminResponse>;
    totalWeight: () => Promise<TotalWeightResponse>;
    listMembers: ({ limit, startAfter, }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<ListMembersResponse>;
    member: ({ addr, atHeight }: {
        addr: string;
        atHeight?: number;
    }) => Promise<MemberResponse>;
    hooks: () => Promise<HooksResponse>;
}
export declare class Cw4GroupQueryClient implements Cw4GroupReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    admin: () => Promise<AdminResponse>;
    totalWeight: () => Promise<TotalWeightResponse>;
    listMembers: ({ limit, startAfter, }: {
        limit?: number | undefined;
        startAfter?: string | undefined;
    }) => Promise<ListMembersResponse>;
    member: ({ addr, atHeight, }: {
        addr: string;
        atHeight?: number | undefined;
    }) => Promise<MemberResponse>;
    hooks: () => Promise<HooksResponse>;
}
export interface Cw4GroupInterface extends Cw4GroupReadOnlyInterface {
    contractAddress: string;
    sender: string;
    updateAdmin: ({ admin, }: {
        admin?: string;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateMembers: ({ add, remove, }: {
        add: Member[];
        remove: string[];
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    addHook: ({ addr, }: {
        addr: string;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    removeHook: ({ addr, }: {
        addr: string;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class Cw4GroupClient extends Cw4GroupQueryClient implements Cw4GroupInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    updateAdmin: ({ admin, }: {
        admin?: string | undefined;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateMembers: ({ add, remove, }: {
        add: Member[];
        remove: string[];
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    addHook: ({ addr, }: {
        addr: string;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    removeHook: ({ addr, }: {
        addr: string;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
