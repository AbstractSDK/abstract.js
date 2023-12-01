import { AnsHostQueryMsgBuilder } from '@abstract-money/core'
import { type PoolAddressListResponse } from '@abstract-money/core/native/ans-host/AnsHost.types'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type PoolListMsg = Extract<
  ReturnType<typeof AnsHostQueryMsgBuilder.poolList>,
  { pool_list: unknown }
>

type PoolListMsgBuilderParameters = Parameters<
  typeof AnsHostQueryMsgBuilder.poolList
>

type UsePoolListArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & PoolListMsgBuilderParameters[0]

function buildPoolListMsg(...args: PoolListMsgBuilderParameters): PoolListMsg {
  return AnsHostQueryMsgBuilder.poolList(...args) as PoolListMsg
}

export function usePoolList({
  contractAddress,
  client,
  ...restInput
}: UsePoolListArgs) {
  const { data: poolList, ...restOutput } = useQuerySmart<
    PoolAddressListResponse,
    Error
  >({ address: contractAddress, client, queryMsg: buildPoolListMsg(restInput) })

  return { poolList, ...restOutput }
}
