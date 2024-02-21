import { instantiate2Address } from '@cosmjs/cosmwasm-stargate'
import { bech32 } from 'bech32'
import { AccountId, accountIdToString } from '../account-id'
import { toSha256 } from '../encoding'

async function getAccountIdSalt(accountId: AccountId) {
  const sha256 = await toSha256(accountIdToString(accountId))
  const encoder = new TextEncoder()

  return new Uint8Array([...sha256, ...encoder.encode('abstract')])
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
  const prefix = bech32.decode(moduleFactoryAddress).prefix

  const checksumSha256 = await toSha256(codeIdChecksum)

  return instantiate2Address(
    checksumSha256,
    moduleFactoryAddress,
    await getAccountIdSalt(accountId),
    prefix,
  )
}
