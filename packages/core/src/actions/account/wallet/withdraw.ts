import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { Asset, encodeAssetsProxyTransferMsgs } from '../../../utils/assets'
import { getAccountBaseAddressesFromApi } from '../public/get-account-base-addresses-from-api'
import { execute } from './execute'
import { BaseAccountWalletParameters } from './types'

export type WithdrawParameters = WithCosmWasmSignOptions<
  BaseAccountWalletParameters & {
    assets: Asset[]
    recipient: string
  }
>

export async function withdraw({
  fee,
  memo,
  accountId,
  signingCosmWasmClient,
  apiUrl,
  sender,
  assets,
  recipient,
}: WithdrawParameters) {
  const { proxyAddress } = await getAccountBaseAddressesFromApi({
    accountId,
    cosmWasmClient: signingCosmWasmClient,
    apiUrl,
  })

  const transferMsgs = encodeAssetsProxyTransferMsgs(
    assets,
    proxyAddress,
    recipient,
  )

  return execute({
    accountId,
    signingCosmWasmClient,
    apiUrl,
    sender,
    msgs: transferMsgs,
    fee,
    memo,
  })
}
