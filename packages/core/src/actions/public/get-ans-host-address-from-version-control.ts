import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import {
  VersionControlQueryClient,
  VersionControlTypes,
} from '../../codegen/abstract'
import { versionControlModuleToAddress } from '../../utils/version-control/version-control-module-to-address'
const ANS_HOST_MODULE_NAME = 'ans-host'

export async function getAnsHostAddressFromVersionControl(
  cosmWasmClient: CosmWasmClient,
  versionControlAddress: string,
  version?: string,
) {
  const registryClient = new VersionControlQueryClient(
    cosmWasmClient,
    versionControlAddress,
  )

  const [ansHostAddress] = await registryClient
    .modules({
      infos: [
        {
          name: ANS_HOST_MODULE_NAME,
          namespace: 'abstract',
          version: version ? { version } : 'latest',
        } satisfies VersionControlTypes.ModuleInfo,
      ],
    })
    .then(({ modules }) =>
      modules.map(({ module }) => versionControlModuleToAddress(module)),
    )

  if (!ansHostAddress) {
    throw new Error(
      `Could not get ansHostAddress for version ${version} from registry ${versionControlAddress}`,
    )
  }

  return ansHostAddress
}
