import { RegistryTypes } from '../../../codegen/abstract'

export type GetRegistryAccountIdParameters = {
  accountId: RegistryTypes.AccountId
}

export function getRegistryAccountId({
  accountId,
}: GetRegistryAccountIdParameters) {
  return accountId
}
