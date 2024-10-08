import { chainIdToName, getInstantiate2Address } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { RegistryTypes } from '../../../codegen/abstract'
import { abstractModuleId } from '../../../utils/modules/abstract-module-id'
import { getRegistryAddressFromApi } from '../../get-registry-address-from-api'
import { getAppModuleCodeIdFromRegistry } from '../../public/get-app-module-code-id-from-registry'
import { getModuleFactoryAddressFromRegistry } from '../../public/get-module-factory-address-from-registry'
import { CommonModuleNames } from '../../public/types'

export type GetAccountInstantiate2AddressFromApi = {
  accountId: RegistryTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}

/**
 * Retrieve the calculated manager init2 address from the api.
 * @param accountId
 * @param cosmWasmClient
 * @param apiUrl
 */
export async function getAccountInstantiate2AddressFromApi({
  accountId,
  cosmWasmClient,
  apiUrl,
}: GetAccountInstantiate2AddressFromApi) {
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

  const accountCodeId = await getAppModuleCodeIdFromRegistry({
    moduleId: abstractModuleId(CommonModuleNames.ACCOUNT),
    version: 'latest',
    cosmWasmClient,
    registryAddress,
  })

  const moduleCodeDetails = await cosmWasmClient.getCodeDetails(accountCodeId)

  return getInstantiate2Address(
    moduleFactoryAddress,
    moduleCodeDetails.checksum,
    { ...accountId, chainName },
  )
}
