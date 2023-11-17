import { Cw20ExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type BurnMsg = Extract<
  ReturnType<typeof Cw20ExecuteMsgBuilder.burn>,
  { burn: unknown }
>

type BurnMsgBuilderParameters = Parameters<typeof Cw20ExecuteMsgBuilder.burn>

type UseBurnArgs = Parameters<typeof useExecuteContract<BurnMsg>>[0]

function buildBurnMsg(...args: BurnMsgBuilderParameters): BurnMsg {
  return Cw20ExecuteMsgBuilder.burn(...args) as BurnMsg
}

export function useBurn({ contractAddress, ...restInput }: UseBurnArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<BurnMsg>({
      contractAddress,
      ...restInput,
    })

  const burn = useCallback(
    function burn(...args: BurnMsgBuilderParameters) {
      return executeContract({ signingClient, msg: buildBurnMsg(...args) })
    },
    [executeContract, signingClient],
  )

  const burnAsync = useCallback(
    function burnAsync(...args: BurnMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildBurnMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { burn, burnAsync, ...restOutput }
}
