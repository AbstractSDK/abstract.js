import { AccountMsgComposer } from '../../codegen/abstract'

export function encodeCreateSubAccountMsg({
  sender,
  managerAddress,
  ...rest
}: Parameters<typeof AccountMsgComposer.prototype.createSubAccount>[0] & {
  sender: string
  managerAddress: string
}) {
  const composer = new AccountMsgComposer(sender, managerAddress)
  return composer.createSubAccount(rest)
}
