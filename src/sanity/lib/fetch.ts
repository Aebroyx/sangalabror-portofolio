import { sanityFetch } from '../client'
import {
  projectsListQuery,
  projectBySlugQuery,
  allProjectSlugsQuery,
  experiencesQuery,
  educationQuery,
  siteSettingsQuery,
  sitemapProjectsQuery,
} from './queries'
import type {
  ProjectListItem,
  ProjectDetail,
  ProjectSlug,
  Experience,
  Education,
  SiteSettings,
  SitemapProject,
} from '@/types/sanity'

// ============== PROJECT FETCHERS ==============

export async function getProjectsList(): Promise<ProjectListItem[]> {
  return sanityFetch({
    query: projectsListQuery,
  })
}

export async function getProjectBySlug(slug: string): Promise<ProjectDetail | null> {
  return sanityFetch({
    query: projectBySlugQuery,
    params: { slug },
  })
}

export async function getAllProjectSlugs(): Promise<ProjectSlug[]> {
  return sanityFetch({
    query: allProjectSlugsQuery,
  })
}

// ============== EXPERIENCE FETCHERS ==============

export async function getExperiences(): Promise<Experience[]> {
  return sanityFetch({
    query: experiencesQuery,
  })
}

// ============== EDUCATION FETCHERS ==============

export async function getEducation(): Promise<Education[]> {
  return sanityFetch({
    query: educationQuery,
  })
}

// ============== SITE SETTINGS FETCHERS ==============

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return sanityFetch({
    query: siteSettingsQuery,
    revalidate: 3600, // 1 hour cache
  })
}

// ============== SITEMAP FETCHERS ==============

export async function getSitemapProjects(): Promise<SitemapProject[]> {
  return sanityFetch({
    query: sitemapProjectsQuery,
    revalidate: 86400, // 24 hours for sitemap
  })
}
