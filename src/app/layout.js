import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Sangalabror Pujianto',
  description: 'This is my portofolio website.',
}

export default function RootLayout({ children }) {
  return (
    <html id='app' lang="en">
        <body className={jakartaSans.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
    </html>
  )
}
