import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlClient } from '../../../codegen/abstract'
import { WithArgsAndCosmWasmSignOptions } from '../../../types/with-args'
import { accountIdToParameter } from '../../../utils/account-id'
import { getVersionControlClientFromApi } from '../../wallet/get-version-control-client-from-api'

export type ClaimNamespaceParameters = WithArgsAndCosmWasmSignOptions<
  {
    signingCosmWasmClient: SigningCosmWasmClient
    apiUrl: string
    sender: string
    namespace: string
  } & Parameters<typeof VersionControlClient.prototype.claimNamespace>[0]
>

export async function claimNamespace({
  args: { signingCosmWasmClient, apiUrl, namespace, sender, accountId },
  fee,
  funds,
  memo,
}: ClaimNamespaceParameters) {
  const versionControlClient = await getVersionControlClientFromApi({
    args: { signingCosmWasmClient, apiUrl, sender },
  })
  return versionControlClient.claimNamespace(
    { accountId: accountIdToParameter(accountId), namespace },
    fee,
    memo,
    funds,
  )
}
