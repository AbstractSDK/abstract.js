import { Cw20ExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type TransferFromMsg = Extract<
  ReturnType<typeof Cw20ExecuteMsgBuilder.transferFrom>,
  { transfer_from: unknown }
>

type TransferFromMsgBuilderParameters = Parameters<
  typeof Cw20ExecuteMsgBuilder.transferFrom
>[0]

type UseTransferFromArgs = Parameters<
  typeof useExecuteContract<TransferFromMsg>
>[0]

function buildTransferFromMsg(
  args: TransferFromMsgBuilderParameters,
): TransferFromMsg {
  return Cw20ExecuteMsgBuilder.transferFrom(args) as TransferFromMsg
}

export function useTransferFrom({
  contractAddress,
  ...restInput
}: UseTransferFromArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<TransferFromMsg>({
      contractAddress,
      ...restInput,
    })

  const transferFrom = React.useCallback(
    function transferFrom({
      senderAddress,
      signingClient,
      ...args
    }: TransferFromMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildTransferFromMsg(args),
      })
    },
    [executeContract],
  )

  const transferFromAsync = React.useCallback(
    function transferFromAsync({
      senderAddress,
      signingClient,
      ...args
    }: TransferFromMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildTransferFromMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { transferFrom, transferFromAsync, ...restOutput }
}
