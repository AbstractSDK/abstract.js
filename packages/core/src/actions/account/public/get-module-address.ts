import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../../../codegen/abstract'
import { getManagerQueryClientFromApi } from './get-manager-query-client-from-api'

export async function getModuleAddress(
  accountId: VersionControlTypes.AccountId,
  cosmWasmClient: CosmWasmClient,
  apiUrl: string,
  id: string,
) {
  const managerQueryClient = await getManagerQueryClientFromApi(
    accountId,
    cosmWasmClient,
    apiUrl,
  )
  const { modules } = await managerQueryClient.moduleAddresses({ ids: [id] })

  return modules[0]?.[1] ?? null
}
