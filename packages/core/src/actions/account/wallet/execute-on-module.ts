import { ManagerMsgComposer } from '../../../codegen/abstract'
import { ModuleType } from '../../../codegen/gql/graphql'
import { WithArgsAndCosmWasmSignOptions } from '../../../types/with-args'
import { encodeModuleMsg } from '../../../utils/modules/encode-module-msg'
import { getAccountBaseAddressesFromApi } from '../public/get-account-base-addresses-from-api'
import { BaseWalletParameters } from './types'

type Base64EncodedJson = string

export type ExecuteOnModuleParameters = Omit<
  WithArgsAndCosmWasmSignOptions<
    BaseWalletParameters & {
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
 * @param moduleId
 * @param moduleType
 * @param msg
 * @param fee
 * @param memo
 */
export async function executeOnModule({
  args: {
    accountId,
    signingCosmWasmClient,
    apiUrl,
    sender,
    moduleId,
    moduleType,
    moduleMsg,
  },
  fee,
  memo,
}: ExecuteOnModuleParameters) {
  const { managerAddress } = await getAccountBaseAddressesFromApi({
    args: {
      accountId,
      cosmWasmClient: signingCosmWasmClient,
      apiUrl,
    },
  })

  return signingCosmWasmClient.signAndBroadcast(
    sender,
    [
      new ManagerMsgComposer(sender, managerAddress).execOnModule({
        moduleId: moduleId,
        execMsg: encodeModuleMsg(moduleMsg, moduleType),
      }),
    ],
    fee,
    memo,
  )
}
