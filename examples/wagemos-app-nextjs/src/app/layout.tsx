import { AbstractProvider } from '@abstract-money/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GrazProvider } from './_providers/graz'
import { ToastProvider } from './_providers/toast'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <ToastProvider>
          <GrazProvider>
            <AbstractProvider>
              <main className="flex flex-col items-center p-24 min-h-screen">
                {children}
                {bets}
              </main>
            </AbstractProvider>
          </GrazProvider>
        </ToastProvider>
      </body>
    </html>
  )
}
