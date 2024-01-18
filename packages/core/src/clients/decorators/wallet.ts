import { getAccountFactoryClientFromApi } from '../../actions/wallet/get-account-factory-client-from-api'
import { getAccountFactoryClientFromVersionControl } from '../../actions/wallet/get-account-factory-client-from-version-control'
import { getAnsHostClientFromApi } from '../../actions/wallet/get-ans-host-client-from-api'
import { getAnsHostClientFromVersionControl } from '../../actions/wallet/get-ans-host-client-from-version-control'
import { getVersionControlClientFromApi } from '../../actions/wallet/get-version-control-client-from-api'

import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { createAccount } from '../../actions/wallet/create-account'
import { createAccountMonarchy } from '../../actions/wallet/create-account-monarchy'
import { getAccountFactoryClient } from '../../actions/wallet/get-account-factory-client'
import { getAnsHostClient } from '../../actions/wallet/get-ans-host-client'
import { getManagerClient } from '../../actions/wallet/get-manager-client'
import { getProxyClient } from '../../actions/wallet/get-proxy-client'
import { getVersionControlClient } from '../../actions/wallet/get-version-control-client'
import { SliceFirstThree, SliceFirstTwo } from '../../types/utils'

export type WalletActions = {
  createAccount(
    ...args: SliceFirstThree<Parameters<typeof createAccount>>
  ): ReturnType<typeof createAccount>
  createAccountMonarchy(
    ...args: SliceFirstThree<Parameters<typeof createAccountMonarchy>>
  ): ReturnType<typeof createAccountMonarchy>
  getAccountFactoryClient(
    ...args: SliceFirstTwo<Parameters<typeof getAccountFactoryClient>>
  ): ReturnType<typeof getAccountFactoryClient>
  getAccountFactoryClientFromVersionControl(
    ...args: SliceFirstTwo<
      Parameters<typeof getAccountFactoryClientFromVersionControl>
    >
  ): ReturnType<typeof getAccountFactoryClientFromVersionControl>
  getAccountFactoryClientFromApi(
    ...args: SliceFirstThree<Parameters<typeof getAccountFactoryClientFromApi>>
  ): ReturnType<typeof getAccountFactoryClientFromApi>
  getAnsHostClient(
    ...args: SliceFirstTwo<Parameters<typeof getAnsHostClient>>
  ): ReturnType<typeof getAnsHostClient>
  getAnsHostClientFromApi(
    ...args: SliceFirstThree<Parameters<typeof getAnsHostClientFromApi>>
  ): ReturnType<typeof getAnsHostClientFromApi>
  getAnsHostClientFromVersionControl(
    ...args: SliceFirstTwo<
      Parameters<typeof getAnsHostClientFromVersionControl>
    >
  ): ReturnType<typeof getAnsHostClientFromVersionControl>
  getVersionControlClient(
    ...args: SliceFirstTwo<Parameters<typeof getVersionControlClient>>
  ): ReturnType<typeof getVersionControlClient>
  getVersionControlClientFromApi(
    ...args: SliceFirstThree<Parameters<typeof getVersionControlClientFromApi>>
  ): ReturnType<typeof getVersionControlClientFromApi>
  getManagerClient(
    ...args: SliceFirstTwo<Parameters<typeof getManagerClient>>
  ): ReturnType<typeof getManagerClient>
  getProxyClient(
    ...args: SliceFirstTwo<Parameters<typeof getProxyClient>>
  ): ReturnType<typeof getProxyClient>
}

export function walletActions(
  client: SigningCosmWasmClient,
  sender: string,
  apiUrl: string,
): WalletActions {
  return {
    createAccount: (...args) => createAccount(client, apiUrl, sender, ...args),
    createAccountMonarchy: (...args) =>
      createAccountMonarchy(client, apiUrl, sender, ...args),

    getAccountFactoryClient: (...args) =>
      getAccountFactoryClient(client, sender, ...args),
    getAccountFactoryClientFromVersionControl: (...args) =>
      getAccountFactoryClientFromVersionControl(client, sender, ...args),
    getAccountFactoryClientFromApi: (...args) =>
      getAccountFactoryClientFromApi(client, apiUrl, sender, ...args),

    getAnsHostClient: (...args) => getAnsHostClient(client, sender, ...args),
    getAnsHostClientFromApi: (...args) =>
      getAnsHostClientFromApi(client, apiUrl, sender, ...args),
    getAnsHostClientFromVersionControl: (...args) =>
      getAnsHostClientFromVersionControl(client, sender, ...args),

    getVersionControlClientFromApi: (...args) =>
      getVersionControlClientFromApi(client, apiUrl, sender, ...args),
    getVersionControlClient: (...args) =>
      getVersionControlClient(client, sender, ...args),

    getManagerClient: (...args) => getManagerClient(client, sender, ...args),
    getProxyClient: (...args) => getProxyClient(client, sender, ...args),
  }
}
