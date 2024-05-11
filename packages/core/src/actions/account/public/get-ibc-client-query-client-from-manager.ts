import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import {
  IbcClientQueryClient,
  VersionControlTypes,
} from '../../../codegen/abstract'
import { abstractModuleId } from '../../../utils/modules/abstract-module-id'
import { getIbcClientQueryClient } from '../../public/get-ibc-client-query-client'
import { CommonModuleNames } from '../../public/types'
import { getModuleAddress } from './get-module-address'

export type GetIbcClientQueryClientFromManagerParameters = {
  accountId: VersionControlTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}

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
    id: abstractModuleId(CommonModuleNames.IBC_CLIENT),
  })

  if (!ibcClientAddress) {
    throw new Error('IBC-client module not installed')
  }

  return getIbcClientQueryClient({
    cosmWasmClient,
    ibcClientAddress,
  })
}
