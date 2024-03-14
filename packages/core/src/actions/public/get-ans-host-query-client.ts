import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { AnsHostQueryClient } from '../../codegen/abstract'

export type GetAnsHostQueryClientParameters = {
  cosmWasmClient: CosmWasmClient
  ansHostAddress: string
}

export async function getAnsHostQueryClient({
  cosmWasmClient,
  ansHostAddress,
}: GetAnsHostQueryClientParameters) {
  return new AnsHostQueryClient(cosmWasmClient, ansHostAddress)
}
