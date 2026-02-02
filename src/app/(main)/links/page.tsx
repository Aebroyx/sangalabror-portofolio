import { getSiteSettings } from '@/sanity/lib/fetch'
import LinksContent from './LinksContent'

export default async function Links() {
  const siteSettings = await getSiteSettings()

  return <LinksContent cvUrl={siteSettings?.cvUrl} />
}
