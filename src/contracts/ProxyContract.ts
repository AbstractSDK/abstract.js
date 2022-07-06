/**
* This file was automatically generated by cosmwasm-typescript-gen@0.2.15.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/

import { CosmWasmClient, ExecuteResult, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
export type AssetInfoBaseFor_Addr = {
  cw20: Addr;
} | {
  native: string;
};
export type Addr = string;
export interface ConfigResponse {
  modules: string[];
  [k: string]: unknown;
}
export type CosmosMsg_for_Empty = {
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
export type BankMsg = {
  send: {
    amount: Coin[];
    to_address: string;
    [k: string]: unknown;
  };
} | {
  burn: {
    amount: Coin[];
    [k: string]: unknown;
  };
};
export type Uint128 = string;
export type StakingMsg = {
  delegate: {
    amount: Coin;
    validator: string;
    [k: string]: unknown;
  };
} | {
  undelegate: {
    amount: Coin;
    validator: string;
    [k: string]: unknown;
  };
} | {
  redelegate: {
    amount: Coin;
    dst_validator: string;
    src_validator: string;
    [k: string]: unknown;
  };
};
export type DistributionMsg = {
  set_withdraw_address: {
    address: string;
    [k: string]: unknown;
  };
} | {
  withdraw_delegator_reward: {
    validator: string;
    [k: string]: unknown;
  };
};
export type WasmMsg = {
  execute: {
    contract_addr: string;
    funds: Coin[];
    msg: Binary;
    [k: string]: unknown;
  };
} | {
  instantiate: {
    admin?: string | null;
    code_id: number;
    funds: Coin[];
    label: string;
    msg: Binary;
    [k: string]: unknown;
  };
} | {
  migrate: {
    contract_addr: string;
    msg: Binary;
    new_code_id: number;
    [k: string]: unknown;
  };
} | {
  update_admin: {
    admin: string;
    contract_addr: string;
    [k: string]: unknown;
  };
} | {
  clear_admin: {
    contract_addr: string;
    [k: string]: unknown;
  };
};
export type Binary = string;
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
export interface Empty {
  [k: string]: unknown;
}
export interface HoldingAmountResponse {
  value: Uint128;
  [k: string]: unknown;
}
export interface HoldingValueResponse {
  value: Uint128;
  [k: string]: unknown;
}
export interface InstantiateMsg {
  os_id: number;
  [k: string]: unknown;
}
export type ValueRef = {
  pool: {
    pair_address: Addr;
    [k: string]: unknown;
  };
} | {
  liquidity: {
    pool_address: Addr;
    [k: string]: unknown;
  };
} | {
  proxy: {
    multiplier: Decimal;
    proxy_asset: AssetInfoBaseFor_Addr;
    [k: string]: unknown;
  };
} | {
  external: {
    contract_address: Addr;
    [k: string]: unknown;
  };
};
export type Decimal = string;
export interface ProxyAsset {
  asset: AssetBaseFor_Addr;
  value_reference?: ValueRef | null;
  [k: string]: unknown;
}
export interface AssetBaseFor_Addr {
  amount: Uint128;
  info: AssetInfoBaseFor_Addr;
  [k: string]: unknown;
}
export interface State {
  modules: Addr[];
  [k: string]: unknown;
}
export interface TotalValueResponse {
  value: Uint128;
  [k: string]: unknown;
}
export type AssetInfoBaseFor_String = {
  cw20: string;
} | {
  native: string;
};
export type UncheckedValueRef = {
  pool: {
    pair_address: string;
    [k: string]: unknown;
  };
} | {
  liquidity: {
    pool_address: string;
    [k: string]: unknown;
  };
} | {
  proxy: {
    multiplier: Decimal;
    proxy_asset: AssetInfoBaseFor_String;
    [k: string]: unknown;
  };
} | {
  external: {
    contract_address: string;
    [k: string]: unknown;
  };
};
export interface UncheckedProxyAsset {
  asset: AssetBaseFor_String;
  value_reference?: UncheckedValueRef | null;
  [k: string]: unknown;
}
export interface AssetBaseFor_String {
  amount: Uint128;
  info: AssetInfoBaseFor_String;
  [k: string]: unknown;
}
export interface VaultAssetConfigResponse {
  value: ProxyAsset;
  [k: string]: unknown;
}
export interface ProxyReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<ConfigResponse>;
  totalValue: () => Promise<TotalValueResponse>;
  holdingValue: ({
    identifier
  }: {
    identifier: string;
  }) => Promise<HoldingValueResponse>;
  holdingAmount: ({
    identifier
  }: {
    identifier: string;
  }) => Promise<HoldingAmountResponse>;
  vaultAssetConfig: ({
    identifier
  }: {
    identifier: string;
  }) => Promise<VaultAssetConfigResponse>;
}
export class ProxyQueryClient implements ProxyReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.totalValue = this.totalValue.bind(this);
    this.holdingValue = this.holdingValue.bind(this);
    this.holdingAmount = this.holdingAmount.bind(this);
    this.vaultAssetConfig = this.vaultAssetConfig.bind(this);
  }

  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  totalValue = async (): Promise<TotalValueResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      total_value: {}
    });
  };
  holdingValue = async ({
    identifier
  }: {
    identifier: string;
  }): Promise<HoldingValueResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      holding_value: {
        identifier
      }
    });
  };
  holdingAmount = async ({
    identifier
  }: {
    identifier: string;
  }): Promise<HoldingAmountResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      holding_amount: {
        identifier
      }
    });
  };
  vaultAssetConfig = async ({
    identifier
  }: {
    identifier: string;
  }): Promise<VaultAssetConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      vault_asset_config: {
        identifier
      }
    });
  };
}
export interface ProxyInterface extends ProxyReadOnlyInterface {
  contractAddress: string;
  sender: string;
  setAdmin: ({
    admin
  }: {
    admin: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  moduleAction: ({
    msgs
  }: {
    msgs: CosmosMsg_for_Empty[];
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  addModule: ({
    module
  }: {
    module: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  removeModule: ({
    module
  }: {
    module: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  updateAssets: ({
    toAdd,
    toRemove
  }: {
    toAdd: UncheckedProxyAsset[];
    toRemove: AssetInfoBaseFor_Addr[];
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}
export class ProxyClient extends ProxyQueryClient implements ProxyInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.setAdmin = this.setAdmin.bind(this);
    this.moduleAction = this.moduleAction.bind(this);
    this.addModule = this.addModule.bind(this);
    this.removeModule = this.removeModule.bind(this);
    this.updateAssets = this.updateAssets.bind(this);
  }

  setAdmin = async ({
    admin
  }: {
    admin: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      set_admin: {
        admin
      }
    }, fee, memo, funds);
  };
  moduleAction = async ({
    msgs
  }: {
    msgs: CosmosMsg_for_Empty[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      module_action: {
        msgs
      }
    }, fee, memo, funds);
  };
  addModule = async ({
    module
  }: {
    module: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      add_module: {
        module
      }
    }, fee, memo, funds);
  };
  removeModule = async ({
    module
  }: {
    module: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_module: {
        module
      }
    }, fee, memo, funds);
  };
  updateAssets = async ({
    toAdd,
    toRemove
  }: {
    toAdd: UncheckedProxyAsset[];
    toRemove: AssetInfoBaseFor_Addr[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_assets: {
        to_add: toAdd,
        to_remove: toRemove
      }
    }, fee, memo, funds);
  };
}
