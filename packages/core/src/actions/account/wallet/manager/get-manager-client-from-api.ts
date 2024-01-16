import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getManagerClient } from 'src/actions/wallet/manager/get-manager-client'
import { VersionControlTypes } from 'src/codegen/abstract'
import { getAccountBaseAddressesFromApi } from '../../public/version-control/get-account-base-addresses-from-api'

export async function getManagerClientFromApi(
  accountId: VersionControlTypes.AccountId,
  signingCosmWasmClient: SigningCosmWasmClient,
  sender: string,
  apiUrl: string,
) {
  const { managerAddress } = await getAccountBaseAddressesFromApi(
    accountId,
    signingCosmWasmClient,
    apiUrl,
  )

  return getManagerClient(signingCosmWasmClient, sender, managerAddress)
}
