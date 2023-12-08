import { Cw20ExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type IncreaseAllowanceMsg = Extract<
  ReturnType<typeof Cw20ExecuteMsgBuilder.increaseAllowance>,
  { increase_allowance: unknown }
>

type IncreaseAllowanceMsgBuilderParameters = Parameters<
  typeof Cw20ExecuteMsgBuilder.increaseAllowance
>[0]

type UseIncreaseAllowanceArgs = Parameters<
  typeof useExecuteContract<IncreaseAllowanceMsg>
>[0]

function buildIncreaseAllowanceMsg(
  args: IncreaseAllowanceMsgBuilderParameters,
): IncreaseAllowanceMsg {
  return Cw20ExecuteMsgBuilder.increaseAllowance(args) as IncreaseAllowanceMsg
}

export function useIncreaseAllowance({
  contractAddress,
  ...restInput
}: UseIncreaseAllowanceArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<IncreaseAllowanceMsg>({
      contractAddress,
      ...restInput,
    })

  const increaseAllowance = React.useCallback(
    function increaseAllowance({
      senderAddress,
      signingClient,
      ...args
    }: IncreaseAllowanceMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildIncreaseAllowanceMsg(args),
      })
    },
    [executeContract],
  )

  const increaseAllowanceAsync = React.useCallback(
    function increaseAllowanceAsync({
      senderAddress,
      signingClient,
      ...args
    }: IncreaseAllowanceMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildIncreaseAllowanceMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { increaseAllowance, increaseAllowanceAsync, ...restOutput }
}
