import Link from 'next/link'

interface NavButtonProps {
  href?: string
  label: string
  external?: boolean
  disabled?: boolean
}

export default function NavButton({ href, label, external = false, disabled = false }: NavButtonProps) {
  const buttonClass = disabled
    ? `btn bg-gradient-to-l from-neutral-800 to-black text-white opacity-50 cursor-not-allowed border border-neutral-800 sm:min-w-[124px]`
    : `btn bg-gradient-to-l from-neutral-800 to-black text-white hover:bg-primary border border-neutral-700 hover:border-primary transition-all duration-200 sm:min-w-[124px]`

  if (disabled || !href) {
    return (
      <button className={buttonClass} disabled={disabled}>
        {label}
      </button>
    )
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <button className={buttonClass}>
          {label}
        </button>
      </a>
    )
  }

  return (
    <Link href={href}>
      <button className={buttonClass}>
        {label}
      </button>
    </Link>
  )
}
