import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../../../codegen/abstract'
import { SliceFirstTwo } from '../../../types/utils'
import { WithArgsAndCosmWasmSignOptions } from '../../../types/with-args'
import { Asset, encodeAssetsProxyTransferMsgs } from '../../../utils/assets'
import { getAccountBaseAddressesFromApi } from '../public/get-account-base-addresses-from-api'
import { execute } from './execute'
import { BaseWalletParameters } from './types'

export type WithdrawParameters = WithArgsAndCosmWasmSignOptions<
  BaseWalletParameters & {
    assets: Asset[]
    recipient: string
  }
>

export async function withdraw({
  fee,
  memo,
  args: { accountId, signingCosmWasmClient, apiUrl, sender, assets, recipient },
}: WithdrawParameters) {
  const { proxyAddress } = await getAccountBaseAddressesFromApi({
    args: {
      accountId,
      cosmWasmClient: signingCosmWasmClient,
      apiUrl,
    },
  })

  const transferMsgs = encodeAssetsProxyTransferMsgs(
    assets,
    proxyAddress,
    recipient,
  )

  return execute({
    args: {
      accountId,
      signingCosmWasmClient,
      apiUrl,
      sender,
      msgs: transferMsgs,
    },
    fee,
    memo,
  })
}
