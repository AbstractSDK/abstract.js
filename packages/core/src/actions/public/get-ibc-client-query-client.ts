import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import {
  AnsHostQueryClient,
  IbcClientQueryClient,
} from '../../codegen/abstract'
import { WithArgs } from '../../types/with-args'

export type GetIbcClientQueryClientParameters = WithArgs<{
  cosmWasmClient: CosmWasmClient
  ibcClientAddress: string
}>

export function getIbcClientQueryClient({
  args: { cosmWasmClient, ibcClientAddress },
}: GetIbcClientQueryClientParameters) {
  return new IbcClientQueryClient(cosmWasmClient, ibcClientAddress)
}
