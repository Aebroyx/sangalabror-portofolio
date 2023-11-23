import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

// Components
import Navbar from './components/Navbar'
import Sidenav from './components/Sidenav'

const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Sangalabror Pujianto',
  description: 'This is my portofolio website.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={jakartaSans.className}>
          <Navbar />
          <Sidenav />
          {children}
        </body>
    </html>
  )
}
