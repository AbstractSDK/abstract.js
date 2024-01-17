import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { ManagerClient } from '../../codegen/abstract'

export async function getManagerClient(
  cosmWasmClient: SigningCosmWasmClient,
  sender: string,
  managerAddress: string,
) {
  return new ManagerClient(cosmWasmClient, sender, managerAddress)
}
