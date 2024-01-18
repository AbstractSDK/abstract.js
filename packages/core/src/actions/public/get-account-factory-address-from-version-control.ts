import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import {
  CommonModuleNames,
  getModuleAddressFromVersionControl,
} from './get-module-address-from-version-control'

export async function getAccountFactoryAddressFromVersionControl(
  cosmWasmClient: CosmWasmClient,
  versionControlAddress: string,
  version?: string,
) {
  return getModuleAddressFromVersionControl(
    CommonModuleNames.ACCOUNT_FACTORY_MODULE_NAME,
    cosmWasmClient,
    versionControlAddress,
    version,
  )
}
