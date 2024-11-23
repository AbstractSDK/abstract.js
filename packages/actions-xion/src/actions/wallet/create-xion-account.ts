import { parseCreateAccountExecuteResult } from '@abstract-money/core'
import {
  getAccountIdSalt,
  getInstantiate2AddressWithAccountId,
  jsonToUtf8,
} from '@abstract-money/core'
import { WithCosmWasmSignOptions } from '@abstract-money/core'
import {
  AccountTypes,
  RegistryTypes,
} from '@abstract-money/core/codegen/abstract'
import {
  MergedModuleInstallConfig,
  accountIdToParameter,
  chainIdToName,
  moduleInstallConfig,
} from '@abstract-money/core/utils'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import Long from 'long'
import { CamelCasedProperties, OverrideProperties } from 'type-fest'
import {
  MSG_REGISTER_ACCOUNT_TYPE_URL,
  MsgRegisterAccount,
  MsgRegisterAccountEncodeObject,
} from '../../types'

export type CreateXionAccountParameters = OverrideProperties<
  WithCosmWasmSignOptions<
    {
      signingCosmWasmClient: SigningCosmWasmClient
      apiUrl: string
      sender: string
    } & CamelCasedProperties<
      OverrideProperties<
        AccountTypes.InstantiateMsg,
        {
          account_id: RegistryTypes.AccountId
          authenticator: AccountTypes.InstantiateMsg['authenticator']
          install_modules?: MergedModuleInstallConfig[]
        }
      >
    >
  >,
  { funds?: RegistryTypes.Coin[] }
>

/**
 * Register a new Abstract Account on XION. Must provide an account id and allowlisted code-id.
 * @param signingCosmWasmClient
 * @param _apiUrl
 * @param sender
 * @param installModules
 * @param description
 * @param name
 * @param namespace
 * @param authenticator
 * @param link
 * @param accountId
 * @param codeId
 * @param owner
 * @param fee
 * @param memo
 * @param funds
 */
export async function createXionAccount({
  signingCosmWasmClient,
  apiUrl: _apiUrl,
  sender,
  installModules = [],
  description,
  name,
  namespace,
  authenticator,
  link,
  accountId,
  codeId,
  owner,
  fee,
  memo,
  funds = [],
}: CreateXionAccountParameters) {
  const chainId = await signingCosmWasmClient.getChainId()
  const chainName = chainIdToName(chainId)

  // TODO: verify that the code-id is whitelisted for XION

  const codeIdChecksum = await signingCosmWasmClient
    .getCodeDetails(codeId)
    .then(({ checksum }) => checksum)

  const instantiateSalt = await getAccountIdSalt(accountId)

  const _predictedAccountAddress = await getInstantiate2AddressWithAccountId(
    sender,
    codeIdChecksum,
    accountId,
  )

  const instantiateMsg: AccountTypes.InstantiateMsg = {
    code_id: codeId,
    owner,
    install_modules: installModules.map((m) => moduleInstallConfig(m)),
    description,
    name,
    namespace,
    link,
    account_id: accountIdToParameter(accountId),
    authenticator,
  } as const

  const register_msg: MsgRegisterAccount = {
    sender: sender,
    codeId: Long.fromNumber(codeId),
    msg: jsonToUtf8(instantiateMsg as unknown as Record<string, unknown>),
    funds: funds,
    salt: instantiateSalt,
  }

  const registrationMsg: MsgRegisterAccountEncodeObject = {
    typeUrl: MSG_REGISTER_ACCOUNT_TYPE_URL,
    value: register_msg,
  }

  const result = await signingCosmWasmClient.signAndBroadcast(
    sender,
    [registrationMsg],
    fee,
    memo,
  )

  return parseCreateAccountExecuteResult(result, chainName)
}
