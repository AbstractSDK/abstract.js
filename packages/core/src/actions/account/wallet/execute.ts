import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import {
  ManagerMsgComposer,
  ProxyExecuteMsgBuilder,
  ProxyTypes,
  VersionControlTypes,
} from 'src/codegen/abstract'
import { MaybeArray, SliceFirstTwo } from 'src/types/utils'
import { jsonToBinary } from 'src/utils/encoding'
import { getAccountBaseAddressesFromApi } from '../public/version-control/get-account-base-addresses-from-api'

export async function execute(
  accountId: VersionControlTypes.AccountId,
  signingCosmWasmClient: SigningCosmWasmClient,
  apiUrl: string,
  msgs: MaybeArray<ProxyTypes.CosmosMsgForEmpty>,
  sender: string,
  ...rest: SliceFirstTwo<
    Parameters<typeof SigningCosmWasmClient.prototype.signAndBroadcast>
  >
) {
  const { managerAddress } = await getAccountBaseAddressesFromApi(
    accountId,
    signingCosmWasmClient,
    apiUrl,
  )
  return signingCosmWasmClient.signAndBroadcast(
    sender,
    [
      new ManagerMsgComposer(sender, managerAddress).execOnModule({
        moduleId: 'abstract:proxy',
        execMsg: jsonToBinary(
          ProxyExecuteMsgBuilder.moduleAction({
            msgs: Array.isArray(msgs) ? msgs : [msgs],
          }),
        ),
      }),
    ],
    ...rest,
  )
}
