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
      <div className="flex flex-col items-center justify-center w-full h-full flex-1 px-4 md:px-12 lg:px-24 xl:px-32">
        <div className="flex-grow flex justify-center items-center w-full">
          <section className="w-full">
            <h1 className="text-4xl font-bold pb-5 mb-8 text-center bg-gradient-to-r from-white from-85% to-neutral-600 bg-clip-text text-transparent" ref={titleRef}>
              Projects
            </h1>
            <div className="flex items-center justify-center" ref={projectsListRef}>
              <ProjectsListClient projects={projects} />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
