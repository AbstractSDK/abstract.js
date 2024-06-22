import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { Asset, encodeAssetsTransfersMsgs } from '../../../utils/assets'
import { getAccountBaseAddressesFromApi } from '../public/get-account-base-addresses-from-api'
import { BaseAccountWalletParameters } from './types'

export type DepositParameters = Omit<
  WithCosmWasmSignOptions<
    BaseAccountWalletParameters & {
      assets: Asset[]
    }
  >,
  'funds'
>

export async function deposit({
  accountId,
  signingCosmWasmClient,
  apiUrl,
  sender,
  assets,
  fee,
  memo,
}: DepositParameters) {
  const { proxyAddress } = await getAccountBaseAddressesFromApi({
    accountId,
    cosmWasmClient: signingCosmWasmClient,
    apiUrl,
  })
  return signingCosmWasmClient.signAndBroadcast(
    sender,
    encodeAssetsTransfersMsgs(assets, sender, proxyAddress),
    fee,
    memo,
  )
}
