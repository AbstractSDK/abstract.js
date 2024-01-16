import * as s from 'string-ts'
import { PROTOCOL_SEPARATOR } from '../constants'
export function ansNameToSourceProtocol<
  const TName extends `${string}${typeof PROTOCOL_SEPARATOR}${string}`,
>(name: TName): s.Split<TName, typeof PROTOCOL_SEPARATOR>[0] {
  return s.split(name, PROTOCOL_SEPARATOR)[0]
}
