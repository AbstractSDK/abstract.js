import { RegistryTypes, RegistryQueryMsgBuilder } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type AccountBaseMsg = Extract<
  ReturnType<typeof RegistryQueryMsgBuilder.accountBase>,
  { account_base: unknown }
>

type AccountBaseMsgBuilderParameters = Parameters<
  typeof RegistryQueryMsgBuilder.accountBase
>

type UseAccountBaseArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & AccountBaseMsgBuilderParameters[0]

function buildAccountBaseMsg(
  ...args: AccountBaseMsgBuilderParameters
): AccountBaseMsg {
  return RegistryQueryMsgBuilder.accountBase(...args) as AccountBaseMsg
}

export function useAccountBase({
  contractAddress,
  client,
  ...restInput
}: UseAccountBaseArgs) {
  const { data: accountBase, ...restOutput } = useQuerySmart<
    RegistryTypes.AccountBaseResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildAccountBaseMsg(restInput),
  })

  return { accountBase, ...restOutput }
}
