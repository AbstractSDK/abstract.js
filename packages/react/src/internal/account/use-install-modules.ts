import { ManagerExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type InstallModulesMsg = Extract<
  ReturnType<typeof ManagerExecuteMsgBuilder.installModules>,
  { install_modules: unknown }
>

type InstallModulesMsgBuilderParameters = Parameters<
  typeof ManagerExecuteMsgBuilder.installModules
>

type UseInstallModulesArgs = Parameters<
  typeof useExecuteContract<InstallModulesMsg>
>[0]

function buildInstallModulesMsg(
  ...args: InstallModulesMsgBuilderParameters
): InstallModulesMsg {
  return ManagerExecuteMsgBuilder.installModules(...args) as InstallModulesMsg
}

export function useInstallModules({
  contractAddress,
  ...restInput
}: UseInstallModulesArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<InstallModulesMsg>({
      contractAddress,
      ...restInput,
    })

  const installModules = React.useCallback(
    function installModules(...args: InstallModulesMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildInstallModulesMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const installModulesAsync = React.useCallback(
    function installModulesAsync(...args: InstallModulesMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildInstallModulesMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { installModules, installModulesAsync, ...restOutput }
}
