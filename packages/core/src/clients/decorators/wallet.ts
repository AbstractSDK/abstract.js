import { getAccountFactoryClient } from 'src/actions/wallet/account-factory/get-account-factory-client'
import { getAccountFactoryClientFromApi } from 'src/actions/wallet/account-factory/get-account-factory-client-from-api'
import { getAnsHostClient } from 'src/actions/wallet/ans/get-ans-host-client'
import { getAnsHostClientFromApi } from 'src/actions/wallet/ans/get-ans-host-client-from-api'
import { getVersionControlClientFromApi } from 'src/actions/wallet/version-control/get-version-control-client-from-api'

import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { SliceFirst, SliceFirstTwo } from '../../types/utils.js'
import { Client } from '../create-client.js'

export type WalletActions = {
  getAccountFactoryClient(
    ...args: SliceFirst<Parameters<typeof getAccountFactoryClient>>
  ): ReturnType<typeof getAccountFactoryClient>
  getAccountFactoryClientFromApi(
    ...args: SliceFirstTwo<Parameters<typeof getAccountFactoryClientFromApi>>
  ): ReturnType<typeof getAccountFactoryClientFromApi>
  getAnsHostClient(
    ...args: SliceFirst<Parameters<typeof getAnsHostClient>>
  ): ReturnType<typeof getAnsHostClient>
  getAnsHostClientFromApi(
    ...args: SliceFirstTwo<Parameters<typeof getAnsHostClientFromApi>>
  ): ReturnType<typeof getAnsHostClientFromApi>
  getVersionControlClientFromApi(
    ...args: SliceFirstTwo<Parameters<typeof getVersionControlClientFromApi>>
  ): ReturnType<typeof getVersionControlClientFromApi>
}

export function walletActions(
  { apiUrl }: Client,
  client: SigningCosmWasmClient,
): WalletActions {
  return {
    getAccountFactoryClient: (...args) =>
      getAccountFactoryClient(client, ...args),
    getAccountFactoryClientFromApi: (...args) =>
      getAccountFactoryClientFromApi(client, apiUrl, ...args),
    getAnsHostClient: (...args) => getAnsHostClient(client, ...args),
    getAnsHostClientFromApi: (...args) =>
      getAnsHostClientFromApi(client, apiUrl, ...args),
    getVersionControlClientFromApi: (...args) =>
      getVersionControlClientFromApi(client, apiUrl, ...args),
  }
}
