import { fromBase64, fromUtf8, toBase64, toUtf8 } from '@cosmjs/encoding'

export const jsonToUtf8 = (json: Record<string, unknown>): Uint8Array =>
  toUtf8(JSON.stringify(json))
export const utf8ToJson = (binary: Uint8Array): Record<string, unknown> =>
  JSON.parse(fromUtf8(binary))
export const jsonToBinary = (json: Record<string, unknown>): string =>
  toBase64(jsonToUtf8(json))
export const binaryToJson = (binary: string): string =>
  fromUtf8(fromBase64(binary))
export const toUint8Array = (text: string) =>
  Uint8Array.from(Array.from(text).map((letter) => letter.charCodeAt(0)))
