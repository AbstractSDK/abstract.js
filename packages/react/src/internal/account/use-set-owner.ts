import { ManagerExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../utils/use-execute-contract'

type SetOwnerMsg = Extract<
  ReturnType<typeof ManagerExecuteMsgBuilder.setOwner>,
  { set_owner: unknown }
>

type SetOwnerMsgBuilderParameters = Parameters<
  typeof ManagerExecuteMsgBuilder.setOwner
>[0]

type UseSetOwnerArgs = Parameters<typeof useExecuteContract<SetOwnerMsg>>[0]

function buildSetOwnerMsg(args: SetOwnerMsgBuilderParameters): SetOwnerMsg {
  return ManagerExecuteMsgBuilder.setOwner(args) as SetOwnerMsg
}

export function useSetOwner({
  contractAddress,
  ...restInput
}: UseSetOwnerArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<SetOwnerMsg>({
      contractAddress,
      ...restInput,
    })

  const setOwner = React.useCallback(
    function setOwner({
      signingClient,
      senderAddress,
      ...args
    }: SetOwnerMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildSetOwnerMsg(args),
      })
    },
    [executeContract],
  )

  const setOwnerAsync = React.useCallback(
    function setOwnerAsync({
      senderAddress,
      signingClient,
      ...args
    }: SetOwnerMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildSetOwnerMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { setOwner, setOwnerAsync, ...restOutput }
}
