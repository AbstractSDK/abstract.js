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
import { ExtractAndPartializeParameters } from '../../types/parameters'

type ExtractAndPartializeDecoratedParametersFromParameters<
  fn extends (payload: any) => any,
> = ExtractAndPartializeParameters<
  fn,
  'accountId' | 'signingCosmWasmClient' | 'apiUrl' | 'sender'
>

export type AccountWalletActions = {
  claimNamespace(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof claimNamespace
    >,
  ): ReturnType<typeof claimNamespace>
  createSubAccount(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof createSubAccount
    >,
  ): ReturnType<typeof createSubAccount>
  createRemoteAccount(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof createRemoteAccount
    >,
  ): ReturnType<typeof createRemoteAccount>
  deposit(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof deposit
    >,
  ): ReturnType<typeof deposit>
  execute(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof execute
    >,
  ): ReturnType<typeof execute>
  executeOnModule(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof executeOnModule
    >,
  ): ReturnType<typeof executeOnModule>
  executeOnRemote(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof executeOnRemote
    >,
  ): ReturnType<typeof executeOnRemote>
  executeOnRemoteModule(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof executeOnRemoteModule
    >,
  ): ReturnType<typeof executeOnRemoteModule>
  sendFundsToRemote(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof sendFundsToRemote
    >,
  ): ReturnType<typeof sendFundsToRemote>
  requestFundsFromRemote(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof requestFundsFromRemote
    >,
  ): ReturnType<typeof requestFundsFromRemote>
  getManagerClientFromApi(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getManagerClientFromApi
    >,
  ): ReturnType<typeof getManagerClientFromApi>
  getProxyClientFromApi(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getProxyClientFromApi
    >,
  ): ReturnType<typeof getProxyClientFromApi>
  revokeNamespace(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof revokeNamespace
    >,
  ): ReturnType<typeof revokeNamespace>
  upgradeModule(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof upgradeModule
    >,
  ): ReturnType<typeof upgradeModule>
  withdraw(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof withdraw
    >,
  ): ReturnType<typeof withdraw>
  updateSettings(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
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
    claimNamespace: ({ extra, ...parameters }) =>
      claimNamespace({
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
        ...parameters,
        ...extra,
      }),
    createSubAccount: ({ extra, ...parameters }) =>
      createSubAccount({
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
        ...parameters,
        ...extra,
      }),
    createRemoteAccount: ({ extra, ...parameters }) =>
      createRemoteAccount({
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
        ...parameters,
        ...extra,
      }),
    deposit: ({ extra, ...parameters }) =>
      deposit({
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
        ...parameters,
        ...extra,
      }),
    execute: ({ extra, ...parameters }) =>
      execute({
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
        ...parameters,
        ...extra,
      }),
    executeOnModule: ({ extra, ...parameters }) =>
      executeOnModule({
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
        ...parameters,
        ...extra,
      }),
    upgradeModule: ({ extra, ...parameters }) =>
      upgradeModule({
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
        ...parameters,
        ...extra,
      }),
    executeOnRemote: ({ extra, ...parameters }) =>
      executeOnRemote({
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
        ...parameters,
        ...extra,
      }),
    executeOnRemoteModule: ({ extra, ...parameters }) =>
      executeOnRemoteModule({
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
        ...parameters,
        ...extra,
      }),
    sendFundsToRemote: ({ extra, ...parameters }) =>
      sendFundsToRemote({
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
        ...parameters,
        ...extra,
      }),
    requestFundsFromRemote: ({ extra, ...parameters }) =>
      requestFundsFromRemote({
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
        ...parameters,
        ...extra,
      }),
    withdraw: ({ extra, ...parameters }) =>
      withdraw({
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
        ...parameters,
        ...extra,
      }),
    updateSettings: ({ extra, ...parameters }) =>
      updateSettings({
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
        ...parameters,
        ...extra,
      }),
    getManagerClientFromApi: ({ extra, ...parameters }) =>
      getManagerClientFromApi({
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
        ...parameters,
        ...extra,
      }),
    getProxyClientFromApi: ({ extra, ...parameters }) =>
      getProxyClientFromApi({
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
        ...parameters,
        ...extra,
      }),
    revokeNamespace: ({ extra, ...parameters }) =>
      revokeNamespace({
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
        ...parameters,
        ...extra,
      }),
  }
}
