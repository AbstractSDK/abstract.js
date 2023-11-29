import { Cw3FlexMultisigExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type ExecuteMsg = Extract<
  ReturnType<typeof Cw3FlexMultisigExecuteMsgBuilder.execute>,
  { execute: unknown }
>

type ExecuteMsgBuilderParameters = Parameters<
  typeof Cw3FlexMultisigExecuteMsgBuilder.execute
>

type UseExecuteArgs = Parameters<typeof useExecuteContract<ExecuteMsg>>[0]

function buildExecuteMsg(...args: ExecuteMsgBuilderParameters): ExecuteMsg {
  return Cw3FlexMultisigExecuteMsgBuilder.execute(...args) as ExecuteMsg
}

export function useExecute({ contractAddress, ...restInput }: UseExecuteArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<ExecuteMsg>({
      contractAddress,
      ...restInput,
    })

  const execute = React.useCallback(
    function execute(...args: ExecuteMsgBuilderParameters) {
      return executeContract({ signingClient, msg: buildExecuteMsg(...args) })
    },
    [executeContract, signingClient],
  )

  const executeAsync = React.useCallback(
    function executeAsync(...args: ExecuteMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildExecuteMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { execute, executeAsync, ...restOutput }
}
