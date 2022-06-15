/**
 * This file was automatically generated by cosmwasm-typescript-gen@0.2.14.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the cosmwasm-typescript-gen generate command to regenerate this file.
 */

import { CosmWasmClient, ExecuteResult, SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { Coin, StdFee } from '@cosmjs/amino'
export interface ConfigResponse {
  admin: string
  factory: string
}
export interface InstantiateMsg {}
export interface ModuleInfo {
  name: string
  version?: string | null
}
export type Uint64 = string
export interface QueryCodeIdResponse {
  code_id: Uint64
  info: ContractVersion
}
export interface ContractVersion {
  contract: string
  version: string
}
export interface QueryEnabledModulesResponse {
  modules: string[]
}
export type Addr = string
export interface QueryOsAddressResponse {
  os_address: Core
}
export interface Core {
  manager: Addr
  proxy: Addr
}
export interface VersionControlReadOnlyInterface {
  contractAddress: string
  queryEnabledModules: ({
    osAddress,
  }: {
    osAddress: string
  }) => Promise<QueryEnabledModulesResponse>
  queryOsAddress: ({ osId }: { osId: number }) => Promise<QueryOsAddressResponse>
  queryCodeId: ({ module }: { module: ModuleInfo }) => Promise<QueryCodeIdResponse>
  config: () => Promise<ConfigResponse>
}
export class VersionControlQueryClient implements VersionControlReadOnlyInterface {
  client: CosmWasmClient
  contractAddress: string

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client
    this.contractAddress = contractAddress
    this.queryEnabledModules = this.queryEnabledModules.bind(this)
    this.queryOsAddress = this.queryOsAddress.bind(this)
    this.queryCodeId = this.queryCodeId.bind(this)
    this.config = this.config.bind(this)
  }

  queryEnabledModules = async ({
    osAddress,
  }: {
    osAddress: string
  }): Promise<QueryEnabledModulesResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      query_enabled_modules: {
        os_address: osAddress,
      },
    })
  }
  queryOsAddress = async ({ osId }: { osId: number }): Promise<QueryOsAddressResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      query_os_address: {
        os_id: osId,
      },
    })
  }
  queryCodeId = async ({ module }: { module: ModuleInfo }): Promise<QueryCodeIdResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      query_code_id: {
        module,
      },
    })
  }
  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {},
    })
  }
}
export interface VersionControlInterface extends VersionControlReadOnlyInterface {
  contractAddress: string
  sender: string
  addCodeId: (
    {
      codeId,
      module,
      version,
    }: {
      codeId: number
      module: string
      version: string
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>
  removeCodeId: (
    {
      module,
      version,
    }: {
      module: string
      version: string
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>
  addOs: (
    {
      managerAddress,
      osId,
      proxyAddress,
    }: {
      managerAddress: string
      osId: number
      proxyAddress: string
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>
  setAdmin: (
    {
      newAdmin,
    }: {
      newAdmin: string
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>
  setFactory: (
    {
      newFactory,
    }: {
      newFactory: string
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ) => Promise<ExecuteResult>
}
export class VersionControlClient
  extends VersionControlQueryClient
  implements VersionControlInterface
{
  client: SigningCosmWasmClient
  sender: string
  contractAddress: string

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress)
    this.client = client
    this.sender = sender
    this.contractAddress = contractAddress
    this.addCodeId = this.addCodeId.bind(this)
    this.removeCodeId = this.removeCodeId.bind(this)
    this.addOs = this.addOs.bind(this)
    this.setAdmin = this.setAdmin.bind(this)
    this.setFactory = this.setFactory.bind(this)
  }

  addCodeId = async (
    {
      codeId,
      module,
      version,
    }: {
      codeId: number
      module: string
      version: string
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        add_code_id: {
          code_id: codeId,
          module,
          version,
        },
      },
      fee,
      memo,
      funds
    )
  }
  removeCodeId = async (
    {
      module,
      version,
    }: {
      module: string
      version: string
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        remove_code_id: {
          module,
          version,
        },
      },
      fee,
      memo,
      funds
    )
  }
  addOs = async (
    {
      managerAddress,
      osId,
      proxyAddress,
    }: {
      managerAddress: string
      osId: number
      proxyAddress: string
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        add_os: {
          manager_address: managerAddress,
          os_id: osId,
          proxy_address: proxyAddress,
        },
      },
      fee,
      memo,
      funds
    )
  }
  setAdmin = async (
    {
      newAdmin,
    }: {
      newAdmin: string
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        set_admin: {
          new_admin: newAdmin,
        },
      },
      fee,
      memo,
      funds
    )
  }
  setFactory = async (
    {
      newFactory,
    }: {
      newFactory: string
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        set_factory: {
          new_factory: newFactory,
        },
      },
      fee,
      memo,
      funds
    )
  }
}
