import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { claimNamespace } from '../../actions/account/wallet/claim-namespace'
import { createSubAccount } from '../../actions/account/wallet/create-sub-account'
import { deposit } from '../../actions/account/wallet/deposit'
import { execute } from '../../actions/account/wallet/execute'
import { getManagerClientFromApi } from '../../actions/account/wallet/get-manager-client-from-api'
import { getProxyClientFromApi } from '../../actions/account/wallet/get-proxy-client-from-api'
import { removeNamespace } from '../../actions/account/wallet/remove-namespace'
import { withdraw } from '../../actions/account/wallet/withdraw'
import { VersionControlTypes } from '../../codegen/abstract/index'
import { SliceFirstThree } from '../../types/utils'
import { Client } from '../create-client'

export type AccountWalletActions = {
  claimNamespace(
    ...args: SliceFirstThree<Parameters<typeof claimNamespace>>
  ): ReturnType<typeof claimNamespace>
  createSubAccount(
    ...args: SliceFirstThree<Parameters<typeof createSubAccount>>
  ): ReturnType<typeof createSubAccount>
  deposit(
    ...args: SliceFirstThree<Parameters<typeof deposit>>
  ): ReturnType<typeof deposit>
  execute(
    ...args: SliceFirstThree<Parameters<typeof execute>>
  ): ReturnType<typeof execute>
  getManagerClientFromApi(
    ...args: SliceFirstThree<Parameters<typeof getManagerClientFromApi>>
  ): ReturnType<typeof getManagerClientFromApi>
  getProxyClientFromApi(
    ...args: SliceFirstThree<Parameters<typeof getProxyClientFromApi>>
  ): ReturnType<typeof getProxyClientFromApi>
  removeNamespace(
    ...args: SliceFirstThree<Parameters<typeof removeNamespace>>
  ): ReturnType<typeof removeNamespace>
  withdraw(
    ...args: SliceFirstThree<Parameters<typeof withdraw>>
  ): ReturnType<typeof withdraw>
}

export function accountWalletActions(
  accountId: VersionControlTypes.AccountId,
  signingCosmWasmClient: SigningCosmWasmClient,
  { apiUrl }: Client,
): AccountWalletActions {
  return {
    claimNamespace: (...args) =>
      claimNamespace(accountId, signingCosmWasmClient, apiUrl, ...args),
    createSubAccount: (...args) =>
      createSubAccount(accountId, signingCosmWasmClient, apiUrl, ...args),
    deposit: (...args) =>
      deposit(accountId, signingCosmWasmClient, apiUrl, ...args),
    execute: (...args) =>
      execute(accountId, signingCosmWasmClient, apiUrl, ...args),
    withdraw: (...args) =>
      withdraw(accountId, signingCosmWasmClient, apiUrl, ...args),
    getManagerClientFromApi: (...args) =>
      getManagerClientFromApi(
        accountId,
        signingCosmWasmClient,
        apiUrl,
        ...args,
      ),
    getProxyClientFromApi: (...args) =>
      getProxyClientFromApi(accountId, signingCosmWasmClient, apiUrl, ...args),
    removeNamespace: (...args) =>
      removeNamespace(accountId, signingCosmWasmClient, apiUrl, ...args),
  }
}
