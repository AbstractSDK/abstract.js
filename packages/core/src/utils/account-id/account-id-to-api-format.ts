import { AccountId } from './account-id'

export function accountIdToApiFormat(id: AccountId) {
  return {
    sea: id.seq,
    trace: id.trace === 'local' ? null : id.trace.remote,
    chain: id.chainName,
  }
}
