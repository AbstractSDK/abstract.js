import {
  AccountExecuteMsgBuilder,
  AccountTypes,
} from '../../../codegen/abstract'
import { ModuleType } from '../../../codegen/gql/graphql'
import { MaybeArray } from '../../../types/utils'
import { executeOnModule } from './execute-on-module'
import { BaseAccountWalletParameters } from './types'

import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { abstractModuleId } from '../../../utils/modules/abstract-module-id'
import { CommonModuleNames } from '../../public/types'
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
  return executeOnModule({
    accountId,
    signingCosmWasmClient,
    apiUrl,
    sender,
    moduleId: abstractModuleId(CommonModuleNames.PROXY),
    moduleType: ModuleType.AccountBase,
    moduleMsg: AccountExecuteMsgBuilder.moduleAction({
      msgs: Array.isArray(msgs) ? msgs : [msgs],
    }),
    fee,
    memo,
  })
}
