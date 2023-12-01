import { Cw20QueryMsgBuilder } from '@abstract-money/core'
import { type MinterResponse } from '@abstract-money/core/cw-plus/Cw20.types'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type MinterMsg = Extract<
  ReturnType<typeof Cw20QueryMsgBuilder.minter>,
  { minter: unknown }
>

type MinterMsgBuilderParameters = Parameters<typeof Cw20QueryMsgBuilder.minter>

type UseMinterArgs = { contractAddress?: string; client?: CosmWasmClient }

function buildMinterMsg(...args: MinterMsgBuilderParameters): MinterMsg {
  return Cw20QueryMsgBuilder.minter(...args) as MinterMsg
}

export function useMinter({ contractAddress, client }: UseMinterArgs) {
  const { data: minter, ...restOutput } = useQuerySmart<MinterResponse, Error>({
    address: contractAddress,
    client,
    queryMsg: buildMinterMsg(),
  })

  return { minter, ...restOutput }
}
