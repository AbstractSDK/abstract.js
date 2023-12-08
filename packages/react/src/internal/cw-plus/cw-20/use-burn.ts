import { Cw20ExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type BurnMsg = Extract<
  ReturnType<typeof Cw20ExecuteMsgBuilder.burn>,
  { burn: unknown }
>

type BurnMsgBuilderParameters = Parameters<typeof Cw20ExecuteMsgBuilder.burn>[0]

type UseBurnArgs = Parameters<typeof useExecuteContract<BurnMsg>>[0]

function buildBurnMsg(args: BurnMsgBuilderParameters): BurnMsg {
  return Cw20ExecuteMsgBuilder.burn(args) as BurnMsg
}

export function useBurn({ contractAddress, ...restInput }: UseBurnArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<BurnMsg>({
      contractAddress,
      ...restInput,
    })

  const burn = React.useCallback(
    function burn({
      senderAddress,
      signingClient,
      ...args
    }: BurnMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildBurnMsg(args),
      })
    },
    [executeContract],
  )

  const burnAsync = React.useCallback(
    function burnAsync({
      senderAddress,
      signingClient,
      ...args
    }: BurnMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildBurnMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { burn, burnAsync, ...restOutput }
}
