import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import {
  VersionControlQueryClient,
  VersionControlTypes,
} from '../../../codegen/abstract'
import { versionControlModuleToAddress } from '../../../utils/version-control/version-control-module-to-address'

const ACCOUNT_FACTORY_MODULE_NAME = 'account-factory'

export async function getAccountFactoryAddressFromVersionControl(
  cosmWasmClient: CosmWasmClient,
  versionControlAddress: string,
  version?: string,
) {
  const registryClient = new VersionControlQueryClient(
    cosmWasmClient,
    versionControlAddress,
  )

  const [accountFactoryAddress] = await registryClient
    .modules({
      infos: [
        {
          name: ACCOUNT_FACTORY_MODULE_NAME,
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
      `Could not fetch factoryAddress for version ${version} from registry ${versionControlAddress}`,
    )
  }

  return accountFactoryAddress
}
