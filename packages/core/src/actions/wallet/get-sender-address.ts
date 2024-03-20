export type GetSenderAddressParameters = {
  sender: string
}

export async function getSenderAddress({ sender }: GetSenderAddressParameters) {
  return sender
}
