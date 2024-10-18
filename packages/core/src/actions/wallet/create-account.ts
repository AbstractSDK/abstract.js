import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { CamelCasedProperties, Merge } from 'type-fest'
import { OverrideProperties } from 'type-fest'
import { AccountTypes, RegistryTypes } from '../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../types/parameters'
import { WithOptional } from '../../types/utils'
import { ABSTRACT_NAMESPACE, accountIdToParameter } from '../../utils'
import { parseCreateAccountExecuteResult } from '../../utils/account-factory/parse-create-account-execute-result'
import { chainIdToName } from '../../utils/chain-registry'
import { getRegistryAddressFromApi } from '../get-registry-address-from-api'
import { getAppModuleCodeIdFromRegistry } from '../public/get-app-module-code-id-from-registry'
import { CommonModuleNames } from '../public/types'

export type CreateAccountParameters = WithCosmWasmSignOptions<
  {
    signingCosmWasmClient: SigningCosmWasmClient
    apiUrl: string
    sender: string
    enableIbc?: boolean
  } & CamelCasedProperties<
    WithOptional<
      OverrideProperties<
        AccountTypes.InstantiateMsg,
        { account_id?: RegistryTypes.AccountId }
      >,
      'install_modules' | 'owner'
    >
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

  const registryAddress = await getRegistryAddressFromApi({
    apiUrl,
    chainName,
  })

  const accountCodeId = await getAppModuleCodeIdFromRegistry({
    cosmWasmClient: signingCosmWasmClient,
    registryAddress,
    moduleId: 'abstract:account',
    version: 'latest',
  })

  const instantiateMsg: AccountTypes.InstantiateMsg = {
    owner: owner || {
      monarchy: {
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
