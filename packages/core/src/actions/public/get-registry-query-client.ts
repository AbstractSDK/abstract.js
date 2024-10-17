import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { RegistryQueryClient } from '../../codegen/abstract'

export type GetRegistryQueryClientParameters = {
  cosmWasmClient: CosmWasmClient
  registryAddress: string
}

export function getRegistryQueryClient({
  cosmWasmClient,
  registryAddress,
}: GetRegistryQueryClientParameters) {
  return new RegistryQueryClient(cosmWasmClient, registryAddress)
}
