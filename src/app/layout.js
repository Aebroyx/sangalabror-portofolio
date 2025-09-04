import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

// Components
import NavbarWrapper from './components/NavbarWrapper'
import FooterWrapper from './components/FooterWrapper'
import DeviceRedirect from './components/DeviceRedirect'

const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://sangalabror.aebroyx.dev'),
  title: {
    default: 'Sangalabror Pujianto - Full Stack Developer & UI/UX Designer',
    template: '%s | Sangalabror Pujianto'
  },
  description: 'Portfolio of Sangalabror Pujianto, a passionate Full Stack Developer and UI/UX Designer specializing in modern web applications, mobile apps, and innovative digital solutions.',
  keywords: [
    'Sangalabror Pujianto',
    'Full Stack Developer',
    'UI/UX Designer',
    'Web Developer',
    'Mobile App Developer',
    'React Developer',
    'Next.js Developer',
    'Portfolio',
    'Web Development',
    'Software Development'
  ],
  authors: [{ name: 'Sangalabror Pujianto' }],
  creator: 'Sangalabror Pujianto',
  publisher: 'Sangalabror Pujianto',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sangalabror.aebroyx.dev',
    siteName: 'Sangalabror Pujianto Portfolio',
    title: 'Sangalabror Pujianto - Full Stack Developer & UI/UX Designer',
    description: 'Portfolio of Sangalabror Pujianto, a passionate Full Stack Developer and UI/UX Designer specializing in modern web applications, mobile apps, and innovative digital solutions.',
    images: [
      {
        url: '/portrait.png',
        width: 1200,
        height: 630,
        alt: 'Sangalabror Pujianto - Full Stack Developer & UI/UX Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sangalabror Pujianto - Full Stack Developer & UI/UX Designer',
    description: 'Portfolio of Sangalabror Pujianto, a passionate Full Stack Developer and UI/UX Designer specializing in modern web applications, mobile apps, and innovative digital solutions.',
    images: ['/portrait.png'],
    creator: '@sangalabror',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: 'https://sangalabror.aebroyx.dev',
  },
  category: 'technology',
}

export default function RootLayout({ children }) {
  return (
    <html id='app' lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sangalabror Pujianto",
              "jobTitle": "Full Stack Developer & UI/UX Designer",
              "description": "Passionate Full Stack Developer and UI/UX Designer specializing in modern web applications, mobile apps, and innovative digital solutions.",
              "url": "https://sangalabror.aebroyx.dev",
              "image": "https://sangalabror.aebroyx.dev/portrait.png",
              "sameAs": [
                "https://github.com/aebroyx",
                "https://linkedin.com/in/sangalabrorpujianto/",
              ],
              "knowsAbout": [
                "Web Development",
                "Mobile App Development",
                "UI/UX Design",
                "React",
                "Next.js",
                "Node.js",
                "JavaScript",
                "TypeScript"
              ]
            })
          }}
        />
      </head>
      <body className={`flex flex-col min-h-screen ${jakartaSans.className}`}>
        <DeviceRedirect />
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
