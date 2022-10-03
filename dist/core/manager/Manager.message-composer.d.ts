/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.16.5.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { Binary, ModuleInfo, Module } from "./Manager.types";
export interface ManagerMessage {
    contractAddress: string;
    sender: string;
    execOnModule: ({ execMsg, moduleId }: {
        execMsg: Binary;
        moduleId: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateModuleAddresses: ({ toAdd, toRemove }: {
        toAdd?: string[][][];
        toRemove?: string[];
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    createModule: ({ initMsg, module }: {
        initMsg?: Binary;
        module: ModuleInfo;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    registerModule: ({ module, moduleAddr }: {
        module: Module;
        moduleAddr: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    removeModule: ({ moduleId }: {
        moduleId: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    upgrade: ({ migrateMsg, module }: {
        migrateMsg?: Binary;
        module: ModuleInfo;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateInfo: ({ description, link, name }: {
        description?: string;
        link?: string;
        name?: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    setRoot: ({ governanceType, root }: {
        governanceType?: string;
        root: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    suspendOs: ({ newStatus }: {
        newStatus: boolean;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class ManagerMessageComposer implements ManagerMessage {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    execOnModule: ({ execMsg, moduleId }: {
        execMsg: Binary;
        moduleId: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateModuleAddresses: ({ toAdd, toRemove }: {
        toAdd?: string[][][] | undefined;
        toRemove?: string[] | undefined;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    createModule: ({ initMsg, module }: {
        initMsg?: string | undefined;
        module: ModuleInfo;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    registerModule: ({ module, moduleAddr }: {
        module: Module;
        moduleAddr: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    removeModule: ({ moduleId }: {
        moduleId: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    upgrade: ({ migrateMsg, module }: {
        migrateMsg?: string | undefined;
        module: ModuleInfo;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    updateInfo: ({ description, link, name }: {
        description?: string | undefined;
        link?: string | undefined;
        name?: string | undefined;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    setRoot: ({ governanceType, root }: {
        governanceType?: string | undefined;
        root: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    suspendOs: ({ newStatus }: {
        newStatus: boolean;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
