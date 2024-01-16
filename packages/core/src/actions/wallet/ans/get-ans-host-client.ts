import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { AnsHostClient } from '../../../codegen/abstract'
import { getAnsHostAddress } from '../../public/ans/get-ans-host-address'

export async function getAnsHostClient(
  cosmWasmClient: SigningCosmWasmClient,
  sender: string,
  versionControlAddress: string,
  version?: string,
) {
  const ansHostAddress = await getAnsHostAddress(
    cosmWasmClient,
    versionControlAddress,
    version,
  )

  return new AnsHostClient(cosmWasmClient, sender, ansHostAddress)
}
