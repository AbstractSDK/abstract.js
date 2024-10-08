import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { AccountTypes } from '../codegen/abstract'
import { MaybeArray } from '../types/utils'
import { simulateWasmCosmosMsgs } from '../utils/cosmos'
import { getCometClientFromApi } from './get-comet-client-from-api'
import { getRegistryAddressFromApi } from './get-registry-address-from-api'
import { getIbcHostAddressFromRegistry } from './public/get-ibc-host-address-from-registry'

export type SimulateRemoteMsgParameters = {
  apiUrl: string
  hostChainName: string
  msgs: MaybeArray<AccountTypes.CosmosMsgForEmpty>
}

/**
 * Simulate messages to be executed on a remote chain. This simulates execution as the IBC host.
 * Not from API because it only retrieves the RPC / version control from API.
 * @param accountId
 * @param apiUrl
 * @param hostChainName
 * @param msgs
 * @experimental
 */
export async function simulateRemoteMsg({
  apiUrl,
  hostChainName,
  msgs,
}: SimulateRemoteMsgParameters) {
  // TODO: these queries could be combined
  const remoteVcAddress = await getRegistryAddressFromApi({
    apiUrl,
    chainName: hostChainName,
  })

  const remoteComet = await getCometClientFromApi({
    apiUrl,
    chainName: hostChainName,
  })

  const remoteCwClient = await CosmWasmClient.create(remoteComet)

  // TODO: this could be retrieved from the API?
  const ibcHostAddress = await getIbcHostAddressFromRegistry({
    cosmWasmClient: remoteCwClient,
    registryAddress: remoteVcAddress,
  })

  return simulateWasmCosmosMsgs(
    remoteComet,
    Array.isArray(msgs) ? msgs : [msgs],
    ibcHostAddress,
  )
}
