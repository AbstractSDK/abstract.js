import { P, match } from 'ts-pattern'
import * as Yup from 'yup'
import { VersionControlTypes } from '../../../codegen/abstract'

type AccountId = VersionControlTypes.AccountId
type AccountTrace = VersionControlTypes.AccountTrace

export const ACCOUNT_ID_CHAIN_DELIMITER = '>'
export const ACCOUNT_ID_SEQUENCE_DELIMITER = '-'

export type AccountSequence = number

export const ACCOUNT_ID_SCHEMA: Yup.ObjectSchema<
  ReturnType<AbstractAccountId['toPlainObject']>
> = Yup.object({
  _chainName: Yup.string().required(),
  _sequence: Yup.number().required(),
  _trace: Yup.mixed<AccountTrace>().required(),
})

type AnyAccountTrace = AccountTrace | string[] | string | null | undefined

/**
 * juno-1 = account juno with sequence 1, trace local
 * terra>juno-1
 */
export class AbstractAccountId {
  _sequence: AccountSequence
  _trace: AccountTrace
  _chainName: string

  constructor(chainName: string, seq: number, trace?: AnyAccountTrace) {
    this._chainName = chainName
    this._sequence = seq
    // TODO: validate trace more
    this._trace = match(trace)
      .with({ remote: P.select() }, (remote) => ({ remote }))
      .with(P.typed<string[]>().array(P.string), (remote) => ({ remote }))
      .with('local', null, undefined, () => 'local' as const)
      .with(P.string, (accountTrace) =>
        accountTrace === 'local'
          ? accountTrace
          : { remote: accountTrace.split(ACCOUNT_ID_CHAIN_DELIMITER) },
      )
      .exhaustive()
    AbstractAccountId.validate(this)
  }

  public toPlainObject() {
    return {
      _chainName: this._chainName,
      _sequence: this._sequence,
      _trace: this._trace,
    } as const
  }

  static validate(toTest: AbstractAccountId) {
    return ACCOUNT_ID_SCHEMA.validateSync(toTest.toPlainObject(), {
      abortEarly: false,
    })
  }

  static isValid(toTest: AbstractAccountId): boolean {
    try {
      AbstractAccountId.validate(toTest)
      return true
    } catch {
      return false
    }
  }

  static local(chainName: string, sequence: number): AbstractAccountId {
    return new AbstractAccountId(chainName, sequence, 'local')
  }

  get sequence(): AccountSequence {
    return this._sequence
  }

  get chainName(): string {
    return this._chainName
  }

  get trace(): AccountTrace {
    return this._trace
  }

  get nullableTrace(): null | string[] {
    return this.trace === 'local' ? null : this.trace.remote
  }

  public toStringId(): string {
    const traceString = this.traceString
    const baseId = [this.chainName, this.sequence].join(
      ACCOUNT_ID_SEQUENCE_DELIMITER,
    )
    if (this.traceString === 'local') {
      return baseId
    } else {
      return `${traceString}${ACCOUNT_ID_CHAIN_DELIMITER}${baseId}`
    }
  }

  /**
   * Parse an account id from a string.
   * Format: controllerChainName-sequence => local-sequence
   * Or: hostChainName>controllerChainName-sequence
   * @param accountId
   */
  static fromStringId(
    accountId: string,
    chainName?: string,
  ): AbstractAccountId {
    const [chainString, sequenceStr] = accountId.split(
      ACCOUNT_ID_SEQUENCE_DELIMITER,
    )
    const accountSequence = Number.parseInt(sequenceStr!)

    if (chainString === 'local' && !chainName) {
      throw new Error('chainName must be provided for local account ids')
    }

    const splitChainString = chainString!.split(ACCOUNT_ID_CHAIN_DELIMITER)
    const accountSourceChain = splitChainString[splitChainString.length - 1]
    if (chainName && chainName !== accountSourceChain) {
      throw new Error(
        `chainName ${chainName} does not match chain in account id ${accountId}`,
      )
    }

    if (splitChainString.length === 1) {
      return AbstractAccountId.local(
        accountSourceChain as string,
        accountSequence,
      )
    } else {
      return new AbstractAccountId(
        accountSourceChain as string,
        accountSequence,
        {
          remote: splitChainString.slice(0, splitChainString.length - 1),
        },
      )
    }
  }

  get traceString(): string {
    return this.trace === 'local'
      ? 'local'
      : this.trace.remote.join(ACCOUNT_ID_CHAIN_DELIMITER)
  }

  /**
   * To an accountId object that can be used as a parameter
   */
  public into(): AccountId {
    return {
      seq: this.sequence,
      trace: this.trace,
    }
  }

  /**
   * @deprecated
   * @todo rename to fromContract?
   */
  static fromAccountId(
    chainName: string,
    accountId: AccountId,
  ): AbstractAccountId {
    return new AbstractAccountId(chainName, accountId.seq, accountId.trace)
  }

  static fromApi(from: {
    chainName: string
    sequence: number
    trace?: AnyAccountTrace
  }): AbstractAccountId {
    return new AbstractAccountId(from.chainName, from.sequence, from.trace)
  }

  /**
   * To an accountId object that can be used as a parameter for the Abstract API.
   */
  public toApi(): {
    chain: string
    sequence: number
    trace: null | string[]
  } {
    return {
      chain: this.chainName,
      sequence: this.sequence,
      trace: this.nullableTrace,
    }
  }

  public equals<T extends AbstractAccountId>(other: T): boolean {
    return (
      this.chainName === other.chainName &&
      this.sequence === other.sequence &&
      JSON.stringify(this.trace) === JSON.stringify(other.trace)
    )
  }
}
