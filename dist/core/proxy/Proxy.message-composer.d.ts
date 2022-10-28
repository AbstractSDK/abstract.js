/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.16.5.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
import { MsgExecuteContractEncodeObject } from 'cosmwasm';
import { CosmosMsgForEmpty, Coin, UncheckedProxyAsset } from './Proxy.types';
export interface ProxyMessage {
    contractAddress: string;
    sender: string;
    setAdmin: ({ admin, }: {
        admin: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    moduleAction: ({ msgs, }: {
        msgs: CosmosMsgForEmpty[];
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    addModule: ({ module, }: {
        module: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    removeModule: ({ module, }: {
        module: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateAssets: ({ toAdd, toRemove, }: {
        toAdd: UncheckedProxyAsset[];
        toRemove: string[];
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class ProxyMessageComposer implements ProxyMessage {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    setAdmin: ({ admin, }: {
        admin: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    moduleAction: ({ msgs, }: {
        msgs: CosmosMsgForEmpty[];
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    addModule: ({ module, }: {
        module: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    removeModule: ({ module, }: {
        module: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateAssets: ({ toAdd, toRemove, }: {
        toAdd: UncheckedProxyAsset[];
        toRemove: string[];
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
