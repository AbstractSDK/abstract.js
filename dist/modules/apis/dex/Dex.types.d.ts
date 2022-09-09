/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.14.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
export declare type AssetEntry = string;
export declare type Uint128 = string;
export interface ApiResponse {
    commission: [AssetEntry, Uint128];
    pool: ContractEntry;
    return_amount: Uint128;
    spread_amount: Uint128;
    [k: string]: unknown;
}
export interface ContractEntry {
    contract: string;
    protocol: string;
    [k: string]: unknown;
}
export declare type Addr = string;
export interface ConfigResponse {
    dependencies: string[];
    memory_address: Addr;
    version_control_address: Addr;
    [k: string]: unknown;
}
export declare type ExecuteMsgForEmpty = {
    request: ApiRequestMsgForEmpty;
} | {
    configure: BaseExecuteMsg;
};
export declare type BaseExecuteMsg = {
    update_traders: {
        to_add?: string[] | null;
        to_remove?: string[] | null;
        [k: string]: unknown;
    };
} | {
    remove: {
        [k: string]: unknown;
    };
};
export interface ApiRequestMsgForEmpty {
    proxy_address?: string | null;
    request: Empty;
    [k: string]: unknown;
}
export interface Empty {
    [k: string]: unknown;
}
export declare type ExecuteMsg = {
    request: ApiRequestMsgForRequestMsg;
} | {
    configure: BaseExecuteMsg;
};
export declare type RequestMsg = {
    provide_liquidity: {
        assets: [AssetEntry, Uint128][];
        dex?: string | null;
        max_spread?: Decimal | null;
        [k: string]: unknown;
    };
} | {
    provide_liquidity_symmetric: {
        dex?: string | null;
        offer_asset: [AssetEntry, Uint128];
        paired_assets: AssetEntry[];
        [k: string]: unknown;
    };
} | {
    withdraw_liquidity: {
        amount: Uint128;
        dex?: string | null;
        lp_token: AssetEntry;
        [k: string]: unknown;
    };
} | {
    swap: {
        ask_asset: AssetEntry;
        belief_price?: Decimal | null;
        dex?: string | null;
        max_spread?: Decimal | null;
        offer_asset: [AssetEntry, Uint128];
        [k: string]: unknown;
    };
};
export declare type Decimal = string;
export interface ApiRequestMsgForRequestMsg {
    proxy_address?: string | null;
    request: RequestMsg;
    [k: string]: unknown;
}
export declare type QueryMsg = {
    api: QueryMsg1;
} | {
    base: BaseQueryMsg;
};
export declare type QueryMsg1 = {
    simulate_swap: {
        ask_asset: AssetEntry;
        dex?: string | null;
        offer_asset: [AssetEntry, Uint128];
        [k: string]: unknown;
    };
};
export declare type BaseQueryMsg = {
    config: {
        [k: string]: unknown;
    };
} | {
    traders: {
        proxy_address: string;
        [k: string]: unknown;
    };
};
export interface TradersResponse {
    traders: Addr[];
    [k: string]: unknown;
}
