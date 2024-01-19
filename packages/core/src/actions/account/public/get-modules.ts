import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { WithArgs } from 'src/types/with-args'
import {
  ManagerQueryClient,
  VersionControlTypes,
} from '../../../codegen/abstract'
import { getManagerQueryClientFromApi } from './get-manager-query-client-from-api'

export type GetModulesParameters = WithArgs<
  {
    accountId: VersionControlTypes.AccountId
    cosmWasmClient: CosmWasmClient
    apiUrl: string
  } & Parameters<typeof ManagerQueryClient.prototype.moduleInfos>[0]
>

export async function getModules({
  args: { accountId, cosmWasmClient, apiUrl, ...params },
}: GetModulesParameters) {
  const managerQueryClient = await getManagerQueryClientFromApi({
    args: {
      accountId,
      cosmWasmClient,
      apiUrl,
    },
  })
  const { module_infos: modules } = await managerQueryClient.moduleInfos(params)

  return modules
}
