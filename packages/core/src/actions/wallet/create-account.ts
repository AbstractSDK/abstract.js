import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { AccountFactoryClient } from '../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../types/parameters'
import { WithOptional } from '../../types/utils'
import { ABSTRACT_NAMESPACE, accountIdToParameter } from '../../utils'
import { parseCreateAccountExecuteResult } from '../../utils/account-factory/parse-create-account-execute-result'
import { chainIdToName } from '../../utils/chain-registry'
import { abstractModuleId } from '../../utils/modules/abstract-module-id'
import { getVersionControlAddressFromApi } from '../get-version-control-address-from-api'
import { getAbstractModuleVersion } from '../public/get-abstract-module-version'
import { getAppModuleCodeIdFromVersionControl } from '../public/get-app-module-code-id-from-version-control'
import { CommonModuleNames } from '../public/types'

export type CreateAccountParameters = WithCosmWasmSignOptions<
  {
    signingCosmWasmClient: SigningCosmWasmClient
    apiUrl: string
    sender: string
    enableIbc?: boolean
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
  enableIbc,
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

  // @TODO: parameter validation
  const result = await signingCosmWasmClient.instantiate(
    sender,
    accountCodeId,
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
