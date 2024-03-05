import { IbcClientTypes, ManagerTypes } from '../../../codegen/abstract'
import { ModuleType } from '../../../codegen/gql/graphql'
import { WithArgsAndCosmWasmSignOptions } from '../../../types/with-args'
import { encodeModuleMsg } from '../../../utils/modules/encode-module-msg'
import { executeOnRemote } from './execute-on-remote'
import { BaseWalletParameters } from './types'

type Base64EncodedJson = string

export type ExecuteOnRemoteModuleParameters = Omit<
  WithArgsAndCosmWasmSignOptions<
    BaseWalletParameters & {
      hostChainName: string
      moduleId: string
      moduleType?: ModuleType
      moduleMsg: Record<string, unknown> | Base64EncodedJson
      callbackInfo?: IbcClientTypes.CallbackInfo
    }
  >,
  'funds'
>

/**
 * Execute a message on a remote module as the admin of the Account. Must be called by the owner.
 * @param accountId
 * @param signingCosmWasmClient
 * @param apiUrl
 * @param sender
 * @param moduleId
 * @param moduleType
 * @param msg
 * @param hostChainName
 * @param callbackInfo
 * @param fee
 * @param memo
 * @todo: ensure that remote module exists and is valid
 */
export async function executeOnRemoteModule({
  args: {
    accountId,
    signingCosmWasmClient,
    apiUrl,
    sender,
    moduleId,
    moduleType,
    moduleMsg,
    hostChainName,
    callbackInfo,
  },
  fee,
  memo,
}: ExecuteOnRemoteModuleParameters) {
  const managerMsg: ManagerTypes.ExecuteMsg = {
    exec_on_module: {
      module_id: moduleId,
      exec_msg: encodeModuleMsg(moduleMsg, moduleType),
    },
  }

  return executeOnRemote({
    args: {
      accountId,
      signingCosmWasmClient,
      apiUrl,
      sender,
      managerMsg,
      hostChainName,
      callbackInfo,
    },
    fee,
    memo,
  })
}
