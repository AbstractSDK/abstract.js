import { ProxyExecuteMsgBuilder, ProxyTypes } from '../../../codegen/abstract'
import { ModuleType } from '../../../codegen/gql/graphql'
import { MaybeArray } from '../../../types/utils'
import { executeOnModule } from './execute-on-module'
import { BaseWalletParameters } from './types'

import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { CommonModuleNames } from '../../public/types'
export type ExecuteParameters = Omit<
  WithCosmWasmSignOptions<
    BaseWalletParameters & {
      msgs: MaybeArray<ProxyTypes.CosmosMsgForEmpty>
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
  return executeOnModule({
    accountId,
    signingCosmWasmClient,
    apiUrl,
    sender,
    moduleId: CommonModuleNames.PROXY,
    moduleType: ModuleType.AccountBase,
    moduleMsg: ProxyExecuteMsgBuilder.moduleAction({
      msgs: Array.isArray(msgs) ? msgs : [msgs],
    }),
    fee,
    memo,
  })
}
