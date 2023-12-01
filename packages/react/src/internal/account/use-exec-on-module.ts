import { ManagerExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../utils/use-execute-contract'

type ExecOnModuleMsg = Extract<
  ReturnType<typeof ManagerExecuteMsgBuilder.execOnModule>,
  { exec_on_module: unknown }
>

type ExecOnModuleMsgBuilderParameters = Parameters<
  typeof ManagerExecuteMsgBuilder.execOnModule
>[0]

type UseExecOnModuleArgs = Parameters<
  typeof useExecuteContract<ExecOnModuleMsg>
>[0]

function buildExecOnModuleMsg(
  args: ExecOnModuleMsgBuilderParameters,
): ExecOnModuleMsg {
  return ManagerExecuteMsgBuilder.execOnModule(args) as ExecOnModuleMsg
}

export function useExecOnModule({
  contractAddress,
  ...restInput
}: UseExecOnModuleArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<ExecOnModuleMsg>({
      contractAddress,
      ...restInput,
    })

  const execOnModule = React.useCallback(
    function execonmodule({
      senderAddress,
      signingClient,
      ...args
    }: ExecOnModuleMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildExecOnModuleMsg(args),
      })
    },
    [executeContract],
  )

  const execOnModuleAsync = React.useCallback(
    function execonmoduleAsync({
      senderAddress,
      signingClient,
      ...args
    }: ExecOnModuleMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildExecOnModuleMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { execOnModule, execOnModuleAsync, ...restOutput }
}
