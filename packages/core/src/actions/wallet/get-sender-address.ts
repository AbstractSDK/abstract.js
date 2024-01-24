import { WithArgs } from '../../types/with-args'

export type GetSenderAddressParameters = WithArgs<{
  sender: string
}>

export async function getSenderAddress({
  args: { sender },
}: GetSenderAddressParameters) {
  return sender
}
