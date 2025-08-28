import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

// Components
import NavbarWrapper from './components/NavbarWrapper'
import FooterWrapper from './components/FooterWrapper'

const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Sangalabror Pujianto',
  description: 'This is my portofolio website.',
}

export default function RootLayout({ children }) {
  return (
    <html id='app' lang="en">
        <body className={`flex flex-col min-h-screen ${jakartaSans.className}`}>
          <NavbarWrapper />
          <main className="flex-1 flex flex-col items-center justify-center w-full">
            {children}
          </main>
          <FooterWrapper />
          <SpeedInsights />
        </body>
    </html>
  )
}
