import { Cw20IcsExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type TransferMsg = Extract<
  ReturnType<typeof Cw20IcsExecuteMsgBuilder.transfer>,
  { transfer: unknown }
>

type TransferMsgBuilderParameters = Parameters<
  typeof Cw20IcsExecuteMsgBuilder.transfer
>

type UseTransferArgs = Parameters<typeof useExecuteContract<TransferMsg>>[0]

function buildTransferMsg(...args: TransferMsgBuilderParameters): TransferMsg {
  return Cw20IcsExecuteMsgBuilder.transfer(...args) as TransferMsg
}

export function useTransfer({
  contractAddress,
  ...restInput
}: UseTransferArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<TransferMsg>({
      contractAddress,
      ...restInput,
    })

  const transfer = React.useCallback(
    function transfer(...args: TransferMsgBuilderParameters) {
      return executeContract({ signingClient, msg: buildTransferMsg(...args) })
    },
    [executeContract, signingClient],
  )

  const transferAsync = React.useCallback(
    function transferAsync(...args: TransferMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildTransferMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { transfer, transferAsync, ...restOutput }
}
