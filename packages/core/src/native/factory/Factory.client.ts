/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.28.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import { Coin, StdFee } from '@cosmjs/amino'
import {
  CosmWasmClient,
  ExecuteResult,
  SigningCosmWasmClient,
} from '@cosmjs/cosmwasm-stargate'
import {
  Action,
  Addr,
  AssetEntry,
  Binary,
  ConfigResponse,
  ExecuteMsg,
  Expiration,
  GovernanceDetailsForString,
  InstantiateMsg,
  MigrateMsg,
  ModuleInfo,
  ModuleInstallConfig,
  ModuleVersion,
  Namespace,
  OwnershipForString,
  QueryMsg,
  Timestamp,
  Uint64,
} from './Factory.types'
export interface FactoryReadOnlyInterface {
  contractAddress: string
  config: () => Promise<ConfigResponse>
  ownership: () => Promise<OwnershipForString>
}
export class FactoryQueryClient implements FactoryReadOnlyInterface {
  client: CosmWasmClient
  contractAddress: string

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client
    this.contractAddress = contractAddress
    this.config = this.config.bind(this)
    this.ownership = this.ownership.bind(this)
  }

  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {},
    })
  }
  ownership = async (): Promise<OwnershipForString> => {
    return this.client.queryContractSmart(this.contractAddress, {
      ownership: {},
    })
  }
}
export interface FactoryInterface extends FactoryReadOnlyInterface {
  contractAddress: string
  sender: string
  updateConfig: (
    {
      ansHostContract,
      moduleFactoryAddress,
      versionControlContract,
    }: {
      ansHostContract?: string
      moduleFactoryAddress?: string
      versionControlContract?: string
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[],
  ) => Promise<ExecuteResult>
  createAccount: (
    {
      baseAsset,
      description,
      governance,
      installModules,
      link,
      name,
      namespace,
    }: {
      baseAsset?: AssetEntry
      description?: string
      governance: GovernanceDetailsForString
      installModules: ModuleInstallConfig[]
      link?: string
      name: string
      namespace?: string
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[],
  ) => Promise<ExecuteResult>
  updateOwnership: (
    action: Action,
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[],
  ) => Promise<ExecuteResult>
}
export class FactoryClient
  extends FactoryQueryClient
  implements FactoryInterface
{
  client: SigningCosmWasmClient
  sender: string
  contractAddress: string

  constructor(
    client: SigningCosmWasmClient,
    sender: string,
    contractAddress: string,
  ) {
    super(client, contractAddress)
    this.client = client
    this.sender = sender
    this.contractAddress = contractAddress
    this.updateConfig = this.updateConfig.bind(this)
    this.createAccount = this.createAccount.bind(this)
    this.updateOwnership = this.updateOwnership.bind(this)
  }

  updateConfig = async (
    {
      ansHostContract,
      moduleFactoryAddress,
      versionControlContract,
    }: {
      ansHostContract?: string
      moduleFactoryAddress?: string
      versionControlContract?: string
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    _funds?: Coin[],
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        update_config: {
          ans_host_contract: ansHostContract,
          module_factory_address: moduleFactoryAddress,
          version_control_contract: versionControlContract,
        },
      },
      fee,
      memo,
      _funds,
    )
  }
  createAccount = async (
    {
      baseAsset,
      description,
      governance,
      installModules,
      link,
      name,
      namespace,
    }: {
      baseAsset?: AssetEntry
      description?: string
      governance: GovernanceDetailsForString
      installModules: ModuleInstallConfig[]
      link?: string
      name: string
      namespace?: string
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    _funds?: Coin[],
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        create_account: {
          base_asset: baseAsset,
          description,
          governance,
          install_modules: installModules,
          link,
          name,
          namespace,
        },
      },
      fee,
      memo,
      _funds,
    )
  }
  updateOwnership = async (
    action: Action,
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    _funds?: Coin[],
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        update_ownership: action,
      },
      fee,
      memo,
      _funds,
    )
  }
}