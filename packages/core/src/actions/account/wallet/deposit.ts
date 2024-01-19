import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { WithArgsAndCosmWasmSignOptions } from 'src/types/with-args'
import { VersionControlTypes } from '../../../codegen/abstract'
import { Asset, encodeAssetsTransfersMsgs } from '../../../utils/assets'
import { getAccountBaseAddressesFromApi } from '../public/get-account-base-addresses-from-api'

export type DepositParameters = Omit<
  WithArgsAndCosmWasmSignOptions<{
    accountId: VersionControlTypes.AccountId
    signingCosmWasmClient: SigningCosmWasmClient
    apiUrl: string
    sender: string
    assets: Asset[]
  }>,
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
