'use client'
import { useRef } from 'react'
import { useGradientBlobs } from './useGradientBlobs'
import styles from './GradientBlobs.module.css'

export default function GradientBlobs() {
  const blobRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]

  useGradientBlobs(blobRefs)

  return (
    <div className={styles.blobContainer}>
      <div ref={blobRefs[0]} className={`${styles.blob} ${styles.blob1}`} />
      <div ref={blobRefs[1]} className={`${styles.blob} ${styles.blob2}`} />
      <div ref={blobRefs[2]} className={`${styles.blob} ${styles.blob3}`} />
      <div ref={blobRefs[3]} className={`${styles.blob} ${styles.blob4}`} />
      <div ref={blobRefs[4]} className={`${styles.blob} ${styles.blob5}`} />
    </div>
  )
}
