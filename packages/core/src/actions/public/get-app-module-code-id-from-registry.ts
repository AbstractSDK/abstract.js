import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import {
  ModuleId,
  moduleIdToName,
  moduleIdToNamespace,
} from '@abstract-money/core'
import { RegistryTypes } from '../../codegen/abstract'
import { registryModuleToCodeId } from '../../utils/registry/registry-module-to-code-id'
import { getRegistryQueryClient } from './get-registry-query-client'

export type GetAppModuleCodeIdFromRegistry = {
  moduleId: `${ModuleId}`
  cosmWasmClient: CosmWasmClient
  registryAddress: string
  version?: RegistryTypes.ModuleVersion
}

export async function getAppModuleCodeIdFromRegistry({
  moduleId,
  cosmWasmClient,
  registryAddress,
  version,
}: GetAppModuleCodeIdFromRegistry) {
  const registryQueryClient = getRegistryQueryClient({
    cosmWasmClient,
    registryAddress,
  })

  const [moduleCodeId] = await registryQueryClient
    .modules({
      infos: [
        {
          name: moduleIdToName(moduleId),
          namespace: moduleIdToNamespace(moduleId),
          version: version ?? 'latest',
        } satisfies RegistryTypes.ModuleInfo,
      ],
    })
    .then(({ modules }) =>
      modules.map(({ module }) => registryModuleToCodeId(module)),
    )

  if (!moduleCodeId) {
    throw new Error(
      `Could not fetch code id for app module ${moduleId} version ${version} from registry ${registryAddress}`,
    )
  }

  return moduleCodeId
}
