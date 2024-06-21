import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { ProxyTypes } from '../codegen/abstract'
import { MaybeArray } from '../types/utils'
import { simulateWasmCosmosMsgs } from '../utils/cosmos'
import { getCometClientFromApi } from './get-comet-client-from-api'
import { getVersionControlAddressFromApi } from './get-version-control-address-from-api'
import { getIbcHostAddressFromVersionControl } from './public/get-ibc-host-address-from-version-control'

export type GetSimulationResultParameters = {
  apiUrl: string
  chainName: string
  sender: string
  msgs: MaybeArray<ProxyTypes.CosmosMsgForEmpty>
}

/**
 * Simulate messages to be executed.
 * @param accountId
 * @param apiUrl
 * @param msgs
 * @experimental
 * */
export async function getSimulationResultFromApi({
  apiUrl,
  chainName,
  sender,
  msgs,
}: GetSimulationResultParameters) {
  const comet = await getCometClientFromApi({
    apiUrl,
    chainName: chainName,
  })

  return simulateWasmCosmosMsgs(
    comet,
    Array.isArray(msgs) ? msgs : [msgs],
    sender,
  )
}
