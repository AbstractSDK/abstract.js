import { AccountTypes } from '../../../codegen/abstract'
import { ModuleType } from '../../../codegen/gql/graphql'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import {
  encodeModuleMsg,
  executeOnModuleMsg,
} from '../../../utils/modules/encode-module-msg'
import { executeOnRemoteAccount } from './execute-on-remote-account'
import { BaseAccountWalletParameters } from './types'

type Base64EncodedJson = string

export type ExecuteOnRemoteModuleParameters = Omit<
  WithCosmWasmSignOptions<
    BaseAccountWalletParameters & {
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
  const accountMsg: AccountTypes.ExecuteMsg = executeOnModuleMsg(
    moduleId,
    moduleMsg,
    moduleType,
  )

  return executeOnRemoteAccount({
    accountId,
    signingCosmWasmClient,
    apiUrl,
    sender,
    accountMsg,
    hostChainName,
    fee,
    memo,
  })
}
