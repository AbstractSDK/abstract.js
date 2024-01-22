import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { VersionControlTypes } from '../../codegen/abstract'
import { WithArgs } from '../../types/with-args'
import { versionControlModuleToAddress } from '../../utils/version-control/version-control-module-to-address'
import { getVersionControlQueryClient } from './get-version-control-query-client'

export enum CommonModuleNames {
  ACCOUNT_FACTORY = 'account-factory',
  ANS_HOST = 'ans-host',
}

export type GetAbstractModuleAddressFromVersionControl = WithArgs<{
  moduleName: `${CommonModuleNames}`
  cosmWasmClient: CosmWasmClient
  versionControlAddress: string
  version?: string
}>

export async function getAbstractModuleAddressFromVersionControl({
  args: { moduleName, cosmWasmClient, versionControlAddress, version },
}: GetAbstractModuleAddressFromVersionControl) {
  const versionControlQueryClient = getVersionControlQueryClient({
    args: {
      cosmWasmClient,
      versionControlAddress,
    },
  })

  const [accountFactoryAddress] = await versionControlQueryClient
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
