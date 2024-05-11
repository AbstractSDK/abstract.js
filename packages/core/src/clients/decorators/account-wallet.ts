import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { claimNamespace } from '../../actions/account/wallet/claim-namespace'
import { createRemoteAccount } from '../../actions/account/wallet/create-remote-account'
import { createSubAccount } from '../../actions/account/wallet/create-sub-account'
import { deposit } from '../../actions/account/wallet/deposit'
import { execute } from '../../actions/account/wallet/execute'
import { executeOnModule } from '../../actions/account/wallet/execute-on-module'
import { executeOnRemote } from '../../actions/account/wallet/execute-on-remote'
import { executeOnRemoteModule } from '../../actions/account/wallet/execute-on-remote-module'
import { getManagerClientFromApi } from '../../actions/account/wallet/get-manager-client-from-api'
import { getProxyClientFromApi } from '../../actions/account/wallet/get-proxy-client-from-api'
import { revokeNamespace } from '../../actions/account/wallet/remove-namespace'
import { requestFundsFromRemote } from '../../actions/account/wallet/request-remote-funds'
import { sendFundsToRemote } from '../../actions/account/wallet/send-funds-to-remote'
import { updateSettings } from '../../actions/account/wallet/update-settings'
import { upgradeModule } from '../../actions/account/wallet/upgrade-module'
import { withdraw } from '../../actions/account/wallet/withdraw'
import { VersionControlTypes } from '../../codegen/abstract/index'
import { ExtractAndOmitParameters } from '../../types/parameters'

type ExtractAndOmitDecoratedParametersFromParameters<
  fn extends (payload: any) => any,
> = ExtractAndOmitParameters<
  fn,
  'accountId' | 'signingCosmWasmClient' | 'apiUrl' | 'sender'
>

export type AccountWalletActions = {
  claimNamespace(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof claimNamespace
    >,
  ): ReturnType<typeof claimNamespace>
  createSubAccount(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof createSubAccount
    >,
  ): ReturnType<typeof createSubAccount>
  createRemoteAccount(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof createRemoteAccount
    >,
  ): ReturnType<typeof createRemoteAccount>
  deposit(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<typeof deposit>,
  ): ReturnType<typeof deposit>
  execute(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<typeof execute>,
  ): ReturnType<typeof execute>
  executeOnModule(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof executeOnModule
    >,
  ): ReturnType<typeof executeOnModule>
  executeOnRemote(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof executeOnRemote
    >,
  ): ReturnType<typeof executeOnRemote>
  executeOnRemoteModule(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof executeOnRemoteModule
    >,
  ): ReturnType<typeof executeOnRemoteModule>
  sendFundsToRemote(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof sendFundsToRemote
    >,
  ): ReturnType<typeof sendFundsToRemote>
  requestFundsFromRemote(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof requestFundsFromRemote
    >,
  ): ReturnType<typeof requestFundsFromRemote>
  getManagerClientFromApi(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getManagerClientFromApi
    >,
  ): ReturnType<typeof getManagerClientFromApi>
  getProxyClientFromApi(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof getProxyClientFromApi
    >,
  ): ReturnType<typeof getProxyClientFromApi>
  revokeNamespace(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof revokeNamespace
    >,
  ): ReturnType<typeof revokeNamespace>
  upgradeModule(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof upgradeModule
    >,
  ): ReturnType<typeof upgradeModule>
  withdraw(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof withdraw
    >,
  ): ReturnType<typeof withdraw>
  updateSettings(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof updateSettings
    >,
  ): ReturnType<typeof updateSettings>
}

export function accountWalletActions(
  accountId: VersionControlTypes.AccountId,
  signingCosmWasmClient: SigningCosmWasmClient,
  sender: string,
  apiUrl: string,
): AccountWalletActions {
  return {
    claimNamespace: (parameters) =>
      claimNamespace({
        ...parameters,
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
      }),
    createSubAccount: (parameters) =>
      createSubAccount({
        ...parameters,
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
      }),
    createRemoteAccount: (parameters) =>
      createRemoteAccount({
        ...parameters,
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
      }),
    deposit: (parameters) =>
      deposit({
        ...parameters,
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
      }),
    execute: (parameters) =>
      execute({
        ...parameters,
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
      }),
    executeOnModule: (parameters) =>
      executeOnModule({
        ...parameters,
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
      }),
    upgradeModule: (parameters) =>
      upgradeModule({
        ...parameters,
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
      }),
    executeOnRemote: (parameters) =>
      executeOnRemote({
        ...parameters,
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
      }),
    executeOnRemoteModule: (parameters) =>
      executeOnRemoteModule({
        ...parameters,
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
      }),
    sendFundsToRemote: (parameters) =>
      sendFundsToRemote({
        ...parameters,
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
      }),
    requestFundsFromRemote: (parameters) =>
      requestFundsFromRemote({
        ...parameters,
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
      }),
    withdraw: (parameters) =>
      withdraw({
        ...parameters,
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
      }),
    updateSettings: (parameters) =>
      updateSettings({
        ...parameters,
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
      }),
    getManagerClientFromApi: (parameters) =>
      getManagerClientFromApi({
        ...parameters,
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
      }),
    getProxyClientFromApi: (parameters) =>
      getProxyClientFromApi({
        ...parameters,
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
      }),
    revokeNamespace: (parameters) =>
      revokeNamespace({
        ...parameters,
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
      }),
  }
}
