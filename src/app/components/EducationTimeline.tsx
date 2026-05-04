'use client'

import type { CSSProperties } from 'react'
import type { Education } from '@/types/sanity'

interface EducationTimelineProps {
  education: Education[]
}

const hiddenLineStyle: CSSProperties = {
  opacity: 0,
  transform: 'scaleY(0)',
  transformOrigin: 'top center',
  willChange: 'opacity, transform',
}

export default function EducationTimeline({ education }: EducationTimelineProps) {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      {education.map((item, index) => {
        const isEven = index % 2 === 0
        const isLast = index === education.length - 1

        return (
          <li key={item._id}>
            {index > 0 && <hr className="timeline-anim-line" style={hiddenLineStyle} />}
            <div
              className="timeline-middle timeline-anim-icon"
              style={{
                opacity: 0,
                transform: 'scale(0.6)',
                willChange: 'opacity, transform',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              className={`${isEven ? 'timeline-start md:text-end' : 'timeline-end'} mb-10 text-white timeline-anim-content`}
              style={{
                opacity: 0,
                transform: 'translate3d(0, 24px, 0)',
                willChange: 'opacity, transform',
              }}
            >
              <time className="font-mono italic text-white">{item.year}</time>
              <div className="text-lg text-primary">{item.institution}</div>
              {item.degree}
              {item.description && (
                <>
                  <br />
                  {item.description}
                </>
              )}
            </div>
            {!isLast && <hr className="timeline-anim-line" style={hiddenLineStyle} />}
          </li>
        )
      })}
    </ul>
  )
}
