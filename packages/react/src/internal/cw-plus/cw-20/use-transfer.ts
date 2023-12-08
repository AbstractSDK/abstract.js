import { Cw20ExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type TransferMsg = Extract<
  ReturnType<typeof Cw20ExecuteMsgBuilder.transfer>,
  { transfer: unknown }
>

type TransferMsgBuilderParameters = Parameters<
  typeof Cw20ExecuteMsgBuilder.transfer
>[0]

type UseTransferArgs = Parameters<typeof useExecuteContract<TransferMsg>>[0]

function buildTransferMsg(args: TransferMsgBuilderParameters): TransferMsg {
  return Cw20ExecuteMsgBuilder.transfer(args) as TransferMsg
}

export function useTransfer({
  contractAddress,
  ...restInput
}: UseTransferArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<TransferMsg>({
      contractAddress,
      ...restInput,
    })

  const transfer = React.useCallback(
    function transfer({
      senderAddress,
      signingClient,
      ...args
    }: TransferMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildTransferMsg(args),
      })
    },
    [executeContract],
  )

  const transferAsync = React.useCallback(
    function transferAsync({
      senderAddress,
      signingClient,
      ...args
    }: TransferMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildTransferMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { transfer, transferAsync, ...restOutput }
}
