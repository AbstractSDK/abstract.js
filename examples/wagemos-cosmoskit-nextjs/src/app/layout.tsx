'use client'

import { stringToAccountId } from '@abstract-money/core'
import { cosmosKitProvider } from '@abstract-money/provider-cosmoskit'
import { AbstractProvider, createConfig } from '@abstract-money/react'
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
const abstractConfig = createConfig({ provider: cosmosKitProvider })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <CosmosKitProvider>
        <body className={cn(inter.variable, poppins.variable)}>
          <AbstractProvider config={abstractConfig}>
            <main className="flex flex-col items-center p-24 min-h-screen">
              <section className="mt-10">
                <div className="mt-10">{children}</div>
              </section>
            </main>
          </AbstractProvider>
          <Toaster />
        </body>
      </CosmosKitProvider>
    </html>
  )
}
