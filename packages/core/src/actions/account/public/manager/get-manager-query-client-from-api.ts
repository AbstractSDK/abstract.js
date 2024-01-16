import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getManagerQueryClient } from 'src/actions/public/manager/get-manager-query-client'
import { VersionControlTypes } from 'src/codegen/abstract'
import { getAccountBaseAddressesFromApi } from '../version-control/get-account-base-addresses-from-api'

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

  return getManagerQueryClient(cosmWasmClient, managerAddress)
}
