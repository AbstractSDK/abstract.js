import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { AnsHostClient } from '../../codegen/abstract'

export async function getAnsHostClient(
  cosmWasmClient: SigningCosmWasmClient,
  sender: string,
  ansHostAddress: string,
) {
  return new AnsHostClient(cosmWasmClient, sender, ansHostAddress)
}
