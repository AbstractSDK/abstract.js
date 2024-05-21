import { Coin, StdFee } from '@cosmjs/stargate'
import { Evaluate, Omit } from './utils'

export type WithCosmWasmSignOptions<
  parameters extends {} | readonly unknown[],
> = Evaluate<
  parameters & {
    readonly fee: number | StdFee | 'auto'
    readonly memo?: string
    readonly funds?: (Coin & { [key: string]: string })[]
  }
>

export type ExtractAndPartializeParameters<
  fn extends (parameters: any) => any,
  keys extends keyof Parameters<fn>[0],
> = Evaluate<
  Omit<Parameters<fn>[0], keys> & {
    readonly extra?: Partial<Pick<Parameters<fn>[0], keys>>
  }
>
