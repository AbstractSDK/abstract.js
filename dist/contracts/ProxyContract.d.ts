/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.5.8.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { CosmWasmClient, ExecuteResult, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
export declare type AssetInfoBaseForAddr = {
    native: string;
} | {
    cw20: Addr;
} | {
    cw1155: [Addr, string];
};
export declare type Addr = string;
export declare type AssetEntry = string;
export interface CheckValidityResponse {
    missing_dependencies?: AssetEntry[] | null;
    unresolvable_assets?: AssetEntry[] | null;
}
export interface ConfigResponse {
    modules: string[];
}
export declare type CosmosMsgForEmpty = {
    bank: BankMsg;
} | {
    custom: Empty;
} | {
    staking: StakingMsg;
} | {
    distribution: DistributionMsg;
} | {
    wasm: WasmMsg;
};
export declare type BankMsg = {
    send: {
        amount: Coin[];
        to_address: string;
    };
} | {
    burn: {
        amount: Coin[];
    };
};
export declare type Uint128 = string;
export declare type StakingMsg = {
    delegate: {
        amount: Coin;
        validator: string;
    };
} | {
    undelegate: {
        amount: Coin;
        validator: string;
    };
} | {
    redelegate: {
        amount: Coin;
        dst_validator: string;
        src_validator: string;
    };
};
export declare type DistributionMsg = {
    set_withdraw_address: {
        address: string;
    };
} | {
    withdraw_delegator_reward: {
        validator: string;
    };
};
export declare type WasmMsg = {
    execute: {
        contract_addr: string;
        funds: Coin[];
        msg: Binary;
    };
} | {
    instantiate: {
        admin?: string | null;
        code_id: number;
        funds: Coin[];
        label: string;
        msg: Binary;
    };
} | {
    migrate: {
        contract_addr: string;
        msg: Binary;
        new_code_id: number;
    };
} | {
    update_admin: {
        admin: string;
        contract_addr: string;
    };
} | {
    clear_admin: {
        contract_addr: string;
    };
};
export declare type Binary = string;
export interface Coin {
    amount: Uint128;
    denom: string;
}
export interface Empty {
}
export declare type ExecuteMsg = {
    set_admin: {
        admin: string;
    };
} | {
    module_action: {
        msgs: CosmosMsgForEmpty[];
    };
} | {
    add_module: {
        module: string;
    };
} | {
    remove_module: {
        module: string;
    };
} | {
    update_assets: {
        to_add: UncheckedProxyAsset[];
        to_remove: string[];
    };
};
export declare type UncheckedValueRef = {
    pool: {
        exchange: string;
        pair: string;
    };
} | {
    liquidity_token: {};
} | {
    proxy: {
        multiplier: Decimal;
        proxy_asset: string;
    };
} | {
    external: {
        api_name: string;
    };
};
export declare type Decimal = string;
export interface UncheckedProxyAsset {
    asset: string;
    value_reference?: UncheckedValueRef | null;
}
export interface HoldingAmountResponse {
    amount: Uint128;
}
export interface HoldingValueResponse {
    value: Uint128;
}
export interface InstantiateMsg {
    memory_address: string;
    os_id: number;
}
export declare type ValueRef = {
    pool: {
        pair: ContractEntry;
    };
} | {
    liquidity_token: {};
} | {
    proxy: {
        multiplier: Decimal;
        proxy_asset: AssetEntry;
    };
} | {
    external: {
        api_name: string;
    };
};
export interface ProxyAssetConfigResponse {
    proxy_asset: ProxyAsset;
}
export interface ProxyAsset {
    asset: AssetEntry;
    value_reference?: ValueRef | null;
}
export interface ContractEntry {
    contract: string;
    protocol: string;
}
export interface ProxyAssetsResponse {
    assets: [AssetEntry, ProxyAsset][];
}
export declare type QueryMsg = {
    config: {};
} | {
    total_value: {};
} | {
    holding_value: {
        identifier: string;
    };
} | {
    holding_amount: {
        identifier: string;
    };
} | {
    proxy_asset_config: {
        identifier: string;
    };
} | {
    proxy_assets: {
        iter_limit?: number | null;
        last_asset_name?: string | null;
    };
} | {
    check_validity: {};
};
export interface State {
    modules: Addr[];
}
export interface TotalValueResponse {
    value: Uint128;
}
export declare type ProxyExecuteMsg = ExecuteMsg;
export interface ProxyReadOnlyInterface {
    contractAddress: string;
    config: () => Promise<ConfigResponse>;
    totalValue: () => Promise<TotalValueResponse>;
    holdingValue: ({ identifier }: {
        identifier: string;
    }) => Promise<HoldingValueResponse>;
    holdingAmount: ({ identifier }: {
        identifier: string;
    }) => Promise<HoldingAmountResponse>;
    proxyAssetConfig: ({ identifier }: {
        identifier: string;
    }) => Promise<ProxyAssetConfigResponse>;
    proxyAssets: ({ iterLimit, lastAssetName }: {
        iterLimit?: number;
        lastAssetName?: string;
    }) => Promise<ProxyAssetsResponse>;
    checkValidity: () => Promise<CheckValidityResponse>;
}
export declare class ProxyQueryClient implements ProxyReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    config: () => Promise<ConfigResponse>;
    totalValue: () => Promise<TotalValueResponse>;
    holdingValue: ({ identifier }: {
        identifier: string;
    }) => Promise<HoldingValueResponse>;
    holdingAmount: ({ identifier }: {
        identifier: string;
    }) => Promise<HoldingAmountResponse>;
    proxyAssetConfig: ({ identifier }: {
        identifier: string;
    }) => Promise<ProxyAssetConfigResponse>;
    proxyAssets: ({ iterLimit, lastAssetName }: {
        iterLimit?: number | undefined;
        lastAssetName?: string | undefined;
    }) => Promise<ProxyAssetsResponse>;
    checkValidity: () => Promise<CheckValidityResponse>;
}
export interface ProxyInterface extends ProxyReadOnlyInterface {
    contractAddress: string;
    sender: string;
    setAdmin: ({ admin }: {
        admin: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    moduleAction: ({ msgs }: {
        msgs: CosmosMsgForEmpty[];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    addModule: ({ module }: {
        module: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    removeModule: ({ module }: {
        module: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    updateAssets: ({ toAdd, toRemove }: {
        toAdd: UncheckedProxyAsset[];
        toRemove: string[];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}
export declare class ProxyClient extends ProxyQueryClient implements ProxyInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    setAdmin: ({ admin }: {
        admin: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    moduleAction: ({ msgs }: {
        msgs: CosmosMsgForEmpty[];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    addModule: ({ module }: {
        module: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    removeModule: ({ module }: {
        module: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    updateAssets: ({ toAdd, toRemove }: {
        toAdd: UncheckedProxyAsset[];
        toRemove: string[];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}
