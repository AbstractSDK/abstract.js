import { ProxyExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type moduleActionMsg = Extract<
  ReturnType<typeof ProxyExecuteMsgBuilder.moduleAction>,
  { module_action: unknown }
>

type moduleActionMsgBuilderParameters = Parameters<
  typeof ProxyExecuteMsgBuilder.moduleAction
>

type UsemoduleActionArgs = Parameters<
  typeof useExecuteContract<moduleActionMsg>
>[0]

function buildModuleActionMsg(
  ...args: moduleActionMsgBuilderParameters
): moduleActionMsg {
  return ProxyExecuteMsgBuilder.moduleAction(...args) as moduleActionMsg
}

export function useModuleAction({
  contractAddress,
  ...restInput
}: UsemoduleActionArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<moduleActionMsg>({
      contractAddress,
      ...restInput,
    })

  const moduleAction = useCallback(
    function moduleAction(...args: moduleActionMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildModuleActionMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const moduleActionAsync = useCallback(
    function moduleActionAsync(...args: moduleActionMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildModuleActionMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { moduleAction, moduleActionAsync, ...restOutput }
}
