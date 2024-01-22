import { type Coin } from '@cosmjs/amino'
import {
  type ExecuteResult,
  type MsgExecuteContractEncodeObject,
  type SigningCosmWasmClient,
} from '@cosmjs/cosmwasm-stargate'
import { toUtf8 } from '@cosmjs/encoding'
import { type StdFee } from '@cosmjs/stargate'
import { MsgExecuteContract } from 'cosmjs-types/cosmwasm/wasm/v1/tx'
import { ContractMsg } from './messages'

/**
 * The variant names that a type supports.
 */
export type VariantKeys<T> = T extends T ? keyof T : never

/**
 * A type helper that extracts the corresponding parameters type based on the key
 */
export type VariantValue<T, K extends VariantKeys<T>> = T extends {
  [_P in K]: infer U
}
  ? U
  : never

interface ComposeOptions {
  funds?: readonly Coin[]
  sender?: string
}

interface ExecuteOptions extends ComposeOptions {
  memo?: string

  fee?: StdFee | 'auto' | number
}

export class BaseContractMsgBuilder<TExecMsg extends ContractMsg> {
  _msg: ContractMsg = {}

  /**
   * Create a more specific message builder conforming to a specific variant of the message.
   * @param variant - the specific variant of the execute message
   * @example
   * const factoryUpdateConfigBuilder = new
   *   ContractExecuteMsgBuilder<FactoryExecuteMsg>().action('update_config') const msg =
   *   factoryUpdateConfigBuilder.withParams({ ans_host_contract: 'foo' }).toJson()
   */
  withAction<K extends VariantKeys<TExecMsg>>(
    variant: K,
  ): ContractMsgVariantBuilder<TExecMsg, K> {
    const variantBuilder = new ContractMsgVariantBuilder<TExecMsg, K>(variant)
    return Object.assign(variantBuilder, this)
  }

  /**
   * Create a more specific message builder conforming to a specific variant of the message.
   * @param variant
   * @param params
   * @example
   * const factoryBuilder = new ContractExecuteMsgBuilder<FactoryExecuteMsg>()
   * const msg = factoryBuilder.withActionMsg('update_config', { ans_host_contract: 'foo'
   *   }).toJson()
   */
  withActionMsg<K extends VariantKeys<TExecMsg>>(
    variant: K,
    params: VariantValue<TExecMsg, K>,
  ): ContractMsgVariantBuilder<TExecMsg, K> {
    const variantBuilder = this.withVariant(variant)
    return variantBuilder.withParams(params)
  }

  /**
   * Alias for {@link ContractExecuteMsgBuilder#withAction}
   * @param action - the action of the execute message
   */
  withVariant<K extends VariantKeys<TExecMsg>>(action: K) {
    return this.withAction<K>(action)
  }

  /**
   * Return the message in JSON format.
   */
  toJson(): ContractMsg {
    return this._msg
  }
}

/**
 * A more specific message builder that conforms to a variant of the message to be executed.
 */
class ContractMsgVariantBuilder<
  TExecuteMsg extends ContractMsg,
  TVariant extends VariantKeys<TExecuteMsg>,
> extends BaseContractMsgBuilder<TExecuteMsg> {
  _variant: TVariant

  constructor(variant: TVariant) {
    super()
    this._variant = variant
  }

  /**
   * Set the parameters for the message.
   * @param params
   * @example
   * const factoryUpdateConfigBuilder = new
   *   ContractExecuteMsgBuilder<FactoryExecuteMsg>().action('update_config') const msg =
   *   factoryUpdateConfigBuilder.withParams({ ans_host_contract: 'foo' }).toJson()
   */
  withParams(
    params: VariantValue<TExecuteMsg, TVariant>,
  ): ContractMsgVariantBuilder<TExecuteMsg, TVariant> {
    this._msg = {
      [this._variant]: params,
    }
    return this
  }
}

