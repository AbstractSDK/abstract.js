import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import {
  IbcClientQueryClient,
  VersionControlTypes,
} from '../../../codegen/abstract'
import { getModuleAddress } from './get-module-address'

export type GetIbcClientQueryClientFromManagerParameters = {
  accountId: VersionControlTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}

const IBC_CLIENT_MODULE_ID = 'abstract:ibc-client'

/**
 * Retrieve the {@link IbcClientQueryClient} from the manager account.
 * @throws if the IBC-client module is not installed
 * @param accountId
 * @param cosmWasmClient
 * @param apiUrl
 */
export async function getIbcClientQueryClientFromManager({
  accountId,
  cosmWasmClient,
  apiUrl,
}: GetIbcClientQueryClientFromManagerParameters) {
  const ibcClientAddress = await getModuleAddress({
    accountId,
    cosmWasmClient,
    apiUrl,
    id: IBC_CLIENT_MODULE_ID,
  })

  if (!ibcClientAddress) {
    throw new Error('IBC-client module not installed')
  }

  return new IbcClientQueryClient(cosmWasmClient, ibcClientAddress)
}
