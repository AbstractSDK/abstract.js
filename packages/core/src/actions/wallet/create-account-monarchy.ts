import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { WithArgsAndCosmWasmSignOptions } from 'src/types/with-args'
import { AccountFactoryClient } from '../../codegen/abstract'
import { WithOptional } from '../../types/utils'
import { createAccount } from './create-account'

export type CreateAccountMonarchyParameters = WithArgsAndCosmWasmSignOptions<
  {
    signingCosmWasmClient: SigningCosmWasmClient
    apiUrl: string
    sender: string
    owner: string
  } & WithOptional<
    Omit<
      Parameters<typeof AccountFactoryClient.prototype.createAccount>[0],
      'governance'
    >,
    'installModules'
  >
>

export async function createAccountMonarchy({
  args: {
    signingCosmWasmClient,
    apiUrl,
    sender,
    installModules = [],
    baseAsset,
    description,
    name,
    namespace,
    link,
    owner,
  },
  fee,
  memo,
  funds,
}: CreateAccountMonarchyParameters) {
  return createAccount({
    args: {
      signingCosmWasmClient,
      apiUrl,
      sender,
      governance: {
        Monarchy: {
          monarch: owner,
        },
      },
      name,
      description,
      link,
      installModules,
      baseAsset,
      namespace,
    },
    fee,
    memo,
    funds,
  })
}
