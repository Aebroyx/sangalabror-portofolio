import { groq } from 'next-sanity'

// ============== PROJECT QUERIES ==============

// For project list view (homepage, projects page)
export const projectsListQuery = groq`
  *[_type == "project"] | order(order desc) {
    _id,
    title,
    "slug": slug.current,
    shortDescription,
    externalLink,
    externalLinkLabel,
    order
  }
`

// For single project page with all details
export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    year,
    shortDescription,
    description,
    externalLink,
    externalLinkLabel,
    techStack,
    showcaseImages[] {
      image,
      alt,
      caption,
      layoutSize
    },
    order
  }
`

// For generating static params (slugs)
export const allProjectSlugsQuery = groq`
  *[_type == "project"] {
    "slug": slug.current
  }
`

// ============== EXPERIENCE QUERIES ==============

export const experiencesQuery = groq`
  *[_type == "experience"] | order(order desc) {
    _id,
    company,
    role,
    startDate,
    endDate,
    isCurrent,
    description,
    technologies,
    order
  }
`

// ============== EDUCATION QUERIES ==============

export const educationQuery = groq`
  *[_type == "education"] | order(order desc) {
    _id,
    institution,
    degree,
    year,
    description,
    order
  }
`

// ============== SITE SETTINGS QUERIES ==============

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    _id,
    title,
    "cvUrl": cvFile.asset->url
  }
`

// ============== SITEMAP QUERIES ==============

export const sitemapProjectsQuery = groq`
  *[_type == "project"] {
    "slug": slug.current,
    _updatedAt
  }
`
