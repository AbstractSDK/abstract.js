import { ExtractAndPartializeParameters } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { createXionAccount } from '../actions/wallet/create-xion-account'
import { createXionAccountExternallyOwned } from '../actions/wallet/create-xion-account-externally-owned'

type ExtractAndPartializeDecoratedParametersFromParameters<
  fn extends (payload: any) => any,
> = ExtractAndPartializeParameters<
  fn,
  'signingCosmWasmClient' | 'sender' | 'apiUrl'
>

/**
 * "Public" query actions available for the Abstract infrastructure.
 * Also see {@link AbstractBaseActions} for more public query actions.
 */
export type XionWalletActions = {
  createXionAccount(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof createXionAccount
    >,
  ): ReturnType<typeof createXionAccount>
  createXionAccountExternallyOwned(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof createXionAccountExternallyOwned
    >,
  ): ReturnType<typeof createXionAccountExternallyOwned>
}

export function xionWalletActions(
  signingCosmWasmClient: SigningCosmWasmClient,
  sender: string,
  apiUrl: string,
): XionWalletActions {
  // TODO: update the registry to include the xion types
  signingCosmWasmClient.registry
  return {
    createXionAccount: ({ extra, ...parameters }) =>
      createXionAccount({
        signingCosmWasmClient,
        sender,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    createXionAccountExternallyOwned: ({ extra, ...parameters }) =>
      createXionAccountExternallyOwned({
        signingCosmWasmClient,
        sender,
        apiUrl,
        ...parameters,
        ...extra,
      }),
  }
}
