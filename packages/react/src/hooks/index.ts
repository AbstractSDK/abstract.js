// NOTE
// This file is a workaround for the build issue, where esbuild doesn't respect
// the source folder structure.
// However, this will be replaced by custom-made hooks in future
import { useSubAccountIds as account_useSubAccountIds } from '../internal/account'

export function useSubAccountIds(
  ...args: Parameters<typeof account_useSubAccountIds>
) {
  return account_useSubAccountIds(...args)
}
