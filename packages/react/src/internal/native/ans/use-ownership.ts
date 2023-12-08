import { AnsHostQueryMsgBuilder, AnsHostTypes } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type OwnershipMsg = Extract<
  ReturnType<typeof AnsHostQueryMsgBuilder.ownership>,
  { ownership: unknown }
>

type OwnershipMsgBuilderParameters = Parameters<
  typeof AnsHostQueryMsgBuilder.ownership
>

type UseOwnershipArgs = { contractAddress?: string; client?: CosmWasmClient }

function buildOwnershipMsg(
  ...args: OwnershipMsgBuilderParameters
): OwnershipMsg {
  return AnsHostQueryMsgBuilder.ownership(...args) as OwnershipMsg
}

export function useOwnership({ contractAddress, client }: UseOwnershipArgs) {
  const { data: ownership, ...restOutput } = useQuerySmart<
    AnsHostTypes.OwnershipForString,
    Error
  >({ address: contractAddress, client, queryMsg: buildOwnershipMsg() })

  return { ownership, ...restOutput }
}
