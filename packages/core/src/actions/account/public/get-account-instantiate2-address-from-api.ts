import {
  ModuleId,
  chainIdToName,
  getInstantiate2Address,
} from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../../../codegen/abstract'
import { abstractModuleId } from '../../../utils/modules/abstract-module-id'
import { getVersionControlAddressFromApi } from '../../get-version-control-address-from-api'
import { getAppModuleCodeIdFromVersionControl } from '../../public/get-app-module-code-id-from-version-control'
import { getModuleFactoryAddressFromVersionControl } from '../../public/get-module-factory-address-from-version-control'
import { CommonModuleNames } from '../../public/types'

export type GetAccountInstantiate2AddressFromApi = {
  accountId: VersionControlTypes.AccountId
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

  const versionControlAddress = await getVersionControlAddressFromApi({
    apiUrl,
    chainName,
  })

  const moduleFactoryAddress = await getModuleFactoryAddressFromVersionControl({
    cosmWasmClient,
    versionControlAddress,
  })

  const accountCodeId = await getAppModuleCodeIdFromVersionControl({
    moduleId: abstractModuleId(CommonModuleNames.ACCOUNT),
    version: 'latest',
    cosmWasmClient,
    versionControlAddress,
  })

  const moduleCodeDetails = await cosmWasmClient.getCodeDetails(accountCodeId)

  return getInstantiate2Address(
    moduleFactoryAddress,
    moduleCodeDetails.checksum,
    { ...accountId, chainName },
  )
}
