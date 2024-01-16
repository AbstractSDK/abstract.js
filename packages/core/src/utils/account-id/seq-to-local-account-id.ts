import { AccountId } from './account-id'

export function sequenceToLocalAccountId({
  chainName,
  sequence,
}: { chainName: string; sequence: number }) {
  return {
    seq: sequence,
    trace: 'local',
    chainName,
  } satisfies AccountId
}
