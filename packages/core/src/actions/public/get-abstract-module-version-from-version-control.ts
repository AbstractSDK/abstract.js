import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { VersionControlTypes } from '../../codegen/abstract'
import { WithArgs } from '../../types/with-args'
import { versionControlModuleToVersion } from '../../utils/version-control/version-control-module-to-version'
import { getVersionControlQueryClient } from './get-version-control-query-client'

export enum CommonModuleNames {
  ACCOUNT_FACTORY = 'account-factory',
  MODULE_FACTORY = 'module-factory',
  ANS_HOST = 'ans-host',
}

export type GetAbstractModuleVersionFromVersionControl = WithArgs<{
  moduleName: string
  cosmWasmClient: CosmWasmClient
  versionControlAddress: string
  version?: string
}>

export async function getAbstractModuleVersionFromVersionControl({
  args: { moduleName, cosmWasmClient, versionControlAddress, version },
}: GetAbstractModuleVersionFromVersionControl) {
  const versionControlQueryClient = getVersionControlQueryClient({
    args: {
      cosmWasmClient,
      versionControlAddress,
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
      `Could not fetch address for module ${moduleName} version ${version} from registry ${versionControlAddress}`,
    )
  }

  return moduleVersion
}
