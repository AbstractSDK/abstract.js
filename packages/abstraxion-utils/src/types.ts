import Long from 'long'

export interface MsgRegisterAccount {
  /** Sender is the actor who signs the message */
  sender: string
  /** CodeID indicates which wasm binary code is to be used for this contract */
  codeId: Long
  /** Msg is the JSON-encoded instantiate message for the contract */
  msg: Uint8Array
  /** Funds are coins to be deposited to the contract on instantiattion */
  funds: {
    denom: string
    amount: string
  }[]
  /**
   * Salt is an arbinary value to be used in deriving the account address.
   * Max 64 bytes.
   */
  salt: Uint8Array
}

export const MSG_REGISTER_ACCOUNT_TYPE_URL =
  '/abstractaccount.v1.MsgRegisterAccount'

export interface MsgRegisterAccountEncodeObject {
  readonly typeUrl: typeof MSG_REGISTER_ACCOUNT_TYPE_URL
  readonly value: Partial<MsgRegisterAccount>
}
