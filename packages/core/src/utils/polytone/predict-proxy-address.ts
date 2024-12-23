import { createHash } from 'node:crypto'
import { fromBech32 } from '@cosmjs/encoding'
import { getInstantiate2Address } from '../module-factory'

/**
 * Generates a salt by hashing the provided inputs with SHA-512.
 *
 * @param inputs - An array of strings to hash. Each input will be concatenated in the order provided.
 * @returns A Uint8Array containing the 64-byte (512-bit) hash.
 */
export const generateSha512Salt = (...inputs: string[]): Uint8Array => {
  const hash = createHash('sha512')
  for (const input of inputs) {
    hash.update(input)
  }
  return Uint8Array.from(hash.digest())
}

/**
 * Generate the salt for a new Polytone proxy.
 * @param connectionId
 * @param counterpartyPort
 * @param sender
 */
export const generatePolytoneProxySalt = ({
  connectionId,
  counterpartyPort,
  sender,
}: {
  connectionId: `connection-${string}`
  counterpartyPort: `wasm.${string}`
  sender: string
}) => generateSha512Salt(connectionId, counterpartyPort, sender)

/**
 * Predicts the address of a Polytone proxy contract.
 * @param controllerNoteAddress - The address of the controller chain's Note contract.
 * @param controllerSender - The sending address on the controller chain.
 * @param hostVoiceAddress - The address of the host chain's Voice contract.
 * @param hostProxyChecksum - The checksum of the host chain's proxy contract.
 * @param voiceConnectionId - The connection ID of the Voice contract to the Note.
 */
export const predictPolytoneProxyAddress = async ({
  controllerNoteAddress,
  controllerSender,
  hostVoiceAddress,
  hostVoiceConnectionId,
  hostProxyChecksum,
}: {
  controllerNoteAddress: string
  controllerSender: string
  hostVoiceAddress: string
  hostProxyChecksum: string
  hostVoiceConnectionId: `connection-${string}`
}) => {
  // Sanity check
  const notePrefix = fromBech32(controllerNoteAddress).prefix
  const senderPrefix = fromBech32(controllerSender).prefix
  if (notePrefix !== senderPrefix) {
    throw new Error(
      `Sender and note address prefixes do not match: ${senderPrefix} !== ${notePrefix}`,
    )
  }

  const salt = generatePolytoneProxySalt({
    connectionId: hostVoiceConnectionId,
    counterpartyPort: `wasm.${controllerNoteAddress}`,
    sender: controllerSender,
  })

  return await getInstantiate2Address(hostVoiceAddress, hostProxyChecksum, salt)
}
