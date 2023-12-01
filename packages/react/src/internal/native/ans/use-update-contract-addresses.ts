import { AnsHostExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type UpdateContractAddressesMsg = Extract<
  ReturnType<typeof AnsHostExecuteMsgBuilder.updateContractAddresses>,
  { update_contract_addresses: unknown }
>

type UpdateContractAddressesMsgBuilderParameters = Parameters<
  typeof AnsHostExecuteMsgBuilder.updateContractAddresses
>[0]

type UseUpdateContractAddressesArgs = Parameters<
  typeof useExecuteContract<UpdateContractAddressesMsg>
>[0]

function buildUpdateContractAddressesMsg(
  args: UpdateContractAddressesMsgBuilderParameters,
): UpdateContractAddressesMsg {
  return AnsHostExecuteMsgBuilder.updateContractAddresses(
    args,
  ) as UpdateContractAddressesMsg
}

export function useUpdateContractAddresses({
  contractAddress,
  ...restInput
}: UseUpdateContractAddressesArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateContractAddressesMsg>({
      contractAddress,
      ...restInput,
    })

  const updateContractAddresses = React.useCallback(
    function updateContractAddresses({
      senderAddress,
      signingClient,
      ...args
    }: UpdateContractAddressesMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildUpdateContractAddressesMsg(args),
      })
    },
    [executeContract],
  )

  const updateContractAddressesAsync = React.useCallback(
    function updateContractAddressesAsync({
      senderAddress,
      signingClient,
      ...args
    }: UpdateContractAddressesMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildUpdateContractAddressesMsg(args),
      })
    },
    [executeContractAsync],
  )

  return {
    updateContractAddresses,
    updateContractAddressesAsync,
    ...restOutput,
  }
}
