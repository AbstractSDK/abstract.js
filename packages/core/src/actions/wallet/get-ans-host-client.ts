import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { AnsHostClient } from '../../codegen/abstract'
import { WithArgs } from '../../types/with-args'

export type GetAnsHostClientParameters = WithArgs<{
  signingCosmWasmClient: SigningCosmWasmClient
  sender: string
  ansHostAddress: string
}>

export async function getAnsHostClient({
  args: { signingCosmWasmClient, sender, ansHostAddress },
}: GetAnsHostClientParameters) {
  return new AnsHostClient(signingCosmWasmClient, sender, ansHostAddress)
}
