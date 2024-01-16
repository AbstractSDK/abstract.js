import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { AnsHostQueryClient } from '../../../codegen/abstract'

export async function getAnsHostQueryClient(
  cosmWasmClient: CosmWasmClient,
  ansHostAddress: string,
) {
  return new AnsHostQueryClient(cosmWasmClient, ansHostAddress)
}
