import { AnsHostQueryMsgBuilder } from '@abstract-money/core'
import { type PoolMetadataListResponse } from '@abstract-money/core/native/ans-host/AnsHost.types'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type PoolMetadataListMsg = Extract<
  ReturnType<typeof AnsHostQueryMsgBuilder.poolMetadataList>,
  { pool_metadata_list: unknown }
>

type PoolMetadataListMsgBuilderParameters = Parameters<
  typeof AnsHostQueryMsgBuilder.poolMetadataList
>

type UsePoolMetadataListArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & PoolMetadataListMsgBuilderParameters[0]

function buildPoolMetadataListMsg(
  ...args: PoolMetadataListMsgBuilderParameters
): PoolMetadataListMsg {
  return AnsHostQueryMsgBuilder.poolMetadataList(...args) as PoolMetadataListMsg
}

export function usePoolMetadataList({
  contractAddress,
  client,
  ...restInput
}: UsePoolMetadataListArgs) {
  const { data: poolMetadataList, ...restOutput } = useQuerySmart<
    PoolMetadataListResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildPoolMetadataListMsg(restInput),
  })

  return { poolMetadataList, ...restOutput }
}
