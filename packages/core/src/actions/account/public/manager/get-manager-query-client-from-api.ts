import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { ManagerQueryClient, VersionControlTypes } from 'src/codegen/abstract'
import { getAccountBaseAddressesFromApi } from '../get-account-base-addresses-from-api'

export async function getManagerQueryClientFromApi(
  accountId: VersionControlTypes.AccountId,
  cosmWasmClient: CosmWasmClient,
  apiUrl: string,
) {
  const { managerAddress } = await getAccountBaseAddressesFromApi(
    accountId,
    cosmWasmClient,
    apiUrl,
  )

  return new ManagerQueryClient(cosmWasmClient, managerAddress)
}
