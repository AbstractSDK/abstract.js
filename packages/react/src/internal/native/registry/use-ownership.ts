import { RegistryQueryMsgBuilder } from '@abstract-money/core'
import { type OwnershipForString } from '@abstract-money/core/native/registry/Registry.types'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type OwnershipMsg = Extract<
  ReturnType<typeof RegistryQueryMsgBuilder.ownership>,
  { ownership: unknown }
>

type OwnershipMsgBuilderParameters = Parameters<
  typeof RegistryQueryMsgBuilder.ownership
>

type UseOwnershipArgs = { contractAddress?: string; client?: CosmWasmClient }

function buildOwnershipMsg(
  ...args: OwnershipMsgBuilderParameters
): OwnershipMsg {
  return RegistryQueryMsgBuilder.ownership(...args) as OwnershipMsg
}

export function useOwnership({ contractAddress, client }: UseOwnershipArgs) {
  const { data: ownership, ...restOutput } = useQuerySmart<
    OwnershipForString,
    Error
  >({ address: contractAddress, client, queryMsg: buildOwnershipMsg() })

  return { ownership, ...restOutput }
}
