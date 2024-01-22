import { Coin, StdFee } from '@cosmjs/amino'
import { Prettify } from './utils'

export type WithArgs<TArgs extends {} | readonly unknown[]> = {
  args: Prettify<Readonly<TArgs>>
}

export type WithArgsAndCosmWasmSignOptions<
  TArgs extends {} | readonly unknown[],
> = Prettify<
  WithArgs<TArgs> & {
    readonly fee: number | StdFee | 'auto'
    readonly memo?: string
    readonly funds?: (Coin & { [key: string]: string })[]
  }
>

export type CutArgs<
  TArgs extends {},
  T extends (payload: any) => any,
  K extends keyof TArgs = keyof TArgs,
> = Prettify<
  T extends (payload: infer P) => any
    ? P extends WithArgs<TArgs>
      ? Prettify<
          Omit<P, 'args'> & {
            args: Prettify<Omit<P['args'], K>>
          }
        >
      : never
    : never
>
