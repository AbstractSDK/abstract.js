import { Cw20ExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type IncreaseAllowanceMsg = Extract<
  ReturnType<typeof Cw20ExecuteMsgBuilder.increaseAllowance>,
  { increase_allowance: unknown }
>

type IncreaseAllowanceMsgBuilderParameters = Parameters<
  typeof Cw20ExecuteMsgBuilder.increaseAllowance
>

type UseIncreaseAllowanceArgs = Parameters<
  typeof useExecuteContract<IncreaseAllowanceMsg>
>[0]

function buildIncreaseAllowanceMsg(
  ...args: IncreaseAllowanceMsgBuilderParameters
): IncreaseAllowanceMsg {
  return Cw20ExecuteMsgBuilder.increaseAllowance(
    ...args,
  ) as IncreaseAllowanceMsg
}

export function useIncreaseAllowance({
  contractAddress,
  ...restInput
}: UseIncreaseAllowanceArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<IncreaseAllowanceMsg>({
      contractAddress,
      ...restInput,
    })

  const increaseAllowance = useCallback(
    function increaseAllowance(...args: IncreaseAllowanceMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildIncreaseAllowanceMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const increaseAllowanceAsync = useCallback(
    function increaseAllowanceAsync(
      ...args: IncreaseAllowanceMsgBuilderParameters
    ) {
      return executeContractAsync({
        signingClient,
        msg: buildIncreaseAllowanceMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { increaseAllowance, increaseAllowanceAsync, ...restOutput }
}
