import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { ManagerClient } from '../../codegen/abstract'
import { WithArgs } from '../../types/with-args'

export type GetManagerClientParameters = WithArgs<{
  signingCosmWasmClient: SigningCosmWasmClient
  sender: string
  managerAddress: string
}>

export async function getManagerClient({
  args: { signingCosmWasmClient, sender, managerAddress },
}: GetManagerClientParameters) {
  return new ManagerClient(signingCosmWasmClient, sender, managerAddress)
}
