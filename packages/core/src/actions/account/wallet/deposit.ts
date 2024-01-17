import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from 'src/codegen/abstract'
import { SliceFirstTwo } from 'src/types/utils'
import { Asset, encodeAssetsTransfersMsgs } from 'src/utils/assets'
import { getAccountBaseAddressesFromApi } from '../public/version-control/get-account-base-addresses-from-api'

export async function deposit(
  accountId: VersionControlTypes.AccountId,
  signingCosmWasmClient: SigningCosmWasmClient,
  apiUrl: string,
  assets: Asset[],
  sender: string,
  ...rest: SliceFirstTwo<
    Parameters<typeof SigningCosmWasmClient.prototype.signAndBroadcast>
  >
) {
  const { proxyAddress } = await getAccountBaseAddressesFromApi(
    accountId,
    signingCosmWasmClient,
    apiUrl,
  )
  return signingCosmWasmClient.signAndBroadcast(
    sender,
    encodeAssetsTransfersMsgs(assets, sender, proxyAddress),
    ...rest,
  )
}
