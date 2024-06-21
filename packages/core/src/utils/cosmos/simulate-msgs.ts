import { StargateClient } from '@abstract-money/cli/.tsup/declaration/_tsup-dts-aggregation'
import { Registry } from '@cosmjs/proto-signing'
import {
  QueryClient,
  createProtobufRpcClient,
  setupTxExtension,
} from '@cosmjs/stargate'
import { CometClient } from '@cosmjs/tendermint-rpc'
import { MsgSend } from 'cosmjs-types/cosmos/bank/v1beta1/tx'
import { SignMode } from 'cosmjs-types/cosmos/tx/signing/v1beta1/signing'
import {
  ServiceClientImpl,
  SimulateRequest,
  SimulateResponse,
} from 'cosmjs-types/cosmos/tx/v1beta1/service'
import { AuthInfo, Fee, Tx, TxBody } from 'cosmjs-types/cosmos/tx/v1beta1/tx'
import { MsgExecuteContract } from 'cosmjs-types/cosmwasm/wasm/v1/tx'
import { Any } from 'cosmjs-types/google/protobuf/any'
import { CosmosMsgForEmpty } from '../../legacy'
import { encodeWasmCosmosMsgForEmpty } from './encoding'

const typesRegistry = new Registry([
  ['/cosmwasm.wasm.v1.MsgExecuteContract', MsgExecuteContract],
  ['/cosmos.bank.v1beta1.MsgSend', MsgSend],
])

/**
 * Simulate messages sent by a wasm contract.
 * @param cometClient
 * @param msgs
 * @param senderAddress
 */
export const simulateWasmCosmosMsgs = async (
  cometClient: CometClient,
  msgs: CosmosMsgForEmpty[],
  senderAddress: string,
) => {
  const encodedMsgs = msgs.map((msg) => {
    const encoded = encodeWasmCosmosMsgForEmpty(msg, senderAddress)
    return typesRegistry.encodeAsAny(encoded)
  })

  // Simulate messages together.
  try {
    return await simulateAnyMessages(cometClient, encodedMsgs)
  } catch (err) {
    // Simulate messages separately and log any errors, but don't throw them.
    // This helps debug which message is causing an error if they all fail
    // together. But we only care about the result of simulating all messages
    // since they may depend on each other.
    await encodedMsgs.reduce(async (p, encoded) => {
      await p

      console.log('Simulating:', encoded)
      try {
        await simulateAnyMessages(cometClient, [encoded])
      } catch (err) {
        console.error(err)
      }
    }, Promise.resolve())

    // Rethrow original error.
    throw err
  }
}

export const simulateAnyMessages = async (
  cometClient: CometClient,
  messages: Any[],
): Promise<SimulateResponse> => {
  const tx = Tx.fromPartial({
    authInfo: AuthInfo.fromPartial({
      fee: Fee.fromPartial({}),
      signerInfos: [
        // @ts-ignore
        {
          modeInfo: {
            single: {
              mode: SignMode.SIGN_MODE_DIRECT,
            },
          },
        },
      ],
    }),
    body: TxBody.fromPartial({
      messages,
      memo: '',
    }),
    signatures: [new Uint8Array()],
  })

  const request = SimulateRequest.fromPartial({
    txBytes: Tx.encode(tx).finish(),
  })

  const txClient = QueryClient.withExtensions(cometClient, setupTxExtension)

  return new ServiceClientImpl(createProtobufRpcClient(txClient)).Simulate(
    request,
  )
}
