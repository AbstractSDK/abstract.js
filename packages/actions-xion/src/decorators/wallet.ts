import { ExtractAndPartializeParameters } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { createXionAccount } from '../actions/wallet/create-xion-account'
import { createXionAccountExternalOwner } from '../actions/wallet/create-xion-account-external-owner'

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
  createXionAccountExternalOwner(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof createXionAccountExternalOwner
    >,
  ): ReturnType<typeof createXionAccountExternalOwner>
}

export function xionWalletActions(
  signingCosmWasmClient: SigningCosmWasmClient,
  sender: string,
  apiUrl: string,
): XionWalletActions {
  // TODO: update the registry to include the xion types
  return {
    createXionAccount: ({ extra, ...parameters }) =>
      createXionAccount({
        signingCosmWasmClient,
        sender,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    createXionAccountExternalOwner: ({ extra, ...parameters }) =>
      createXionAccountExternalOwner({
        signingCosmWasmClient,
        sender,
        apiUrl,
        ...parameters,
        ...extra,
      }),
  }
}
