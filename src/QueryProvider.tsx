import React, { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider as ReactQueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
export const QueryClientProvider: FC<PropsWithChildren> = ({ children }) => {
  return (<ReactQueryClientProvider client={queryClient} contextSharing={true}>{children}</ReactQueryClientProvider>)
}
