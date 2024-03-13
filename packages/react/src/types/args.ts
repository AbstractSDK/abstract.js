import { type Evaluate } from './utils'

export type WithArgs<TArgs extends {}> = {
  args: Evaluate<Readonly<TArgs>> | undefined
}

export type ExtractArgs<TParameters extends { args: {} }> = TParameters['args']
