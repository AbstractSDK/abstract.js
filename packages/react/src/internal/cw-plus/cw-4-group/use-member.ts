import { Cw4GroupQueryMsgBuilder } from '@abstract-money/core'
import { type MemberResponse } from '@abstract-money/core/cw-plus/Cw4Group.types'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type MemberMsg = Extract<
  ReturnType<typeof Cw4GroupQueryMsgBuilder.member>,
  { member: unknown }
>

type MemberMsgBuilderParameters = Parameters<
  typeof Cw4GroupQueryMsgBuilder.member
>

type UseMemberArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & MemberMsgBuilderParameters[0]

function buildMemberMsg(...args: MemberMsgBuilderParameters): MemberMsg {
  return Cw4GroupQueryMsgBuilder.member(...args) as MemberMsg
}

export function useMember({
  contractAddress,
  client,
  ...restInput
}: UseMemberArgs) {
  const { data: member, ...restOutput } = useQuerySmart<MemberResponse, Error>({
    address: contractAddress,
    client,
    queryMsg: buildMemberMsg(restInput),
  })

  return { member, ...restOutput }
}
