import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { RegistryTypes } from '../../../codegen/abstract'
import { getAccountQueryClientFromApi } from './get-account-query-client-from-api'

export type GetModuleVersionParameters = {
  accountId: RegistryTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
  id: string
}

export async function getModuleVersion({
  accountId,
  cosmWasmClient,
  apiUrl,
  id,
}: GetModuleVersionParameters) {
  const accountQueryClient = await getAccountQueryClientFromApi({
    accountId,
    cosmWasmClient,
    apiUrl,
  })
  const { versions } = await accountQueryClient.moduleVersions({ ids: [id] })

  return versions[0] ?? null
}
