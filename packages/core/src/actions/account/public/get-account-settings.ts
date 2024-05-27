import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { CommonModuleNames } from '../../../actions/public/types'
import { VersionControlTypes } from '../../../codegen/abstract'
import { getManagerQueryClientFromApi } from './get-manager-query-client-from-api'

export type GetAccountSettingsParameters = {
  accountId: VersionControlTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}

export async function getAccountSettings({
  accountId,
  cosmWasmClient,
  apiUrl,
}: GetAccountSettingsParameters) {
  const managerClient = await getManagerQueryClientFromApi({
    accountId,
    cosmWasmClient,
    apiUrl,
  })

  let cursor: string | undefined
  do {
    const fetchedModules = await managerClient.moduleInfos({
      limit: 20,
      startAfter: cursor,
    })
    if (fetchedModules.module_infos.length === 0) break
    for (const moduleInfo of fetchedModules.module_infos)
      if (moduleInfo.id === `abstract:${CommonModuleNames.IBC_CLIENT}`)
        return { ibcEnabled: true }
    cursor =
      fetchedModules.module_infos[fetchedModules.module_infos.length - 1]?.id
  } while (cursor !== undefined)
  return { ibcEnabled: false }
}
