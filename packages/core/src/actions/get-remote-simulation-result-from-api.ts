import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { ProxyTypes } from '../codegen/abstract'
import { MaybeArray } from '../types/utils'
import { simulateWasmCosmosMsgs } from '../utils/cosmos'
import { getCometClientFromApi } from './get-comet-client-from-api'
import { getVersionControlAddressFromApi } from './get-version-control-address-from-api'
import { getIbcHostAddressFromVersionControl } from './public/get-ibc-host-address-from-version-control'

export type GetRemoteSimulationResultParameters = {
  apiUrl: string
  remoteChainName: string
  msgs: MaybeArray<ProxyTypes.CosmosMsgForEmpty>
}

type ChainName = string
type MaybeProxyAddress = string | null

/**
 * Simulate messages to be executed on a remote chain.
 * @param accountId
 * @param apiUrl
 * @param remoteChainName
 * @param msgs
 */
export async function getRemoteSimulationResultFromApi({
  apiUrl,
  remoteChainName,
  msgs,
}: GetRemoteSimulationResultParameters) {
  // TODO: these queries could be combined
  const remoteVcAddress = await getVersionControlAddressFromApi({
    apiUrl,
    chainName: remoteChainName,
  })

  const remoteComet = await getCometClientFromApi({
    apiUrl,
    chainName: remoteChainName,
  })

  const remoteCwClient = await CosmWasmClient.create(remoteComet)

  // TODO: this could be retrieved from the API?
  const ibcHostAddress = await getIbcHostAddressFromVersionControl({
    cosmWasmClient: remoteCwClient,
    versionControlAddress: remoteVcAddress,
  })

  return simulateWasmCosmosMsgs(
    remoteComet,
    Array.isArray(msgs) ? msgs : [msgs],
    ibcHostAddress,
  )
}
