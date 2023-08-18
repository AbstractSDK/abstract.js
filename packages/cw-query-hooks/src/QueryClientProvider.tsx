import React, { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider as ReactQueryClientProvider } from '@tanstack/react-query'

interface QueryClientProviderProps {
  queryClient: QueryClient
}
export const QueryClientProvider: FC<PropsWithChildren<QueryClientProviderProps>> = ({
  queryClient,
  children,
}) => {
  return (
    <ReactQueryClientProvider client={queryClient} contextSharing={true}>
      {children}
    </ReactQueryClientProvider>
  )
}
