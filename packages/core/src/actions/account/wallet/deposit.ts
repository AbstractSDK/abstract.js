import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { Asset, encodeAssetsTransfersMsgs } from '../../../utils/assets'
import { getAccountBaseAddressesFromApi } from '../public/get-account-base-addresses-from-api'

export type DepositParameters = Omit<
  WithCosmWasmSignOptions<{
    accountId: VersionControlTypes.AccountId
    signingCosmWasmClient: SigningCosmWasmClient
    apiUrl: string
    sender: string
    assets: Asset[]
  }>,
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
