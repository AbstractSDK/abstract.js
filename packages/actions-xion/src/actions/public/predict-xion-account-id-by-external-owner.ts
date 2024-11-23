import { RegistryTypes } from '@abstract-money/core/src/codegen/abstract'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { Uint64 } from '@cosmjs/math'
import { decodePubkey } from '@cosmjs/proto-signing'
import {
  type Account,
  QueryClient,
  accountFromAny,
  setupAuthExtension,
} from '@cosmjs/stargate'
import { CometClient } from '@cosmjs/tendermint-rpc'
import type Long from 'long'
import { AbstractAccount } from '../../proto/abstract-account'

export const XION_ACCOUNTS_START = 2147483648

export interface PredictXionAccountIdByOwnerParameters {
  cosmWasmClient: CosmWasmClient
  owner: string
}

const xionAbstractAccountSeqFromNumber = (accNumber: number) => {
  return XION_ACCOUNTS_START + accNumber
}

/**
 * Predicts the XION abstract account ID for a given owner address. This is used as a hack for testnet, though will be different on mainnet.
 * @param owner
 * @param rpcEndpoint
 */
export const predictXionAccountIdByExternalOwner = async ({
  owner,
  cosmWasmClient,
}: PredictXionAccountIdByOwnerParameters): Promise<RegistryTypes.AccountId> => {
  // @ts-ignore
  const cometClient = cosmWasmClient.cometClient as CometClient
  const xionQueryClient = QueryClient.withExtensions(
    cometClient,
    setupAuthExtension,
  )
  const accAny = await xionQueryClient.auth.account(owner)

  if (!accAny) {
    throw new Error(`XION base account not found for owner: ${owner}`)
  }

  const account = customAccountFromAny(accAny)
  return {
    seq: xionAbstractAccountSeqFromNumber(account.accountNumber),
    trace: 'local',
  } satisfies RegistryTypes.AccountId
}

export interface BaseAccount {
  address: string
  pubKey?: Any
  accountNumber: Long
  sequence: Long
}

export interface Any {
  typeUrl: string
  value: Uint8Array
}

function accountFromBaseAccount(input: BaseAccount) {
  const { address, pubKey, accountNumber, sequence } = input
  let pubkey: Account['pubkey'] | null = null
  if (pubKey) {
    pubkey = decodePubkey(pubKey)
  }
  return {
    address: address,
    pubkey: pubkey,
    accountNumber: Uint64.fromString(accountNumber.toString()).toNumber(),
    sequence: Uint64.fromString(sequence.toString()).toNumber(),
  }
}

export function customAccountFromAny(input: Any): Account {
  const { typeUrl, value } = input
  switch (typeUrl) {
    case '/abstractaccount.v1.AbstractAccount': {
      const abstractAccount = AbstractAccount.decode(value)
      if (!abstractAccount) {
        throw new Error('Failed to decode AbstractAccount')
      }
      return accountFromBaseAccount(abstractAccount)
    }
    default:
      return accountFromAny(input)
  }
}
