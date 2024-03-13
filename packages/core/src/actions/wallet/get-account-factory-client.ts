import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { AccountFactoryClient } from '../../codegen/abstract'

export type GetAccountFactoryClientParameters = {
  signingCosmWasmClient: SigningCosmWasmClient
  sender: string
  factoryAddress: string
}

export async function getAccountFactoryClient({
  signingCosmWasmClient,
  sender,
  factoryAddress,
}: GetAccountFactoryClientParameters) {
  return new AccountFactoryClient(signingCosmWasmClient, sender, factoryAddress)
}
