import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlClient } from '../../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { accountIdToParameter } from '../../../utils/account-id'
import { getVersionControlClientFromApi } from '../../wallet/get-version-control-client-from-api'

export type ClaimNamespaceParameters = WithCosmWasmSignOptions<
  {
    signingCosmWasmClient: SigningCosmWasmClient
    apiUrl: string
    sender: string
    namespace: string
  } & Parameters<typeof VersionControlClient.prototype.claimNamespace>[0]
>

export async function claimNamespace({
  signingCosmWasmClient,
  apiUrl,
  namespace,
  sender,
  accountId,
  fee,
  funds,
  memo,
}: ClaimNamespaceParameters) {
  const versionControlClient = await getVersionControlClientFromApi({
    signingCosmWasmClient,
    apiUrl,
    sender,
  })
  return versionControlClient.claimNamespace(
    { accountId: accountIdToParameter(accountId), namespace },
    fee,
    memo,
    funds,
  )
}
