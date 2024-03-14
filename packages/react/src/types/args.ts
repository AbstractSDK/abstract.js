import { Coin, StdFee } from '@cosmjs/stargate'
import { type Evaluate, Omit } from './utils'

export type WithArgs<args extends {}> = {
  args: Evaluate<Readonly<args>> | undefined
}

export type ExtractArgsFromParameters<
  parameters extends {
    readonly fee: number | StdFee | 'auto'
    readonly memo?: string
    readonly funds?: (Coin & { [key: string]: string })[]
  },
> = Evaluate<
  Pick<parameters, 'fee' | 'memo' | 'funds'> & {
    args: Evaluate<Omit<parameters, 'fee' | 'memo' | 'funds'>>
  }
>

export type ExtractArgs<parameters extends { args: {} }> = parameters['args']
