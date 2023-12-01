import { AnsHostExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type UpdateDexesMsg = Extract<
  ReturnType<typeof AnsHostExecuteMsgBuilder.updateDexes>,
  { update_dexes: unknown }
>

type UpdateDexesMsgBuilderParameters = Parameters<
  typeof AnsHostExecuteMsgBuilder.updateDexes
>[0]

type UseUpdateDexesArgs = Parameters<
  typeof useExecuteContract<UpdateDexesMsg>
>[0]

function buildUpdateDexesMsg(
  args: UpdateDexesMsgBuilderParameters,
): UpdateDexesMsg {
  return AnsHostExecuteMsgBuilder.updateDexes(args) as UpdateDexesMsg
}

export function useUpdateDexes({
  contractAddress,
  ...restInput
}: UseUpdateDexesArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateDexesMsg>({
      contractAddress,
      ...restInput,
    })

  const updateDexes = React.useCallback(
    function updateDexes({
      senderAddress,
      signingClient,
      ...args
    }: UpdateDexesMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildUpdateDexesMsg(args),
      })
    },
    [executeContract],
  )

  const updateDexesAsync = React.useCallback(
    function updateDexesAsync({
      senderAddress,
      signingClient,
      ...args
    }: UpdateDexesMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildUpdateDexesMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { updateDexes, updateDexesAsync, ...restOutput }
}
