import { Cw3FlexMultisigCloseMsgBuilder } from '@abstract-money/core'
import { useCloseContract, useCosmWasmSigningClient } from 'graz'
import { useCallback } from 'react'

type CloseMsg = Extract<
  ReturnType<typeof Cw3FlexMultisigCloseMsgBuilder.close>,
  { close: unknown }
>

type CloseMsgBuilderParameters = Parameters<
  typeof Cw3FlexMultisigCloseMsgBuilder.close
>

type UseCloseArgs = Parameters<typeof useCloseContract<CloseMsg>>[0]

function buildCloseMsg(...args: CloseMsgBuilderParameters): CloseMsg {
  return Cw3FlexMultisigCloseMsgBuilder.close(...args) as CloseMsg
}

export function useClose({ contractAddress, ...restInput }: UseCloseArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { closeContract, closeContractAsync, ...restOutput } =
    useCloseContract<CloseMsg>({
      contractAddress,
      ...restInput,
    })

  const close = useCallback(
    function close(...args: CloseMsgBuilderParameters) {
      return closeContract({ signingClient, msg: buildCloseMsg(...args) })
    },
    [closeContract, signingClient],
  )

  const closeAsync = useCallback(
    function closeAsync(...args: CloseMsgBuilderParameters) {
      return closeContractAsync({ signingClient, msg: buildCloseMsg(...args) })
    },
    [closeContractAsync, signingClient],
  )

  return { close, closeAsync, ...restOutput }
}
