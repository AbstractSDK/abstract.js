import { VersionControlTypes } from 'src/codegen/abstract'

export function accountIdToParameter(id: VersionControlTypes.AccountId) {
  return { seq: id.seq, trace: id.trace }
}
