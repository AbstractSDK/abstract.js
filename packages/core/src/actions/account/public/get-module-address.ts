import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { RegistryTypes } from '../../../codegen/abstract'
import { getAccountQueryClientFromApi } from './get-account-query-client-from-api'

export type GetModuleAddressParameters = {
  accountId: RegistryTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
  id: string
}

export async function getModuleAddress({
  accountId,
  cosmWasmClient,
  apiUrl,
  id,
}: GetModuleAddressParameters) {
  const accountQueryClient = await getAccountQueryClientFromApi({
    accountId,
    cosmWasmClient,
    apiUrl,
  })
  const { modules } = await accountQueryClient.moduleAddresses({ ids: [id] })

  return modules[0]?.[1] ?? null
}
