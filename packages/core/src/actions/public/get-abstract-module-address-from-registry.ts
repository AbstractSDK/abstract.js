import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { ABSTRACT_NAMESPACE } from '@abstract-money/core'
import { RegistryTypes } from '../../codegen/abstract'
import { registryModuleToAddress } from '../../utils/registry/registry-module-to-address'
import { getRegistryQueryClient } from './get-registry-query-client'

export type GetAbstractModuleAddressFromRegistry = {
  moduleName: string
  cosmWasmClient: CosmWasmClient
  registryAddress: string
  version?: string
}

export async function getAbstractModuleAddressFromRegistry({
  moduleName,
  cosmWasmClient,
  registryAddress,
  version,
}: GetAbstractModuleAddressFromRegistry) {
  const registryQueryClient = getRegistryQueryClient({
    cosmWasmClient,
    registryAddress,
  })

  const [moduleAddress] = await registryQueryClient
    .modules({
      infos: [
        {
          name: moduleName,
          namespace: ABSTRACT_NAMESPACE,
          version: version ? { version } : 'latest',
        } satisfies RegistryTypes.ModuleInfo,
      ],
    })
    .then(({ modules }) =>
      modules.map(({ module }) => registryModuleToAddress(module)),
    )

  if (!moduleAddress) {
    throw new Error(
      `Could not fetch address for module ${moduleName} version ${version} from registry ${registryAddress}`,
    )
  }

  return moduleAddress
}
