import { ManagerExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type UpgradeMsg = Extract<
  ReturnType<typeof ManagerExecuteMsgBuilder.upgrade>,
  { upgrade: unknown }
>

type UpgradeMsgBuilderParameters = Parameters<
  typeof ManagerExecuteMsgBuilder.upgrade
>

type UseUpgradeArgs = Parameters<typeof useExecuteContract<UpgradeMsg>>[0]

function buildUpgradeMsg(...args: UpgradeMsgBuilderParameters): UpgradeMsg {
  return ManagerExecuteMsgBuilder.upgrade(...args) as UpgradeMsg
}

export function useUpgrade({ contractAddress, ...restInput }: UseUpgradeArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpgradeMsg>({
      contractAddress,
      ...restInput,
    })

  const upgrade = React.useCallback(
    function upgrade(...args: UpgradeMsgBuilderParameters) {
      return executeContract({ signingClient, msg: buildUpgradeMsg(...args) })
    },
    [executeContract, signingClient],
  )

  const upgradeAsync = React.useCallback(
    function upgradeAsync(...args: UpgradeMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildUpgradeMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { upgrade, upgradeAsync, ...restOutput }
}
