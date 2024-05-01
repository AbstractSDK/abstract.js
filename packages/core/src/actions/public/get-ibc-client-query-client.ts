import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { IbcClientQueryClient } from '../../codegen/abstract'

export type GetIbcClientQueryClientParameters = {
  cosmWasmClient: CosmWasmClient
  ibcClientAddress: string
}

export function getIbcClientQueryClient({
  cosmWasmClient,
  ibcClientAddress,
}: GetIbcClientQueryClientParameters) {
  return new IbcClientQueryClient(cosmWasmClient, ibcClientAddress)
}
