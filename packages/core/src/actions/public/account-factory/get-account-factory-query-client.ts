import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { AccountFactoryQueryClient } from '../../../codegen/abstract'

export async function getAccountFactoryQueryClient(
  cosmWasmClient: CosmWasmClient,
  accountFactoryAddress: string,
) {
  return new AccountFactoryQueryClient(cosmWasmClient, accountFactoryAddress)
}
