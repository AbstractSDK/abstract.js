import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { VersionControlClient } from '../../codegen/abstract'
import { WithArgs } from '../../types/with-args'

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
