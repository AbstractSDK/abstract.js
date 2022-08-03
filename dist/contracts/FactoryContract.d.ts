/**
* This file was automatically generated by cosmwasm-typescript-gen@0.2.15.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/
import { CosmWasmClient, ExecuteResult, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
export interface ConfigResponse {
    memory_contract: string;
    module_factory_address: string;
    next_os_id: number;
    owner: string;
    subscription_address?: string | null;
    version_control_contract: string;
}
export declare type GovernanceDetails = {
    monarchy: {
        monarch: string;
    };
} | {
    multi_signature: {
        members: string[];
        threshold_votes: number;
        total_members: number;
    };
} | {
    external: {
        governance_address: string;
        governance_type: string;
    };
};
export interface InstantiateMsg {
    chain_id: string;
    memory_address: string;
    module_factory_address: string;
    version_control_address: string;
}
export interface FactoryReadOnlyInterface {
    contractAddress: string;
    config: () => Promise<ConfigResponse>;
}
export declare class FactoryQueryClient implements FactoryReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    config: () => Promise<ConfigResponse>;
}
export interface FactoryInterface extends FactoryReadOnlyInterface {
    contractAddress: string;
    sender: string;
    receive: (fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    updateConfig: ({ admin, memoryContract, moduleFactoryAddress, subscriptionAddress, versionControlContract }: {
        admin?: string;
        memoryContract?: string;
        moduleFactoryAddress?: string;
        subscriptionAddress?: string;
        versionControlContract?: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    createOs: ({ description, governance, link, osName }: {
        description?: string;
        governance: GovernanceDetails;
        link?: string;
        osName: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}
export declare class FactoryClient extends FactoryQueryClient implements FactoryInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    receive: (fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    updateConfig: ({ admin, memoryContract, moduleFactoryAddress, subscriptionAddress, versionControlContract }: {
        admin?: string | undefined;
        memoryContract?: string | undefined;
        moduleFactoryAddress?: string | undefined;
        subscriptionAddress?: string | undefined;
        versionControlContract?: string | undefined;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    createOs: ({ description, governance, link, osName }: {
        description?: string | undefined;
        governance: GovernanceDetails;
        link?: string | undefined;
        osName: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}