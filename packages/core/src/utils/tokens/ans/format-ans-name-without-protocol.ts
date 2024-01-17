import * as s from 'string-ts'
import { PROTOCOL_SEPARATOR } from './constants'
import { AnsId } from './types'

export function formatAnsNameWithoutProtocol<
  const TId extends `${string}${typeof PROTOCOL_SEPARATOR}${string}`,
>(name: AnsId<TId>): Lowercase<s.Split<TId, typeof PROTOCOL_SEPARATOR>[1]> {
  const nameWithoutProtocol = s.split(name, PROTOCOL_SEPARATOR)[1]

  if (!nameWithoutProtocol) {
    throw new Error(`Invalid name: ${name}`)
  }
  return s.lowerCase(nameWithoutProtocol) satisfies AnsId
}
