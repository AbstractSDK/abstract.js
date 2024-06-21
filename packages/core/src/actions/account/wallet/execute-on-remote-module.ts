import { ManagerTypes } from '../../../codegen/abstract'
import { ModuleType } from '../../../codegen/gql/graphql'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import {
  encodeModuleMsg,
  executeOnModuleMsg,
} from '../../../utils/modules/encode-module-msg'
import { executeOnRemoteManager } from './execute-on-remote-manager'
import { BaseWalletParameters } from './types'

type Base64EncodedJson = string

export type ExecuteOnRemoteModuleParameters = Omit<
  WithCosmWasmSignOptions<
    BaseWalletParameters & {
      hostChainName: string
      moduleId: string
      moduleType?: ModuleType
      moduleMsg: Record<string, unknown> | Base64EncodedJson
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
 * @param fee
 * @param memo
 * @todo: ensure that remote module exists and is valid
 */
export async function executeOnRemoteModule({
  accountId,
  signingCosmWasmClient,
  apiUrl,
  sender,
  moduleId,
  moduleType,
  moduleMsg,
  hostChainName,
  fee,
  memo,
}: ExecuteOnRemoteModuleParameters) {
  const managerMsg: ManagerTypes.ExecuteMsg = executeOnModuleMsg(
    moduleId,
    moduleMsg,
    moduleType,
  )

  return executeOnRemoteManager({
    accountId,
    signingCosmWasmClient,
    apiUrl,
    sender,
    managerMsg,
    hostChainName,
    fee,
    memo,
  })
}
