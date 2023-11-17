import { RegistryExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type SetFactoryMsg = Extract<
  ReturnType<typeof RegistryExecuteMsgBuilder.setFactory>,
  { set_factory: unknown }
>

type SetFactoryMsgBuilderParameters = Parameters<
  typeof RegistryExecuteMsgBuilder.setFactory
>

type UseSetFactoryArgs = Parameters<typeof useExecuteContract<SetFactoryMsg>>[0]

function buildSetFactoryMsg(
  ...args: SetFactoryMsgBuilderParameters
): SetFactoryMsg {
  return RegistryExecuteMsgBuilder.setFactory(...args) as SetFactoryMsg
}

export function useSetFactory({
  contractAddress,
  ...restInput
}: UseSetFactoryArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<SetFactoryMsg>({
      contractAddress,
      ...restInput,
    })

  const setFactory = useCallback(
    function setFactory(...args: SetFactoryMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildSetFactoryMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const setFactoryAsync = useCallback(
    function setFactoryAsync(...args: SetFactoryMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildSetFactoryMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { setFactory, setFactoryAsync, ...restOutput }
}
