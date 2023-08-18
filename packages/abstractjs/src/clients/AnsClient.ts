import { AssetInfoBaseForAddr, ChannelEntry, ContractEntry } from '../native/ans-host/AnsHost.types'
import { ABSTRACT_CONSTANTS } from '../constants'
import { CosmWasmClient, SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import {
  AnsHostClient,
  AnsHostInterface,
  AnsHostQueryClient,
  AnsHostReadOnlyInterface,
} from '../native'
import { Mixin } from 'ts-mixer'

export type AnsAssetEntry = [string, AssetInfoBaseForAddr]
export type AnsContractEntry = [ContractEntry, string]
export type AnsChannelEntry = [ChannelEntry, string]

interface IAnsQueryClient extends AnsHostReadOnlyInterface {
  /**
   * List all assets in ANS.
   */
  listAssets({ startAfter }: { startAfter: string }): Promise<AnsAssetEntry[]>

  /**
   * Filter assets in ANS by their ids.
   * @param ids
   */
  filterAssets({ ids }: { ids: string[] }): Promise<AnsAssetEntry[]>

  /**
   * List all contracts in ANS.
   */
  listContracts({ startAfter }: { startAfter: ContractEntry }): Promise<AnsContractEntry[]>

  /**
   * Filter contracts in ANS by their ids.
   * @param ids
   */
  filterContracts({ entries }: { entries: ContractEntry[] }): Promise<AnsContractEntry[]>

  /**
   * List all the channels in ANS.
   */
  listChannels({ startAfter }: { startAfter: ChannelEntry }): Promise<AnsChannelEntry[]>

  /**
   * Filter channels in ANS by their ids.
   * @param ids
   */
  filterChannels({ entries }: { entries: ChannelEntry[] }): Promise<AnsChannelEntry[]>
}

/**
 * A query client for interacting with Abstract Name Service.
 */
export class AnsQueryClient extends AnsHostQueryClient implements IAnsQueryClient {
  constructor(client: CosmWasmClient, contractAddress: string) {
    super(client, contractAddress)

    this.listAssets = this.listAssets.bind(this)
    this.filterAssets = this.filterAssets.bind(this)
    this.listContracts = this.listContracts.bind(this)
    this.filterContracts = this.filterContracts.bind(this)
    this.listChannels = this.listChannels.bind(this)
    this.filterChannels = this.filterChannels.bind(this)
  }

  /**
   * List all assets in ANS.
   */
  public async listAssets({
    startAfter: userPageToken,
  }: {
    startAfter: string
  }): Promise<AnsAssetEntry[]> {
    const resolvedEntries: AnsAssetEntry[] = []

    let startAfter = userPageToken

    let hasNextPage = true
    while (hasNextPage) {
      resolvedEntries.push(
        ...(await this.assetList({
          limit: ABSTRACT_CONSTANTS.MAX_PAGE_SIZE,
          startAfter,
        }).then(({ assets }) => {
          hasNextPage = assets.length === ABSTRACT_CONSTANTS.MAX_PAGE_SIZE
          startAfter = assets[assets.length - 1]?.[0]
          return assets
        }))
      )
    }

    return resolvedEntries
  }

  /**
   * Filter assets in ANS by their ids.
   * @param ids
   */
  public async filterAssets({ ids }: { ids: string[] }): Promise<AnsAssetEntry[]> {
    return this.assets({
      names: ids,
    }).then(({ assets }) => assets)
  }

  /**
   * List all the channels in ANS.
   * @param userPageToken
   */
  public async listChannels({
    startAfter: userPageToken,
  }: {
    startAfter: ChannelEntry
  }): Promise<AnsChannelEntry[]> {
    const resolvedEntries: AnsChannelEntry[] = []

    let startAfter = userPageToken

    let hasNextPage = true
    while (hasNextPage) {
      resolvedEntries.push(
        ...(await this.channelList({
          limit: ABSTRACT_CONSTANTS.MAX_PAGE_SIZE,
          startAfter,
        }).then(({ channels }) => {
          hasNextPage = channels.length === ABSTRACT_CONSTANTS.MAX_PAGE_SIZE
          startAfter = channels[channels.length - 1]?.[0]
          return channels
        }))
      )
    }

    return resolvedEntries
  }

  /**
   * Filter channels in ANS by their ids.
   * @param entries
   */
  public async filterChannels({
    entries,
  }: {
    entries: ChannelEntry[]
  }): Promise<AnsChannelEntry[]> {
    return this.channels({
      entries: entries,
    }).then(({ channels }) => channels)
  }

  public async listContracts({
    startAfter: userPageToken,
  }: {
    startAfter: ContractEntry
  }): Promise<AnsContractEntry[]> {
    const resolvedEntries: AnsContractEntry[] = []

    let startAfter = userPageToken

    let hasNextPage = true
    while (hasNextPage) {
      resolvedEntries.push(
        ...(await this.contractList({
          limit: ABSTRACT_CONSTANTS.MAX_PAGE_SIZE,
          startAfter,
        }).then(({ contracts }) => {
          hasNextPage = contracts.length === ABSTRACT_CONSTANTS.MAX_PAGE_SIZE
          startAfter = contracts[contracts.length - 1]?.[0]
          return contracts
        }))
      )
    }
    return resolvedEntries
  }

  /**
   * Filter contracts in ANS by their ids.
   * @param entries
   */
  public async filterContracts({
    entries,
  }: {
    entries: ContractEntry[]
  }): Promise<AnsContractEntry[]> {
    return this.contracts({
      entries: entries,
    }).then(({ contracts }) => contracts)
  }
}

/**
 * An interface signaling that the class implements the IAnsQueryClient and AnsHostInterface.
 */
interface IAnsClient extends IAnsQueryClient, AnsHostInterface {}

/**
 * AnsClient is a client for interacting with the Abstract Name Service.
 */
export class AnsClient extends Mixin(AnsHostClient, AnsQueryClient) implements IAnsClient {
  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, sender, contractAddress)
  }
}
