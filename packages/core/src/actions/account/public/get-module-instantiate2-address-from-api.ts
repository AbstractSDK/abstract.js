import {
  ModuleId,
  chainIdToName,
  getInstantiate2Address,
} from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { RegistryTypes } from '../../../codegen/abstract'
import { getRegistryAddressFromApi } from '../../get-registry-address-from-api'
import { getAppModuleCodeIdFromRegistry } from '../../public/get-app-module-code-id-from-registry'
import { getModuleFactoryAddressFromRegistry } from '../../public/get-module-factory-address-from-registry'

export type GetModuleInstantiate2AddressFromApi = {
  accountId: RegistryTypes.AccountId
  moduleId: ModuleId
  version?: RegistryTypes.ModuleVersion
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}

export async function getModuleInstantiate2AddressFromApi({
  accountId,
  cosmWasmClient,
  apiUrl,
  moduleId,
  version,
}: GetModuleInstantiate2AddressFromApi) {
  const chainId = await cosmWasmClient.getChainId()
  const chainName = chainIdToName(chainId)

  const registryAddress = await getRegistryAddressFromApi({
    apiUrl,
    chainName,
  })

  const moduleFactoryAddress = await getModuleFactoryAddressFromRegistry({
    cosmWasmClient,
    registryAddress,
  })

  const moduleCodeId = await getAppModuleCodeIdFromRegistry({
    moduleId,
    version,
    cosmWasmClient,
    registryAddress,
  })

  const moduleCodeDetails = await cosmWasmClient.getCodeDetails(moduleCodeId)

  return getInstantiate2Address(
    moduleFactoryAddress,
    moduleCodeDetails.checksum,
    { ...accountId, chainName },
  )
}
