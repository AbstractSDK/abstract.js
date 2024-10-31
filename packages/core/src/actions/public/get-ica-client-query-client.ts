import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { IcaClientQueryClient } from '../../codegen/abstract'

export type GetIcaClientQueryClientParameters = {
  cosmWasmClient: CosmWasmClient
  icaClientAddress: string
}

export function getIcaClientQueryClient({
  cosmWasmClient,
  icaClientAddress,
}: GetIcaClientQueryClientParameters) {
  return new IcaClientQueryClient(cosmWasmClient, icaClientAddress)
}
