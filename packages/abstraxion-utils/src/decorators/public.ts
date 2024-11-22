import { ExtractAndPartializeParameters } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getXionAccountByExternalOwner } from '../actions/public/get-xion-account-by-external-owner'
import { predictXionAccountIdByExternalOwner } from '../actions/public/predict-xion-account-id-by-external-owner'

type ExtractAndPartializeDecoratedParametersFromParameters<
  fn extends (payload: any) => any,
> = ExtractAndPartializeParameters<fn, 'cosmWasmClient' | 'apiUrl'>

/**
 * "Public" query actions available for the Abstract infrastructure.
 * Also see {@link AbstractBaseActions} for more public query actions.
 */
export type XionPublicActions = {
  predictXionAccountIdByExternalOwner(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof predictXionAccountIdByExternalOwner
    >,
  ): ReturnType<typeof predictXionAccountIdByExternalOwner>
  getXionAccountByExternalOwner(
    parameters: ExtractAndPartializeDecoratedParametersFromParameters<
      typeof getXionAccountByExternalOwner
    >,
  ): ReturnType<typeof getXionAccountByExternalOwner>
}

export function xionPublicActions(
  cosmWasmClient: CosmWasmClient,
  apiUrl: string,
): XionPublicActions {
  return {
    predictXionAccountIdByExternalOwner: ({ extra, ...parameters }) =>
      predictXionAccountIdByExternalOwner({
        cosmWasmClient,
        apiUrl,
        ...parameters,
        ...extra,
      }),
    getXionAccountByExternalOwner: ({ extra, ...parameters }) =>
      getXionAccountByExternalOwner({
        cosmWasmClient,
        apiUrl,
        ...parameters,
        ...extra,
      }),
  }
}
