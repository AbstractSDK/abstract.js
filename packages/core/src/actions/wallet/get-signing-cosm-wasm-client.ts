import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from '../../types/with-args'

export type GetSigningCosmWasmClientParameters = WithArgs<{
  signingCosmWasmClient: SigningCosmWasmClient
}>

export async function getSigningCosmWasmClient({
  args: { signingCosmWasmClient },
}: GetSigningCosmWasmClientParameters) {
  return signingCosmWasmClient
}
