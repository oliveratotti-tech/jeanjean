import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Colégio Jean Piaget | Sertanópolis - PR',
  description: 'Escola que apoia nos caminhos de aprendizados da vida e nas conquistas do futuro. Educação infantil, ensino fundamental e médio em Sertanópolis.',
  keywords: ['colégio', 'escola', 'Jean Piaget', 'Sertanópolis', 'educação', 'ensino', 'matrícula'],
  icons: {
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%20JEAN%20PIAGET-7bbC4tXQ0LFLDNWmDWQmp3EQ6KmUOa.png',
    apple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%20JEAN%20PIAGET-7bbC4tXQ0LFLDNWmDWQmp3EQ6KmUOa.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-background`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
