import { Cw20ExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type MintMsg = Extract<
  ReturnType<typeof Cw20ExecuteMsgBuilder.mint>,
  { mint: unknown }
>

type MintMsgBuilderParameters = Parameters<typeof Cw20ExecuteMsgBuilder.mint>[0]

type UseMintArgs = Parameters<typeof useExecuteContract<MintMsg>>[0]

function buildMintMsg(args: MintMsgBuilderParameters): MintMsg {
  return Cw20ExecuteMsgBuilder.mint(args) as MintMsg
}

export function useMint({ contractAddress, ...restInput }: UseMintArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<MintMsg>({
      contractAddress,
      ...restInput,
    })

  const mint = React.useCallback(
    function mint({
      senderAddress,
      signingClient,
      ...args
    }: MintMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildMintMsg(args),
      })
    },
    [executeContract],
  )

  const mintAsync = React.useCallback(
    function mintAsync({
      senderAddress,
      signingClient,
      ...args
    }: MintMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildMintMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { mint, mintAsync, ...restOutput }
}
