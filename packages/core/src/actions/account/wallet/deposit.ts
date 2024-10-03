import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { Asset, encodeAssetsTransfersMsgs } from '../../../utils/assets'
import { getAccountAddressFromApi } from '../public/get-account-address-from-api'
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
  const { account } = await getAccountAddressFromApi({
    accountId,
    cosmWasmClient: signingCosmWasmClient,
    apiUrl,
  })
  return signingCosmWasmClient.signAndBroadcast(
    sender,
    encodeAssetsTransfersMsgs(assets, sender, account),
    fee,
    memo,
  )
}
