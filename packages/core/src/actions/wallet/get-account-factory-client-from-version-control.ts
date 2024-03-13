import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { getAccountFactoryAddressFromVersionControl } from '../public/get-account-factory-address-from-version-control'
import { getAccountFactoryClient } from './get-account-factory-client'

export type GetAccountFactoryClientFromVersionControlParameters = {
  signingCosmWasmClient: SigningCosmWasmClient
  sender: string
  versionControlAddress: string
  version?: string
}

export async function getAccountFactoryClientFromVersionControl({
  signingCosmWasmClient,
  sender,
  versionControlAddress,
  version,
}: GetAccountFactoryClientFromVersionControlParameters) {
  const factoryAddress = await getAccountFactoryAddressFromVersionControl({
    cosmWasmClient: signingCosmWasmClient,
    versionControlAddress,
    version,
  })

  return getAccountFactoryClient({
    signingCosmWasmClient,
    sender,
    factoryAddress,
  })
}
