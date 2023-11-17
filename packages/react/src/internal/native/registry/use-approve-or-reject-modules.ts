import { RegistryExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type ApproveOrRejectModulesMsg = Extract<
  ReturnType<typeof RegistryExecuteMsgBuilder.approveOrRejectModules>,
  { approve_or_reject_modules: unknown }
>

type ApproveOrRejectModulesMsgBuilderParameters = Parameters<
  typeof RegistryExecuteMsgBuilder.approveOrRejectModules
>

type UseApproveOrRejectModulesArgs = Parameters<
  typeof useExecuteContract<ApproveOrRejectModulesMsg>
>[0]

function buildApproveOrRejectModulesMsg(
  ...args: ApproveOrRejectModulesMsgBuilderParameters
): ApproveOrRejectModulesMsg {
  return RegistryExecuteMsgBuilder.approveOrRejectModules(
    ...args,
  ) as ApproveOrRejectModulesMsg
}

export function useApproveOrRejectModules({
  contractAddress,
  ...restInput
}: UseApproveOrRejectModulesArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<ApproveOrRejectModulesMsg>({
      contractAddress,
      ...restInput,
    })

  const approveOrRejectModules = useCallback(
    function approveOrRejectModules(
      ...args: ApproveOrRejectModulesMsgBuilderParameters
    ) {
      return executeContract({
        signingClient,
        msg: buildApproveOrRejectModulesMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const approveOrRejectModulesAsync = useCallback(
    function approveOrRejectModulesAsync(
      ...args: ApproveOrRejectModulesMsgBuilderParameters
    ) {
      return executeContractAsync({
        signingClient,
        msg: buildApproveOrRejectModulesMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { approveOrRejectModules, approveOrRejectModulesAsync, ...restOutput }
}
