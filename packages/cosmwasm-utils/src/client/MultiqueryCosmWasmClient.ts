import { CosmWasmClient, type HttpEndpoint } from '@cosmjs/cosmwasm-stargate'
import { fromBase64, fromUtf8, toBase64, toUtf8 } from '@cosmjs/encoding'
import { HttpBatchClient, Tendermint34Client } from '@cosmjs/tendermint-rpc'
import { type BatchCosmWasmClientOptions } from './BatchCosmWasmClient'
import {
  type AggregateResult,
  type Call,
  type QueryMsg,
} from './types/Multiquery.types'

const jsonToUtf8 = (json: Record<string, unknown>): Uint8Array =>
  toUtf8(JSON.stringify(json))
const jsonToBinary = (json: Record<string, unknown>): string =>
  toBase64(jsonToUtf8(json))

const binaryToJson = (binary: string): string => fromUtf8(fromBase64(binary))

export interface MultiqueryOptions extends BatchCosmWasmClientOptions {
  multiqueryContract: string
}

interface QueryQueueItem {
  address: string
  queryMsg: Record<string, unknown>
  resolve: (result: Record<string, unknown>) => void
  reject: (error: Error) => void
}

/**
 * Result type for tryAggregate queries, where data can be either the successful response
 * or an error message (when include_cause is true and the query failed)
 */
export type TryAggregateResult<T = Record<string, unknown>> =
  | {
      success: true
      data: T
      error: undefined
    }
  | {
      success: false
      data: undefined
      error: string
    }

const DEFAULT_BATCH_SIZE_LIMIT = 25
const DEFAULT_DISPATCH_INTERVAL = 200

export const DEFAULT_MULTIQUERY_COSMWASM_CLIENT_OPTIONS: BatchCosmWasmClientOptions =
  {
    batchSizeLimit: DEFAULT_BATCH_SIZE_LIMIT,
    dispatchInterval: DEFAULT_DISPATCH_INTERVAL,
  }

/**
 * BatchCosmWasmClient with multiquery support by default. Note that the contract MUST be deployed on the target network and this client does not handle check for the deployment.
 * @see https://github.com/AbstractSDK/multiquery
 */
export class MultiqueryCosmWasmClient extends CosmWasmClient {
  private readonly multiqueryContractAddress: string
  private readonly _batchSizeLimit: number
  private readonly _dispatchInterval: number
  private queryQueue: QueryQueueItem[] = []
  private queryTimer?: NodeJS.Timer

  constructor(
    tmClient: Tendermint34Client | undefined,
    options: MultiqueryOptions,
  ) {
    super(tmClient)
    this._batchSizeLimit = options.batchSizeLimit
    this._dispatchInterval = options.dispatchInterval
    this.multiqueryContractAddress = options.multiqueryContract
    this.queryTimer = setInterval(
      () => this.processQueryQueue(),
      options.dispatchInterval,
    )
  }

  static async connect(
    endpoint: string | HttpEndpoint,
    // Ensure that the overridden connect is happy
    options: MultiqueryOptions = {
      ...DEFAULT_MULTIQUERY_COSMWASM_CLIENT_OPTIONS,
      multiqueryContract: '',
    },
  ): Promise<MultiqueryCosmWasmClient> {
    if (!options.multiqueryContract) {
      throw new Error('Missing multiquery contract address')
    }
    const tendermint = await Tendermint34Client.create(
      new HttpBatchClient(endpoint, {
        batchSizeLimit: options.batchSizeLimit,
        dispatchInterval: options.dispatchInterval,
      }),
    )
    return new this(tendermint, options)
  }

  /**
   * Get the batch size limit.
   * @return {number} The batch size limit.
   */
  get batchSizeLimit(): number {
    return this._batchSizeLimit
  }

  /**
   * Get the dispatch interval.
   * @return {number} The dispatch interval.
   */
  get dispatchInterval(): number {
    return this._dispatchInterval
  }

  override async queryContractSmart(
    address: string,
    queryMsg: Record<string, unknown>,
  ): Promise<Record<string, unknown>> {
    return new Promise((resolve, reject) => {
      this.queryQueue.push({ address, queryMsg, resolve, reject })

      if (
        this.queryQueue.length >= this.batchSizeLimit ||
        address === this.multiqueryContractAddress
      ) {
        this.processQueryQueue()
      }
    })
  }

  async queryContractsBatch(
    queries: Array<{ address: string; queryMsg: Record<string, unknown> }>,
  ): Promise<Record<string, unknown>[]> {
    return Promise.all(
      queries.map(({ address, queryMsg }) =>
        this.queryContractSmart(address, queryMsg),
      ),
    )
  }

  /**
   * Aggregate queries with error suppression
   * @param queries Array of contract queries to execute
   * @param requireSuccess If true, throws error when any query fails
   * @returns Array of results where data is either the successful response or error message
   */
  async tryAggregate(
    queries: Array<{ address: string; queryMsg: Record<string, unknown> }>,
    requireSuccess = false,
  ): Promise<TryAggregateResult[]> {
    const calls: Call[] = queries.map(({ address, queryMsg }) => ({
      address,
      data: jsonToBinary(queryMsg),
    }))

    console.log('calls length', calls.length)
    console.log('calls', calls)

    const result = (await super.queryContractSmart(
      this.multiqueryContractAddress,
      <QueryMsg>{
        try_aggregate: {
          queries: calls,
          require_success: requireSuccess,
          include_cause: true,
        },
      },
    )) as AggregateResult

    return result.return_data.map(({ success, data }) => {
      if (success) {
        return {
          success: true,
          data: data ? JSON.parse(binaryToJson(data)) : {},
          error: undefined,
        } as const
      } else {
        return {
          success: false,
          data: undefined,
          error: binaryToJson(data) || 'Query failed',
        } as const
      }
    })
  }

  /**
   * Process the accumulated query queue using tryAggregate
   */
  private async processQueryQueue(): Promise<void> {
    const batch = this.queryQueue.splice(0, this.batchSizeLimit)
    if (!batch.length) return

    try {
      const queries = batch.map(({ address, queryMsg }) => ({
        address,
        queryMsg,
      }))

      const results = await this.tryAggregate(queries, false)

      results.forEach((result, index) => {
        if (!batch[index]) return
        const { resolve, reject } = batch[index]!
        if (result.success) {
          resolve(result.data as Record<string, unknown>)
        } else {
          reject(new Error(result.error))
        }
      })
    } catch (error) {
      batch.forEach(({ reject }) => {
        reject(error instanceof Error ? error : new Error(String(error)))
      })
    }
  }

  override disconnect(): void {
    if (this.queryTimer) {
      clearInterval(this.queryTimer)
      this.queryTimer = undefined
    }
    super.disconnect()
  }
}
