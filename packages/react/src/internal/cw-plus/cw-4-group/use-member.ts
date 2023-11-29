import { Cw4GroupQueryMsgBuilder } from '@abstract-money/core'
import { type MemberResponse } from '@abstract-money/core/cw-plus/Cw4Group.types'
import { useQuerySmart } from 'graz'

type MemberMsg = Extract<
  ReturnType<typeof Cw4GroupQueryMsgBuilder.member>,
  { member: unknown }
>

type MemberMsgBuilderParameters = Parameters<
  typeof Cw4GroupQueryMsgBuilder.member
>

type UseMemberArgs = {
  contractAddress?: string
} & MemberMsgBuilderParameters[0]

function buildMemberMsg(...args: MemberMsgBuilderParameters): MemberMsg {
  return Cw4GroupQueryMsgBuilder.member(...args) as MemberMsg
}

export function useMember({ contractAddress, ...restInput }: UseMemberArgs) {
  const { data: member, ...restOutput } = useQuerySmart<MemberResponse, Error>({
    address: contractAddress,
    queryMsg: buildMemberMsg(restInput),
  })

  return { member, ...restOutput }
}
