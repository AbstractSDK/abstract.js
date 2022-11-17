/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
export declare type Addr = string;
export interface ConfigResponse {
    ans_host_address: Addr;
    dependencies: string[];
    version_control_address: Addr;
}
export declare type ExecuteMsg = {
    base: BaseExecuteMsg;
} | {
    app: ExtensionRequestMsgForRequestMsg;
} | {
    ibc_callback: IbcResponseMsg;
} | {
    receive: Empty;
};
export declare type BaseExecuteMsg = {
    update_traders: {
        to_add?: string[] | null;
        to_remove?: string[] | null;
    };
} | {
    remove: {};
};
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
export declare type StdAck = {
    result: Binary;
} | {
    error: string;
};
export declare type Binary = string;
export interface ExtensionRequestMsgForRequestMsg {
    proxy_address?: string | null;
    request: RequestMsg;
}
export interface IbcResponseMsg {
    id: string;
    msg: StdAck;
}
export interface Empty {
    [k: string]: unknown;
}
export interface InstantiateMsg {
    app: Empty;
    base: BaseInstantiateMsg;
}
export interface BaseInstantiateMsg {
    ans_host_address: string;
    version_control_address: string;
}
export declare type QueryMsg = {
    base: BaseQueryMsg;
} | {
    app: Empty;
};
export declare type BaseQueryMsg = {
    config: {};
} | {
    traders: {
        proxy_address: string;
    };
};
export interface TradersResponse {
    traders: Addr[];
}
