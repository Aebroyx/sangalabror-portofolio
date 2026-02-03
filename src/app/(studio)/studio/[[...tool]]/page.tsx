'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../../sanity.config'

// Force this route to be static to avoid cold start timeouts
export const dynamic = 'force-static'

export default function StudioPage() {
  return <NextStudio config={config} />
}
