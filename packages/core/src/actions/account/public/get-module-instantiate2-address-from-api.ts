import {
  ModuleId,
  chainIdToName,
  getInstantiate2Address,
} from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../../../codegen/abstract'
import { getVersionControlAddressFromApi } from '../../get-version-control-address-from-api'
import { getAppModuleCodeIdFromVersionControl } from '../../public/get-app-module-code-id-from-version-control'
import { getModuleFactoryAddressFromVersionControl } from '../../public/get-module-factory-address-from-version-control'

export type GetModuleInstantiate2AddressFromApi = {
  accountId: VersionControlTypes.AccountId
  moduleId: ModuleId
  version?: VersionControlTypes.ModuleVersion
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

  const versionControlAddress = await getVersionControlAddressFromApi({
    apiUrl,
    chainName,
  })

  const moduleFactoryAddress = await getModuleFactoryAddressFromVersionControl({
    cosmWasmClient,
    versionControlAddress,
  })

  const moduleCodeId = await getAppModuleCodeIdFromVersionControl({
    moduleId,
    version,
    cosmWasmClient,
    versionControlAddress,
  })

  const moduleCodeDetails = await cosmWasmClient.getCodeDetails(moduleCodeId)

  return getInstantiate2Address(
    moduleFactoryAddress,
    moduleCodeDetails.checksum,
    { ...accountId, chainName },
  )
}
