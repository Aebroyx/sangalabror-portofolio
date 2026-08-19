interface SkeletonProps {
  className?: string
}

/**
 * Reusable pulsing skeleton placeholder. Size/shape is controlled by the
 * caller via className (e.g. "absolute inset-0 rounded-lg" or "h-64 w-full").
 */
export default function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse bg-neutral-700 ${className}`.trim()}
    />
  )
}
