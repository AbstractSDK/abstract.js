import { Cw20QueryMsgBuilder } from '@abstract-money/core'
import { type AllAccountsResponse } from '@abstract-money/core/cw-plus/Cw20.types'
import { useQuerySmart } from 'graz'

type AllAccountsMsg = Extract<
  ReturnType<typeof Cw20QueryMsgBuilder.allAccounts>,
  { all_accounts: unknown }
>

type AllAccountsMsgBuilderParameters = Parameters<
  typeof Cw20QueryMsgBuilder.allAccounts
>

type UseAllAccountsArgs = {
  contractAddress?: string
} & AllAccountsMsgBuilderParameters[0]

function buildAllAccountsMsg(
  ...args: AllAccountsMsgBuilderParameters
): AllAccountsMsg {
  return Cw20QueryMsgBuilder.allAccounts(...args) as AllAccountsMsg
}

export function useAllAccounts({
  contractAddress,
  ...restInput
}: UseAllAccountsArgs) {
  const { data: accounts, ...restOutput } = useQuerySmart<
    AllAccountsResponse,
    Error
  >(contractAddress, buildAllAccountsMsg(restInput))

  return { accounts, ...restOutput }
}
