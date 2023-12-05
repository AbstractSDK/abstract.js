import { Cw20Types, Cw20QueryMsgBuilder } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type ChallengeMsg = Extract<
  ReturnType<typeof Cw20QueryMsgBuilder.balance>,
  { balance: unknown }
>

type BalanceMsgBuilderParameters = Parameters<
  typeof Cw20QueryMsgBuilder.balance
>

type UseChallengeArgs = {
  contractAddress?: string
  client?: CosmWasmClient
} & BalanceMsgBuilderParameters[0]

function buildChallengeMsg(...args: BalanceMsgBuilderParameters): ChallengeMsg {
  return Cw20QueryMsgBuilder.balance(...args) as ChallengeMsg
}

export function useBalance({
  contractAddress,
  client,
  ...restInput
}: UseChallengeArgs) {
  const { data: balance, ...restOutput } = useQuerySmart<
    Cw20Types.BalanceResponse,
    Error
  >({
    address: contractAddress,
    client,
    queryMsg: buildChallengeMsg(restInput),
  })

  return { balance, ...restOutput }
}
