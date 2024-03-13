import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { getAccountFactoryAddressFromVersionControl } from './get-account-factory-address-from-version-control'
import { getAccountFactoryQueryClient } from './get-account-factory-query-client'

export type GetAccountFactoryQueryClientFromVersionControlParameters = {
  cosmWasmClient: CosmWasmClient
  versionControlAddress: string
  version?: string
}

export async function getAccountFactoryQueryClientFromVersionControl({
  cosmWasmClient,
  versionControlAddress,
  version,
}: GetAccountFactoryQueryClientFromVersionControlParameters) {
  const accountFactoryAddress =
    await getAccountFactoryAddressFromVersionControl({
      cosmWasmClient,
      versionControlAddress,
      version,
    })

  return getAccountFactoryQueryClient({
    cosmWasmClient,
    accountFactoryAddress,
  })
}
