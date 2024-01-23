export type MaybeArray<T> = T | T[]

export type Prettify<type> = { [key in keyof type]: type[key] } & {}

export type PartialArgs<T extends { args: unknown }> = {
  args: Prettify<Partial<T['args']>>
}
