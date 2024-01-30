export type MaybeArray<T> = T | T[]

export type Prettify<type> = { [key in keyof type]: type[key] } & {}

export type WithArgs<TArgs extends {} | readonly unknown[]> = {
  args: Prettify<Readonly<TArgs>> | undefined
}
