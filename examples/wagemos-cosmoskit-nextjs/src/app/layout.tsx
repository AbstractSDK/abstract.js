import { AbstractProvider } from '@abstract-money/react'
import '@interchain-ui/react/styles'
import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'Wagemos App',
  description: 'Wagemos App using Abstract SDK',
}

export default function RootLayout({
  children,
  bets,
}: {
  children: React.ReactNode
  bets: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, poppins.variable)}>
        <CosmosKitProvider>
          <AbstractProvider>
            <main className="flex flex-col items-center p-24 min-h-screen">
              {children}
              {bets}
            </main>
          </AbstractProvider>
        </CosmosKitProvider>
        <Toaster />
      </body>
    </html>
  )
}
