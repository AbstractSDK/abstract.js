import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import {
  ManagerMsgComposer,
  VersionControlTypes,
} from '../../../codegen/abstract'
import { ModuleType } from '../../../codegen/gql/graphql'
import { WithArgsAndCosmWasmSignOptions } from '../../../types/with-args'
import { jsonToBinary } from '../../../utils/encoding'
import { wrapModuleExecMsg } from '../../../utils/modules/wrap-module-exec-msg'
import { getAccountBaseAddressesFromApi } from '../public/get-account-base-addresses-from-api'

type Base64EncodedJson = string

export type ExecuteParameters = Omit<
  WithArgsAndCosmWasmSignOptions<{
    accountId: VersionControlTypes.AccountId
    signingCosmWasmClient: SigningCosmWasmClient
    apiUrl: string
    sender: string
    moduleId: string
    moduleType?: ModuleType
    msg: Record<string, unknown> | Base64EncodedJson
  }>,
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
    msg,
  },
  fee,
  memo,
}: ExecuteParameters) {
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
        execMsg:
          typeof msg === 'string'
            ? msg
            : jsonToBinary(wrapModuleExecMsg(msg, moduleType)),
      }),
    ],
    fee,
    memo,
  )
}
