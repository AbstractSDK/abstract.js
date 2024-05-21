import { Coin, StdFee } from '@cosmjs/stargate'
import { type Evaluate, type IsEqual, type Omit } from './utils'

export type WithArgs<args extends { extra?: any } | undefined> =
  args extends undefined
    ? never
    : Evaluate<
        {
          extra?: args extends { extra?: any } ? Evaluate<args['extra']> : never
        } & Evaluate<
          args extends { extra?: any }
            ? IsEqual<Omit<args, 'extra'>, {}> extends true
              ? {}
              : { args: Evaluate<Omit<args, 'extra'>> | undefined }
            : { args: args | undefined }
        >
      >

export type ExtractArgsFromParameters<
  parameters extends {
    readonly fee: number | StdFee | 'auto'
    readonly memo?: string
    readonly funds?: (Coin & { [key: string]: string })[]
    readonly extra?: any
  },
> = Evaluate<
  Pick<parameters, 'fee' | 'memo' | 'funds' | 'extra'> & {
    args: Evaluate<Omit<parameters, 'fee' | 'memo' | 'funds' | 'extra'>>
  }
>

export type ExtractArgs<parameters extends { args: {} }> = parameters['args']
