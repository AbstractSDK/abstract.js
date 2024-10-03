import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../../../codegen/abstract'
import { getAccountQueryClientFromApi } from './get-account-query-client-from-api'

export type GetModuleAddressParameters = {
  accountId: VersionControlTypes.AccountId
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
  const AccountQueryClient = await getAccountQueryClientFromApi({
    accountId,
    cosmWasmClient,
    apiUrl,
  })
  const { modules } = await AccountQueryClient.moduleAddresses({ ids: [id] })

  return modules[0]?.[1] ?? null
}
