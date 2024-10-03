import { instantiate2Address } from '@cosmjs/cosmwasm-stargate'
import { fromHex } from '@cosmjs/encoding'
import { bech32 } from 'bech32'
import { AccountId, versionControlAccountIdToString } from '../account-id'
import { toSha256 } from '../encoding'

const SALT_POSTFIX = 'abstract'

async function getAccountIdSalt(accountId: AccountId) {
  const sha256 = await toSha256(versionControlAccountIdToString(accountId))
  const encoder = new TextEncoder()

  return new Uint8Array([...sha256, ...encoder.encode(SALT_POSTFIX)])
}

/**
 * Returns the instantiate2 address for the given account factory address, codeIdChecksum and accountId
 * @param moduleFactoryAddress - the module factory is the creator
 * @param codeIdChecksum - checksum of the code id of the contract expected to be instantiated
 * @param accountId
 */
export async function getInstantiate2Address(
  moduleFactoryAddress: string,
  codeIdChecksum: string,
  accountId: AccountId,
) {
  const hexedChecksum = fromHex(codeIdChecksum)
  const salt = await getAccountIdSalt(accountId)
  const prefix = bech32.decode(moduleFactoryAddress).prefix

  return instantiate2Address(hexedChecksum, moduleFactoryAddress, salt, prefix)
}
