/**
 * @description Combines members of an intersection into a readable type.
 *
 * @see {@link https://twitter.com/mattpocockuk/status/1622730173446557697?s=20&t=NdpAcmEFXY01xkqU3KO0Mg}
 * @example
 * Prettify<{ a: string } & { b: string } & { c: number, d: bigint }>
 * => { a: string, b: string, c: number, d: bigint }
 */
export type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

export type SliceFirst<T extends readonly unknown[]> = T extends readonly [
  infer _,
  ...infer Rest,
]
  ? Rest
  : never

export type SliceFirstTwo<T extends readonly unknown[]> = T extends readonly [
  infer _,
  infer _,
  ...infer Rest,
]
  ? Rest
  : never

export type SliceFirstThree<T extends readonly unknown[]> = T extends readonly [
  infer _,
  infer _,
  infer _,
  ...infer Rest,
]
  ? Rest
  : never

export type WithOptional<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>

export type MaybeArray<T> = T | T[]
