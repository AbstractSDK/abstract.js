import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../../../codegen/abstract'
import { SliceFirstTwo } from '../../../types/utils'
import { Asset, encodeAssetsProxyTransferMsgs } from '../../../utils/assets'
import { getAccountBaseAddressesFromApi } from '../public/get-account-base-addresses-from-api'
import { execute } from './execute'

export async function withdraw(
  accountId: VersionControlTypes.AccountId,
  signingCosmWasmClient: SigningCosmWasmClient,
  apiUrl: string,
  assets: Asset[],
  sender: string,
  recipient: string,
  ...rest: SliceFirstTwo<
    Parameters<typeof SigningCosmWasmClient.prototype.signAndBroadcast>
  >
) {
  const { proxyAddress } = await getAccountBaseAddressesFromApi(
    accountId,
    signingCosmWasmClient,
    apiUrl,
  )

  const transferMsgs = encodeAssetsProxyTransferMsgs(
    assets,
    proxyAddress,
    recipient,
  )

  return execute(
    accountId,
    signingCosmWasmClient,
    apiUrl,
    transferMsgs,
    sender,
    ...rest,
  )
}
