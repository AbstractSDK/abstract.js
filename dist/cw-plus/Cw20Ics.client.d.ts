/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.11.1.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from '@cosmjs/cosmwasm-stargate';
import { StdFee } from '@cosmjs/amino';
import { AdminResponse, AllowedResponse, Uint128, ChannelResponse, Coin, ConfigResponse, Binary, ListAllowedResponse, ListChannelsResponse, PortResponse } from './Cw20Ics.types';
export interface Cw20IcsReadOnlyInterface {
    contractAddress: string;
    port: () => Promise<PortResponse>;
    listChannels: () => Promise<ListChannelsResponse>;
    channel: ({ id }: {
        id: string;
    }) => Promise<ChannelResponse>;
    config: () => Promise<ConfigResponse>;
    admin: () => Promise<AdminResponse>;
    allowed: ({ contract }: {
        contract: string;
    }) => Promise<AllowedResponse>;
    listAllowed: ({ limit, startAfter, }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<ListAllowedResponse>;
}
export declare class Cw20IcsQueryClient implements Cw20IcsReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    port: () => Promise<PortResponse>;
    listChannels: () => Promise<ListChannelsResponse>;
    channel: ({ id }: {
        id: string;
    }) => Promise<ChannelResponse>;
    config: () => Promise<ConfigResponse>;
    admin: () => Promise<AdminResponse>;
    allowed: ({ contract }: {
        contract: string;
    }) => Promise<AllowedResponse>;
    listAllowed: ({ limit, startAfter, }: {
        limit?: number | undefined;
        startAfter?: string | undefined;
    }) => Promise<ListAllowedResponse>;
}
export interface Cw20IcsInterface extends Cw20IcsReadOnlyInterface {
    contractAddress: string;
    sender: string;
    receive: ({ amount, msg, sender, }: {
        amount: Uint128;
        msg: Binary;
        sender: string;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    transfer: ({ channel, remoteAddress, timeout, }: {
        channel: string;
        remoteAddress: string;
        timeout?: number;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    allow: ({ contract, gasLimit, }: {
        contract: string;
        gasLimit?: number;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    updateAdmin: ({ admin, }: {
        admin: string;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}
export declare class Cw20IcsClient extends Cw20IcsQueryClient implements Cw20IcsInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    receive: ({ amount, msg, sender, }: {
        amount: Uint128;
        msg: Binary;
        sender: string;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    transfer: ({ channel, remoteAddress, timeout, }: {
        channel: string;
        remoteAddress: string;
        timeout?: number | undefined;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    allow: ({ contract, gasLimit, }: {
        contract: string;
        gasLimit?: number | undefined;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    updateAdmin: ({ admin, }: {
        admin: string;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}