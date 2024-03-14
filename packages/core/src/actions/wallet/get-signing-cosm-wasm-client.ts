import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

export type GetSigningCosmWasmClientParameters = {
  signingCosmWasmClient: SigningCosmWasmClient
}

export async function getSigningCosmWasmClient({
  signingCosmWasmClient,
}: GetSigningCosmWasmClientParameters) {
  return signingCosmWasmClient
}
