import { Cw20QueryMsgBuilder } from '@abstract-money/core'
import { type AllAccountsResponse } from '@abstract-money/core/cw-plus/Cw20.types'
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
    AllAccountsResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildAllAccountsMsg(restInput),
  })

  return { accounts, ...restOutput }
}
