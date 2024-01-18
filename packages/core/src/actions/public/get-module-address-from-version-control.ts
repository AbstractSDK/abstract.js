import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import {
  VersionControlQueryClient,
  VersionControlTypes,
} from '../../codegen/abstract'
import { versionControlModuleToAddress } from '../../utils/version-control/version-control-module-to-address'

export enum CommonModuleNames {
  ACCOUNT_FACTORY_MODULE_NAME = 'account-factory',
  ANS_HOST_MODULE_NAME = 'ans-host',
}

export async function getModuleAddressFromVersionControl(
  moduleName: `${CommonModuleNames}`,
  cosmWasmClient: CosmWasmClient,
  versionControlAddress: string,
  version?: string,
) {
  const versionControlClient = new VersionControlQueryClient(
    cosmWasmClient,
    versionControlAddress,
  )

  const [accountFactoryAddress] = await versionControlClient
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
      modules.map(({ module }) => versionControlModuleToAddress(module)),
    )

  if (!accountFactoryAddress) {
    throw new Error(
      `Could not fetch address for module ${moduleName} version ${version} from registry ${versionControlAddress}`,
    )
  }

  return accountFactoryAddress
}
