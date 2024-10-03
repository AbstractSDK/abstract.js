import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../../../codegen/abstract'
import { getAccountQueryClientFromApi } from './get-account-query-client-from-api'

export type GetOwnerParameters = {
  accountId: VersionControlTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}

export async function getOwner({
  accountId,
  cosmWasmClient,
  apiUrl,
}: GetOwnerParameters) {
  const managerQueryClient = await getAccountQueryClientFromApi({
    accountId,
    cosmWasmClient,
    apiUrl,
  })
  return managerQueryClient
    .ownership()
    .then((res) => res.owner ?? null)
    .catch((error) => {
      console.error('Failed to fetch the owner:', error)
      throw error
    })
}
