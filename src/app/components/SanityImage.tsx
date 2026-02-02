'use client'

import Image from 'next/image'
import { urlFor } from '@/sanity/image'

interface SanityImageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  sizes?: string
  priority?: boolean
  quality?: number
}

export default function SanityImage({
  image,
  alt,
  width,
  height,
  fill = false,
  className = '',
  sizes,
  priority = false,
  quality = 80,
}: SanityImageProps) {
  const imageUrl = urlFor(image)
    .auto('format')
    .quality(quality)
    .url()

  if (fill) {
    return (
      <Image
        src={imageUrl}
        alt={alt}
        fill
        className={className}
        sizes={sizes || '100vw'}
        priority={priority}
      />
    )
  }

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={className}
      sizes={sizes}
      priority={priority}
    />
  )
}
