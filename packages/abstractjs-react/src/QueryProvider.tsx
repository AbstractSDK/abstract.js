import React, { FC, PropsWithChildren } from 'react'
import {
  QueryClientProvider as ReactQueryClientProvider,
  QueryClientProviderProps,
} from '@tanstack/react-query'

export const QueryClientProvider: FC<PropsWithChildren<QueryClientProviderProps>> = ({
  children,
  ...props
}) => {
  return <ReactQueryClientProvider {...props}>{children}</ReactQueryClientProvider>
}
