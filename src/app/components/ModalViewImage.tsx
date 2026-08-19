'use client'
import { useEffect, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Skeleton from './Skeleton'
import { ModalViewImageProps } from '@/types'

export default function ModalViewImage({ open, setOpen, imageSrc }: ModalViewImageProps) {
  const [loaded, setLoaded] = useState(false)

  // Reset the fade-in when a different image is opened
  useEffect(() => {
    setLoaded(false)
  }, [imageSrc])

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-8">
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close image preview"
          className="fixed top-4 right-4 z-20 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/25"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <DialogPanel
          transition
          onClick={() => setOpen(false)}
          className="relative h-[85vh] w-full max-w-6xl cursor-zoom-out transition data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        >
          {imageSrc && (
            <Image
              src={imageSrc}
              alt="Project image preview"
              fill
              sizes="100vw"
              className={`object-contain transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setLoaded(true)}
            />
          )}
          {!loaded && (
            <Skeleton className="absolute inset-0 m-auto h-3/4 w-full max-w-4xl rounded-2xl" />
          )}
        </DialogPanel>
      </div>
    </Dialog>
  )
}
