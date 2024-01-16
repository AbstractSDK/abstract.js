import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { AnsHostQueryClient } from '../../../codegen/abstract'
import { getAnsHostAddressFromVersionControl } from './get-ans-host-address-from-version-control'
import { getAnsHostQueryClient } from './get-ans-host-query-client'

export async function getAnsHostQueryClientFromVersionControl(
  cosmWasmClient: CosmWasmClient,
  versionControlAddress: string,
  version?: string,
) {
  const ansHostAddress = await getAnsHostAddressFromVersionControl(
    cosmWasmClient,
    versionControlAddress,
    version,
  )

  return getAnsHostQueryClient(cosmWasmClient, ansHostAddress)
}
