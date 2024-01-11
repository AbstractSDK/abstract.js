import { AccountId } from './account-id'

// TODO: Figure out where is this used
export function accountIdToParameter(id: AccountId) {
  return { sea: id.seq, trace: id.trace }
}
