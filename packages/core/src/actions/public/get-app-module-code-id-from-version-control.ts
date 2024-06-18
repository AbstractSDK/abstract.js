import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import {
  ModuleId,
  moduleIdToName,
  moduleIdToNamespace,
} from '@abstract-money/core'
import { VersionControlTypes } from '../../codegen/abstract'
import { versionControlModuleToCodeId } from '../../utils/version-control/version-control-module-to-code-id'
import { getVersionControlQueryClient } from './get-version-control-query-client'

export type GetAppModuleCodeIdFromVersionControl = {
  moduleId: `${ModuleId}`
  cosmWasmClient: CosmWasmClient
  versionControlAddress: string
  version?: VersionControlTypes.ModuleVersion
}

export async function getAppModuleCodeIdFromVersionControl({
  moduleId,
  cosmWasmClient,
  versionControlAddress,
  version,
}: GetAppModuleCodeIdFromVersionControl) {
  const versionControlQueryClient = getVersionControlQueryClient({
    cosmWasmClient,
    versionControlAddress,
  })

  const [moduleCodeId] = await versionControlQueryClient
    .modules({
      infos: [
        {
          name: moduleIdToName(moduleId),
          namespace: moduleIdToNamespace(moduleId),
          version: version ?? 'latest',
        } satisfies VersionControlTypes.ModuleInfo,
      ],
    })
    .then(({ modules }) =>
      modules.map(({ module }) => versionControlModuleToCodeId(module)),
    )

  if (!moduleCodeId) {
    throw new Error(
      `Could not fetch code id for app module ${moduleId} version ${version} from registry ${versionControlAddress}`,
    )
  }

  return moduleCodeId
}
