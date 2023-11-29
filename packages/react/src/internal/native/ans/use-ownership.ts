import { AnsHostQueryMsgBuilder } from '@abstract-money/core'
import { type OwnershipForString } from '@abstract-money/core/native/ans-host/AnsHost.types'
import { useQuerySmart } from 'graz'

type OwnershipMsg = Extract<
  ReturnType<typeof AnsHostQueryMsgBuilder.ownership>,
  { ownership: unknown }
>

type OwnershipMsgBuilderParameters = Parameters<
  typeof AnsHostQueryMsgBuilder.ownership
>

type UseOwnershipArgs = { contractAddress?: string }

function buildOwnershipMsg(
  ...args: OwnershipMsgBuilderParameters
): OwnershipMsg {
  return AnsHostQueryMsgBuilder.ownership(...args) as OwnershipMsg
}

export function useOwnership({ contractAddress }: UseOwnershipArgs) {
  const { data: ownership, ...restOutput } = useQuerySmart<
    OwnershipForString,
    Error
  >({ address: contractAddress, queryMsg: buildOwnershipMsg() })

  return { ownership, ...restOutput }
}
