import { Cw20ExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type TransferFromMsg = Extract<
  ReturnType<typeof Cw20ExecuteMsgBuilder.transferFrom>,
  { transfer_from: unknown }
>

type TransferFromMsgBuilderParameters = Parameters<
  typeof Cw20ExecuteMsgBuilder.transferFrom
>

type UseTransferFromArgs = Parameters<
  typeof useExecuteContract<TransferFromMsg>
>[0]

function buildTransferFromMsg(
  ...args: TransferFromMsgBuilderParameters
): TransferFromMsg {
  return Cw20ExecuteMsgBuilder.transferFrom(...args) as TransferFromMsg
}

export function useTransferFrom({
  contractAddress,
  ...restInput
}: UseTransferFromArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<TransferFromMsg>({
      contractAddress,
      ...restInput,
    })

  const transferFrom = useCallback(
    function transferFrom(...args: TransferFromMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildTransferFromMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const transferFromAsync = useCallback(
    function transferFromAsync(...args: TransferFromMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildTransferFromMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { transferFrom, transferFromAsync, ...restOutput }
}
