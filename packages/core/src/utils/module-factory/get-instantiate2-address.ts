import { instantiate2Address } from '@cosmjs/cosmwasm-stargate'
import { fromHex, toUtf8 } from '@cosmjs/encoding'
import { bech32 } from 'bech32'
import { RegistryTypes } from '../../codegen/abstract'
import { registryAccountIdToString } from '../account-id'
import { toSha256 } from '../encoding'

const SALT_POSTFIX = 'abstract'

/**
 * Generate a salt for the given accountId.
 * @param accountId
 * @see https://github.com/AbstractSDK/abstract/blob/58fdfbfa6628da928f812bbf14352895a00d2e13/framework/packages/abstract-std/src/objects/salt.rs#L7
 */
export async function getAccountIdSalt(accountId: RegistryTypes.AccountId) {
  const sha256 = await toSha256(registryAccountIdToString(accountId))

  return new Uint8Array([...sha256, ...toUtf8(SALT_POSTFIX)])
}

/**
 * Returns the instantiate2 address for the given creator address, codeIdChecksum and accountId
 * @param creatorAddress - address of the contract creator
 * @param codeIdChecksum - checksum of the code id of the contract expected to be instantiated
 * @param accountId
 */
export async function getInstantiate2AddressWithAccountId(
  creatorAddress: string,
  codeIdChecksum: string,
  accountId: RegistryTypes.AccountId,
) {
  const salt = await getAccountIdSalt(accountId)

  return getInstantiate2Address(creatorAddress, codeIdChecksum, salt)
}

/**
 * Returns the instantiate2 address for the given creator address, codeIdChecksum and salt
 * @param creatorAddress - address of the contract creator
 * @param codeIdChecksum - checksum of the code id of the contract expected to be instantiated
 * @param salt - the salt to use for the address calculation
 */
export async function getInstantiate2Address(
  creatorAddress: string,
  codeIdChecksum: string,
  salt: string | Uint8Array,
) {
  const hexedChecksum = fromHex(codeIdChecksum)
  const saltBytes = typeof salt === 'string' ? toUtf8(salt) : salt
  const prefix = bech32.decode(creatorAddress).prefix

  return instantiate2Address(hexedChecksum, creatorAddress, saltBytes, prefix)
}
