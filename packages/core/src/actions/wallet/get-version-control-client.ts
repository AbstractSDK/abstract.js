import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from 'src/types/with-args'
import { VersionControlClient } from '../../codegen/abstract'

export type GetVersionControlClientParameters = WithArgs<{
  signingCosmWasmClient: SigningCosmWasmClient
  sender: string
  versionControlAddress: string
}>

export async function getVersionControlClient({
  args: { signingCosmWasmClient, sender, versionControlAddress },
}: GetVersionControlClientParameters) {
  return new VersionControlClient(
    signingCosmWasmClient,
    sender,
    versionControlAddress,
  )
}
