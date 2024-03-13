import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { ManagerClient } from '../../codegen/abstract'

export type GetManagerClientParameters = {
  signingCosmWasmClient: SigningCosmWasmClient
  sender: string
  managerAddress: string
}

export async function getManagerClient({
  signingCosmWasmClient,
  sender,
  managerAddress,
}: GetManagerClientParameters) {
  return new ManagerClient(signingCosmWasmClient, sender, managerAddress)
}
