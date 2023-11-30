import { AbstractProvider } from '@abstract-money/react'
import type { Metadata } from 'next'
import { GrazProvider } from './_providers/graz'
import { ToastProvider } from './_providers/toast'
import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import { cn } from '~/utils'

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
