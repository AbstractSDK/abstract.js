import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { claimNamespace } from '../../actions/account/wallet/claim-namespace'
import { createRemoteAccount } from '../../actions/account/wallet/create-remote-account'
import { createSubAccount } from '../../actions/account/wallet/create-sub-account'
import { deposit } from '../../actions/account/wallet/deposit'
import { enableIbc } from '../../actions/account/wallet/enable-ibc'
import { execute } from '../../actions/account/wallet/execute'
import { executeOnModule } from '../../actions/account/wallet/execute-on-module'
import { executeOnRemoteManager } from '../../actions/account/wallet/execute-on-remote-manager'
import { executeOnRemoteModule } from '../../actions/account/wallet/execute-on-remote-module'
import { executeRemote } from '../../actions/account/wallet/execute-remote'
import { getManagerClientFromApi } from '../../actions/account/wallet/get-manager-client-from-api'
import { getProxyClientFromApi } from '../../actions/account/wallet/get-proxy-client-from-api'
import { installModules } from '../../actions/account/wallet/install-modules'
import { revokeNamespace } from '../../actions/account/wallet/remove-namespace'
import { requestFundsFromRemote } from '../../actions/account/wallet/request-remote-funds'
import { sendFundsToRemote } from '../../actions/account/wallet/send-funds-to-remote'
import { uninstallModule } from '../../actions/account/wallet/uninstall-module'
import { updateInfo } from '../../actions/account/wallet/update-info'
import { updateOwnership } from '../../actions/account/wallet/update-ownership'
import { updateStatus } from '../../actions/account/wallet/update-status'
import { upgradeModules } from '../../actions/account/wallet/upgrade-modules'
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
  withdraw(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof withdraw
    >,
  ): ReturnType<typeof withdraw>
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
  executeOnRemoteManager(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof executeOnRemoteManager
    >,
  ): ReturnType<typeof executeOnRemoteManager>
  executeOnRemoteModule(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof executeOnRemoteModule
    >,
  ): ReturnType<typeof executeOnRemoteModule>
  executeRemote(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof executeRemote
    >,
  ): ReturnType<typeof executeRemote>
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
  updateInfo(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof updateInfo
    >,
  ): ReturnType<typeof updateInfo>
  upgradeModules(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof upgradeModules
    >,
  ): ReturnType<typeof upgradeModules>
  installModules(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof installModules
    >,
  ): ReturnType<typeof installModules>
  uninstallModule(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof uninstallModule
    >,
  ): ReturnType<typeof uninstallModule>
  updateStatus(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof updateStatus
    >,
  ): ReturnType<typeof updateStatus>
  updateOwnership(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof updateOwnership
    >,
  ): ReturnType<typeof updateOwnership>
  enableIbc(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof enableIbc
    >,
  ): ReturnType<typeof enableIbc>
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
    upgradeModules: ({ extra, ...parameters }) =>
      upgradeModules({
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
        ...parameters,
        ...extra,
      }),
    installModules: ({ extra, ...parameters }) =>
      installModules({
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
        ...parameters,
        ...extra,
      }),
    uninstallModule: ({ extra, ...parameters }) =>
      uninstallModule({
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
        ...parameters,
        ...extra,
      }),
    executeOnRemoteManager: ({ extra, ...parameters }) =>
      executeOnRemoteManager({
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
    executeRemote: ({ extra, ...parameters }) =>
      executeRemote({
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
    updateStatus: ({ extra, ...parameters }) =>
      updateStatus({
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
        ...parameters,
        ...extra,
      }),
    updateInfo: ({ extra, ...parameters }) =>
      updateInfo({
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
        ...parameters,
        ...extra,
      }),
    updateOwnership: ({ extra, ...parameters }) =>
      updateOwnership({
        accountId,
        signingCosmWasmClient,
        apiUrl,
        sender,
        ...parameters,
        ...extra,
      }),
    enableIbc: ({ extra, ...parameters }) =>
      enableIbc({
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
  }
}
