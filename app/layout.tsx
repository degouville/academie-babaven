import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import ClientEffects from './components/ClientEffects'

export const metadata: Metadata = {
  title: "Babaven Académie — Maîtrise l'IA avant que ça soit trop tard",
  description: "La 1ère académie IA 100% francophone. Formations concrètes en français pour entrepreneurs. Méthode CORT exclusive. Dès 24€/mois.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <ClientEffects />
        <Script src="https://unpkg.com/lucide@latest" strategy="afterInteractive" />
      </body>
    </html>
  )
}
