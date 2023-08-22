import { fontMono } from '@/lib/fonts'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Chatbot',
  description: 'An AI Chatbot using AI SDK and OpenAI',
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`bg-slate-50 text-neutral-800 mx-auto min-h-screen antialiased font-mono overflow-x-hidden ${fontMono.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
