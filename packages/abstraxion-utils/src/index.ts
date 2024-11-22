import {
  AccountQueryClient,
  RegistryQueryClient,
} from '@abstract-money/core/codegen/abstract'
import { RegistryTypes } from '@abstract-money/core/codegen/abstract'
import type { Pubkey } from '@cosmjs/amino'
import { Uint64 } from '@cosmjs/math'
import { decodePubkey } from '@cosmjs/proto-signing'
import {
  type Account,
  QueryClient,
  accountFromAny,
  setupAuthExtension,
} from '@cosmjs/stargate'
import { Comet38Client } from '@cosmjs/tendermint-rpc'
import type Long from 'long'
import { AbstractAccount } from './proto/abstract-account'

export const XION_TESTNET_CHAIN_ID = 'xion-testnet-1'
export const XION_TESTNET_CHAIN_NAME = 'xiontestnet'

export const XION_ACCOUNTS_START = 2147483648

const xionAbstractAccountSeqFromNumber = (accNumber: number) => {
  return XION_ACCOUNTS_START + accNumber
}

/**
 * Predicts the XION abstract account ID for a given owner address. This is used as a hack for testnet, though will be different on mainnet.
 * @param owner
 * @param rpcEndpoint
 */
export const predictXionAbstractAccountIdByOwner = async (
  owner: string,
  rpcEndpoint: string,
): Promise<RegistryTypes.AccountId> => {
  const comet = await Comet38Client.connect(rpcEndpoint)
  const xionQueryClient = QueryClient.withExtensions(comet, setupAuthExtension)
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

export async function getXionAbstractAccountByOwner(
  owner: string,
  registryQueryClient: RegistryQueryClient,
  rpcEndpoint: string,
): Promise<
  { client: AccountQueryClient; accountId: RegistryTypes.AccountId } | undefined
> {
  try {
    const accountId = await predictXionAbstractAccountIdByOwner(
      owner,
      rpcEndpoint,
    )

    const { accounts } = await registryQueryClient.accounts({
      accountIds: [accountId],
    })

    if (accounts.length > 0) {
      const client = new AccountQueryClient(
        registryQueryClient.client,
        accounts[0]!,
      )
      return {
        client,
        accountId,
      }
    }
  } catch {
    return undefined
  }
  return undefined
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
  let pubkey: Pubkey | null = null
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
