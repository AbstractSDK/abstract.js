import { AnsHostQueryMsgBuilder } from '@abstract-money/core'
import { type PoolMetadataListResponse } from '@abstract-money/core/native/ans-host/AnsHost.types'
import { useQuerySmart } from 'graz'

type PoolMetadataListMsg = Extract<
  ReturnType<typeof AnsHostQueryMsgBuilder.poolMetadataList>,
  { pool_metadata_list: unknown }
>

type PoolMetadataListMsgBuilderParameters = Parameters<
  typeof AnsHostQueryMsgBuilder.poolMetadataList
>

type UsePoolMetadataListArgs = {
  contractAddress?: string
} & PoolMetadataListMsgBuilderParameters[0]

function buildPoolMetadataListMsg(
  ...args: PoolMetadataListMsgBuilderParameters
): PoolMetadataListMsg {
  return AnsHostQueryMsgBuilder.poolMetadataList(...args) as PoolMetadataListMsg
}

export function usePoolMetadataList({
  contractAddress,
  ...restInput
}: UsePoolMetadataListArgs) {
  const { data: poolMetadataList, ...restOutput } = useQuerySmart<
    PoolMetadataListResponse,
    Error
  >({ address: contractAddress, queryMsg: buildPoolMetadataListMsg(restInput) })

  return { poolMetadataList, ...restOutput }
}
