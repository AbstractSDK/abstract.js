import * as s from 'string-ts'
import { PROTOCOL_SEPARATOR } from '../constants'

export function formatAnsNameWithoutProtocol<
  const TName extends `${string}${typeof PROTOCOL_SEPARATOR}${string}`,
>(name: TName): Lowercase<s.Split<TName, typeof PROTOCOL_SEPARATOR>[1]> {
  const nameWithoutProtocol = s.split(name, PROTOCOL_SEPARATOR)[1]

  if (!nameWithoutProtocol) {
    throw new Error(`Invalid name: ${name}`)
  }
  return s.lowerCase(nameWithoutProtocol)
}
