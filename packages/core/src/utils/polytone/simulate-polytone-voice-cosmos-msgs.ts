import { cosmosWasmExecuteMsg, jsonToBinary } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { AccountTypes } from '../../codegen/abstract'
import { MaybeArray } from '../../types/utils'
import { simulateWasmCosmosMsgs } from '../cosmos'

export type SimulatePolytoneCosmosMsgParameters = {
  hostCosmWasmClient: CosmWasmClient
  controllerSender: string
  controllerNoteAddress: string
  hostVoiceAddress: string
  hostVoiceConnectionId: `connection-${string}`
  msgs: MaybeArray<AccountTypes.CosmosMsgForEmpty>
}

/**
 * Simulate messages to be executed on a the host polytone voice chain.
 * @param msgs
 * @experimental
 */
export async function simulatePolytoneVoiceCosmosMsgs({
  hostCosmWasmClient,
  hostVoiceAddress,
  controllerNoteAddress,
  controllerSender,
  hostVoiceConnectionId,
  msgs,
}: SimulatePolytoneCosmosMsgParameters) {
  const voiceMsg = cosmosWasmExecuteMsg(
    hostVoiceAddress,
    {
      rx: {
        connection_id: hostVoiceConnectionId,
        counterparty_port: `wasm.${controllerNoteAddress}`,
        data: jsonToBinary({
          sender: controllerSender,
          msg: {
            execute: {
              msgs: Array.isArray(msgs) ? msgs : [msgs],
            },
          },
        }),
      },
    },
    [],
  )

  return await simulateWasmCosmosMsgs(
    // biome-ignore lint/complexity/useLiteralKeys: private
    hostCosmWasmClient['cometClient'],
    [voiceMsg],
    hostVoiceAddress,
  )
}
