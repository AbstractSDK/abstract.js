import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from '../../types/with-args'
import { getAccountFactoryAddressAndVersionFromVersionControl } from './get-account-factory-address-and-version-from-version-control'
import { getAccountFactoryQueryClient } from './get-account-factory-query-client'

export type GetAccountFactoryQueryClientFromVersionControlParameters =
  WithArgs<{
    cosmWasmClient: CosmWasmClient
    versionControlAddress: string
    version?: string
  }>

export async function getAccountFactoryQueryClientFromVersionControl({
  args: { cosmWasmClient, versionControlAddress, version },
}: GetAccountFactoryQueryClientFromVersionControlParameters) {
  const { address: accountFactoryAddress } =
    await getAccountFactoryAddressAndVersionFromVersionControl({
      args: {
        cosmWasmClient,
        versionControlAddress,
        version,
      },
    })

  return getAccountFactoryQueryClient({
    args: { cosmWasmClient, accountFactoryAddress },
  })
}
