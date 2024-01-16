import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from 'src/codegen/abstract'
import { getManagerQueryClientFromApi } from './get-manager-query-client-from-api'

export async function getOwner(
  accountId: VersionControlTypes.AccountId,
  cosmWasmClient: CosmWasmClient,
  apiUrl: string,
) {
  const managerQueryClient = await getManagerQueryClientFromApi(
    accountId,
    cosmWasmClient,
    apiUrl,
  )
  return managerQueryClient
    .ownership()
    .then((res) => res.owner ?? null)
    .catch((error) => {
      console.error('Failed to fetch the owner:', error)
      throw error
    })
}
