import * as s from 'string-ts'
import { CHAIN_SEPARATOR } from './separators'

type SliceFirst<T extends readonly unknown[]> = T extends readonly [
  infer _,
  ...infer Rest,
]
  ? Rest
  : never

export function getSymbolFromName<
  const TName extends `${string}${typeof CHAIN_SEPARATOR}${string}`,
>(
  name: TName,
): Lowercase<
  s.Join<
    SliceFirst<s.Split<TName, typeof CHAIN_SEPARATOR>>,
    typeof CHAIN_SEPARATOR
  >
> {
  const split = s.split(name, CHAIN_SEPARATOR)

  return s.lowerCase(
    s.join(split.slice(1) as SliceFirst<typeof split>, CHAIN_SEPARATOR),
  )
}
