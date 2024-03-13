import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { ManagerQueryClient } from '../../codegen/abstract'

export type GetManagerQueryClientParameters = {
  cosmWasmClient: CosmWasmClient
  managerAddress: string
}

export async function getManagerQueryClient({
  cosmWasmClient,
  managerAddress,
}: GetManagerQueryClientParameters) {
  return new ManagerQueryClient(cosmWasmClient, managerAddress)
}
