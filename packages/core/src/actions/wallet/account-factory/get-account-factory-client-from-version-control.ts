import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { getAccountFactoryAddressFromVersionControl } from '../../public/account-factory/get-account-factory-address-from-version-control'
import { getAccountFactoryClient } from './get-account-factory-client'

export async function getAccountFactoryClientFromVersionControl(
  cosmWasmClient: SigningCosmWasmClient,
  sender: string,
  versionControlAddress: string,
  version?: string,
) {
  const factoryAddress = await getAccountFactoryAddressFromVersionControl(
    cosmWasmClient,
    versionControlAddress,
    version,
  )

  return getAccountFactoryClient(cosmWasmClient, sender, factoryAddress)
}
