'use client'

import React, { useState, useRef } from 'react'
import { PortableText } from '@portabletext/react'
import { useGSAPAnimations } from './useGSAPAnimations'
import type { Experience } from '@/types/sanity'

interface ExperienceAccordionProps {
  experiences: Experience[]
}

// Format date string to display format (e.g., "March 2024")
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

export default function ExperienceAccordion({ experiences }: ExperienceAccordionProps) {
  const [selectedOption, setSelectedOption] = useState<number>(0)

  // Refs for GSAP animations
  const titleRef = useRef<HTMLHeadingElement>(null)
  const accordionRef = useRef<HTMLDivElement>(null)
  const accordionItemsRef = useRef<HTMLDivElement>(null)

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedOption(parseInt(event.target.value, 10))
  }

  // Use the custom hook for GSAP animations
  useGSAPAnimations({ titleRef, accordionRef, accordionItemsRef })

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full flex-1 px-4 md:px-12 lg:px-24 xl:px-32">
      <div className="flex-1 flex justify-center items-center">
        <section className="w-full max-w-4xl">
          <h1
            className="text-3xl font-bold pb-5 text-center lg:text-left bg-gradient-to-r from-white to-neutral-600 bg-clip-text text-transparent"
            ref={titleRef}
          >
            Work Experience
          </h1>
          <div className="join join-vertical w-full" ref={accordionRef}>
            {experiences.map((exp, index) => (
              <div
                key={exp._id}
                className="collapse collapse-arrow join-item border border-white p-4 lg:p-6 opacity-0 translate-y-[100px]"
                ref={index === 0 ? accordionItemsRef : undefined}
              >
                <input
                  type="radio"
                  name="my-accordion-4"
                  checked={selectedOption === index}
                  onChange={handleRadioChange}
                  value={index}
                />
                <div className="collapse-title text-xl font-medium text-white">
                  {exp.company}
                </div>
                <div className="collapse-content">
                  <div className="flex flex-col gap-2">
                    <p className="text-slate-200 text-sm">
                      {formatDate(exp.startDate)} - {exp.isCurrent ? 'Present' : exp.endDate ? formatDate(exp.endDate) : ''}
                    </p>
                    <h3 className="text-primary text-xl">{exp.role}</h3>
                    {exp.description && (
                      <div className="text-white prose prose-invert prose-sm max-w-none">
                        <PortableText value={exp.description} />
                      </div>
                    )}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-6">
                        {exp.technologies.map((tech, techIndex) => (
                          <div
                            key={techIndex}
                            className="badge bg-primary text-white badge-md"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
