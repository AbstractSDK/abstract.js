import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { AccountQueryClient } from '../../codegen/abstract'

export type GetAccountQueryClientParameters = {
  cosmWasmClient: CosmWasmClient
  accountAddress: string
}

export async function getAccountQueryClient({
  cosmWasmClient,
  accountAddress,
}: GetAccountQueryClientParameters) {
  return new AccountQueryClient(cosmWasmClient, accountAddress)
}
