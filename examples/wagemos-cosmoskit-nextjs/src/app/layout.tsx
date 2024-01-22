'use client'

import { stringToAccountId } from '@abstract-money/core'
import {
  AbstractAccountIdProvider,
  AbstractProvider,
} from '@abstract-money/react'
import '@interchain-ui/react/styles'
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, poppins.variable)}>
        <CosmosKitProvider>
          <AbstractProvider>
            <AbstractAccountIdProvider
              accountId={stringToAccountId('neutron-18')}
            >
              <main className="flex flex-col items-center p-24 min-h-screen">
                <section className="mt-10">
                  <div className="mt-10">{children}</div>
                </section>
              </main>
            </AbstractAccountIdProvider>
          </AbstractProvider>
        </CosmosKitProvider>
        <Toaster />
      </body>
    </html>
  )
}
