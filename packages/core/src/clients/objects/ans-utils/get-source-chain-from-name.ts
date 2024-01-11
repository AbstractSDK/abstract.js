import * as s from 'string-ts'
import { CHAIN_SEPARATOR } from './separators'
export function getSourceChainFromName<
  const TName extends `${string}${typeof CHAIN_SEPARATOR}${string}`,
>(name: TName): s.Split<TName, typeof CHAIN_SEPARATOR>[0] {
  return s.split(name, CHAIN_SEPARATOR)[0]
}
