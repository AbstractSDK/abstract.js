import { VersionControlTypes } from 'src/codegen/abstract'

// TODO: Figure out where is this used
export function accountIdToParameter(id: VersionControlTypes.AccountId) {
  return { seq: id.seq, trace: id.trace }
}
