export type MaybeArray<T> = T | T[]

export type MaybePromise<T> = T | Promise<T>

export type RequiredBy<TType, TKeys extends keyof TType> = Required<
  Pick<TType, TKeys>
> &
  Omit<TType, TKeys>
