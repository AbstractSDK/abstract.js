import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { AccountFactoryClient } from '../../codegen/abstract'
import { WithArgs } from '../../types/with-args'

export type GetAccountFactoryClientParameters = WithArgs<{
  signingCosmWasmClient: SigningCosmWasmClient
  sender: string
  factoryAddress: string
}>

export async function getAccountFactoryClient({
  args: { signingCosmWasmClient, sender, factoryAddress },
}: GetAccountFactoryClientParameters) {
  return new AccountFactoryClient(signingCosmWasmClient, sender, factoryAddress)
}
