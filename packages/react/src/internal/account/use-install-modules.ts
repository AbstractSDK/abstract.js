import { ManagerExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../utils/use-execute-contract'

type InstallModulesMsg = Extract<
  ReturnType<typeof ManagerExecuteMsgBuilder.installModules>,
  { install_modules: unknown }
>

type InstallModulesMsgBuilderParameters = Parameters<
  typeof ManagerExecuteMsgBuilder.installModules
>[0]

type UseInstallModulesArgs = Parameters<
  typeof useExecuteContract<InstallModulesMsg>
>[0]

function buildInstallModulesMsg(
  args: InstallModulesMsgBuilderParameters,
): InstallModulesMsg {
  return ManagerExecuteMsgBuilder.installModules(args) as InstallModulesMsg
}

export function useInstallModules({
  contractAddress,
  ...restInput
}: UseInstallModulesArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<InstallModulesMsg>({
      contractAddress,
      ...restInput,
    })

  const installModules = React.useCallback(
    function installModules({
      senderAddress,
      signingClient,
      ...args
    }: InstallModulesMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildInstallModulesMsg(args),
      })
    },
    [executeContract],
  )

  const installModulesAsync = React.useCallback(
    function installModulesAsync({
      senderAddress,
      signingClient,
      ...args
    }: InstallModulesMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildInstallModulesMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { installModules, installModulesAsync, ...restOutput }
}
