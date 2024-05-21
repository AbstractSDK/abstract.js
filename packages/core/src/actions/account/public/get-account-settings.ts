import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { CommonModuleNames } from 'src/actions/public/types'
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

  let page = 0
  while (true) {
    const fetchedModules = await managerClient.moduleInfos({
      limit: 20,
      startAfter: `${page}`,
    })
    if (fetchedModules.module_infos.length === 0) break
    for (const moduleInfo of fetchedModules.module_infos)
      if (moduleInfo.id === CommonModuleNames.IBC_CLIENT)
        return { ibcEnabled: true }
    page += 20
  }
  return { ibcEnabled: false }
}
