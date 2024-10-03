import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { AccountClient } from '../../codegen/abstract'

export type GetAccountClientParameters = {
  signingCosmWasmClient: SigningCosmWasmClient
  sender: string
  accountAddress: string
}

export async function getAccountClient({
  signingCosmWasmClient,
  sender,
  accountAddress,
}: GetAccountClientParameters) {
  return new AccountClient(signingCosmWasmClient, sender, accountAddress)
}
