import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import ClientEffects from './components/ClientEffects'
import SplashScreen from './components/SplashScreen'

export const metadata: Metadata = {
  title: "Babaven Académie — Fais en 1 heure ce qui te prenait 1 journée",
  description: "La 1ère académie IA 100% francophone. Formations concrètes en français pour entrepreneurs caribéens.",
  openGraph: {
    title: "Babaven Académie — Fais en 1 heure ce qui te prenait 1 journée",
    description: "La 1ère académie IA 100% francophone. Formations concrètes en français pour entrepreneurs caribéens.",
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Babaven Académie',
  },
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
        <SplashScreen />
        {children}
        <ClientEffects />
        <Script src="https://unpkg.com/lucide@latest" strategy="afterInteractive" />
      </body>
    </html>
  )
}
