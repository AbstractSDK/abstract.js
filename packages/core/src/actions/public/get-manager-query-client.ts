import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { WithArgs } from 'src/types/with-args'
import { ManagerQueryClient } from '../../codegen/abstract'

export type GetManagerQueryClientParameters = WithArgs<{
  cosmWasmClient: CosmWasmClient
  managerAddress: string
}>

export async function getManagerQueryClient({
  args: { cosmWasmClient, managerAddress },
}: GetManagerQueryClientParameters) {
  return new ManagerQueryClient(cosmWasmClient, managerAddress)
}
