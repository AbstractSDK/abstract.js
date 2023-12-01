import { Cw20IcsQueryMsgBuilder } from '@abstract-money/core'
import { type ListAllowedResponse } from '@abstract-money/core/cw-plus/Cw20Ics.types'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type ListAllowedMsg = Extract<
  ReturnType<typeof Cw20IcsQueryMsgBuilder.listAllowed>,
  { list_allowed: unknown }
>

type ListAllowedMsgBuilderParameters = Parameters<
  typeof Cw20IcsQueryMsgBuilder.listAllowed
>

type UseListAllowedArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & ListAllowedMsgBuilderParameters[0]

function buildListAllowedMsg(
  ...args: ListAllowedMsgBuilderParameters
): ListAllowedMsg {
  return Cw20IcsQueryMsgBuilder.listAllowed(...args) as ListAllowedMsg
}

export function useListAllowed({
  contractAddress,
  client,
  ...restInput
}: UseListAllowedArgs) {
  const { data: allowed, ...restOutput } = useQuerySmart<
    ListAllowedResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildListAllowedMsg(restInput),
  })

  return { allowed, ...restOutput }
}
