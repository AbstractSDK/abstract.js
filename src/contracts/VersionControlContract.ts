/**
* This file was automatically generated by cosmwasm-typescript-gen@0.2.15.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/

import { CosmWasmClient, ExecuteResult, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
export interface InstantiateMsg {
  [k: string]: unknown;
}
export interface ModuleInfo {
  name: string;
  version?: string | null;
  [k: string]: unknown;
}
export type Addr = string;
export interface QueryApiAddressResponse {
  address: Addr;
  info: ContractVersion;
  [k: string]: unknown;
}
export interface ContractVersion {
  contract: string;
  version: string;
  [k: string]: unknown;
}
export interface QueryApiAddressesResponse {
  api_addresses: [ContractVersion, string][];
  [k: string]: unknown;
}
export type Uint64 = string;
export interface QueryCodeIdResponse {
  code_id: Uint64;
  info: ContractVersion;
  [k: string]: unknown;
}
export interface QueryCodeIdsResponse {
  module_code_ids: [ContractVersion, number][];
  [k: string]: unknown;
}
export interface QueryConfigResponse {
  admin: string;
  factory: string;
  [k: string]: unknown;
}
export interface QueryOsCoreResponse {
  os_core: Core;
  [k: string]: unknown;
}
export interface Core {
  manager: Addr;
  proxy: Addr;
  [k: string]: unknown;
}
export interface VersionControlReadOnlyInterface {
  contractAddress: string;
  queryOsCore: ({
    osId
  }: {
    osId: number;
  }) => Promise<QueryOsCoreResponse>;
  queryCodeId: ({
    module
  }: {
    module: ModuleInfo;
  }) => Promise<QueryCodeIdResponse>;
  queryApiAddress: ({
    module
  }: {
    module: ModuleInfo;
  }) => Promise<QueryApiAddressResponse>;
  queryConfig: () => Promise<QueryConfigResponse>;
  queryCodeIds: ({
    iterLimit,
    lastModule
  }: {
    iterLimit?: number;
    lastModule?: ContractVersion;
  }) => Promise<QueryCodeIdsResponse>;
  queryApiAddresses: ({
    iterLimit,
    lastApiModule
  }: {
    iterLimit?: number;
    lastApiModule?: ContractVersion;
  }) => Promise<QueryApiAddressesResponse>;
}
export class VersionControlQueryClient implements VersionControlReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.queryOsCore = this.queryOsCore.bind(this);
    this.queryCodeId = this.queryCodeId.bind(this);
    this.queryApiAddress = this.queryApiAddress.bind(this);
    this.queryConfig = this.queryConfig.bind(this);
    this.queryCodeIds = this.queryCodeIds.bind(this);
    this.queryApiAddresses = this.queryApiAddresses.bind(this);
  }

  queryOsCore = async ({
    osId
  }: {
    osId: number;
  }): Promise<QueryOsCoreResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      query_os_core: {
        os_id: osId
      }
    });
  };
  queryCodeId = async ({
    module
  }: {
    module: ModuleInfo;
  }): Promise<QueryCodeIdResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      query_code_id: {
        module
      }
    });
  };
  queryApiAddress = async ({
    module
  }: {
    module: ModuleInfo;
  }): Promise<QueryApiAddressResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      query_api_address: {
        module
      }
    });
  };
  queryConfig = async (): Promise<QueryConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      query_config: {}
    });
  };
  queryCodeIds = async ({
    iterLimit,
    lastModule
  }: {
    iterLimit?: number;
    lastModule?: ContractVersion;
  }): Promise<QueryCodeIdsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      query_code_ids: {
        iter_limit: iterLimit,
        last_module: lastModule
      }
    });
  };
  queryApiAddresses = async ({
    iterLimit,
    lastApiModule
  }: {
    iterLimit?: number;
    lastApiModule?: ContractVersion;
  }): Promise<QueryApiAddressesResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      query_api_addresses: {
        iter_limit: iterLimit,
        last_api_module: lastApiModule
      }
    });
  };
}
export interface VersionControlInterface extends VersionControlReadOnlyInterface {
  contractAddress: string;
  sender: string;
  addCodeId: ({
    codeId,
    module,
    version
  }: {
    codeId: number;
    module: string;
    version: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  removeCodeId: ({
    module,
    version
  }: {
    module: string;
    version: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  addApi: ({
    address,
    module,
    version
  }: {
    address: string;
    module: string;
    version: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  removeApi: ({
    module,
    version
  }: {
    module: string;
    version: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  addOs: ({
    managerAddress,
    osId,
    proxyAddress
  }: {
    managerAddress: string;
    osId: number;
    proxyAddress: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  setAdmin: ({
    newAdmin
  }: {
    newAdmin: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  setFactory: ({
    newFactory
  }: {
    newFactory: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}
export class VersionControlClient extends VersionControlQueryClient implements VersionControlInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.addCodeId = this.addCodeId.bind(this);
    this.removeCodeId = this.removeCodeId.bind(this);
    this.addApi = this.addApi.bind(this);
    this.removeApi = this.removeApi.bind(this);
    this.addOs = this.addOs.bind(this);
    this.setAdmin = this.setAdmin.bind(this);
    this.setFactory = this.setFactory.bind(this);
  }

  addCodeId = async ({
    codeId,
    module,
    version
  }: {
    codeId: number;
    module: string;
    version: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      add_code_id: {
        code_id: codeId,
        module,
        version
      }
    }, fee, memo, funds);
  };
  removeCodeId = async ({
    module,
    version
  }: {
    module: string;
    version: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_code_id: {
        module,
        version
      }
    }, fee, memo, funds);
  };
  addApi = async ({
    address,
    module,
    version
  }: {
    address: string;
    module: string;
    version: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      add_api: {
        address,
        module,
        version
      }
    }, fee, memo, funds);
  };
  removeApi = async ({
    module,
    version
  }: {
    module: string;
    version: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_api: {
        module,
        version
      }
    }, fee, memo, funds);
  };
  addOs = async ({
    managerAddress,
    osId,
    proxyAddress
  }: {
    managerAddress: string;
    osId: number;
    proxyAddress: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      add_os: {
        manager_address: managerAddress,
        os_id: osId,
        proxy_address: proxyAddress
      }
    }, fee, memo, funds);
  };
  setAdmin = async ({
    newAdmin
  }: {
    newAdmin: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      set_admin: {
        new_admin: newAdmin
      }
    }, fee, memo, funds);
  };
  setFactory = async ({
    newFactory
  }: {
    newFactory: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      set_factory: {
        new_factory: newFactory
      }
    }, fee, memo, funds);
  };
}