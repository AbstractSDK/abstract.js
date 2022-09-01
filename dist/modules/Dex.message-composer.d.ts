/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.11.1.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
import { Coin } from '@cosmjs/amino';
import { MsgExecuteContractEncodeObject } from 'cosmwasm';
import { RequestMsg } from './Dex.types';
export interface DexMessage {
    contractAddress: string;
    sender: string;
    request: ({ proxyAddress, request, }: {
        proxyAddress?: string;
        request: RequestMsg;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    configure: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class DexMessageComposer implements DexMessage {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    request: ({ proxyAddress, request, }: {
        proxyAddress?: string | undefined;
        request: RequestMsg;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    configure: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
