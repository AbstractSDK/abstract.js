'use client'

import { cosmosKitProvider } from '@abstract-money/provider-cosmoskit'
import { AbstractProvider, createConfig } from '@abstract-money/react'
import '@interchain-ui/react/styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Inter, Poppins } from 'next/font/google'
import { Toaster } from '../components/ui/toaster'
import { cn } from '../utils'
import { CosmosKitProvider } from './_providers/cosmos-kit'
import './globals.css'
const inter = Inter({ subsets: ['latin'], variable: '--font-body' })

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['900', '800', '700'],
  variable: '--font-display',
})
const abstractConfig = createConfig({
  provider: cosmosKitProvider,
  apiUrl: 'https://api.abstract.money/graphql',
})

const client = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1_000 * 60 * 60 * 24, // 24 hours
      networkMode: 'offlineFirst',
      refetchOnWindowFocus: false,
      retry: 0,
    },
    mutations: {
      networkMode: 'offlineFirst',
    },
  },
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <CosmosKitProvider>
        <body className={cn(inter.variable, poppins.variable)}>
          <QueryClientProvider client={client}>
            <AbstractProvider
              config={abstractConfig}
              queryClientOptions={{ client }}
            >
              <main className="flex flex-col items-center p-24 min-h-screen">
                <section className="mt-10">
                  <div className="mt-10">{children}</div>
                </section>
              </main>
            </AbstractProvider>
            <ReactQueryDevtools client={client} />
          </QueryClientProvider>
          <Toaster />
        </body>
      </CosmosKitProvider>
    </html>
  )
}
