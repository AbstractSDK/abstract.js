import { fromBase64 } from '@cosmjs/encoding'
import {
  MsgClearAdmin,
  MsgExecuteContract,
  MsgInstantiateContract,
  MsgInstantiateContract2,
  MsgMigrateContract,
  MsgUpdateAdmin,
} from 'cosmjs-types/cosmwasm/wasm/v1/tx'
import { P, match } from 'ts-pattern'
import { CosmosMsgForEmpty } from '../../codegen/abstract/cosmwasm-codegen/Account.types'

export interface EncodeObject {
  readonly typeUrl: string
  readonly value: any
}

/**
 * Encodes a wasm message to be simulated. Only support wasm executions.
 * Adapted from {@link https://github.com/DA0-DA0/dao-dao-ui/blob/1170fe5602ce52a33ad9414f4bccfeda5db275e0/packages/types/protobuf/utils.ts#L93} with permissions from the author.
 *
 * @param msg
 * @param sender
 */
export const encodeWasmCosmosMsgForEmpty = (
  msg: CosmosMsgForEmpty,
  sender: string,
): EncodeObject => {
  return match(msg)
    .with({ wasm: P.select() }, (wasm) => wasmEncoder(wasm, sender))
    .with({ bank: P.select() }, (bank) => bankEncoder(bank, sender))
    .otherwise(() => {
      throw new Error('Unsupported cosmos message.')
    })
}

function wasmEncoder(
  value: Extract<CosmosMsgForEmpty, { wasm: unknown }>['wasm'],
  sender: string,
) {
  return match(value)
    .with({ execute: P.select() }, (execute) => ({
      typeUrl: MsgExecuteContract.typeUrl,
      value: {
        sender,
        contract: execute.contract_addr,
        funds: execute.funds,
        msg: fromBase64(execute.msg),
      },
    }))
    .with({ instantiate: P.select() }, (instantiate) => ({
      typeUrl: MsgInstantiateContract.typeUrl,
      value: {
        sender,
        admin: instantiate.admin ?? undefined,
        codeId: BigInt(instantiate.code_id),
        label: instantiate.label,
        msg: fromBase64(instantiate.msg),
        funds: instantiate.funds,
      },
    }))
    .with({ instantiate2: P.select() }, (instantiate2) => ({
      typeUrl: MsgInstantiateContract2.typeUrl,
      value: {
        sender,
        admin: instantiate2.admin ?? undefined,
        codeId: BigInt(instantiate2.code_id),
        label: instantiate2.label,
        msg: fromBase64(instantiate2.msg),
        funds: instantiate2.funds,
        salt: fromBase64(instantiate2.salt),
        // fixMsg: instantiate2.fix_msg,
      },
    }))
    .with({ migrate: P.select() }, (migrate) => ({
      typeUrl: MsgMigrateContract.typeUrl,
      value: {
        sender,
        contract: migrate.contract_addr,
        codeId: BigInt(migrate.new_code_id),
        msg: fromBase64(migrate.msg),
      },
    }))
    .with({ update_admin: P.select() }, (update_admin) => ({
      typeUrl: MsgUpdateAdmin.typeUrl,
      value: {
        sender,
        newAdmin: update_admin.admin,
        contract: update_admin.contract_addr,
      },
    }))
    .with({ clear_admin: P.select() }, (clear_admin) => ({
      typeUrl: MsgClearAdmin.typeUrl,
      value: {
        sender,
        contract: clear_admin.contract_addr,
      },
    }))
    .otherwise((value) => {
      throw new Error(`Unsupported wasm message type: ${value}`)
    })
}

function bankEncoder(
  value: Extract<CosmosMsgForEmpty, { bank: unknown }>['bank'],
  sender: string,
) {
  return match(value)
    .with({ send: P.select() }, (send) => ({
      typeUrl: '/cosmos.bank.v1beta1.MsgSend',
      value: {
        fromAddress: sender,
        toAddress: send.to_address,
        amount: send.amount,
      },
    }))
    .otherwise((value) => {
      throw new Error(`Unsupported bank message type: ${value}`)
    })
}
