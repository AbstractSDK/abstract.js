import { AnsHostQueryMsgBuilder } from '@abstract-money/core'
import { type OwnershipForString } from '@abstract-money/core/native/ans-host/AnsHost.types'
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
    OwnershipForString,
    Error
  >({ address: contractAddress, client, queryMsg: buildOwnershipMsg() })

  return { ownership, ...restOutput }
}
