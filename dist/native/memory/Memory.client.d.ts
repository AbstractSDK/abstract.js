/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from '@cosmjs/cosmwasm-stargate';
import { Coin, StdFee } from '@cosmjs/amino';
import { UncheckedContractEntry, UncheckedChannelEntry, ContractEntry, ChannelEntry, AssetListResponse, AssetsResponse, ChannelListResponse, ChannelsResponse, ContractListResponse, ContractsResponse } from './Memory.types';
export interface MemoryReadOnlyInterface {
    contractAddress: string;
    assets: ({ names }: {
        names: string[];
    }) => Promise<AssetsResponse>;
    assetList: ({ pageSize, pageToken, }: {
        pageSize?: number;
        pageToken?: string;
    }) => Promise<AssetListResponse>;
    contracts: ({ names }: {
        names: ContractEntry[];
    }) => Promise<ContractsResponse>;
    contractList: ({ pageSize, pageToken, }: {
        pageSize?: number;
        pageToken?: ContractEntry;
    }) => Promise<ContractListResponse>;
    channels: ({ names }: {
        names: ChannelEntry[];
    }) => Promise<ChannelsResponse>;
    channelList: ({ pageSize, pageToken, }: {
        pageSize?: number;
        pageToken?: ChannelEntry;
    }) => Promise<ChannelListResponse>;
}
export declare class MemoryQueryClient implements MemoryReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    assets: ({ names }: {
        names: string[];
    }) => Promise<AssetsResponse>;
    assetList: ({ pageSize, pageToken, }: {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
    }) => Promise<AssetListResponse>;
    contracts: ({ names }: {
        names: ContractEntry[];
    }) => Promise<ContractsResponse>;
    contractList: ({ pageSize, pageToken, }: {
        pageSize?: number | undefined;
        pageToken?: ContractEntry | undefined;
    }) => Promise<ContractListResponse>;
    channels: ({ names }: {
        names: ChannelEntry[];
    }) => Promise<ChannelsResponse>;
    channelList: ({ pageSize, pageToken, }: {
        pageSize?: number | undefined;
        pageToken?: ChannelEntry | undefined;
    }) => Promise<ChannelListResponse>;
}
export interface MemoryInterface extends MemoryReadOnlyInterface {
    contractAddress: string;
    sender: string;
    updateContractAddresses: ({ toAdd, toRemove, }: {
        toAdd: UncheckedContractEntry[][];
        toRemove: UncheckedContractEntry[];
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateAssetAddresses: ({ toAdd, toRemove, }: {
        toAdd: string[][];
        toRemove: string[];
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateChannels: ({ toAdd, toRemove, }: {
        toAdd: UncheckedChannelEntry[][];
        toRemove: UncheckedChannelEntry[];
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    setAdmin: ({ admin, }: {
        admin: string;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class MemoryClient extends MemoryQueryClient implements MemoryInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    updateContractAddresses: ({ toAdd, toRemove, }: {
        toAdd: UncheckedContractEntry[][];
        toRemove: UncheckedContractEntry[];
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateAssetAddresses: ({ toAdd, toRemove, }: {
        toAdd: string[][];
        toRemove: string[];
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateChannels: ({ toAdd, toRemove, }: {
        toAdd: UncheckedChannelEntry[][];
        toRemove: UncheckedChannelEntry[];
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    setAdmin: ({ admin, }: {
        admin: string;
    }, fee?: number | StdFee | 'auto', memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
