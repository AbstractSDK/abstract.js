import { AccountMsgComposer } from '../../../codegen/abstract'
import { ModuleType } from '../../../codegen/gql/graphql'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { encodeModuleMsg } from '../../../utils/modules/encode-module-msg'
import { getAccountAddressFromApi } from '../public/get-account-address-from-api'
import { BaseAccountWalletParameters } from './types'

type Base64EncodedJson = string

export type ExecuteOnModuleParameters = Omit<
  WithCosmWasmSignOptions<
    BaseAccountWalletParameters & {
      moduleId: string
      moduleType?: ModuleType
      moduleMsg: Record<string, unknown> | Base64EncodedJson
    }
  >,
  'funds'
>

/**
 * Execute a message on a module as the admin of the Account. Must be called by the owner.
 * @param accountId
 * @param signingCosmWasmClient
 * @param apiUrl
 * @param sender
 * @param moduleId - The ID of the module on which the message should be executed.
 * @param moduleType - The type of the module.
 * @param msg - The execution message.
 * @param fee
 * @param memo
 */
export async function executeOnModule({
  accountId,
  signingCosmWasmClient,
  apiUrl,
  sender,
  moduleId,
  moduleType,
  moduleMsg,
  fee,
  memo,
}: ExecuteOnModuleParameters) {
  const { account } = await getAccountAddressFromApi({
    accountId,
    cosmWasmClient: signingCosmWasmClient,
    apiUrl,
  })

  return signingCosmWasmClient.signAndBroadcast(
    sender,
    [
      new AccountMsgComposer(sender, account).executeOnModule({
        moduleId: moduleId,
        execMsg: encodeModuleMsg(moduleMsg, moduleType),
      }),
    ],
    fee,
    memo,
  )
}
