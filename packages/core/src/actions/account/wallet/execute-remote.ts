import {
  AccountExecuteMsgBuilder,
  AccountTypes,
} from '../../../codegen/abstract'
import { ModuleType } from '../../../codegen/gql/graphql'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { MaybeArray } from '../../../types/utils'
import { abstractModuleId } from '../../../utils/modules/abstract-module-id'
import { CommonModuleNames } from '../../public/types'
import { executeOnRemoteAccount } from './execute-on-remote-account'
import { executeOnRemoteModule } from './execute-on-remote-module'
import { BaseAccountWalletParameters } from './types'

export type ExecuteOnRemoteParameters = Omit<
  WithCosmWasmSignOptions<
    BaseAccountWalletParameters & {
      hostChainName: string
      msgs: MaybeArray<AccountTypes.CosmosMsgForEmpty>
    }
  >,
  'funds'
>

/**
 * Execute a message on a remote account as the admin of the Account. Must be called by the owner.
 * This message will execute on the proxy of the account.
 * @param accountId
 * @param signingCosmWasmClient
 * @param apiUrl
 * @param sender
 * @param hostChainName
 * @param msgs
 * @param fee
 * @param memo
 */
export async function executeRemote({
  accountId,
  signingCosmWasmClient,
  apiUrl,
  sender,
  msgs,
  hostChainName,
  fee,
  memo,
}: ExecuteOnRemoteParameters) {
  const accountMsg: AccountTypes.ExecuteMsg = AccountExecuteMsgBuilder.execute({
    msgs: Array.isArray(msgs) ? msgs : [msgs],
  })

  return executeOnRemoteAccount({
    accountId,
    signingCosmWasmClient,
    apiUrl,
    sender,
    accountMsg: accountMsg,
    hostChainName,
    fee,
    memo,
  })
}
