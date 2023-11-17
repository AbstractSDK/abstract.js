import { ProxyExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type ModuleActionWithDataMsg = Extract<
  ReturnType<typeof ProxyExecuteMsgBuilder.moduleActionWithData>,
  { module_action_with_data: unknown }
>

type ModuleActionWithDataMsgBuilderParameters = Parameters<
  typeof ProxyExecuteMsgBuilder.moduleActionWithData
>

type UseModuleActionWithDataArgs = Parameters<
  typeof useExecuteContract<ModuleActionWithDataMsg>
>[0]

function buildModuleActionWithDataMsg(
  ...args: ModuleActionWithDataMsgBuilderParameters
): ModuleActionWithDataMsg {
  return ProxyExecuteMsgBuilder.moduleActionWithData(
    ...args,
  ) as ModuleActionWithDataMsg
}

export function useModuleActionWithData({
  contractAddress,
  ...restInput
}: UseModuleActionWithDataArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<ModuleActionWithDataMsg>({
      contractAddress,
      ...restInput,
    })

  const moduleActionWithData = useCallback(
    function moduleActionWithData(
      ...args: ModuleActionWithDataMsgBuilderParameters
    ) {
      return executeContract({
        signingClient,
        msg: buildModuleActionWithDataMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const moduleActionWithDataAsync = useCallback(
    function moduleActionWithDataAsync(
      ...args: ModuleActionWithDataMsgBuilderParameters
    ) {
      return executeContractAsync({
        signingClient,
        msg: buildModuleActionWithDataMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { moduleActionWithData, moduleActionWithDataAsync, ...restOutput }
}
