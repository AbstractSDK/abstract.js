import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { AnsHostQueryClient } from '../../codegen/abstract'
import { WithArgs } from '../../types/with-args'

export type GetAnsHostQueryClientParameters = WithArgs<{
  cosmWasmClient: CosmWasmClient
  ansHostAddress: string
}>

export async function getAnsHostQueryClient({
  args: { cosmWasmClient, ansHostAddress },
}: GetAnsHostQueryClientParameters) {
  return new AnsHostQueryClient(cosmWasmClient, ansHostAddress)
}
