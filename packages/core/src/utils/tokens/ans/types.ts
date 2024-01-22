import { Token } from '../token'

export type AnsId<T extends string = string> = T

export type AnsToken<T extends string = string> = Token & {
  readonly id: AnsId<T>
}
