import { ManagerExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../utils/use-execute-contract'

type UninstallModuleMsg = Extract<
  ReturnType<typeof ManagerExecuteMsgBuilder.uninstallModule>,
  { uninstall_module: unknown }
>

type UninstallModuleMsgBuilderParameters = Parameters<
  typeof ManagerExecuteMsgBuilder.uninstallModule
>[0]

type UseUninstallModuleArgs = Parameters<
  typeof useExecuteContract<UninstallModuleMsg>
>[0]

function buildUninstallModuleMsg(
  args: UninstallModuleMsgBuilderParameters,
): UninstallModuleMsg {
  return ManagerExecuteMsgBuilder.uninstallModule(args) as UninstallModuleMsg
}

export function useUninstallModule({
  contractAddress,
  ...restInput
}: UseUninstallModuleArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UninstallModuleMsg>({
      contractAddress,
      ...restInput,
    })

  const uninstallModule = React.useCallback(
    function uninstallModule({
      senderAddress,
      signingClient,
      ...args
    }: UninstallModuleMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildUninstallModuleMsg(args),
      })
    },
    [executeContract],
  )

  const uninstallModuleAsync = React.useCallback(
    function uninstallModuleAsync({
      senderAddress,
      signingClient,
      ...args
    }: UninstallModuleMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildUninstallModuleMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { uninstallModule, uninstallModuleAsync, ...restOutput }
}
