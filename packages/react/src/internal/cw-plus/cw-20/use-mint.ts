import { Cw20ExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type MintMsg = Extract<
  ReturnType<typeof Cw20ExecuteMsgBuilder.mint>,
  { mint: unknown }
>

type MintMsgBuilderParameters = Parameters<typeof Cw20ExecuteMsgBuilder.mint>

type UseMintArgs = Parameters<typeof useExecuteContract<MintMsg>>[0]

function buildMintMsg(...args: MintMsgBuilderParameters): MintMsg {
  return Cw20ExecuteMsgBuilder.mint(...args) as MintMsg
}

export function useMint({ contractAddress, ...restInput }: UseMintArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<MintMsg>({
      contractAddress,
      ...restInput,
    })

  const mint = useCallback(
    function mint(...args: MintMsgBuilderParameters) {
      return executeContract({ signingClient, msg: buildMintMsg(...args) })
    },
    [executeContract, signingClient],
  )

  const mintAsync = useCallback(
    function mintAsync(...args: MintMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildMintMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { mint, mintAsync, ...restOutput }
}
