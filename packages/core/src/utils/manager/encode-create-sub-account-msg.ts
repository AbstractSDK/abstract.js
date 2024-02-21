import { ManagerMsgComposer } from 'src/codegen/abstract'

export function encodeCreateSubAccountMsg({
  sender,
  managerAddress,
  ...rest
}: Parameters<typeof ManagerMsgComposer.prototype.createSubAccount>[0] & {
  sender: string
  managerAddress: string
}) {
  const composer = new ManagerMsgComposer(sender, managerAddress)
  return composer.createSubAccount(rest)
}
