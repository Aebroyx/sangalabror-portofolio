import { Plus_Jakarta_Sans } from 'next/font/google'
import { Metadata } from 'next'
const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

// Pages
import About from './about/page'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Sangalabror Pujianto\'s portfolio. Full Stack Developer and UI/UX Designer passionate about creating innovative digital solutions.',
  openGraph: {
    title: 'Sangalabror Pujianto - Portfolio Home',
    description: 'Welcome to Sangalabror Pujianto\'s portfolio. Full Stack Developer and UI/UX Designer passionate about creating innovative digital solutions.',
  },
}

export default function Home() {
  return (
      <main className={jakartaSans.className}>
        <About />
      </main>
  )
}
