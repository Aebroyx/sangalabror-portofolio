import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

// Sanity webhook payload types
interface SanityWebhookBody {
  _type: string
  _id: string
  slug?: { current: string }
}

export async function POST(req: NextRequest) {
  try {
    // Verify the webhook secret
    const { body, isValidSignature } = await parseBody<SanityWebhookBody>(
      req,
      process.env.SANITY_REVALIDATE_SECRET
    )

    if (!isValidSignature) {
      return new NextResponse('Invalid signature', { status: 401 })
    }

    if (!body?._type) {
      return new NextResponse('Bad request: missing _type', { status: 400 })
    }

    // Paths to revalidate
    const pathsToRevalidate: string[] = []

    switch (body._type) {
      case 'project':
        // Revalidate projects list page
        pathsToRevalidate.push('/projects')
        pathsToRevalidate.push('/') // Homepage may show projects
        // Revalidate specific project page if slug is available
        if (body.slug?.current) {
          pathsToRevalidate.push(`/projects/${body.slug.current}`)
        }
        break
      case 'experience':
        pathsToRevalidate.push('/experience')
        break
      case 'education':
        pathsToRevalidate.push('/education')
        break
      case 'siteSettings':
        // Revalidate all pages since CV is in navbar and links page
        pathsToRevalidate.push('/', '/about', '/projects', '/experience', '/education', '/links')
        break
      default:
        // Revalidate all content pages as fallback
        pathsToRevalidate.push('/', '/projects', '/experience', '/education', '/links')
    }

    // Revalidate all collected paths
    for (const path of pathsToRevalidate) {
      revalidatePath(path)
    }

    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      paths: pathsToRevalidate,
    })
  } catch (err) {
    console.error('Revalidation error:', err)
    return new NextResponse(
      err instanceof Error ? err.message : 'Internal server error',
      { status: 500 }
    )
  }
}
