'use client'

import { grazProvider } from '@abstract-money/provider-graz'
import { AbstractProvider, createConfig } from '@abstract-money/react'
import { QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Inter, Poppins } from 'next/font/google'
import { Toaster } from '../components/ui/toaster'
import { cn } from '../utils'
import { GrazProvider } from './_providers/graz'
import './globals.css'

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

const inter = Inter({ subsets: ['latin'], variable: '--font-body' })

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['900', '800', '700'],
  variable: '--font-display',
})
const abstractConfig = createConfig({
  provider: grazProvider,
  apiUrl: 'http://localhost:4001/graphql',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  bets: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, poppins.variable)}>
        <GrazProvider client={client}>
          <AbstractProvider config={abstractConfig}>
            <main className="flex flex-col items-center p-24 min-h-screen">
              <section className="mt-10">
                <div className="mt-10">{children}</div>
              </section>
            </main>
          </AbstractProvider>
          <ReactQueryDevtools client={client} />
        </GrazProvider>
        <Toaster />
      </body>
    </html>
  )
}
