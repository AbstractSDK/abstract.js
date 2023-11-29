import { ManagerQueryMsgBuilder } from '@abstract-money/core'
import { type SubAccountIdsResponse } from '@abstract-money/core/account/manager/Manager.types'
import { useQuerySmart } from 'graz'

type SubAccountIdsMsg = Extract<
  ReturnType<typeof ManagerQueryMsgBuilder.subAccountIds>,
  { sub_account_ids: unknown }
>

type SubAccountIdsMsgBuilderParameters = Parameters<
  typeof ManagerQueryMsgBuilder.subAccountIds
>

type UseSubAccountIdsArgs = {
  contractAddress?: string
} & SubAccountIdsMsgBuilderParameters[0]

function buildSubAccountIdsMsg(
  ...args: SubAccountIdsMsgBuilderParameters
): SubAccountIdsMsg {
  return ManagerQueryMsgBuilder.subAccountIds(...args) as SubAccountIdsMsg
}

export function useSubAccountIds({
  contractAddress,
  ...restInput
}: UseSubAccountIdsArgs) {
  const { data: subAccountIds, ...restOutput } = useQuerySmart<
    SubAccountIdsResponse,
    Error
  >({ address: contractAddress, queryMsg: buildSubAccountIdsMsg(restInput) })

  return { subAccountIds, ...restOutput }
}
