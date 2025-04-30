import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Furico Bot - O mascote da FURIA no Telegram',
  description: 'Um bot de Telegram que integra a OpenAI e a API da HLTV para trazer informações sobre a FURIA.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={ibmPlexMono.className}>{children}</body>
    </html>
  )
} 