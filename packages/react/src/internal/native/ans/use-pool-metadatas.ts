import { AnsHostQueryMsgBuilder } from '@abstract-money/core'
import { type PoolMetadatasResponse } from '@abstract-money/core/native/ans-host/AnsHost.types'
import { useQuerySmart } from 'graz'

type PoolMetadatasMsg = Extract<
  ReturnType<typeof AnsHostQueryMsgBuilder.poolMetadatas>,
  { pool_metadatas: unknown }
>

type PoolMetadatasMsgBuilderParameters = Parameters<
  typeof AnsHostQueryMsgBuilder.poolMetadatas
>

type UsePoolMetadatasArgs = {
  contractAddress?: string
} & PoolMetadatasMsgBuilderParameters[0]

function buildPoolMetadatasMsg(
  ...args: PoolMetadatasMsgBuilderParameters
): PoolMetadatasMsg {
  return AnsHostQueryMsgBuilder.poolMetadatas(...args) as PoolMetadatasMsg
}

export function usePoolMetadatas({
  contractAddress,
  ...restInput
}: UsePoolMetadatasArgs) {
  const { data: poolMetadatas, ...restOutput } = useQuerySmart<
    PoolMetadatasResponse,
    Error
  >(contractAddress, buildPoolMetadatasMsg(restInput))

  return { poolMetadatas, ...restOutput }
}
