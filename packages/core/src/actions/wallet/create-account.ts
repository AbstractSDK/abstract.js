import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { CamelCasedProperties } from 'type-fest'
import { AccountTypes } from '../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../types/parameters'
import { WithOptional } from '../../types/utils'
import { ABSTRACT_NAMESPACE, accountIdToParameter } from '../../utils'
import { parseCreateAccountExecuteResult } from '../../utils/account-factory/parse-create-account-execute-result'
import { chainIdToName } from '../../utils/chain-registry'
import { getVersionControlAddressFromApi } from '../get-version-control-address-from-api'
import { getAppModuleCodeIdFromVersionControl } from '../public/get-app-module-code-id-from-version-control'
import { CommonModuleNames } from '../public/types'

export type CreateAccountParameters = WithCosmWasmSignOptions<
  {
    signingCosmWasmClient: SigningCosmWasmClient
    apiUrl: string
    sender: string
    enableIbc?: boolean
  } & CamelCasedProperties<
    WithOptional<AccountTypes.InstantiateMsg, 'install_modules' | 'owner'>
  >
>
export async function createAccount({
  signingCosmWasmClient,
  apiUrl,
  sender,
  installModules = [],
  description,
  name,
  namespace,
  authenticator,
  link,
  accountId,
  enableIbc,
  owner,
  fee,
  memo,
  funds,
}: CreateAccountParameters) {
  const chainId = await signingCosmWasmClient.getChainId()
  const chainName = chainIdToName(chainId)

  if (
    enableIbc &&
    !installModules.some(
      ({ module }) =>
        module.name === CommonModuleNames.IBC_CLIENT &&
        module.namespace === ABSTRACT_NAMESPACE,
    )
  ) {
    installModules.push({
      module: {
        name: CommonModuleNames.IBC_CLIENT,
        namespace: ABSTRACT_NAMESPACE,
        version: 'latest',
      },
    })
  }

  const versionControlAddress = await getVersionControlAddressFromApi({
    apiUrl,
    chainName,
  })

  const accountCodeId = await getAppModuleCodeIdFromVersionControl({
    cosmWasmClient: signingCosmWasmClient,
    versionControlAddress,
    moduleId: 'abstract:account',
    version: 'latest',
  })

  const instantiateMsg: AccountTypes.InstantiateMsg = {
    owner: owner || {
      Monarchy: {
        monarch: sender,
      },
    },
    install_modules: installModules,
    description,
    name,
    namespace,
    link,
    account_id: accountId ? accountIdToParameter(accountId) : undefined,
    authenticator,
  }

  // @TODO: parameter validation
  const result = await signingCosmWasmClient.instantiate(
    sender,
    accountCodeId,
    instantiateMsg,
    'Abstract Account',
    fee,
    {
      memo,
      funds,
      admin: sender,
    },
  )

  return parseCreateAccountExecuteResult(result, chainName)
}
