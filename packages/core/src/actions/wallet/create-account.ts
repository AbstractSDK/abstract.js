import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { AccountFactoryClient } from '../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../types/parameters'
import { WithOptional } from '../../types/utils'
import { accountIdToParameter } from '../../utils'
import { parseCreateAccountExecuteResult } from '../../utils/account-factory/parse-create-account-execute-result'
import { chainIdToName } from '../../utils/chain-registry'
import { getAccountFactoryClientFromApi } from './get-account-factory-client-from-api'

export type CreateAccountParameters = WithCosmWasmSignOptions<
  {
    signingCosmWasmClient: SigningCosmWasmClient
    apiUrl: string
    sender: string
  } & WithOptional<
    Parameters<typeof AccountFactoryClient.prototype.createAccount>[0],
    'installModules'
  >
>
export async function createAccount({
  signingCosmWasmClient,
  apiUrl,
  sender,
  installModules = [],
  baseAsset,
  description,
  name,
  namespace,
  governance,
  link,
  accountId,
  fee,
  memo,
  funds,
}: CreateAccountParameters) {
  const chainId = await signingCosmWasmClient.getChainId()
  const chainName = chainIdToName(chainId)
  const accountFactoryClient = await getAccountFactoryClientFromApi({
    signingCosmWasmClient,
    apiUrl,
    sender,
  })

  // @TODO: parameter validation
  const result = await accountFactoryClient.createAccount(
    {
      installModules,
      baseAsset,
      description,
      name,
      namespace,
      governance,
      link,
      accountId: accountId ? accountIdToParameter(accountId) : undefined,
    },
    fee,
    memo,
    funds,
  )

  return parseCreateAccountExecuteResult(result, chainName)
}
