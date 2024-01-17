import { SliceFirst } from 'src/types/utils'
import * as s from 'string-ts'
import { CHAIN_SEPARATOR } from './constants'
import { AnsId } from './types'

export function parseSymbol<
  const TId extends `${string}${typeof CHAIN_SEPARATOR}${string}`,
>(
  name: AnsId<TId>,
): Lowercase<
  s.Join<
    SliceFirst<s.Split<TId, typeof CHAIN_SEPARATOR>>,
    typeof CHAIN_SEPARATOR
  >
> {
  const split = s.split(name, CHAIN_SEPARATOR)

  return s.lowerCase(
    s.join(split.slice(1) as SliceFirst<typeof split>, CHAIN_SEPARATOR),
  )
}
