import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const dm_Sans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-dm-sans ',
})

export const metadata: Metadata = {
  title: 'Meerkat SaaS',
  description: 'Meerkat AI-Powered image generator',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: '#624cf5' } }}>
      <html lang="en">
        <body className={cn('font-dmSans antialiased', dm_Sans.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
