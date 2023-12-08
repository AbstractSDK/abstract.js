import { Cw3FlexMultisigExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type ExecuteMsg = Extract<
  ReturnType<typeof Cw3FlexMultisigExecuteMsgBuilder.execute>,
  { execute: unknown }
>

type ExecuteMsgBuilderParameters = Parameters<
  typeof Cw3FlexMultisigExecuteMsgBuilder.execute
>[0]

type UseExecuteArgs = Parameters<typeof useExecuteContract<ExecuteMsg>>[0]

function buildExecuteMsg(args: ExecuteMsgBuilderParameters): ExecuteMsg {
  return Cw3FlexMultisigExecuteMsgBuilder.execute(args) as ExecuteMsg
}

export function useExecute({ contractAddress, ...restInput }: UseExecuteArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<ExecuteMsg>({
      contractAddress,
      ...restInput,
    })

  const execute = React.useCallback(
    function execute({
      senderAddress,
      signingClient,
      ...args
    }: ExecuteMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildExecuteMsg(args),
      })
    },
    [executeContract],
  )

  const executeAsync = React.useCallback(
    function executeAsync({
      senderAddress,
      signingClient,
      ...args
    }: ExecuteMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildExecuteMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { execute, executeAsync, ...restOutput }
}
