'use client'

import Link from 'next/link'
import type { ProjectListItem } from '@/types/sanity'

interface ProjectsListClientProps {
  projects: ProjectListItem[]
}

export default function ProjectsListClient({ projects }: ProjectsListClientProps) {
  return (
    <>
      <div className="max-h-[36rem] min-h-[36rem] overflow-y-auto overflow-x-hidden w-full max-w-4xl scrollbar-hide">
        <ul role="list" className="">
          {projects.map((project) => (
            <li 
              key={project._id} 
              className="py-4" 
              style={{ opacity: 0, transform: 'translateY(60px)' }}
            >
              <div className="text-center">
                <Link href={`/projects/${project.slug}`}>
                  <h1 className="text-3xl font-semibold transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer bg-gradient-to-r from-white from-85% to-neutral-600 bg-clip-text text-transparent">
                    {project.title}
                  </h1>
                </Link>
                {project.externalLink && (
                  <a
                    href={project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                  >
                    {project.externalLinkLabel || project.externalLink}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
