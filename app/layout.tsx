import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Test KiddeeLab',
  description: 'This is test-01',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body className={inter.className}>
        <h1 className ='text-5xl font-bold text-sky-500'> Navbar </h1>
        {children}</body>
    </html>
  )
}
