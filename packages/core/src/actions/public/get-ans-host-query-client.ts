import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from 'src/types/with-args'
import { AnsHostQueryClient } from '../../codegen/abstract'

export type GetAnsHostQueryClientParameters = WithArgs<{
  cosmWasmClient: CosmWasmClient
  ansHostAddress: string
}>

export async function getAnsHostQueryClient({
  args: { cosmWasmClient, ansHostAddress },
}: GetAnsHostQueryClientParameters) {
  return new AnsHostQueryClient(cosmWasmClient, ansHostAddress)
}
