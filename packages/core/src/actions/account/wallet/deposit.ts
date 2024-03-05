import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../../../codegen/abstract'
import { WithArgsAndCosmWasmSignOptions } from '../../../types/with-args'
import { Asset, encodeAssetsTransfersMsgs } from '../../../utils/assets'
import { getAccountBaseAddressesFromApi } from '../public/get-account-base-addresses-from-api'
import { BaseWalletParameters } from './types'

export type DepositParameters = Omit<
  WithArgsAndCosmWasmSignOptions<
    BaseWalletParameters & {
      assets: Asset[]
    }
  >,
  'funds'
>

export async function deposit({
  args: { accountId, signingCosmWasmClient, apiUrl, sender, assets },
  fee,
  memo,
}: DepositParameters) {
  const { proxyAddress } = await getAccountBaseAddressesFromApi({
    args: {
      accountId,
      cosmWasmClient: signingCosmWasmClient,
      apiUrl,
    },
  })
  return signingCosmWasmClient.signAndBroadcast(
    sender,
    encodeAssetsTransfersMsgs(assets, sender, proxyAddress),
    fee,
    memo,
  )
}
