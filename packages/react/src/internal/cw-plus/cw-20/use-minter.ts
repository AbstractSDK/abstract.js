import { Cw20QueryMsgBuilder } from '@abstract-money/core'
import { type MinterResponse } from '@abstract-money/core/cw-plus/Cw20.types'
import { useQuerySmart } from 'graz'

type MinterMsg = Extract<
  ReturnType<typeof Cw20QueryMsgBuilder.minter>,
  { minter: unknown }
>

type MinterMsgBuilderParameters = Parameters<typeof Cw20QueryMsgBuilder.minter>

type UseMinterArgs = { contractAddress?: string }

function buildMinterMsg(...args: MinterMsgBuilderParameters): MinterMsg {
  return Cw20QueryMsgBuilder.minter(...args) as MinterMsg
}

export function useMinter({ contractAddress }: UseMinterArgs) {
  const { data: minter, ...restOutput } = useQuerySmart<MinterResponse, Error>(
    contractAddress,
    buildMinterMsg(),
  )

  return { minter, ...restOutput }
}
