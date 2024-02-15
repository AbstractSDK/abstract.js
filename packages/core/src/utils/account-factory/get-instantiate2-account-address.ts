import { instantiate2Address } from '@cosmjs/cosmwasm-stargate'
import { bech32 } from 'bech32'
import { AccountId, accountIdToString } from '../account-id'

async function getSalt(accountId: AccountId) {
  const encoder = new TextEncoder()
  const hash = await crypto.subtle.digest(
    'SHA-256',
    encoder.encode(accountIdToString(accountId)),
  )
  return new Uint8Array([
    ...new Uint8Array(hash),
    ...encoder.encode('abstract'),
  ])
}

export async function getInstantiate2AccountAddress(
  address: string,
  accountFactoryAddress: string,
  checksum: Uint8Array,
  accountId: AccountId,
) {
  const prefix = bech32.decode(address).prefix

  return instantiate2Address(
    checksum,
    accountFactoryAddress,
    await getSalt(accountId),
    prefix,
  )
}
