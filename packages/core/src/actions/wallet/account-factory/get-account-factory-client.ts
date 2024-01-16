import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { AccountFactoryClient } from '../../../codegen/abstract'

export async function getAccountFactoryClient(
  cosmWasmClient: SigningCosmWasmClient,
  sender: string,
  factoryAddress: string,
) {
  return new AccountFactoryClient(cosmWasmClient, sender, factoryAddress)
}
