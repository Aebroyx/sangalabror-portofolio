import { createClient, type QueryParams } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from './env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn, // Controlled via NEXT_PUBLIC_SANITY_USE_CDN environment variable
  token: undefined, // No token needed for public reads
})

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  revalidate = 3600, // 1 hour default (ISR)
}: {
  query: string
  params?: QueryParams
  revalidate?: number | false
}) {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate,
    },
  })
}
