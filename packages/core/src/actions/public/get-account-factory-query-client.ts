import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { AccountFactoryQueryClient } from '../../codegen/abstract'
import { WithArgs } from '../../types/with-args'

export type GetAccountFactoryQueryClientParameters = WithArgs<{
  cosmWasmClient: CosmWasmClient
  accountFactoryAddress: string
}>

export async function getAccountFactoryQueryClient({
  args: { cosmWasmClient, accountFactoryAddress },
}: GetAccountFactoryQueryClientParameters) {
  return new AccountFactoryQueryClient(cosmWasmClient, accountFactoryAddress)
}
