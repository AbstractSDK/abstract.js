import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { ManagerQueryClient } from '../../codegen/abstract'
import { WithArgs } from '../../types/with-args'

export type GetManagerQueryClientParameters = WithArgs<{
  cosmWasmClient: CosmWasmClient
  managerAddress: string
}>

export async function getManagerQueryClient({
  args: { cosmWasmClient, managerAddress },
}: GetManagerQueryClientParameters) {
  return new ManagerQueryClient(cosmWasmClient, managerAddress)
}
