import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from '../../../types/with-args'

export type GetCosmWasmClientParameters = WithArgs<{
  cosmWasmClient: CosmWasmClient
}>

export async function getCosmWasmClient({
  args: { cosmWasmClient },
}: GetCosmWasmClientParameters) {
  return cosmWasmClient
}
