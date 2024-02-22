import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { VersionControlTypes } from '../../codegen/abstract'
import { WithArgs } from '../../types/with-args'
import { versionControlModuleToVersion } from '../../utils/version-control/version-control-module-to-version'
import { getVersionControlQueryClientFromApi } from './get-version-control-query-client-from-api'

export enum CommonModuleNames {
  ACCOUNT_FACTORY = 'account-factory',
  MODULE_FACTORY = 'module-factory',
  ANS_HOST = 'ans-host',
}

export type GetAbstractModuleVersion = WithArgs<{
  moduleName: string
  cosmWasmClient: CosmWasmClient
  version?: string
  apiUrl: string
}>

export async function getAbstractModuleVersion({
  args: { moduleName, cosmWasmClient, version, apiUrl },
}: GetAbstractModuleVersion) {
  const versionControlQueryClient = await getVersionControlQueryClientFromApi({
    args: {
      cosmWasmClient,
      apiUrl,
    },
  })

  const [moduleVersion] = await versionControlQueryClient
    .modules({
      infos: [
        {
          name: moduleName,
          namespace: 'abstract',
          version: version ? { version } : 'latest',
        } satisfies VersionControlTypes.ModuleInfo,
      ],
    })
    .then(({ modules }) =>
      modules.map(({ module }) => versionControlModuleToVersion(module)),
    )

  if (!moduleVersion) {
    throw new Error(
      `Could not fetch address for module ${moduleName} version ${version} from registry ${versionControlQueryClient.contractAddress}`,
    )
  }

  return moduleVersion
}
