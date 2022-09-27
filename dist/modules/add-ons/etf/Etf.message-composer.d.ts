/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.14.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
import { Coin } from '@cosmjs/amino';
import { MsgExecuteContractEncodeObject } from 'cosmwasm';
import { Uint128, Binary, Decimal, AssetBaseForString } from './Etf.types';
export interface EtfMessage {
    contractAddress: string;
    sender: string;
    base: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    receive: ({ amount, msg, sender, }: {
        amount: Uint128;
        msg: Binary;
        sender: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    provideLiquidity: ({ asset, }: {
        asset: AssetBaseForString;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updatePool: ({ assetsToAdd, assetsToRemove, depositAsset, }: {
        assetsToAdd: string[];
        assetsToRemove: string[];
        depositAsset?: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    import: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    setFee: ({ fee, }: {
        fee: Decimal;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class EtfMessageComposer implements EtfMessage {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    base: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    receive: ({ amount, msg, sender, }: {
        amount: Uint128;
        msg: Binary;
        sender: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    provideLiquidity: ({ asset, }: {
        asset: AssetBaseForString;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updatePool: ({ assetsToAdd, assetsToRemove, depositAsset, }: {
        assetsToAdd: string[];
        assetsToRemove: string[];
        depositAsset?: string | undefined;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    import: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    setFee: ({ fee, }: {
        fee: Decimal;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}