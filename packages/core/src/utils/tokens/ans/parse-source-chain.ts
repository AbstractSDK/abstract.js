import * as s from 'string-ts'
import { CHAIN_SEPARATOR } from './constants'
import { AnsId } from './types'
export function parseSourceChain<
  const TId extends `${string}${typeof CHAIN_SEPARATOR}${string}`,
>(id: AnsId<TId>): s.Split<TId, typeof CHAIN_SEPARATOR>[0] {
  return s.split(id, CHAIN_SEPARATOR)[0]
}
