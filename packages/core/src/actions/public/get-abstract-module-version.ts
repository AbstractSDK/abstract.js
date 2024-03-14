import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { VersionControlTypes } from '../../codegen/abstract'
import { versionControlModuleToVersion } from '../../utils/version-control/version-control-module-to-version'
import { getVersionControlQueryClientFromApi } from './get-version-control-query-client-from-api'

export type GetAbstractModuleVersion = {
  moduleName: string
  cosmWasmClient: CosmWasmClient
  version?: string
  apiUrl: string
}

export async function getAbstractModuleVersion({
  moduleName,
  cosmWasmClient,
  version,
  apiUrl,
}: GetAbstractModuleVersion) {
  const versionControlQueryClient = await getVersionControlQueryClientFromApi({
    cosmWasmClient,
    apiUrl,
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
