import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { ManagerQueryClient } from '../../codegen/abstract'

export async function getManagerQueryClient(
  cosmWasmClient: CosmWasmClient,
  managerAddress: string,
) {
  return new ManagerQueryClient(cosmWasmClient, managerAddress)
}
