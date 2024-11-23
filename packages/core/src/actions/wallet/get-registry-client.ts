import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { RegistryClient } from '../../codegen/abstract'

export type GetRegistryClientParameters = {
  signingCosmWasmClient: SigningCosmWasmClient
  sender: string
  registryAddress: string
}

export function getRegistryClient({
  signingCosmWasmClient,
  sender,
  registryAddress,
}: GetRegistryClientParameters) {
  return new RegistryClient(signingCosmWasmClient, sender, registryAddress)
}
