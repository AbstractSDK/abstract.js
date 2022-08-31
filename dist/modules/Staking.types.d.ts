/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.11.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
export declare type ExecuteMsg = {
    request: ApiRequestMsgForRequestMsg;
} | {
    configure: ApiExecuteMsg;
};
export declare type StakingExecuteMsg = ExecuteMsg;
export declare type RequestMsg = {
    delegate: {
        amount: Uint128;
        validator: string;
    };
} | {
    undelegate_from: {
        amount?: Uint128 | null;
        validator: string;
    };
} | {
    undelegate_all: {};
} | {
    redelegate: {
        amount?: Uint128 | null;
        destination_validator: string;
        source_validator: string;
    };
} | {
    set_withdraw_address: {
        new_withdraw_address: string;
    };
} | {
    withdraw_delegator_reward: {
        validator: string;
    };
} | {
    withdraw_all_rewards: {};
};
export declare type Uint128 = string;
export declare type ApiExecuteMsg = {
    update_traders: {
        to_add?: string[] | null;
        to_remove?: string[] | null;
    };
} | {
    remove: {};
};
export interface ApiRequestMsgForRequestMsg {
    proxy_address?: string | null;
    request: RequestMsg;
}
export declare type QueryMsg = string;
