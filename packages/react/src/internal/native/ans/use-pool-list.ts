import { AnsHostQueryMsgBuilder } from '@abstract-money/core'
import { type PoolAddressListResponse } from '@abstract-money/core/native/ans-host/AnsHost.types'
import { useQuerySmart } from 'graz'

type PoolListMsg = Extract<
  ReturnType<typeof AnsHostQueryMsgBuilder.poolList>,
  { pool_list: unknown }
>

type PoolListMsgBuilderParameters = Parameters<
  typeof AnsHostQueryMsgBuilder.poolList
>

type UsePoolListArgs = {
  contractAddress?: string
} & PoolListMsgBuilderParameters[0]

function buildPoolListMsg(...args: PoolListMsgBuilderParameters): PoolListMsg {
  return AnsHostQueryMsgBuilder.poolList(...args) as PoolListMsg
}

export function usePoolList({
  contractAddress,
  ...restInput
}: UsePoolListArgs) {
  const { data: poolList, ...restOutput } = useQuerySmart<
    PoolAddressListResponse,
    Error
  >({ address: contractAddress, queryMsg: buildPoolListMsg(restInput) })

  return { poolList, ...restOutput }
}
