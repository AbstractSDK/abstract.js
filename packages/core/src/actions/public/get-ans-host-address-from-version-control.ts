import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import {
  CommonModuleNames,
  getModuleAddressFromVersionControl,
} from './get-module-address-from-version-control'

export async function getAnsHostAddressFromVersionControl(
  cosmWasmClient: CosmWasmClient,
  versionControlAddress: string,
  version?: string,
) {
  return getModuleAddressFromVersionControl(
    CommonModuleNames.ANS_HOST_MODULE_NAME,
    cosmWasmClient,
    versionControlAddress,
    version,
  )
}
