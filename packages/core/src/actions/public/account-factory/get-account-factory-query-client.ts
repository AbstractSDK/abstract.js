import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { AccountFactoryQueryClient } from '../../../codegen/abstract'
import { getAccountFactoryAddress } from './get-account-factory-address'

export async function getAccountFactoryQueryClient(
  cosmWasmClient: CosmWasmClient,
  versionControlAddress: string,
  version?: string,
) {
  const factoryAddress = await getAccountFactoryAddress(
    cosmWasmClient,
    versionControlAddress,
    version,
  )

  return new AccountFactoryQueryClient(cosmWasmClient, factoryAddress)
}
