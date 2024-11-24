'use client'

import { Abstraxion, AbstraxionProvider } from '@burnt-labs/abstraxion'
import { QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Inter, Poppins } from 'next/font/google'
import React from 'react'
import { Toaster } from '../components/ui/toaster'
import { cn } from '../utils'
import { Header } from './_components/header'
import { BETTING_APP_ADDRESS } from './_lib/constants'
import { AbstractProvider } from './_providers/abstract'
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
          <AbstraxionProvider
            config={{
              // treasury: 'xion1h82c0efsxxq4pgua754u6xepfu6avglup20fl834gc2ah0ptgn5s2zffe9',
              bank: [
                {
                  denom: 'uxion',
                  amount: '1000000',
                },
              ],
              contracts: [
                {
                  address: BETTING_APP_ADDRESS,
                  amounts: [
                    {
                      denom: 'uxion',
                      amount: '1000000',
                    },
                  ],
                },
              ],
            }}
          >
            <AbstractProvider>
              <Header />
              <main className="flex flex-col items-center p-24 min-h-screen">
                <section className="mt-10">
                  <div className="mt-10">{children}</div>
                </section>
              </main>
            </AbstractProvider>
            <ReactQueryDevtools client={client} />
          </AbstraxionProvider>
        </GrazProvider>
        <Toaster />
      </body>
    </html>
  )
}
