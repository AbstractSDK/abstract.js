import { RegistryExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type SetFactoryMsg = Extract<
  ReturnType<typeof RegistryExecuteMsgBuilder.setFactory>,
  { set_factory: unknown }
>

type SetFactoryMsgBuilderParameters = Parameters<
  typeof RegistryExecuteMsgBuilder.setFactory
>[0]

type UseSetFactoryArgs = Parameters<typeof useExecuteContract<SetFactoryMsg>>[0]

function buildSetFactoryMsg(
  args: SetFactoryMsgBuilderParameters,
): SetFactoryMsg {
  return RegistryExecuteMsgBuilder.setFactory(args) as SetFactoryMsg
}

export function useSetFactory({
  contractAddress,
  ...restInput
}: UseSetFactoryArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<SetFactoryMsg>({
      contractAddress,
      ...restInput,
    })

  const setFactory = React.useCallback(
    function setFactory({
      senderAddress,
      signingClient,
      ...args
    }: SetFactoryMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildSetFactoryMsg(args),
      })
    },
    [executeContract],
  )

  const setFactoryAsync = React.useCallback(
    function setFactoryAsync({
      senderAddress,
      signingClient,
      ...args
    }: SetFactoryMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildSetFactoryMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { setFactory, setFactoryAsync, ...restOutput }
}
