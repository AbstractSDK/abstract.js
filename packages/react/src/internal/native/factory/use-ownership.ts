import { FactoryQueryMsgBuilder } from '@abstract-money/core'
import { type OwnershipForString } from '@abstract-money/core/native/factory/Factory.types'
import { useQuerySmart } from 'graz'

type OwnershipMsg = Extract<
  ReturnType<typeof FactoryQueryMsgBuilder.ownership>,
  { ownership: unknown }
>

type OwnershipMsgBuilderParameters = Parameters<
  typeof FactoryQueryMsgBuilder.ownership
>

type UseOwnershipArgs = { contractAddress?: string }

function buildOwnershipMsg(
  ...args: OwnershipMsgBuilderParameters
): OwnershipMsg {
  return FactoryQueryMsgBuilder.ownership(...args) as OwnershipMsg
}

export function useOwnership({ contractAddress }: UseOwnershipArgs) {
  const { data: ownership, ...restOutput } = useQuerySmart<
    OwnershipForString,
    Error
  >(contractAddress, buildOwnershipMsg())

  return { ownership, ...restOutput }
}
