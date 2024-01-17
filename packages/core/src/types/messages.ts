export type ContractMsg = Record<string, unknown>

export type EncodedMsg = {
  readonly typeUrl: string
  readonly value: any
}
