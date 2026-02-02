import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { PortableText } from '@portabletext/react'
import { getProjectBySlug, getAllProjectSlugs } from '@/sanity/lib/fetch'
import ProjectImageGallery from '@/app/components/ProjectImageGallery'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

// Generate static params for all projects
export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs()
  return slugs.map((item) => ({
    slug: item.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | Sangalabror Portfolio`,
    description: project.shortDescription,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-start py-8">
      <div className="py-12 sm:py-24">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          {/* Back button */}
          <div className="flex justify-end mb-6">
            <Link
              href="/projects"
              className="flex items-center gap-2 text-white hover:text-primary transition-colors duration-300"
            >
              <ArrowLeftIcon className="h-6 w-6" />
              <span className="text-lg">Back to Projects</span>
            </Link>
          </div>

          {/* Project header */}
          <h2 className="text-start text-base/7 font-semibold text-white">Project:</h2>
          <p className="mt-2 max-w-lg text-pretty text-start text-4xl font-medium tracking-tight text-primary sm:text-5xl">
            {project.title}
          </p>

          <div className="mt-6 border-t-2 border-white"></div>

          {/* Project details */}
          <div className="flex flex-col lg:flex-row mt-6 justify-between items-start lg:items-start">
            <div className="flex flex-col gap-8 lg:w-1/2">
              {/* Year */}
              <div className="flex items-start gap-8">
                <h2 className="text-2xl font-medium text-primary w-32 text-left">Year</h2>
                <div className="ml-4 text-left">
                  <p className="text-lg text-white">{project.year}</p>
                </div>
              </div>

              {/* External Link */}
              {project.externalLink && (
                <div className="flex items-start gap-8">
                  <h2 className="text-2xl font-medium text-primary w-32 text-left">Link</h2>
                  <div className="ml-4 text-left">
                    <a
                      href={project.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-primary hover:underline"
                    >
                      {project.externalLinkLabel || project.externalLink}
                    </a>
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              {project.techStack && project.techStack.length > 0 && (
                <div className="flex items-start gap-8">
                  <h2 className="text-2xl font-medium text-primary w-32 text-left">Tech Stack</h2>
                  <div className="ml-4 grid grid-cols-2 gap-4 text-left">
                    {project.techStack.map((tech, index) => (
                      <p key={index} className="text-lg text-white">
                        {tech}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="flex items-start lg:w-1/2 mt-6 lg:mt-0 text-left">
              <div className="ml-4">
                {project.description ? (
                  <div className="text-lg text-white prose prose-invert max-w-none">
                    <PortableText value={project.description} />
                  </div>
                ) : (
                  <p className="text-lg text-white">{project.shortDescription}</p>
                )}
              </div>
            </div>
          </div>

          {/* Showcase images */}
          {project.showcaseImages && project.showcaseImages.length > 0 && (
            <>
              <div className="mt-12">
                <h2 className="text-center text-3xl font-semibold text-white">Showcase</h2>
              </div>
              <ProjectImageGallery images={project.showcaseImages} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
