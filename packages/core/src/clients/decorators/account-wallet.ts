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
import { withdraw } from '../../actions/account/wallet/withdraw'
import { VersionControlTypes } from '../../codegen/abstract/index'
import { CutArgs } from '../../types/with-args'

type CutSpecificArgsFromParameter<T extends (payload: any) => any> = CutArgs<
  {
    readonly accountId: VersionControlTypes.AccountId
    readonly signingCosmWasmClient: SigningCosmWasmClient
    readonly apiUrl: string
    readonly sender: string
  },
  T
>

export type AccountWalletActions = {
  claimNamespace(
    args: CutSpecificArgsFromParameter<typeof claimNamespace>,
  ): ReturnType<typeof claimNamespace>
  createSubAccount(
    args: CutSpecificArgsFromParameter<typeof createSubAccount>,
  ): ReturnType<typeof createSubAccount>
  createRemoteAccount(
    args: CutSpecificArgsFromParameter<typeof createRemoteAccount>,
  ): ReturnType<typeof createRemoteAccount>
  deposit(
    args: CutSpecificArgsFromParameter<typeof deposit>,
  ): ReturnType<typeof deposit>
  execute(
    args: CutSpecificArgsFromParameter<typeof execute>,
  ): ReturnType<typeof execute>
  executeOnModule(
    args: CutSpecificArgsFromParameter<typeof executeOnModule>,
  ): ReturnType<typeof executeOnModule>
  executeOnRemote(
    args: CutSpecificArgsFromParameter<typeof executeOnRemote>,
  ): ReturnType<typeof executeOnRemote>
  executeOnRemoteModule(
    args: CutSpecificArgsFromParameter<typeof executeOnRemoteModule>,
  ): ReturnType<typeof executeOnRemoteModule>
  getManagerClientFromApi(
    args: CutSpecificArgsFromParameter<typeof getManagerClientFromApi>,
  ): ReturnType<typeof getManagerClientFromApi>
  getProxyClientFromApi(
    args: CutSpecificArgsFromParameter<typeof getProxyClientFromApi>,
  ): ReturnType<typeof getProxyClientFromApi>
  revokeNamespace(
    args: CutSpecificArgsFromParameter<typeof revokeNamespace>,
  ): ReturnType<typeof revokeNamespace>
  withdraw(
    args: CutSpecificArgsFromParameter<typeof withdraw>,
  ): ReturnType<typeof withdraw>
}

export function accountWalletActions(
  accountId: VersionControlTypes.AccountId,
  signingCosmWasmClient: SigningCosmWasmClient,
  sender: string,
  apiUrl: string,
): AccountWalletActions {
  return {
    claimNamespace: ({ args, ...rest }) =>
      claimNamespace({
        args: { ...args, accountId, signingCosmWasmClient, apiUrl, sender },
        ...rest,
      }),
    createSubAccount: ({ args, ...rest }) =>
      createSubAccount({
        args: { ...args, accountId, signingCosmWasmClient, apiUrl, sender },
        ...rest,
      }),
    createRemoteAccount: ({ args, ...rest }) =>
      createRemoteAccount({
        args: { ...args, accountId, signingCosmWasmClient, apiUrl, sender },
        ...rest,
      }),
    deposit: ({ args, ...rest }) =>
      deposit({
        args: { ...args, accountId, signingCosmWasmClient, apiUrl, sender },
        ...rest,
      }),
    execute: ({ args, ...rest }) =>
      execute({
        args: { ...args, accountId, signingCosmWasmClient, apiUrl, sender },
        ...rest,
      }),
    executeOnModule: ({ args, ...rest }) =>
      executeOnModule({
        args: { ...args, accountId, signingCosmWasmClient, apiUrl, sender },
        ...rest,
      }),
    executeOnRemote: ({ args, ...rest }) =>
      executeOnRemote({
        args: { ...args, accountId, signingCosmWasmClient, apiUrl, sender },
        ...rest,
      }),
    executeOnRemoteModule: ({ args, ...rest }) =>
      executeOnRemoteModule({
        args: { ...args, accountId, signingCosmWasmClient, apiUrl, sender },
        ...rest,
      }),
    withdraw: ({ args, ...rest }) =>
      withdraw({
        args: { ...args, accountId, signingCosmWasmClient, apiUrl, sender },
        ...rest,
      }),
    getManagerClientFromApi: ({ args, ...rest }) =>
      getManagerClientFromApi({
        args: { ...args, accountId, signingCosmWasmClient, apiUrl, sender },
        ...rest,
      }),
    getProxyClientFromApi: ({ args, ...rest }) =>
      getProxyClientFromApi({
        args: { ...args, accountId, signingCosmWasmClient, apiUrl, sender },
        ...rest,
      }),
    revokeNamespace: ({ args, ...rest }) =>
      revokeNamespace({
        args: { ...args, accountId, signingCosmWasmClient, apiUrl, sender },
        ...rest,
      }),
  }
}
