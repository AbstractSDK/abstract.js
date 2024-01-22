import { VersionControlTypes } from '../../codegen/abstract'

export function accountIdToParameter(id: VersionControlTypes.AccountId) {
  return { seq: id.seq, trace: id.trace }
}
