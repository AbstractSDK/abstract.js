import {
  AccountExecuteMsgBuilder,
  AccountMsgComposer,
  AccountTypes,
} from '../../../codegen/abstract'
import { ModuleType } from '../../../codegen/gql/graphql'
import { MaybeArray } from '../../../types/utils'
import { executeOnModule } from './execute-on-module'
import { BaseAccountWalletParameters } from './types'

import { AccountId } from '@abstract-money/core'
import { toUtf8 } from '@cosmjs/encoding'
import { MsgExecuteContract } from 'cosmjs-types/cosmwasm/wasm/v1/tx'
import { CosmosMsgForEmpty } from '../../../codegen/abstract/cosmwasm-codegen/Account.types'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { abstractModuleId } from '../../../utils/modules/abstract-module-id'
import { encodeModuleMsg } from '../../../utils/modules/encode-module-msg'
import { CommonModuleNames } from '../../public/types'
import { getAccountAddressFromApi } from '../public/get-account-address-from-api'
export type ExecuteParameters = Omit<
  WithCosmWasmSignOptions<
    BaseAccountWalletParameters & {
      msgs: MaybeArray<AccountTypes.CosmosMsgForEmpty>
    }
  >,
  'funds'
>

/**
 * Execute a message directly as the Account. Must be called by the owner. Encodes the message and sends it to the chain.
 * @param accountId
 * @param signingCosmWasmClient
 * @param apiUrl
 * @param sender
 * @param msgs
 * @param fee
 * @param memo
 */
export async function execute({
  accountId,
  signingCosmWasmClient,
  apiUrl,
  sender,
  msgs,
  fee,
  memo,
}: ExecuteParameters) {
  const { account } = await getAccountAddressFromApi({
    accountId,
    cosmWasmClient: signingCosmWasmClient,
    apiUrl,
  })

  // TODO: use msg-client
  const _msg: { execute: { msgs: CosmosMsgForEmpty[] } } = {
    execute: {
      msgs: Array.isArray(msgs) ? msgs : [msgs],
    },
  }

  const encoded = {
    typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
    value: MsgExecuteContract.fromPartial({
      sender: sender,
      contract: account,
      msg: toUtf8(JSON.stringify(_msg)),
      funds: [],
    }),
  }

  return signingCosmWasmClient.signAndBroadcast(sender, [encoded], fee, memo)
}
