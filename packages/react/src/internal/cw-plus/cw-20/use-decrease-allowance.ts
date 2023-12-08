import { Cw20ExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type DecreaseAllowanceMsg = Extract<
  ReturnType<typeof Cw20ExecuteMsgBuilder.decreaseAllowance>,
  { decrease_allowance: unknown }
>

type DecreaseAllowanceMsgBuilderParameters = Parameters<
  typeof Cw20ExecuteMsgBuilder.decreaseAllowance
>[0]

type UseDecreaseAllowanceArgs = Parameters<
  typeof useExecuteContract<DecreaseAllowanceMsg>
>[0]

function buildDecreaseAllowanceMsg(
  args: DecreaseAllowanceMsgBuilderParameters,
): DecreaseAllowanceMsg {
  return Cw20ExecuteMsgBuilder.decreaseAllowance(args) as DecreaseAllowanceMsg
}

export function useDecreaseAllowance({
  contractAddress,
  ...restInput
}: UseDecreaseAllowanceArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<DecreaseAllowanceMsg>({
      contractAddress,
      ...restInput,
    })

  const decreaseAllowance = React.useCallback(
    function decreaseAllowance({
      senderAddress,
      signingClient,
      ...args
    }: DecreaseAllowanceMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildDecreaseAllowanceMsg(args),
      })
    },
    [executeContract],
  )

  const decreaseAllowanceAsync = React.useCallback(
    function decreaseAllowanceAsync({
      senderAddress,
      signingClient,
      ...args
    }: DecreaseAllowanceMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildDecreaseAllowanceMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { decreaseAllowance, decreaseAllowanceAsync, ...restOutput }
}
