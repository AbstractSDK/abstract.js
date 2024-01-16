import { type CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { BiMap } from '@rimbu/bimap'
import { Mixin } from 'ts-mixer'

import { ABSTRACT_CONSTANTS } from '../utils/constants'

import {
  AnsHostClient,
  type AnsHostInterface,
  AnsHostQueryClient,
  type AnsHostReadOnlyInterface,
  AnsHostTypes,
} from '../codegen/abstract'

type AssetInfoBaseForAddr = AnsHostTypes.AssetInfoBaseForAddr
type ChannelEntry = AnsHostTypes.ChannelEntry
type ContractEntry = AnsHostTypes.ContractEntry

type AnsId = string
export type RawAnsAssetEntry = readonly [AnsId, AssetInfoBaseForAddr]
export type RawAnsContractEntry = [ContractEntry, string]
export type RawAnsChannelEntry = [ChannelEntry, string]

interface IAnsQueryClient extends AnsHostReadOnlyInterface {
  /**
   * List all assets in ANS.
   */
  listAssets({
    startAfter,
  }: { startAfter: string }): Promise<RawAnsAssetEntry[]>

  /**
   * Filter assets in ANS by their ids.
   * @param ids
   */
  filterAssets({ ids }: { ids: string[] }): Promise<RawAnsAssetEntry[]>

  /**
   * List all contracts in ANS.
   */
  listContracts({
    startAfter,
  }: { startAfter: ContractEntry }): Promise<RawAnsContractEntry[]>

  /**
   * Filter contracts in ANS by their ids.
   * @param ids
   */
  filterContracts({
    entries,
  }: { entries: ContractEntry[] }): Promise<RawAnsContractEntry[]>

  /**
   * List all the channels in ANS.
   */
  listChannels({
    startAfter,
  }: { startAfter: ChannelEntry }): Promise<RawAnsChannelEntry[]>

  /**
   * Filter channels in ANS by their ids.
   * @param ids
   */
  filterChannels({
    entries,
  }: { entries: ChannelEntry[] }): Promise<RawAnsChannelEntry[]>
}

/**
 * A query client for interacting with Abstract Name Service.
 */
export class AnsQueryClient
  extends AnsHostQueryClient
  implements IAnsQueryClient
{
  constructor(client: CosmWasmClient, contractAddress: string) {
    super(client, contractAddress)

    this.listAssets = this.listAssets.bind(this)
    this.filterAssets = this.filterAssets.bind(this)
    this.listContracts = this.listContracts.bind(this)
    this.filterContracts = this.filterContracts.bind(this)
    this.listChannels = this.listChannels.bind(this)
    this.filterChannels = this.filterChannels.bind(this)
  }

  private assetCache: BiMap<AnsId, AssetInfoBaseForAddr> = BiMap.empty()

  /**
   * Clear the asset cache.
   */
  private clearAssetCache = () => {
    console.log('clearing asset cache')
    this.assetCache = BiMap.empty()
  }

  /**
   * Add a new asset entry to the cache based on the response.
   * @param entry
   */
  private cacheAssetEntry = (entry: RawAnsAssetEntry) => {
    this.assetCache = this.assetCache.addEntry(entry)
  }

  /**
   * Retrieve an asset entry via its info. (reverse query).
   * @param info
   */
  public entryByInfo = async (
    info: AssetInfoBaseForAddr,
  ): Promise<RawAnsAssetEntry | undefined> => {
    // populate the cache
    await this.listAssets()

    const ansId = this.assetCache.getKey(info)

    return ansId === undefined ? undefined : [ansId, info]
  }

  /**
   * List all assets in ANS.
   * If *cached* is set to false, it will hard refresh.
   */
  public async listAssets({
    ignoreCache = false,
    startAfter: userPageToken,
  }: {
    ignoreCache?: boolean
    startAfter?: string
  } = {}): Promise<RawAnsAssetEntry[]> {
    // if we're cached, and the cache is not empty, return the cache
    if (!ignoreCache && !this.assetCache.isEmpty) {
      return this.assetCache.toArray()
    }

    const resolvedEntries: RawAnsAssetEntry[] = []

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
        })),
      )
    }

    resolvedEntries.forEach(this.cacheAssetEntry)

    return resolvedEntries
  }

  /**
   * Filter assets in ANS by their ids.
   * @param ids
   */
  public async filterAssets({
    ids,
  }: { ids: AnsId[] }): Promise<RawAnsAssetEntry[]> {
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
  }): Promise<RawAnsChannelEntry[]> {
    const resolvedEntries: RawAnsChannelEntry[] = []

    let startAfter = userPageToken

    let hasNextPage = true
    while (hasNextPage) {
      resolvedEntries.push(
        ...(await this.channelList({
          limit: ABSTRACT_CONSTANTS.MAX_PAGE_SIZE,
          startAfter,
        }).then(({ channels }) => {
          hasNextPage = channels.length === ABSTRACT_CONSTANTS.MAX_PAGE_SIZE
          startAfter = channels[channels.length - 1]?.[0] as ChannelEntry
          return channels
        })),
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
  }): Promise<RawAnsChannelEntry[]> {
    return this.channels({
      entries: entries,
    }).then(({ channels }) => channels)
  }

  public async listContracts({
    startAfter: userPageToken,
  }: {
    startAfter: ContractEntry
  }): Promise<RawAnsContractEntry[]> {
    const resolvedEntries: RawAnsContractEntry[] = []

    let startAfter = userPageToken

    let hasNextPage = true
    while (hasNextPage) {
      resolvedEntries.push(
        ...(await this.contractList({
          limit: ABSTRACT_CONSTANTS.MAX_PAGE_SIZE,
          startAfter,
        }).then(({ contracts }) => {
          hasNextPage = contracts.length === ABSTRACT_CONSTANTS.MAX_PAGE_SIZE
          startAfter = contracts[contracts.length - 1]?.[0] as ContractEntry
          return contracts
        })),
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
  }): Promise<RawAnsContractEntry[]> {
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
export class AnsClient
  extends Mixin(AnsHostClient, AnsQueryClient)
  implements IAnsClient {}
