import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { AnsHostQueryClient } from '../../../codegen/abstract'
import { getAnsHostAddress } from './get-ans-host-address'

export async function getAnsHostQueryClient(
  cosmWasmClient: CosmWasmClient,
  versionControlAddress: string,
  version?: string,
) {
  const ansHostAddress = await getAnsHostAddress(
    cosmWasmClient,
    versionControlAddress,
    version,
  )

  return new AnsHostQueryClient(cosmWasmClient, ansHostAddress)
}
