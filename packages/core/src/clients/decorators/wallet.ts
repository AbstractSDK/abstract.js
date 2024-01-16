import { getAccountFactoryClientFromApi } from 'src/actions/wallet/account-factory/get-account-factory-client-from-api'
import { getAccountFactoryClientFromVersionControl } from 'src/actions/wallet/account-factory/get-account-factory-client-from-version-control'
import { getAnsHostClientFromApi } from 'src/actions/wallet/ans/get-ans-host-client-from-api'
import { getAnsHostClientFromVersionControl } from 'src/actions/wallet/ans/get-ans-host-client-from-version-control'
import { getVersionControlClientFromApi } from 'src/actions/wallet/version-control/get-version-control-client-from-api'

import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { createAccount } from 'src/actions/wallet/account-factory/create-account'
import { createAccountMonarchy } from 'src/actions/wallet/account-factory/create-account-monarchy'
import { getAccountFactoryClient } from 'src/actions/wallet/account-factory/get-account-factory-client'
import { getAnsHostClient } from 'src/actions/wallet/ans/get-ans-host-client'
import { getVersionControlClient } from 'src/actions/wallet/version-control/get-version-control-client'
import { SliceFirst, SliceFirstTwo } from '../../types/utils'
import { Client } from '../create-client'

export type WalletActions = {
  createAccount(
    ...args: SliceFirstTwo<Parameters<typeof createAccount>>
  ): ReturnType<typeof createAccount>
  createAccountMonarchy(
    ...args: SliceFirstTwo<Parameters<typeof createAccountMonarchy>>
  ): ReturnType<typeof createAccountMonarchy>
  getAccountFactoryClient(
    ...args: SliceFirst<Parameters<typeof getAccountFactoryClient>>
  ): ReturnType<typeof getAccountFactoryClient>
  getAccountFactoryClientFromVersionControl(
    ...args: SliceFirst<
      Parameters<typeof getAccountFactoryClientFromVersionControl>
    >
  ): ReturnType<typeof getAccountFactoryClientFromVersionControl>
  getAccountFactoryClientFromApi(
    ...args: SliceFirstTwo<Parameters<typeof getAccountFactoryClientFromApi>>
  ): ReturnType<typeof getAccountFactoryClientFromApi>
  getAnsHostClient(
    ...args: SliceFirst<Parameters<typeof getAnsHostClient>>
  ): ReturnType<typeof getAnsHostClient>
  getAnsHostClientFromApi(
    ...args: SliceFirstTwo<Parameters<typeof getAnsHostClientFromApi>>
  ): ReturnType<typeof getAnsHostClientFromApi>
  getAnsHostClientFromVersionControl(
    ...args: SliceFirst<Parameters<typeof getAnsHostClientFromVersionControl>>
  ): ReturnType<typeof getAnsHostClientFromVersionControl>
  getVersionControlClient(
    ...args: SliceFirst<Parameters<typeof getVersionControlClient>>
  ): ReturnType<typeof getVersionControlClient>
  getVersionControlClientFromApi(
    ...args: SliceFirstTwo<Parameters<typeof getVersionControlClientFromApi>>
  ): ReturnType<typeof getVersionControlClientFromApi>
}

export function walletActions(
  { apiUrl }: Client,
  client: SigningCosmWasmClient,
): WalletActions {
  return {
    createAccount: (...args) => createAccount(client, apiUrl, ...args),
    createAccountMonarchy: (...args) =>
      createAccountMonarchy(client, apiUrl, ...args),

    getAccountFactoryClient: (...args) =>
      getAccountFactoryClient(client, ...args),
    getAccountFactoryClientFromVersionControl: (...args) =>
      getAccountFactoryClientFromVersionControl(client, ...args),
    getAccountFactoryClientFromApi: (...args) =>
      getAccountFactoryClientFromApi(client, apiUrl, ...args),

    getAnsHostClient: (...args) => getAnsHostClient(client, ...args),
    getAnsHostClientFromApi: (...args) =>
      getAnsHostClientFromApi(client, apiUrl, ...args),
    getAnsHostClientFromVersionControl: (...args) =>
      getAnsHostClientFromVersionControl(client, ...args),

    getVersionControlClientFromApi: (...args) =>
      getVersionControlClientFromApi(client, apiUrl, ...args),
    getVersionControlClient: (...args) =>
      getVersionControlClient(client, ...args),
  }
}
