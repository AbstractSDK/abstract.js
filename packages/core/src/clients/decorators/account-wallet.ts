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
import { SliceFirstFour } from '../../types/utils'

export type AccountWalletActions = {
  claimNamespace(
    ...args: SliceFirstFour<Parameters<typeof claimNamespace>>
  ): ReturnType<typeof claimNamespace>
  createSubAccount(
    ...args: SliceFirstFour<Parameters<typeof createSubAccount>>
  ): ReturnType<typeof createSubAccount>
  deposit(
    ...args: SliceFirstFour<Parameters<typeof deposit>>
  ): ReturnType<typeof deposit>
  execute(
    ...args: SliceFirstFour<Parameters<typeof execute>>
  ): ReturnType<typeof execute>
  getManagerClientFromApi(
    ...args: SliceFirstFour<Parameters<typeof getManagerClientFromApi>>
  ): ReturnType<typeof getManagerClientFromApi>
  getProxyClientFromApi(
    ...args: SliceFirstFour<Parameters<typeof getProxyClientFromApi>>
  ): ReturnType<typeof getProxyClientFromApi>
  removeNamespace(
    ...args: SliceFirstFour<Parameters<typeof removeNamespace>>
  ): ReturnType<typeof removeNamespace>
  withdraw(
    ...args: SliceFirstFour<Parameters<typeof withdraw>>
  ): ReturnType<typeof withdraw>
}

export function accountWalletActions(
  accountId: VersionControlTypes.AccountId,
  signingCosmWasmClient: SigningCosmWasmClient,
  sender: string,
  apiUrl: string,
): AccountWalletActions {
  return {
    claimNamespace: (...args) =>
      claimNamespace(accountId, signingCosmWasmClient, apiUrl, sender, ...args),
    createSubAccount: (...args) =>
      createSubAccount(
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
        ...args,
      ),
    deposit: (...args) =>
      deposit(accountId, signingCosmWasmClient, apiUrl, sender, ...args),
    execute: (...args) =>
      execute(accountId, signingCosmWasmClient, apiUrl, sender, ...args),
    withdraw: (...args) =>
      withdraw(accountId, signingCosmWasmClient, apiUrl, sender, ...args),
    getManagerClientFromApi: (...args) =>
      getManagerClientFromApi(
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
        ...args,
      ),
    getProxyClientFromApi: (...args) =>
      getProxyClientFromApi(
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
        ...args,
      ),
    removeNamespace: (...args) =>
      removeNamespace(
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
        ...args,
      ),
  }
}
