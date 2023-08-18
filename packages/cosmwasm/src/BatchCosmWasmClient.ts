import { CosmWasmClient, HttpEndpoint } from '@cosmjs/cosmwasm-stargate'
import {
  HttpBatchClient,
  Tendermint34Client,
  type HttpBatchClientOptions,
} from '@cosmjs/tendermint-rpc'

export const DEFAULT_BATCH_SIZE_LIMIT = 25
export const DEFAULT_DISPATCH_INTERVAL = 300

export const DEFAULT_BATCH_COSMWASM_CLIENT_OPTIONS: BatchCosmWasmClientOptions = {
  batchSizeLimit: DEFAULT_BATCH_SIZE_LIMIT,
  dispatchInterval: DEFAULT_DISPATCH_INTERVAL,
}

export interface BatchCosmWasmClientOptions extends HttpBatchClientOptions {}

/**
 * BatchCosmWasmClient is an extension of CosmWasmClient that allows batch processing of rpc requests.
 */
export class BatchCosmWasmClient extends CosmWasmClient {
  private readonly _batchSizeLimit: number
  private readonly _dispatchInterval: number

  constructor(
    tmClient: Tendermint34Client | undefined,
    options: BatchCosmWasmClientOptions = DEFAULT_BATCH_COSMWASM_CLIENT_OPTIONS
  ) {
    super(tmClient)
    this._batchSizeLimit = options.batchSizeLimit
    this._dispatchInterval = options.dispatchInterval
  }

  /**
   * Connect to a endpoint with a new BatchCosmWasmClient.
   * @param {string} endpoint - The endpoint to connect to.
   * @param {BatchCosmWasmClientOptions} options - The options for the HTTP Batch Client.
   * @return {BatchCosmWasmClient} The new BatchCosmWasmClient.
   */
  static async connect(
    endpoint: string | HttpEndpoint,
    options: BatchCosmWasmClientOptions = DEFAULT_BATCH_COSMWASM_CLIENT_OPTIONS
  ): Promise<CosmWasmClient> {
    const tendermint = await Tendermint34Client.create(
      new HttpBatchClient(endpoint, {
        batchSizeLimit: options.batchSizeLimit,
        dispatchInterval: options.dispatchInterval,
      })
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
}
