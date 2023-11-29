import { Cw20QueryMsgBuilder } from '@abstract-money/core'
import { type BalanceResponse } from '@abstract-money/core/cw-plus/Cw20.types'
import { useQuerySmart } from 'graz'

type ChallengeMsg = Extract<
  ReturnType<typeof Cw20QueryMsgBuilder.balance>,
  { balance: unknown }
>

type BalanceMsgBuilderParameters = Parameters<
  typeof Cw20QueryMsgBuilder.balance
>

type UseChallengeArgs = {
  contractAddress?: string
} & BalanceMsgBuilderParameters[0]

function buildChallengeMsg(...args: BalanceMsgBuilderParameters): ChallengeMsg {
  return Cw20QueryMsgBuilder.balance(...args) as ChallengeMsg
}

export function useBalance({
  contractAddress,
  ...restInput
}: UseChallengeArgs) {
  const { data: balance, ...restOutput } = useQuerySmart<
    BalanceResponse,
    Error
  >({ address: contractAddress, queryMsg: buildChallengeMsg(restInput) })

  return { balance, ...restOutput }
}
