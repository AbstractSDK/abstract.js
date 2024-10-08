import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

export type GetCosmWasmClientParameters = {
  cosmWasmClient: CosmWasmClient
}

export function getCosmWasmClient({
  cosmWasmClient,
}: GetCosmWasmClientParameters) {
  return cosmWasmClient
}
