import { Cw20ExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type DecreaseAllowanceMsg = Extract<
  ReturnType<typeof Cw20ExecuteMsgBuilder.decreaseAllowance>,
  { decrease_allowance: unknown }
>

type DecreaseAllowanceMsgBuilderParameters = Parameters<
  typeof Cw20ExecuteMsgBuilder.decreaseAllowance
>

type UseDecreaseAllowanceArgs = Parameters<
  typeof useExecuteContract<DecreaseAllowanceMsg>
>[0]

function buildDecreaseAllowanceMsg(
  ...args: DecreaseAllowanceMsgBuilderParameters
): DecreaseAllowanceMsg {
  return Cw20ExecuteMsgBuilder.decreaseAllowance(
    ...args,
  ) as DecreaseAllowanceMsg
}

export function useDecreaseAllowance({
  contractAddress,
  ...restInput
}: UseDecreaseAllowanceArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<DecreaseAllowanceMsg>({
      contractAddress,
      ...restInput,
    })

  const decreaseAllowance = React.useCallback(
    function decreaseAllowance(...args: DecreaseAllowanceMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildDecreaseAllowanceMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const decreaseAllowanceAsync = React.useCallback(
    function decreaseAllowanceAsync(
      ...args: DecreaseAllowanceMsgBuilderParameters
    ) {
      return executeContractAsync({
        signingClient,
        msg: buildDecreaseAllowanceMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { decreaseAllowance, decreaseAllowanceAsync, ...restOutput }
}
