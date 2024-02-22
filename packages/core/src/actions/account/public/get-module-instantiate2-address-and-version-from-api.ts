import {
  ModuleId,
  chainIdToName,
  getInstantiate2Address,
} from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../../../codegen/abstract'
import { WithArgs } from '../../../types/with-args'
import { getVersionControlAddressFromApi } from '../../get-version-control-address-from-api'
import { getAppModuleCodeIdFromVersionControl } from '../../public/get-app-module-code-id-from-version-control'
import { getModuleFactoryAddressAndVersionFromVersionControl } from '../../public/get-module-factory-address-and-version-from-version-control'

export type GetModuleInstantiate2AddressFromApi = WithArgs<{
  accountId: VersionControlTypes.AccountId
  moduleId: ModuleId
  version?: string
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}>

export async function getModuleInstantiate2AddressAndVersionFromApi({
  args: { accountId, cosmWasmClient, apiUrl, moduleId, version },
}: GetModuleInstantiate2AddressFromApi) {
  const chainId = await cosmWasmClient.getChainId()
  const chainName = chainIdToName(chainId)

  const versionControlAddress = await getVersionControlAddressFromApi({
    args: {
      apiUrl,
      chainName,
    },
  })

  const { address: moduleFactoryAddress, version: resolvedVersion } =
    await getModuleFactoryAddressAndVersionFromVersionControl({
      args: {
        cosmWasmClient,
        versionControlAddress,
      },
    })

  const moduleCodeId = await getAppModuleCodeIdFromVersionControl({
    args: { moduleId, version, cosmWasmClient, versionControlAddress },
  })

  const moduleCodeDetails = await cosmWasmClient.getCodeDetails(moduleCodeId)

  return {
    version: resolvedVersion,
    address: await getInstantiate2Address(
      moduleFactoryAddress,
      moduleCodeDetails.checksum,
      { ...accountId, chainName },
    ),
  }
}
