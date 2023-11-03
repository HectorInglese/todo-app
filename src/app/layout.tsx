import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'ToDos App - Hector Inglese',
  description: 'ToDos App - Hector Inglese',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className='dark'>
      <body className={`${roboto.className}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
