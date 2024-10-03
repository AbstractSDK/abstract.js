import { cosmosWasmExecuteMsg } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { AccountTypes, VersionControlTypes } from '../../../codegen/abstract'
import { CosmosMsgForEmpty } from '../../../codegen/abstract/cosmwasm-codegen/Account.types'
import { simulateRemoteMsg } from '../../simulate-remote-msg'
import { getRemoteAccountProxies } from './get-remote-account-proxies'

export type SimulateExecuteRemoteAccountParameters = {
  accountId: VersionControlTypes.AccountId
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
 * @param managerMsg
 * @experimental
 */
export async function simulateExecuteRemoteAccount({
  accountId,
  cosmWasmClient,
  apiUrl,
  hostChainName,
  accountMsg,
}: SimulateExecuteRemoteAccountParameters) {
  const remoteProxies = await getRemoteAccountProxies({
    accountId,
    cosmWasmClient,
    apiUrl,
  })

  const remoteAccountAddress = remoteProxies[hostChainName]
  if (!remoteAccountAddress) {
    throw new Error(`No remote proxy found for chain ${hostChainName}`)
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
