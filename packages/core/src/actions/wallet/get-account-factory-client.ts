import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from 'src/types/with-args'
import { AccountFactoryClient } from '../../codegen/abstract'

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
