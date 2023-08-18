/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.28.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from '@cosmjs/cosmwasm-stargate'
import { Coin, StdFee } from '@cosmjs/amino'
import {
  GovernanceDetailsForString,
  InstantiateMsg,
  ExecuteMsg,
  Binary,
  Namespace,
  ModuleVersion,
  ModuleReference,
  Addr,
  Action,
  Expiration,
  Timestamp,
  Uint64,
  ModuleInfo,
  Module,
  CallbackMsg,
  QueryMsg,
  MigrateMsg,
  ConfigResponse,
  GovernanceDetailsForAddr,
  InfoResponse,
  AccountInfoForAddr,
  ModuleAddressesResponse,
  ModuleInfosResponse,
  ManagerModuleInfo,
  ContractVersion,
  ModuleVersionsResponse,
  OwnershipForString,
} from './Manager.types'
export interface ManagerReadOnlyInterface {
  contractAddress: string
  moduleVersions: ({ ids }: { ids: string[] }) => Promise<ModuleVersionsResponse>
  moduleAddresses: ({ ids }: { ids: string[] }) => Promise<ModuleAddressesResponse>
  moduleInfos: ({
    limit,
    startAfter,
  }: {
    limit?: number
    startAfter?: string
  }) => Promise<ModuleInfosResponse>
  config: () => Promise<ConfigResponse>
  info: () => Promise<InfoResponse>
  ownership: () => Promise<OwnershipForString>
}
export class ManagerQueryClient implements ManagerReadOnlyInterface {
  client: CosmWasmClient
  contractAddress: string

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client
    this.contractAddress = contractAddress
    this.moduleVersions = this.moduleVersions.bind(this)
    this.moduleAddresses = this.moduleAddresses.bind(this)
    this.moduleInfos = this.moduleInfos.bind(this)
    this.config = this.config.bind(this)
    this.info = this.info.bind(this)
    this.ownership = this.ownership.bind(this)
  }

  moduleVersions = async ({ ids }: { ids: string[] }): Promise<ModuleVersionsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      module_versions: {
        ids,
      },
    })
  }
  moduleAddresses = async ({ ids }: { ids: string[] }): Promise<ModuleAddressesResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      module_addresses: {
        ids,
      },
    })
  }
  moduleInfos = async ({
    limit,
    startAfter,
  }: {
    limit?: number
    startAfter?: string
  }): Promise<ModuleInfosResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      module_infos: {
        limit,
        start_after: startAfter,
      },
    })
  }
  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {},
    })
  }
  info = async (): Promise<InfoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      info: {},
    })
  }
  ownership = async (): Promise<OwnershipForString> => {
    return this.client.queryContractSmart(this.contractAddress, {
      ownership: {},
    })
  }
}
export interface ManagerInterface extends ManagerReadOnlyInterface {
  contractAddress: string
  sender: string
  execOnModule: (
    {
      execMsg,
      moduleId,
    }: {
      execMsg: Binary
      moduleId: string
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[]
  ) => Promise<ExecuteResult>
  updateInternalConfig: (
    msg: Binary,
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[]
  ) => Promise<ExecuteResult>
  installModule: (
    {
      initMsg,
      module,
    }: {
      initMsg?: Binary
      module: ModuleInfo
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[]
  ) => Promise<ExecuteResult>
  registerModule: (
    {
      module,
      moduleAddr,
    }: {
      module: Module
      moduleAddr: string
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[]
  ) => Promise<ExecuteResult>
  uninstallModule: (
    {
      moduleId,
    }: {
      moduleId: string
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[]
  ) => Promise<ExecuteResult>
  upgrade: (
    {
      modules,
    }: {
      modules: ModuleInfo[][]
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[]
  ) => Promise<ExecuteResult>
  updateInfo: (
    {
      description,
      link,
      name,
    }: {
      description?: string
      link?: string
      name?: string
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[]
  ) => Promise<ExecuteResult>
  setOwner: (
    {
      owner,
    }: {
      owner: GovernanceDetailsForString
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[]
  ) => Promise<ExecuteResult>
  updateStatus: (
    {
      isSuspended,
    }: {
      isSuspended?: boolean
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[]
  ) => Promise<ExecuteResult>
  updateSettings: (
    {
      ibcEnabled,
    }: {
      ibcEnabled?: boolean
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[]
  ) => Promise<ExecuteResult>
  callback: (
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[]
  ) => Promise<ExecuteResult>
  updateOwnership: (
    action: Action,
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[]
  ) => Promise<ExecuteResult>
}
export class ManagerClient extends ManagerQueryClient implements ManagerInterface {
  client: SigningCosmWasmClient
  sender: string
  contractAddress: string

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress)
    this.client = client
    this.sender = sender
    this.contractAddress = contractAddress
    this.execOnModule = this.execOnModule.bind(this)
    this.updateInternalConfig = this.updateInternalConfig.bind(this)
    this.installModule = this.installModule.bind(this)
    this.registerModule = this.registerModule.bind(this)
    this.uninstallModule = this.uninstallModule.bind(this)
    this.upgrade = this.upgrade.bind(this)
    this.updateInfo = this.updateInfo.bind(this)
    this.setOwner = this.setOwner.bind(this)
    this.updateStatus = this.updateStatus.bind(this)
    this.updateSettings = this.updateSettings.bind(this)
    this.callback = this.callback.bind(this)
    this.updateOwnership = this.updateOwnership.bind(this)
  }

  execOnModule = async (
    {
      execMsg,
      moduleId,
    }: {
      execMsg: Binary
      moduleId: string
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    _funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        exec_on_module: {
          exec_msg: execMsg,
          module_id: moduleId,
        },
      },
      fee,
      memo,
      _funds
    )
  }
  updateInternalConfig = async (
    msg: Binary,
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    _funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        update_internal_config: msg,
      },
      fee,
      memo,
      _funds
    )
  }
  installModule = async (
    {
      initMsg,
      module,
    }: {
      initMsg?: Binary
      module: ModuleInfo
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    _funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        install_module: {
          init_msg: initMsg,
          module,
        },
      },
      fee,
      memo,
      _funds
    )
  }
  registerModule = async (
    {
      module,
      moduleAddr,
    }: {
      module: Module
      moduleAddr: string
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    _funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        register_module: {
          module,
          module_addr: moduleAddr,
        },
      },
      fee,
      memo,
      _funds
    )
  }
  uninstallModule = async (
    {
      moduleId,
    }: {
      moduleId: string
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    _funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        uninstall_module: {
          module_id: moduleId,
        },
      },
      fee,
      memo,
      _funds
    )
  }
  upgrade = async (
    {
      modules,
    }: {
      modules: ModuleInfo[][]
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    _funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        upgrade: {
          modules,
        },
      },
      fee,
      memo,
      _funds
    )
  }
  updateInfo = async (
    {
      description,
      link,
      name,
    }: {
      description?: string
      link?: string
      name?: string
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    _funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        update_info: {
          description,
          link,
          name,
        },
      },
      fee,
      memo,
      _funds
    )
  }
  setOwner = async (
    {
      owner,
    }: {
      owner: GovernanceDetailsForString
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    _funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        set_owner: {
          owner,
        },
      },
      fee,
      memo,
      _funds
    )
  }
  updateStatus = async (
    {
      isSuspended,
    }: {
      isSuspended?: boolean
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    _funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        update_status: {
          is_suspended: isSuspended,
        },
      },
      fee,
      memo,
      _funds
    )
  }
  updateSettings = async (
    {
      ibcEnabled,
    }: {
      ibcEnabled?: boolean
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    _funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        update_settings: {
          ibc_enabled: ibcEnabled,
        },
      },
      fee,
      memo,
      _funds
    )
  }
  callback = async (
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    _funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        callback: {},
      },
      fee,
      memo,
      _funds
    )
  }
  updateOwnership = async (
    action: Action,
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    _funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        update_ownership: action,
      },
      fee,
      memo,
      _funds
    )
  }
}