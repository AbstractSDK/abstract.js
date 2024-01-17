import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../../../codegen/abstract'
import { getManagerClient } from '../../wallet/get-manager-client'
import { getAccountBaseAddressesFromApi } from '../public/get-account-base-addresses-from-api'

export async function getManagerClientFromApi(
  accountId: VersionControlTypes.AccountId,
  signingCosmWasmClient: SigningCosmWasmClient,
  apiUrl: string,
  sender: string,
) {
  const { managerAddress } = await getAccountBaseAddressesFromApi(
    accountId,
    signingCosmWasmClient,
    apiUrl,
  )

  return getManagerClient(signingCosmWasmClient, sender, managerAddress)
}
