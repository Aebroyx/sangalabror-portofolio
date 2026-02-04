'use client'

import { useRef } from 'react'
import EducationTimeline from '@/app/components/EducationTimeline'
import { useGSAPAnimations } from '@/app/components/useGSAPAnimations'
import type { Education } from '@/types/sanity'

interface EducationContentProps {
  education: Education[]
}

export default function EducationContent({ education }: EducationContentProps) {
  // Refs for GSAP animations
  const titleRef = useRef<HTMLHeadingElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  // Use the custom hook for GSAP animations
  useGSAPAnimations({ titleRef, timelineRef })

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full flex-1 px-4 md:px-12 lg:px-24 xl:px-32">
        <div className="flex-1 flex justify-center items-center">
          <section>
            <h1
              className="text-3xl font-bold pb-5 text-center lg:text-left bg-gradient-to-r from-white to-neutral-600 bg-clip-text text-transparent"
              ref={titleRef}
            >
              Certification & Education
            </h1>
            <div ref={timelineRef}>
              <EducationTimeline education={education} />
            </div>
          </section>
        </div>
      </div>
      <br />
    </>
  )
}
