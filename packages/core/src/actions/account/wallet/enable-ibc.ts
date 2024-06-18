import { ABSTRACT_NAMESPACE } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { ManagerClient, VersionControlTypes } from '../../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { CommonModuleNames } from '../../public/types'
import { getManagerClientFromApi } from './get-manager-client-from-api'
import { installModules } from './install-modules'

export type EnableIbcParameters = WithCosmWasmSignOptions<{
  accountId: VersionControlTypes.AccountId
  signingCosmWasmClient: SigningCosmWasmClient
  apiUrl: string
  sender: string
}>

export async function enableIbc({ ...parameters }: EnableIbcParameters) {
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
