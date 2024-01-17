import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getVersionControlClientFromApi } from 'src/actions/wallet/version-control/get-version-control-client-from-api'
import { VersionControlClient, VersionControlTypes } from 'src/codegen/abstract'
import { SliceFirst } from 'src/types/utils'
import { accountIdToParameter } from 'src/utils/account-id'

export async function claimNamespace(
  accountId: VersionControlTypes.AccountId,
  signingCosmWasmClient: SigningCosmWasmClient,
  apiUrl: string,
  sender: string,
  namespace: string,
  ...rest: SliceFirst<
    Parameters<typeof VersionControlClient.prototype.claimNamespace>
  >
) {
  const versionControlClient = await getVersionControlClientFromApi(
    signingCosmWasmClient,
    apiUrl,
    sender,
  )
  return versionControlClient.claimNamespace(
    { accountId: accountIdToParameter(accountId), namespace },
    ...rest,
  )
}
