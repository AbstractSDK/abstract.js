import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import {
  ModuleId,
  moduleIdToName,
  moduleIdToNamespace,
} from '@abstract-money/core'
import { VersionControlTypes } from '../../codegen/abstract'
import { WithArgs } from '../../types/with-args'
import { versionControlModuleToCodeId } from '../../utils/version-control/version-control-module-to-code-id'
import { getVersionControlQueryClient } from './get-version-control-query-client'

export type GetAppModuleCodeIdFromVersionControl = WithArgs<{
  moduleId: `${ModuleId}`
  cosmWasmClient: CosmWasmClient
  versionControlAddress: string
  version?: string
}>

export async function getAppModuleCodeIdFromVersionControl({
  args: { moduleId, cosmWasmClient, versionControlAddress, version },
}: GetAppModuleCodeIdFromVersionControl) {
  const versionControlQueryClient = getVersionControlQueryClient({
    args: {
      cosmWasmClient,
      versionControlAddress,
    },
  })

  const [moduleAddress] = await versionControlQueryClient
    .modules({
      infos: [
        {
          name: moduleIdToName(moduleId),
          namespace: moduleIdToNamespace(moduleId),
          version: version ? { version } : 'latest',
        } satisfies VersionControlTypes.ModuleInfo,
      ],
    })
    .then(({ modules }) =>
      modules.map(({ module }) => versionControlModuleToCodeId(module)),
    )

  if (!moduleAddress) {
    throw new Error(
      `Could not fetch code id for app module ${moduleId} version ${version} from registry ${versionControlAddress}`,
    )
  }

  return moduleAddress
}
