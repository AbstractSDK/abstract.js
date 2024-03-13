import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import {
  ManagerMsgComposer,
  ProxyExecuteMsgBuilder,
  ProxyTypes,
  VersionControlTypes,
} from '../../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { MaybeArray } from '../../../types/utils'
import { jsonToBinary } from '../../../utils/encoding'
import { getAccountBaseAddressesFromApi } from '../public/get-account-base-addresses-from-api'

export type ExecuteParameters = Omit<
  WithCosmWasmSignOptions<{
    accountId: VersionControlTypes.AccountId
    signingCosmWasmClient: SigningCosmWasmClient
    apiUrl: string
    sender: string
    msgs: MaybeArray<ProxyTypes.CosmosMsgForEmpty>
  }>,
  'funds'
>

export async function execute({
  accountId,
  signingCosmWasmClient,
  apiUrl,
  sender,
  msgs,
  fee,
  memo,
}: ExecuteParameters) {
  const { managerAddress } = await getAccountBaseAddressesFromApi({
    accountId,
    cosmWasmClient: signingCosmWasmClient,
    apiUrl,
  })
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
    fee,
    memo,
  )
}
