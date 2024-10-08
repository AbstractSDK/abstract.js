import { RegistryTypes } from '../../codegen/abstract'

export function accountIdToParameter(id: RegistryTypes.AccountId) {
  return { seq: id.seq, trace: id.trace }
}
