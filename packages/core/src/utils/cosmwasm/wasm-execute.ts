import { jsonToBinary } from '@abstract-money/core'
import {
  CosmosMsgForEmpty,
  WasmMsg,
} from '../../codegen/abstract/cosmwasm-codegen/Account.types'

type EncodedMsg = string
type JsonMsg = Record<string, unknown>

export const wasmExecuteMsg = (
  contractAddress: string,
  msg: JsonMsg | EncodedMsg,
  funds?: { amount: string; denom: string }[],
): WasmMsg => {
  return {
    execute: {
      contract_addr: contractAddress,
      funds: funds ?? [],
      msg: typeof msg === 'string' ? msg : jsonToBinary(msg),
    },
  }
}
export const cosmosWasmExecuteMsg = (
  contractAddress: string,
  msg: JsonMsg | EncodedMsg,
  funds?: { amount: string; denom: string }[],
): CosmosMsgForEmpty => {
  return {
    wasm: wasmExecuteMsg(contractAddress, msg, funds),
  }
}
