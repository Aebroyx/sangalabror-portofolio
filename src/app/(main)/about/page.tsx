import { getSiteSettings } from '@/sanity/lib/fetch'
import { AboutContent } from './AboutContent'

export default async function About() {
  const siteSettings = await getSiteSettings()

  return (
    <AboutContent
      greeting={siteSettings?.aboutGreeting}
      fullName={siteSettings?.aboutFullName}
      tagline={siteSettings?.aboutTagline}
      bio={siteSettings?.aboutBio}
      bioShort={siteSettings?.aboutBioShort}
    />
  )
}
