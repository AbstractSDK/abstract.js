import { RegistryQueryMsgBuilder } from '@abstract-money/core'
import { type OwnershipForString } from '@abstract-money/core/native/registry/Registry.types'
import { useQuerySmart } from 'graz'

type OwnershipMsg = Extract<
  ReturnType<typeof RegistryQueryMsgBuilder.ownership>,
  { ownership: unknown }
>

type OwnershipMsgBuilderParameters = Parameters<
  typeof RegistryQueryMsgBuilder.ownership
>

type UseOwnershipArgs = { contractAddress?: string }

function buildOwnershipMsg(
  ...args: OwnershipMsgBuilderParameters
): OwnershipMsg {
  return RegistryQueryMsgBuilder.ownership(...args) as OwnershipMsg
}

export function useOwnership({ contractAddress }: UseOwnershipArgs) {
  const { data: ownership, ...restOutput } = useQuerySmart<
    OwnershipForString,
    Error
  >(contractAddress, buildOwnershipMsg())

  return { ownership, ...restOutput }
}
