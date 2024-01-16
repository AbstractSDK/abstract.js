import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { AccountFactoryClient } from 'src/codegen/abstract'
import { SliceFirst, WithOptional } from 'src/types/utils'
import { createAccount } from './create-account'

export async function createAccountMonarchy(
  cosmWasmClient: SigningCosmWasmClient,
  apiUrl: string,
  sender: string,
  owner: string,
  {
    installModules = [],
    baseAsset,
    description,
    name,
    namespace,
    link,
  }: WithOptional<
    Omit<
      Parameters<typeof AccountFactoryClient.prototype.createAccount>[0],
      'governance'
    >,
    'installModules'
  >,
  ...params: SliceFirst<
    Parameters<typeof AccountFactoryClient.prototype.createAccount>
  >
) {
  return createAccount(
    cosmWasmClient,
    apiUrl,
    sender,
    {
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
    ...params,
  )
}
