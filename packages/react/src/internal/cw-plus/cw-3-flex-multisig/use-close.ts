import { Cw3FlexMultisigExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type CloseMsg = Extract<
  ReturnType<typeof Cw3FlexMultisigExecuteMsgBuilder.close>,
  { close: unknown }
>

type CloseMsgBuilderParameters = Parameters<
  typeof Cw3FlexMultisigExecuteMsgBuilder.close
>

type UseCloseArgs = Parameters<typeof useExecuteContract<CloseMsg>>[0]

function buildCloseMsg(...args: CloseMsgBuilderParameters): CloseMsg {
  return Cw3FlexMultisigExecuteMsgBuilder.close(...args) as CloseMsg
}

export function useClose({ contractAddress, ...restInput }: UseCloseArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<CloseMsg>({
      contractAddress,
      ...restInput,
    })

  const close = useCallback(
    function close(...args: CloseMsgBuilderParameters) {
      return executeContract({ signingClient, msg: buildCloseMsg(...args) })
    },
    [executeContract, signingClient],
  )

  const closeAsync = useCallback(
    function closeAsync(...args: CloseMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildCloseMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { close, closeAsync, ...restOutput }
}
