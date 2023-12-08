import { RegistryExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type ProposeModulesMsg = Extract<
  ReturnType<typeof RegistryExecuteMsgBuilder.proposeModules>,
  { propose_modules: unknown }
>

type ProposeModulesMsgBuilderParameters = Parameters<
  typeof RegistryExecuteMsgBuilder.proposeModules
>[0]

type UseProposeModulesArgs = Parameters<
  typeof useExecuteContract<ProposeModulesMsg>
>[0]

function buildProposeModulesMsg(
  args: ProposeModulesMsgBuilderParameters,
): ProposeModulesMsg {
  return RegistryExecuteMsgBuilder.proposeModules(args) as ProposeModulesMsg
}

export function useProposeModules({
  contractAddress,
  ...restInput
}: UseProposeModulesArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<ProposeModulesMsg>({
      contractAddress,
      ...restInput,
    })

  const proposeModules = React.useCallback(
    function proposeModules({
      senderAddress,
      signingClient,
      ...args
    }: ProposeModulesMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildProposeModulesMsg(args),
      })
    },
    [executeContract],
  )

  const proposeModulesAsync = React.useCallback(
    function proposeModulesAsync({
      senderAddress,
      signingClient,
      ...args
    }: ProposeModulesMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildProposeModulesMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { proposeModules, proposeModulesAsync, ...restOutput }
}
