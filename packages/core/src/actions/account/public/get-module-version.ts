import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../../../codegen/abstract'
import { getManagerQueryClientFromApi } from './get-manager-query-client-from-api'

export type GetModuleVersionParameters = {
  accountId: VersionControlTypes.AccountId
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
  const managerQueryClient = await getManagerQueryClientFromApi({
    accountId,
    cosmWasmClient,
    apiUrl,
  })
  const { versions } = await managerQueryClient.moduleVersions({ ids: [id] })

  return versions[0] ?? null
}
