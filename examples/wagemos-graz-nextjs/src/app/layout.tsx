'use client'

import { stringToAccountId } from '@abstract-money/core'
import { grazProvider } from '@abstract-money/provider-graz'
import {
  AbstractAccountIdProvider,
  AbstractProvider,
  createConfig,
} from '@abstract-money/react'
import { Inter, Poppins } from 'next/font/google'
import { Toaster } from '../components/ui/toaster'
import { cn } from '../utils'
import { GrazProvider } from './_providers/graz'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-body' })

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['900', '800', '700'],
  variable: '--font-display',
})
const abstractConfig = createConfig({
  provider: grazProvider,
  apiUrl: 'https://api.abstract.money/graphql',
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
        <GrazProvider>
          <AbstractProvider config={abstractConfig}>
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
        </GrazProvider>
        <Toaster />
      </body>
    </html>
  )
}
