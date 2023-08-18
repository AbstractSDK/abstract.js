import { ExecuteResult, SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { ExecuteMsg } from './Factory.types'
import { Coin } from '@cosmjs/amino'
import { MsgExecuteContract } from 'cosmjs-types/cosmwasm/wasm/v1/tx'
import { toUtf8 } from '@cosmjs/encoding'
import { StdFee } from '@cosmjs/stargate'
import { FactoryMessageComposer } from './Factory.message-composer'
import { FactoryClient } from './Factory.client'

type VariantKeys<T> = T extends T ? keyof T : never

// Define a type helper that extracts the corresponding parameters type based on the key
type ExtractParams<T, K extends VariantKeys<T>> = T extends { [P in K]: infer U } ? U : never

interface ExecuteOptions {
  fee?: StdFee | 'auto' | number
  sender?: string
  memo?: string
  funds?: readonly Coin[]
}

class ContractMsgBuilder<T extends Record<string, unknown>> {
  _msg: Record<string, unknown> = {}
  contractAddress: string | undefined
  _client: SigningCosmWasmClient | undefined
  sender: string | undefined
  _funds: Coin[] | undefined
  _memo: string | undefined

  constructor() {}

  // // Use VariantKeys to infer the key and ExtractParams to infer the corresponding parameter type
  // static msg<T extends Record<string, unknown>, K extends VariantKeys<T>>(
  //   action: K,
  //   params: ExtractParams<T, K>
  // ): ContractMsgBuilder<T> {
  //   const builder = new ContractMsgBuilder<T>()
  //   builder.withMsg(action, params)
  //   return builder
  // }

  // Use VariantKeys to infer the key and ExtractParams to infer the corresponding parameter type
  msg<K extends VariantKeys<T>>(action: K, params: ExtractParams<T, K>): ContractMsgBuilder<T> {
    this._msg = {
      [action]: params,
    }
    return this
  }

  client(client: SigningCosmWasmClient): ContractMsgBuilder<T> {
    this._client = client
    return this
  }

  funds(funds: Coin[]): ContractMsgBuilder<T> {
    this._funds = funds
    return this
  }

  memo(memo: string): ContractMsgBuilder<T> {
    this._memo = memo
    return this
  }

  get toJson(): Record<string, unknown> {
    return this._msg
  }

  /**
   * Finalizer
   * @param _funds
   */
  compose(_funds?: Coin[]): Record<string, unknown> {
    if (!this._msg) {
      throw new Error('msg is required')
    }

    return {
      typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify(this._msg)),
        funds: _funds || this._funds,
      }),
    }
  }

  execute({ fee, memo, funds, sender }: ExecuteOptions = {}): Promise<ExecuteResult> {
    if (!this.contractAddress) {
      throw new Error('contractAddress is required')
    } else if (!this._client) {
      throw new Error('client is required')
    } else if (!(sender || this.sender)) {
      throw new Error('sender is required')
    }

    return this._client.execute(
      (sender || this.sender)!,
      this.contractAddress,
      this.toJson,
      fee || 'auto',
      memo || this._memo,
      funds || this._funds
    )
  }
}

class FactoryMessageBulider extends ContractMsgBuilder<ExecuteMsg> {}

// test for msg
test('ContractClient.msg', () => {
  expect(new FactoryMessageBulider().msg('update_config', { ans_host_contract: 'foo' })).toEqual({
    update_config: { ans_host_contract: 'foo' },
  })
})

class CamelContractClient {
  contractAddress: string | undefined
  client: SigningCosmWasmClient | undefined

  // Use VariantKeys to infer the key and ExtractParams to infer the corresponding parameter type
  static msg<K extends VariantKeys<ExecuteMsg>>(action: K, params: ExtractParams<ExecuteMsg, K>) {
    return {
      [action]: params,
    }
  }
}
//
// // test for msg
// test('ContractClient.msg', () => {
//   expect(ContractMsgBuilder.msg('update_config', { ans_host_contract: 'foo' })).toEqual({
//     update_config: { ans_host_contract: 'foo' },
//   })
// })
