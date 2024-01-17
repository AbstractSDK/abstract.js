import * as s from 'string-ts'
import { PROTOCOL_SEPARATOR } from './constants'
import { AnsId } from './types'
export function parseSourceProtocol<
  const TId extends `${string}${typeof PROTOCOL_SEPARATOR}${string}`,
>(name: AnsId<TId>): s.Split<TId, typeof PROTOCOL_SEPARATOR>[0] {
  return s.split(name, PROTOCOL_SEPARATOR)[0]
}
