import { ManagerQueryMsgBuilder } from '@abstract-money/core'
import { type OwnershipForString } from '@abstract-money/core/account/manager/Manager.types'
import { useQuerySmart } from 'graz'

type OwnershipMsg = Extract<
  ReturnType<typeof ManagerQueryMsgBuilder.ownership>,
  { owner: unknown }
>

type OwnershipMsgBuilderParameters = Parameters<
  typeof ManagerQueryMsgBuilder.ownership
>

type UseOwnershipArgs = { contractAddress?: string }

function buildOwnershipMsg(
  ...args: OwnershipMsgBuilderParameters
): OwnershipMsg {
  return ManagerQueryMsgBuilder.ownership(...args) as OwnershipMsg
}

export function useOwnership({ contractAddress }: UseOwnershipArgs) {
  const { data: ownership, ...restOutput } = useQuerySmart<
    OwnershipForString,
    Error
  >(contractAddress, buildOwnershipMsg())

  return { ownership, ...restOutput }
}
