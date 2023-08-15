"use client"

import './globals.css';

import { Inter } from 'next/font/google';

import { NextUIProvider } from '@nextui-org/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'React Vimeo Player',
  description: 'Vimeo like react video player',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  )
}
