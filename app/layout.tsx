import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bo Tree Ayurveda - Cinematic Reel',
  description: 'Cinematic Instagram Reel showcasing Ayurvedic Shirodhara therapy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
