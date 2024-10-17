import { cosmosWasmExecuteMsg } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { AccountTypes, RegistryTypes } from '../../../codegen/abstract'
import { CosmosMsgForEmpty } from '../../../codegen/abstract/cosmwasm-codegen/Account.types'
import { simulateRemoteMsg } from '../../simulate-remote-msg'
import { getRemoteAccounts } from './get-remote-accounts'

export type SimulateExecuteRemoteAccountParameters = {
  accountId: RegistryTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
  hostChainName: string
  accountMsg: AccountTypes.ExecuteMsg
}

/**
 * Simulate messages to be executed on a remote account on a remote chain. This should be run before calling `{@link AccountPublicClient#executeRemote}`
 * @param accountId
 * @param cosmWasmClient
 * @param apiUrl
 * @param hostChainName
 * @param accountMsg
 * @experimental
 */
export async function simulateExecuteRemoteAccount({
  accountId,
  cosmWasmClient,
  apiUrl,
  hostChainName,
  accountMsg,
}: SimulateExecuteRemoteAccountParameters) {
  const remoteProxies = await getRemoteAccounts({
    accountId,
    cosmWasmClient,
    apiUrl,
  })

  const remoteAccountAddress = remoteProxies[hostChainName]
  if (!remoteAccountAddress) {
    throw new Error(`No remote account found for chain ${hostChainName}`)
  }

  const cosmosAccountMsg: CosmosMsgForEmpty = cosmosWasmExecuteMsg(
    remoteAccountAddress,
    accountMsg,
    [],
  )

  return simulateRemoteMsg({
    apiUrl,
    hostChainName,
    msgs: cosmosAccountMsg,
  })
}
