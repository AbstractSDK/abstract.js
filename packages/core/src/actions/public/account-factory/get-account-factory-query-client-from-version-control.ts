import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { getAccountFactoryAddressFromVersionControl } from './get-account-factory-address-from-version-control'
import { getAccountFactoryQueryClient } from './get-account-factory-query-client'

export async function getAccountFactoryQueryClientFromVersionControl(
  cosmWasmClient: CosmWasmClient,
  versionControlAddress: string,
  version?: string,
) {
  const factoryAddress = await getAccountFactoryAddressFromVersionControl(
    cosmWasmClient,
    versionControlAddress,
    version,
  )

  return getAccountFactoryQueryClient(cosmWasmClient, factoryAddress)
}
