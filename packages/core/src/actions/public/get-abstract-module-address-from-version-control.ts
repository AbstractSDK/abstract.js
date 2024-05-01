import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { VersionControlTypes } from '../../codegen/abstract'
import { versionControlModuleToAddress } from '../../utils/version-control/version-control-module-to-address'
import { getVersionControlQueryClient } from './get-version-control-query-client'

const ABSTRACT_NAMESPACE = 'abstract'

export type GetAbstractModuleAddressFromVersionControl = {
  moduleName: string
  cosmWasmClient: CosmWasmClient
  versionControlAddress: string
  version?: string
}

export async function getAbstractModuleAddressFromVersionControl({
  moduleName,
  cosmWasmClient,
  versionControlAddress,
  version,
}: GetAbstractModuleAddressFromVersionControl) {
  const versionControlQueryClient = getVersionControlQueryClient({
    cosmWasmClient,
    versionControlAddress,
  })

  const [moduleAddress] = await versionControlQueryClient
    .modules({
      infos: [
        {
          name: moduleName,
          namespace: ABSTRACT_NAMESPACE,
          version: version ? { version } : 'latest',
        } satisfies VersionControlTypes.ModuleInfo,
      ],
    })
    .then(({ modules }) =>
      modules.map(({ module }) => versionControlModuleToAddress(module)),
    )

  if (!moduleAddress) {
    throw new Error(
      `Could not fetch address for module ${moduleName} version ${version} from registry ${versionControlAddress}`,
    )
  }

  return moduleAddress
}
