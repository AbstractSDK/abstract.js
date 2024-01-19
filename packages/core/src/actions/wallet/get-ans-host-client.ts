import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from 'src/types/with-args'
import { AnsHostClient } from '../../codegen/abstract'

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
