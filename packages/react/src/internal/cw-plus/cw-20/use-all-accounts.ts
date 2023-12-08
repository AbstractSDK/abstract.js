import { Cw20QueryMsgBuilder, Cw20Types } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type AllAccountsMsg = Extract<
  ReturnType<typeof Cw20QueryMsgBuilder.allAccounts>,
  { all_accounts: unknown }
>

type AllAccountsMsgBuilderParameters = Parameters<
  typeof Cw20QueryMsgBuilder.allAccounts
>

type UseAllAccountsArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & AllAccountsMsgBuilderParameters[0]

function buildAllAccountsMsg(
  ...args: AllAccountsMsgBuilderParameters
): AllAccountsMsg {
  return Cw20QueryMsgBuilder.allAccounts(...args) as AllAccountsMsg
}

export function useAllAccounts({
  contractAddress,
  client,
  ...restInput
}: UseAllAccountsArgs) {
  const { data: accounts, ...restOutput } = useQuerySmart<
    Cw20Types.AllAccountsResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildAllAccountsMsg(restInput),
  })

  return { accounts, ...restOutput }
}
