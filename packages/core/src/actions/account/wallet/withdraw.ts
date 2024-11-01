import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { Asset, encodeAssetsAccountTransferMsgs } from '../../../utils/assets'
import { getAccountAddressFromApi } from '../public/get-account-address-from-api'
import { execute } from './execute'
import { BaseAccountWalletParameters } from './types'

export type SendFundsParameters = WithCosmWasmSignOptions<
  BaseAccountWalletParameters & {
    assets: Asset[]
    recipient: string
  }
>

/**
 * @deprecated use `SendFundsParameters` instead
 */
export type WithdrawParameters = SendFundsParameters

/**
 * Send funds or withdraw funds from the account.
 * @param fee
 * @param memo
 * @param accountId
 * @param signingCosmWasmClient
 * @param apiUrl
 * @param sender
 * @param assets
 * @param recipient
 * @param funds - funds included from the WALLET.
 */
export async function sendFunds({
  fee,
  memo,
  accountId,
  signingCosmWasmClient,
  apiUrl,
  sender,
  assets,
  recipient,
  funds,
}: SendFundsParameters) {
  const account = await getAccountAddressFromApi({
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
    funds,
  })
}

/**
 * @deprecated use `sendFunds` instead
 */
export const withdraw = sendFunds
