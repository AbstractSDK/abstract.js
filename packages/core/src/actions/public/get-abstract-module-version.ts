import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { RegistryTypes } from '../../codegen/abstract'
import { registryModuleToVersion } from '../../utils/registry/registry-module-to-version'
import { getRegistryQueryClientFromApi } from './get-registry-query-client-from-api'

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
  const registryQueryClient = await getRegistryQueryClientFromApi({
    cosmWasmClient,
    apiUrl,
  })

  const [moduleVersion] = await registryQueryClient
    .modules({
      infos: [
        {
          name: moduleName,
          namespace: 'abstract',
          version: version ? { version } : 'latest',
        } satisfies RegistryTypes.ModuleInfo,
      ],
    })
    .then(({ modules }) =>
      modules.map(({ module }) => registryModuleToVersion(module)),
    )

  if (!moduleVersion) {
    throw new Error(
      `Could not fetch address for module ${moduleName} version ${version} from registry ${registryQueryClient.contractAddress}`,
    )
  }

  return moduleVersion
}
