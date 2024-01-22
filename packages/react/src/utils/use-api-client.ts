import { createApiClient } from '@abstract-money/core'
import React from 'react'
import { useConfig } from 'src/contexts'

export function useApiClient() {
  const { apiUrl } = useConfig()

  return React.useMemo(
    () =>
      createApiClient({
        apiUrl,
      }),
    [apiUrl],
  )
}
