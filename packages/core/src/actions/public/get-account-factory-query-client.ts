import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from 'src/types/with-args'
import { AccountFactoryQueryClient } from '../../codegen/abstract'

export type GetAccountFactoryQueryClientParameters = WithArgs<{
  cosmWasmClient: CosmWasmClient
  accountFactoryAddress: string
}>

export async function getAccountFactoryQueryClient({
  args: { cosmWasmClient, accountFactoryAddress },
}: GetAccountFactoryQueryClientParameters) {
  return new AccountFactoryQueryClient(cosmWasmClient, accountFactoryAddress)
}
