import { OverrideProperties } from 'type-fest'
import { predictXionAccountIdByExternalOwner } from '../public'
import {
  CreateXionAccountParameters,
  createXionAccount,
} from './create-xion-account'

export type CreateXionAccountExternallyOwnedParameters = Omit<
  OverrideProperties<CreateXionAccountParameters, { owner: string }>,
  'accountId'
>

/**
 * Create a XION account with an externally owned owner, such as a wallet.
 * @param signingCosmWasmClient
 * @param owner
 */
export async function createXionAccountExternalOwner({
  owner,
  ...params
}: CreateXionAccountExternallyOwnedParameters) {
  const predictedAccountId = await predictXionAccountIdByExternalOwner({
    cosmWasmClient: params.signingCosmWasmClient,
    owner,
  })

  return createXionAccount({
    ...params,
    accountId: predictedAccountId,
    owner: {
      monarchy: {
        monarch: owner,
      },
    },
  })
}
