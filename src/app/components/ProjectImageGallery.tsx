'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowsPointingOutIcon } from '@heroicons/react/24/outline'
import { urlFor } from '@/sanity/image'
import ModalViewImage from './ModalViewImage'
import type { ShowcaseImage } from '@/types/sanity'

interface ProjectImageGalleryProps {
  images: ShowcaseImage[]
}

export default function ProjectImageGallery({ images }: ProjectImageGalleryProps) {
  const [open, setOpen] = useState(false)
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null)

  const handleOnViewImage = (imageUrl: string): void => {
    setSelectedImageUrl(imageUrl)
    setOpen(true)
  }

  // Get grid classes based on layout size
  const getGridClasses = (size: string, index: number, total: number): string => {
    const isFirst = index === 0
    const isLast = index === total - 1
    const isFirstRow = index < 2

    let baseClasses = 'flex p-px'
    let roundedClasses = ''

    // Determine column span based on size
    switch (size) {
      case 'large':
        baseClasses += ' lg:col-span-4 w-full'
        break
      case 'medium':
        baseClasses += ' lg:col-span-3'
        break
      case 'small':
      default:
        baseClasses += ' lg:col-span-2'
        break
    }

    // Apply rounded corners based on position
    if (isFirst && total > 1) {
      roundedClasses = 'max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]'
    } else if (index === 1 && total > 2) {
      roundedClasses = 'lg:rounded-tr-[2rem]'
    } else if (isLast && total > 1) {
      roundedClasses = 'max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]'
    } else if (index === total - 2 && total > 2 && !isFirstRow) {
      roundedClasses = 'lg:rounded-bl-[2rem]'
    }

    return `${baseClasses} ${roundedClasses}`.trim()
  }

  // Calculate grid rows based on number of images
  const getGridRows = (): string => {
    const rows = Math.ceil(images.length / 2)
    return `lg:grid-rows-${rows}`
  }

  return (
    <>
      <div className={`grid grid-cols-1 gap-4 mt-4 lg:grid-cols-6 ${getGridRows()}`}>
        {images.map((item, index) => {
          const imageUrl = urlFor(item.image).auto('format').quality(80).url()
          const gridClasses = getGridClasses(item.layoutSize || 'large', index, images.length)

          return (
            <div
              key={`image-${index}`}
              className={gridClasses}
              onClick={() => handleOnViewImage(imageUrl)}
            >
              <div className="relative overflow-hidden rounded-lg bg-white ring-1 ring-primary w-full h-64 lg:h-80 group cursor-pointer">
                <Image
                  src={imageUrl}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-0 group-hover:bg-opacity-75 transition-opacity">
                  <ArrowsPointingOutIcon className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {selectedImageUrl && (
        <ModalViewImage
          open={open}
          setOpen={setOpen}
          imageSrc={selectedImageUrl}
        />
      )}
    </>
  )
}
