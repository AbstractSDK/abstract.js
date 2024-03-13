import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

export type GetCosmWasmClientParameters = {
  cosmWasmClient: CosmWasmClient
}

export async function getCosmWasmClient({
  cosmWasmClient,
}: GetCosmWasmClientParameters) {
  return cosmWasmClient
}
