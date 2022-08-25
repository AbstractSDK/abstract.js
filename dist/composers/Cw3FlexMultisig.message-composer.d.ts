/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.11.1.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
import { MsgExecuteContractEncodeObject } from 'cosmwasm';
import { CosmosMsgForEmpty, Coin, Expiration, Vote, MemberDiff } from '../types/Cw3FlexMultisig.types';
export interface Cw3FlexMultisigMessage {
    contractAddress: string;
    sender: string;
    propose: ({ description, latest, msgs, title, }: {
        description: string;
        latest?: Expiration;
        msgs: CosmosMsgForEmpty[];
        title: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    vote: ({ proposalId, vote, }: {
        proposalId: number;
        vote: Vote;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    execute: ({ proposalId, }: {
        proposalId: number;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    close: ({ proposalId, }: {
        proposalId: number;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    memberChangedHook: ({ diffs, }: {
        diffs: MemberDiff[];
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class Cw3FlexMultisigMessageComposer implements Cw3FlexMultisigMessage {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    propose: ({ description, latest, msgs, title, }: {
        description: string;
        latest?: Expiration | undefined;
        msgs: CosmosMsgForEmpty[];
        title: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    vote: ({ proposalId, vote, }: {
        proposalId: number;
        vote: Vote;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    execute: ({ proposalId, }: {
        proposalId: number;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    close: ({ proposalId, }: {
        proposalId: number;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    memberChangedHook: ({ diffs, }: {
        diffs: MemberDiff[];
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
