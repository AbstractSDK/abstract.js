import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { VersionControlClient } from '../../codegen/abstract'

export type GetVersionControlClientParameters = {
  signingCosmWasmClient: SigningCosmWasmClient
  sender: string
  versionControlAddress: string
}

export async function getVersionControlClient({
  signingCosmWasmClient,
  sender,
  versionControlAddress,
}: GetVersionControlClientParameters) {
  return new VersionControlClient(
    signingCosmWasmClient,
    sender,
    versionControlAddress,
  )
}
