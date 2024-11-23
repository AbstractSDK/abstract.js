import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { AnsHostClient } from '../../codegen/abstract'

export type GetAnsHostClientParameters = {
  signingCosmWasmClient: SigningCosmWasmClient
  sender: string
  ansHostAddress: string
}

export function getAnsHostClient({
  signingCosmWasmClient,
  sender,
  ansHostAddress,
}: GetAnsHostClientParameters) {
  return new AnsHostClient(signingCosmWasmClient, sender, ansHostAddress)
}
