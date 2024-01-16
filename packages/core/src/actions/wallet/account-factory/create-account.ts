import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { AccountFactoryClient } from 'src/codegen/abstract'
import { SliceFirst, WithOptional } from 'src/types/utils'
import { parseCreateAccountExecuteResult } from 'src/utils/account-factory/parse-create-account-execute-result'
import { getAccountFactoryClientFromApi } from './get-account-factory-client-from-api'

export async function createAccount(
  cosmWasmClient: SigningCosmWasmClient,
  apiUrl: string,
  sender: string,
  {
    installModules = [],
    baseAsset,
    description,
    name,
    namespace,
    governance,
    link,
  }: WithOptional<
    Parameters<typeof AccountFactoryClient.prototype.createAccount>[0],
    'installModules'
  >,
  ...params: SliceFirst<
    Parameters<typeof AccountFactoryClient.prototype.createAccount>
  >
) {
  const chainId = await cosmWasmClient.getChainId()
  const accountFactoryClient = await getAccountFactoryClientFromApi(
    cosmWasmClient,
    apiUrl,
    sender,
  )

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
    },
    ...params,
  )

  return parseCreateAccountExecuteResult(result, chainId)
}
