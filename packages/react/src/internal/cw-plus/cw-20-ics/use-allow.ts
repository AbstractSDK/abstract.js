import { Cw20IcsExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type AllowMsg = Extract<
  ReturnType<typeof Cw20IcsExecuteMsgBuilder.allow>,
  { allow: unknown }
>

type AllowMsgBuilderParameters = Parameters<
  typeof Cw20IcsExecuteMsgBuilder.allow
>[0]

type UseAllowArgs = Parameters<typeof useExecuteContract<AllowMsg>>[0]

function buildAllowMsg(args: AllowMsgBuilderParameters): AllowMsg {
  return Cw20IcsExecuteMsgBuilder.allow(args) as AllowMsg
}

export function useAllow({ contractAddress, ...restInput }: UseAllowArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<AllowMsg>({
      contractAddress,
      ...restInput,
    })

  const allow = React.useCallback(
    function allow({
      senderAddress,
      signingClient,
      ...args
    }: AllowMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildAllowMsg(args),
      })
    },
    [executeContract],
  )

  const allowAsync = React.useCallback(
    function allowAsync({
      senderAddress,
      signingClient,
      ...args
    }: AllowMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildAllowMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { allow, allowAsync, ...restOutput }
}
