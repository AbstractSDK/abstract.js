import { ManagerQueryMsgBuilder, ManagerTypes } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../utils/use-query-smart'

type SubAccountIdsMsg = Extract<
  ReturnType<typeof ManagerQueryMsgBuilder.subAccountIds>,
  { sub_account_ids: unknown }
>

type SubAccountIdsMsgBuilderParameters = Parameters<
  typeof ManagerQueryMsgBuilder.subAccountIds
>

type UseSubAccountIdsArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & SubAccountIdsMsgBuilderParameters[0]

function buildSubAccountIdsMsg(
  ...args: SubAccountIdsMsgBuilderParameters
): SubAccountIdsMsg {
  return ManagerQueryMsgBuilder.subAccountIds(...args) as SubAccountIdsMsg
}

export function useSubAccountIds({
  contractAddress,
  client,
  ...restInput
}: UseSubAccountIdsArgs) {
  const { data: subAccountIds, ...restOutput } = useQuerySmart<
    ManagerTypes.SubAccountIdsResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildSubAccountIdsMsg(restInput),
  })

  return { subAccountIds, ...restOutput }
}
