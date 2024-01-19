import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from 'src/types/with-args'
import { ManagerClient } from '../../codegen/abstract'

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
