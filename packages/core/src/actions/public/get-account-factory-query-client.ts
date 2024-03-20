import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { AccountFactoryQueryClient } from '../../codegen/abstract'

export type GetAccountFactoryQueryClientParameters = {
  cosmWasmClient: CosmWasmClient
  accountFactoryAddress: string
}

export async function getAccountFactoryQueryClient({
  cosmWasmClient,
  accountFactoryAddress,
}: GetAccountFactoryQueryClientParameters) {
  return new AccountFactoryQueryClient(cosmWasmClient, accountFactoryAddress)
}
