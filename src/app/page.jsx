import { Plus_Jakarta_Sans } from 'next/font/google'
const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

// Pages
import About from './about/page'

export default function Home() {
  return (
      <main className={jakartaSans.className}>
        <About />
      </main>
  )
}
