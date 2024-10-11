import { abstractModuleId } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { CommonModuleNames } from '../../../actions/public/types'
import { RegistryTypes } from '../../../codegen/abstract'
import { getAccountQueryClientFromApi } from './get-account-query-client-from-api'

export type GetAccountSettingsParameters = {
  accountId: RegistryTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}

/**
 * @deprecated
 * @param accountId
 * @param cosmWasmClient
 * @param apiUrl
 */
export async function getAccountSettings({
  accountId,
  cosmWasmClient,
  apiUrl,
}: GetAccountSettingsParameters) {
  const accountClient = await getAccountQueryClientFromApi({
    accountId,
    cosmWasmClient,
    apiUrl,
  })

  let cursor: string | undefined
  do {
    const fetchedModules = await accountClient.moduleInfos({
      limit: 20,
      startAfter: cursor,
    })
    if (fetchedModules.module_infos.length === 0) break
    for (const moduleInfo of fetchedModules.module_infos)
      if (moduleInfo.id === abstractModuleId(CommonModuleNames.IBC_CLIENT))
        return { ibcEnabled: true }
    cursor =
      fetchedModules.module_infos[fetchedModules.module_infos.length - 1]?.id
  } while (cursor !== undefined)
  return { ibcEnabled: false }
}
