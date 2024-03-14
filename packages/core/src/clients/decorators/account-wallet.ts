import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { claimNamespace } from '../../actions/account/wallet/claim-namespace'
import { createSubAccount } from '../../actions/account/wallet/create-sub-account'
import { deposit } from '../../actions/account/wallet/deposit'
import { execute } from '../../actions/account/wallet/execute'
import { getManagerClientFromApi } from '../../actions/account/wallet/get-manager-client-from-api'
import { getProxyClientFromApi } from '../../actions/account/wallet/get-proxy-client-from-api'
import { revokeNamespace } from '../../actions/account/wallet/remove-namespace'
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
  deposit(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<typeof deposit>,
  ): ReturnType<typeof deposit>
  execute(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<typeof execute>,
  ): ReturnType<typeof execute>
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
  withdraw(
    parameters: ExtractAndOmitDecoratedParametersFromParameters<
      typeof withdraw
    >,
  ): ReturnType<typeof withdraw>
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
    withdraw: (parameters) =>
      withdraw({
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
