'use client'

import { useRef } from 'react'
import ProjectsListClient from '@/app/components/ProjectsListClient'
import { useGSAPAnimations } from '@/app/components/useGSAPAnimations'
import type { ProjectListItem } from '@/types/sanity'

interface ProjectsContentProps {
  projects: ProjectListItem[]
}

export default function ProjectsContent({ projects }: ProjectsContentProps) {
  // Refs for GSAP animations
  const titleRef = useRef<HTMLHeadingElement>(null)
  const projectsListRef = useRef<HTMLDivElement>(null)

  // Use the custom hook for GSAP animations
  useGSAPAnimations({ titleRef, projectsListRef })

  return (
    <>
      <div className="flex flex-col items-center justify-start w-full h-full flex-1 px-4 md:px-12 lg:px-24 xl:px-32 pt-10 md:pt-14 lg:pt-16">
        <div className="flex-grow flex justify-center items-start w-full min-h-0">
          <section className="w-full">
            <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-white via-neutral-300 to-neutral-800 bg-clip-text text-transparent" ref={titleRef}>
              Projects
            </h1>
            <div className="flex items-center justify-center -mt-4" ref={projectsListRef}>
              <ProjectsListClient projects={projects} />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
