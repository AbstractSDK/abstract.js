import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { RegistryTypes } from '../../../codegen/abstract'
import { getAccountQueryClientFromApi } from './get-account-query-client-from-api'

export type GetOwnerParameters = {
  accountId: RegistryTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}

export async function getOwner({
  accountId,
  cosmWasmClient,
  apiUrl,
}: GetOwnerParameters) {
  const accountQueryClient = await getAccountQueryClientFromApi({
    accountId,
    cosmWasmClient,
    apiUrl,
  })
  return accountQueryClient
    .ownership()
    .then((res) => res.owner ?? null)
    .catch((error) => {
      console.error('Failed to fetch the owner:', error)
      throw error
    })
}
