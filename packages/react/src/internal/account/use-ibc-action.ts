import { ProxyExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type IbcActionMsg = Extract<
  ReturnType<typeof ProxyExecuteMsgBuilder.ibcAction>,
  { ibc_action: unknown }
>

type IbcActionMsgBuilderParameters = Parameters<
  typeof ProxyExecuteMsgBuilder.ibcAction
>

type UseIbcActionArgs = Parameters<typeof useExecuteContract<IbcActionMsg>>[0]

function buildIbcActionMsg(
  ...args: IbcActionMsgBuilderParameters
): IbcActionMsg {
  return ProxyExecuteMsgBuilder.ibcAction(...args) as IbcActionMsg
}

export function useIbcAction({
  contractAddress,
  ...restInput
}: UseIbcActionArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<IbcActionMsg>({
      contractAddress,
      ...restInput,
    })

  const ibcAction = useCallback(
    function ibcaction(...args: IbcActionMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildIbcActionMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const ibcActionAsync = useCallback(
    function ibcactionAsync(...args: IbcActionMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildIbcActionMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { ibcAction, ibcActionAsync, ...restOutput }
}
