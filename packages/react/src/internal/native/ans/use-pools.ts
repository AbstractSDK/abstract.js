import { AnsHostTypes, AnsHostQueryMsgBuilder } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type PoolsMsg = Extract<
  ReturnType<typeof AnsHostQueryMsgBuilder.pools>,
  { pools: unknown }
>

type PoolsMsgBuilderParameters = Parameters<typeof AnsHostQueryMsgBuilder.pools>

type UsePoolsArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & PoolsMsgBuilderParameters[0]

function buildPoolsMsg(...args: PoolsMsgBuilderParameters): PoolsMsg {
  return AnsHostQueryMsgBuilder.pools(...args) as PoolsMsg
}

export function usePools({
  contractAddress,
  client,
  ...restInput
}: UsePoolsArgs) {
  const { data: pools, ...restOutput } = useQuerySmart<
    AnsHostTypes.PoolsResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildPoolsMsg(restInput),
  })

  return { pools, ...restOutput }
}
