import { AnsHostExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type UpdateChannelsMsg = Extract<
  ReturnType<typeof AnsHostExecuteMsgBuilder.updateChannels>,
  { update_channels: unknown }
>

type UpdateChannelsMsgBuilderParameters = Parameters<
  typeof AnsHostExecuteMsgBuilder.updateChannels
>[0]

type UseUpdateChannelsArgs = Parameters<
  typeof useExecuteContract<UpdateChannelsMsg>
>[0]

function buildUpdateChannelsMsg(
  args: UpdateChannelsMsgBuilderParameters,
): UpdateChannelsMsg {
  return AnsHostExecuteMsgBuilder.updateChannels(args) as UpdateChannelsMsg
}

export function useUpdateChannels({
  contractAddress,
  ...restInput
}: UseUpdateChannelsArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateChannelsMsg>({
      contractAddress,
      ...restInput,
    })

  const updateChannels = React.useCallback(
    function updateChannels({
      senderAddress,
      signingClient,
      ...args
    }: UpdateChannelsMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildUpdateChannelsMsg(args),
      })
    },
    [executeContract],
  )

  const updateChannelsAsync = React.useCallback(
    function updateChannelsAsync({
      senderAddress,
      signingClient,
      ...args
    }: UpdateChannelsMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildUpdateChannelsMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { updateChannels, updateChannelsAsync, ...restOutput }
}
