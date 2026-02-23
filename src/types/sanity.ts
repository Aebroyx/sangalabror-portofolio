import type { PortableTextBlock } from '@portabletext/types'

// Sanity image reference type
export interface SanityImageReference {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

// ============== PROJECT TYPES ==============

export interface ProjectListItem {
  _id: string
  title: string
  slug: string
  shortDescription: string
  externalLink?: string
  externalLinkLabel?: string
  order: number
}

export interface ShowcaseImage {
  image: SanityImageReference
  alt: string
  caption?: string
  layoutSize: 'large' | 'medium' | 'small'
}

export interface ProjectDetail {
  _id: string
  title: string
  slug: string
  year: string
  shortDescription: string
  description?: PortableTextBlock[]
  externalLink?: string
  externalLinkLabel?: string
  techStack?: string[]
  showcaseImages?: ShowcaseImage[]
  order: number
}

export interface ProjectSlug {
  slug: string
}

// ============== EXPERIENCE TYPES ==============

export interface Experience {
  _id: string
  company: string
  role: string
  startDate: string
  endDate?: string
  isCurrent: boolean
  description?: PortableTextBlock[]
  technologies?: string[]
  order: number
}

// ============== EDUCATION TYPES ==============

export interface Education {
  _id: string
  institution: string
  degree: string
  year: string
  description?: string
  order: number
}

// ============== SITE SETTINGS TYPES ==============

export interface SiteSettings {
  _id: string
  title: string
  cvUrl: string
  aboutGreeting?: string
  aboutFullName?: string
  aboutTagline?: string
  aboutBio?: PortableTextBlock[]
  aboutBioShort?: string
}

// ============== SITEMAP TYPES ==============

export interface SitemapProject {
  slug: string
  _updatedAt: string
}
