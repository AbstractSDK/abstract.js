import { Cw4GroupQueryMsgBuilder } from '@abstract-money/core'
import { type ListMembersResponse } from '@abstract-money/core/cw-plus/Cw4Group.types'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type ListMembersMsg = Extract<
  ReturnType<typeof Cw4GroupQueryMsgBuilder.listMembers>,
  { list_members: unknown }
>

type ListMembersMsgBuilderParameters = Parameters<
  typeof Cw4GroupQueryMsgBuilder.listMembers
>

type UseListMembersArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & ListMembersMsgBuilderParameters[0]

function buildListMembersMsg(
  ...args: ListMembersMsgBuilderParameters
): ListMembersMsg {
  return Cw4GroupQueryMsgBuilder.listMembers(...args) as ListMembersMsg
}

export function useListMembers({
  contractAddress,
  client,
  ...restInput
}: UseListMembersArgs) {
  const { data: listMembers, ...restOutput } = useQuerySmart<
    ListMembersResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildListMembersMsg(restInput),
  })

  return { listMembers, ...restOutput }
}
