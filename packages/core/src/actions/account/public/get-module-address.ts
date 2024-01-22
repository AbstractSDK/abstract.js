import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../../../codegen/abstract'
import { WithArgs } from '../../../types/with-args'
import { getManagerQueryClientFromApi } from './get-manager-query-client-from-api'

export type GetModuleAddressParameters = WithArgs<{
  accountId: VersionControlTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
  id: string
}>

export async function getModuleAddress({
  args: { accountId, cosmWasmClient, apiUrl, id },
}: GetModuleAddressParameters) {
  const managerQueryClient = await getManagerQueryClientFromApi({
    args: {
      accountId,
      cosmWasmClient,
      apiUrl,
    },
  })
  const { modules } = await managerQueryClient.moduleAddresses({ ids: [id] })

  return modules[0]?.[1] ?? null
}
