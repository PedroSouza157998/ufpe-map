import './globals.css'
//@ts-igore
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
// {inter.className}

export const metadata: any = {
  title: 'UFPE Map',
  description: 'App to find events at UFPE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-green'>{children}</body>
    </html>
  )
}
