import { AccountMsgComposer } from '../../codegen/abstract'

export function encodeCreateSubAccountMsg({
  sender,
  accountAddress,
  ...rest
}: Parameters<typeof AccountMsgComposer.prototype.createSubAccount>[0] & {
  sender: string
  accountAddress: string
}) {
  const composer = new AccountMsgComposer(sender, accountAddress)
  return composer.createSubAccount(rest)
}
