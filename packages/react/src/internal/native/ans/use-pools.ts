import { AnsHostQueryMsgBuilder } from '@abstract-money/core'
import { type PoolsResponse } from '@abstract-money/core/native/ans-host/AnsHost.types'
import { useQuerySmart } from 'graz'

type PoolsMsg = Extract<
  ReturnType<typeof AnsHostQueryMsgBuilder.pools>,
  { pools: unknown }
>

type PoolsMsgBuilderParameters = Parameters<typeof AnsHostQueryMsgBuilder.pools>

type UsePoolsArgs = { contractAddress?: string } & PoolsMsgBuilderParameters[0]

function buildPoolsMsg(...args: PoolsMsgBuilderParameters): PoolsMsg {
  return AnsHostQueryMsgBuilder.pools(...args) as PoolsMsg
}

export function usePools({ contractAddress, ...restInput }: UsePoolsArgs) {
  const { data: pools, ...restOutput } = useQuerySmart<PoolsResponse, Error>(
    contractAddress,
    buildPoolsMsg(restInput),
  )

  return { pools, ...restOutput }
}
