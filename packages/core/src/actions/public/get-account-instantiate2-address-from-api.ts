import {
  abstractModuleId,
  chainIdToName,
  getInstantiate2Address,
  getInstantiate2AddressWithAccountId,
} from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { P, match } from 'ts-pattern'
import { RegistryTypes } from '../../codegen/abstract'
import { getRegistryAddressFromApi } from '../get-registry-address-from-api'
import { getAppModuleCodeIdFromRegistry } from './get-app-module-code-id-from-registry'
import { CommonModuleNames } from './types'

export type GetAccountInstantiate2AddressFromApi = {
  cosmWasmClient: CosmWasmClient
  apiUrl: string
  creator: string
  salt:
    | {
        accountId: RegistryTypes.AccountId
      }
    | {
        custom: string | Uint8Array
      }
}

/**
 * Retrieve the calculated manager init2 address from the api.
 * @param accountId
 * @param cosmWasmClient
 * @param apiUrl
 * @param creator - the creator address
 * @param salt - the (optional) salt to use for the address calculation. If not provided, will use the accountId salt.
 */
export async function getAccountInstantiate2AddressFromApi({
  cosmWasmClient,
  apiUrl,
  creator,
  salt,
}: GetAccountInstantiate2AddressFromApi): Promise<string> {
  const chainId = await cosmWasmClient.getChainId()
  const chainName = chainIdToName(chainId)

  const registryAddress = await getRegistryAddressFromApi({
    apiUrl,
    chainName,
  })

  const accountCodeId = await getAppModuleCodeIdFromRegistry({
    moduleId: abstractModuleId(CommonModuleNames.ACCOUNT),
    version: 'latest',
    cosmWasmClient,
    registryAddress,
  })

  const moduleCodeDetails = await cosmWasmClient.getCodeDetails(accountCodeId)

  return await match(salt)
    .with(
      { accountId: P.select() },
      async (accountId) =>
        await getInstantiate2AddressWithAccountId(
          creator,
          moduleCodeDetails.checksum,
          accountId,
        ),
    )
    .with(
      { custom: P.select() },
      async (customSalt) =>
        await getInstantiate2Address(
          creator,
          moduleCodeDetails.checksum,
          customSalt,
        ),
    )
    .exhaustive()
}
