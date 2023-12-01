import { ProxyExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../utils/use-execute-contract'

type SetAdminMsg = Extract<
  ReturnType<typeof ProxyExecuteMsgBuilder.setAdmin>,
  { set_admin: unknown }
>

type SetAdminMsgBuilderParameters = Parameters<
  typeof ProxyExecuteMsgBuilder.setAdmin
>[0]

type UseSetAdminArgs = Parameters<typeof useExecuteContract<SetAdminMsg>>[0]

function buildSetAdminMsg(args: SetAdminMsgBuilderParameters): SetAdminMsg {
  return ProxyExecuteMsgBuilder.setAdmin(args) as SetAdminMsg
}

export function useSetAdmin({
  contractAddress,
  ...restInput
}: UseSetAdminArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<SetAdminMsg>({
      contractAddress,
      ...restInput,
    })

  const setAdmin = React.useCallback(
    function setAdmin({
      senderAddress,
      signingClient,
      ...args
    }: SetAdminMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildSetAdminMsg(args),
      })
    },
    [executeContract],
  )

  const setAdminAsync = React.useCallback(
    function setAdminAsync({
      senderAddress,
      signingClient,
      ...args
    }: SetAdminMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildSetAdminMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { setAdmin, setAdminAsync, ...restOutput }
}
