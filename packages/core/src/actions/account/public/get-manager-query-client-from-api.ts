import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../../../codegen/abstract'
import { getManagerQueryClient } from '../../public/get-manager-query-client'
import { getAccountBaseAddressesFromApi } from './get-account-base-addresses-from-api'

export type GetManagerQueryClientFromApiParameters = {
  accountId: VersionControlTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}
export async function getManagerQueryClientFromApi({
  accountId,
  cosmWasmClient,
  apiUrl,
}: GetManagerQueryClientFromApiParameters) {
  const { managerAddress } = await getAccountBaseAddressesFromApi({
    accountId,
    cosmWasmClient,
    apiUrl,
  })

  return getManagerQueryClient({ cosmWasmClient, managerAddress })
}
