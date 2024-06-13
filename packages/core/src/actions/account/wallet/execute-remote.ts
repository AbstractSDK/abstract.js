import {
  ManagerTypes,
  ProxyExecuteMsgBuilder,
  ProxyTypes,
} from '../../../codegen/abstract'
import { ModuleType } from '../../../codegen/gql/graphql'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { MaybeArray } from '../../../types/utils'
import { abstractModuleId } from '../../../utils/modules/abstract-module-id'
import { encodeModuleMsg } from '../../../utils/modules/encode-module-msg'
import { CommonModuleNames } from '../../public/types'
import { executeOnRemoteManager } from './execute-on-remote-manager'
import { executeOnRemoteModule } from './execute-on-remote-module'
import { BaseWalletParameters } from './types'

export type ExecuteOnRemoteParameters = Omit<
  WithCosmWasmSignOptions<
    BaseWalletParameters & {
      hostChainName: string
      msgs: MaybeArray<ProxyTypes.CosmosMsgForEmpty>
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
  const proxyMsg: ProxyTypes.ExecuteMsg = ProxyExecuteMsgBuilder.moduleAction({
    msgs: Array.isArray(msgs) ? msgs : [msgs],
  })

  return executeOnRemoteModule({
    accountId,
    signingCosmWasmClient,
    apiUrl,
    sender,
    moduleId: abstractModuleId(CommonModuleNames.PROXY),
    moduleType: ModuleType.AccountBase,
    moduleMsg: proxyMsg,
    hostChainName,
    fee,
    memo,
  })
}
