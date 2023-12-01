import { AnsHostQueryMsgBuilder } from '@abstract-money/core'
import { type PoolMetadatasResponse } from '@abstract-money/core/native/ans-host/AnsHost.types'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type PoolMetadatasMsg = Extract<
  ReturnType<typeof AnsHostQueryMsgBuilder.poolMetadatas>,
  { pool_metadatas: unknown }
>

type PoolMetadatasMsgBuilderParameters = Parameters<
  typeof AnsHostQueryMsgBuilder.poolMetadatas
>

type UsePoolMetadatasArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & PoolMetadatasMsgBuilderParameters[0]

function buildPoolMetadatasMsg(
  ...args: PoolMetadatasMsgBuilderParameters
): PoolMetadatasMsg {
  return AnsHostQueryMsgBuilder.poolMetadatas(...args) as PoolMetadatasMsg
}

export function usePoolMetadatas({
  contractAddress,
  client,
  ...restInput
}: UsePoolMetadatasArgs) {
  const { data: poolMetadatas, ...restOutput } = useQuerySmart<
    PoolMetadatasResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildPoolMetadatasMsg(restInput),
  })

  return { poolMetadatas, ...restOutput }
}
