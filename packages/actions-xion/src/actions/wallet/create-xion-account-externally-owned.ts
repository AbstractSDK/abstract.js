import { OverrideProperties } from 'type-fest'
import {
  CreateXionAccountParameters,
  createXionAccount,
} from './create-xion-account'

export type CreateXionAccountExternallyOwnedParameters = OverrideProperties<
  CreateXionAccountParameters,
  { owner: string }
>

/**
 * Create a XION account with an externally owned owner, such as a wallet.
 * @param signingCosmWasmClient
 * @param owner
 */
export async function createXionAccountExternallyOwned({
  owner,
  ...params
}: CreateXionAccountExternallyOwnedParameters) {
  return createXionAccount({
    ...params,
    owner: {
      monarchy: {
        monarch: owner,
      },
    },
  })
}