/**
 * A message builder for contracts. Adds methods to set the contract to be executed.
 */
export class ContractMsgBuilder<
  TExecMsg extends ContractMsg,
> extends BaseContractMsgBuilder<TExecMsg> {
  _contract: string | undefined

  withContract(contract: string) {
    this._contract = contract
    return this
  }

  get contract(): string | undefined {
    return this._contract
  }
}

/**
 * A generic builder for building execute messages for contracts.
 */
export class ContractExecuteMsgBuilder<
  TExecMsg extends ContractMsg,
> extends ContractMsgBuilder<TExecMsg> {
  _client: SigningCosmWasmClient | undefined
  _sender: string | undefined

  /**
   * Set the signing client for the execution of the message.
   * @param client - CosmWasm signing client
   */
  withClient(
    client: SigningCosmWasmClient,
  ): ContractExecuteMsgBuilder<TExecMsg> {
    this._client = client
    return this
  }

  /**
   * Set the sender in the execution of the message
   * @param sender - CosmWasm signing client
   */
  withSender(sender: string): ContractExecuteMsgBuilder<TExecMsg> {
    this._sender = sender
    return this
  }

  /**
   * Retrieve the sender.
   */
  get sender(): string | undefined {
    return this._sender
  }

  /**
   * Transform the message into an encoded object to execute directly with `signAndBroadcast`.
   * @param funds - add funds to the message to be composed
   * @param sender - override the sender in composing the message, optionally can use
   *   {@link #withSender} to set the sender.
   */
  compose({
    funds,
    sender,
  }: ComposeOptions = {}): MsgExecuteContractEncodeObject {
    if (!this.contract) {
      throw new Error('contractAddress is required')
    } else if (!this._msg) {
      throw new Error('msg is required')
    } else if (!(sender || this.sender)) {
      throw new Error('sender is required')
    }

    return {
      typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
      value: MsgExecuteContract.fromPartial({
        sender: sender || this.sender,
        contract: this.contract,
        msg: toUtf8(JSON.stringify(this._msg)),
        funds: funds?.map((f) => f),
      }),
    }
  }

  /**
   * Execute the message directly on the client.
   * The contract address and client MUST have been set before calling this method.
   * @param fee - override the fee used in the message.
   * @param memo - override the memo in the message
   * @param funds - override the funds in the message
   * @param sender - override the sender in the message
   * @example
   * const factoryUpdateConfigBuilder = new
   *   ContractExecuteMsgBuilder<FactoryExecuteMsg>().withAction('update_config') const result =
   *   await factoryUpdateConfigBuilder.withParams({ ans_host_address: "new"
   *   }).withClient(client).withContract(contractAddress).execute()
   */
  execute(
    { fee, memo, funds, sender }: ExecuteOptions = { fee: 'auto' },
  ): Promise<ExecuteResult> {
    if (!this.contract) {
      throw new Error('contractAddress is required')
    } else if (!this._client) {
      throw new Error('client is required')
    } else if (!(sender || this.sender)) {
      throw new Error('sender is required')
    }

    return this._client.execute(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      (sender || this.sender)!,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.contract!,
      this.toJson,
      fee || 'auto',
      memo,
      funds,
    )
  }
}

/*
export class QueryMsgBuilder<TQueryMsg extends ContractMsg> extends ContractMsgBuilder<TQueryMsg> {
  _queryClient: CosmWasmClient | undefined

  withQueryClient(queryClient: CosmWasmClient): QueryMsgBuilder<TQueryMsg> {
    this._queryClient = queryClient
    return this
  }

  query() {
    if (!this._queryClient) {
      throw new Error('Missing client')
    } else if (!this.contract) {
      throw new Error('Missing contract')
    } else if (!Object.keys(this.toJson()).length) {
      throw new Error('Missing msg')
    }

    return this._queryClient!.queryContractSmart(this.contract!, this.toJson())
  }
}
*/
