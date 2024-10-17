import { ABSTRACT_NAMESPACE } from '@abstract-money/core'
import { ExecuteResult, SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { RegistryTypes } from '../../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { CommonModuleNames } from '../../public/types'
import { installModules } from './install-modules'

export type EnableIbcParameters = WithCosmWasmSignOptions<{
  accountId: RegistryTypes.AccountId
  signingCosmWasmClient: SigningCosmWasmClient
  apiUrl: string
  sender: string
}>

export async function enableIbc({
  ...parameters
}: EnableIbcParameters): Promise<ExecuteResult> {
  return installModules({
    ...parameters,
    modules: [
      {
        module: {
          name: CommonModuleNames.IBC_CLIENT,
          namespace: ABSTRACT_NAMESPACE,
          version: 'latest',
        },
      },
    ],
  })
}
