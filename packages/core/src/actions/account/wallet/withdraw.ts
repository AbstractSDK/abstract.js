import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { Asset, encodeAssetsAccountTransferMsgs } from '../../../utils/assets'
import { getAccountAddressFromApi } from '../public/get-account-address-from-api'
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
  const { account } = await getAccountAddressFromApi({
    accountId,
    cosmWasmClient: signingCosmWasmClient,
    apiUrl,
  })

  const transferMsgs = encodeAssetsAccountTransferMsgs(
    assets,
    account,
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
