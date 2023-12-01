import { RegistryExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type YankModuleMsg = Extract<
  ReturnType<typeof RegistryExecuteMsgBuilder.yankModule>,
  { yank_module: unknown }
>

type YankModuleMsgBuilderParameters = Parameters<
  typeof RegistryExecuteMsgBuilder.yankModule
>[0]

type UseYankModuleArgs = Parameters<typeof useExecuteContract<YankModuleMsg>>[0]

function buildYankModuleMsg(
  args: YankModuleMsgBuilderParameters,
): YankModuleMsg {
  return RegistryExecuteMsgBuilder.yankModule(args) as YankModuleMsg
}

export function useYankModule({
  contractAddress,
  ...restInput
}: UseYankModuleArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<YankModuleMsg>({
      contractAddress,
      ...restInput,
    })

  const yankModule = React.useCallback(
    function yankModule({
      senderAddress,
      signingClient,
      ...args
    }: YankModuleMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildYankModuleMsg(args),
      })
    },
    [executeContract],
  )

  const yankModuleAsync = React.useCallback(
    function yankModuleAsync({
      senderAddress,
      signingClient,
      ...args
    }: YankModuleMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildYankModuleMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { yankModule, yankModuleAsync, ...restOutput }
}
