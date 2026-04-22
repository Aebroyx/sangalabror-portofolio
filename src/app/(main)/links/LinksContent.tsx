'use client'

const LOGO_PATHS = [
  'M0,219.43v36.57h36.57v-36.57H0ZM36.57,109.71v36.57h182.85v-36.57H36.57ZM36.57,256v36.57h182.85v-36.57H36.57Z',
  'M219.43,0v36.57H36.57v73.14H0V36.57C0,16.37,16.37,0,36.57,0h182.85Z',
  'M438.85,109.71v36.57h36.57v-36.57h-36.57ZM475.43,73.14v36.57h36.57v-36.57h-36.57Z',
  'M475.43,36.57v36.57h-36.57v-36.57h-147.28V0h147.28v.07s0-.07,0-.07c20.19,0,36.57,16.37,36.57,36.57Z',
]

const LOGO_POLYGON =
  '438.85 146.29 438.85 182.85 256 182.85 256 256 219.43 256 219.43 146.29 256 146.29 256 73.14 219.43 73.14 219.43 36.57 292.57 36.57 292.57 146.29 438.85 146.29'

const GRADIENT_IMG = '/purple-gradient.png'

interface SocialLink {
  name: string
  url: string
  icon: string
}

interface LinksContentProps {
  cvUrl?: string
}

export default function LinksContent({ cvUrl }: LinksContentProps) {
  const socialLinks: SocialLink[] = [
    {
      name: 'Portfolio Website',
      url: 'https://sangalabror.aebroyx.dev/about',
      icon: '🌐',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/aebroyx',
      icon: '🐙',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/sangalabrorpujianto/',
      icon: '💼',
    },
    {
      name: 'Twitch',
      url: 'https://twitch.tv/aebroyx',
      icon: '🎥',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/abrorpujianto',
      icon: '📸',
    },
    ...(cvUrl
      ? [
          {
            name: 'Resume/CV',
            url: cvUrl,
            icon: '📄',
          },
        ]
      : []),
  ]

  return (
    <>
      <div className="fixed inset-0 w-full h-[100dvh] overflow-y-auto overflow-x-hidden">
        <div className="min-h-full w-full flex flex-col items-center justify-center py-12 px-4 md:px-12 lg:px-24 xl:px-32">
          <section className="w-full max-w-md">
            {/* Profile Section */}
            <div className="text-center mb-8">
              <div className="mx-auto mb-4 flex justify-center">
                <span className="logo-svg cursor-default">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 292.57"
                    aria-label="SP Logo"
                    className="h-20 w-auto"
                  >
                    <defs>
                      <pattern
                        id="logo-gradient"
                        patternUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <image
                          href={GRADIENT_IMG}
                          width="512"
                          height="293"
                          preserveAspectRatio="xMidYMid slice"
                        />
                      </pattern>
                    </defs>

                    <g className="logo-layer-gradient">
                      {LOGO_PATHS.map((d, i) => (
                        <path key={i} d={d} fill="url(#logo-gradient)" />
                      ))}
                      <polygon points={LOGO_POLYGON} fill="url(#logo-gradient)" />
                    </g>

                    <g className="logo-layer-dark">
                      {LOGO_PATHS.map((d, i) => (
                        <path key={i} d={d} fill="#cecafb" />
                      ))}
                      <polygon points={LOGO_POLYGON} fill="#cecafb" />
                    </g>
                  </svg>
                </span>
              </div>
              <h1 className="text-3xl text-white font-bold mb-2">Sangalabror Pujianto</h1>
              <p className="text-gray-300 text-lg mb-4">Software Engineer</p>
              <p className="text-gray-400 text-sm max-w-sm mx-auto">
                game & code 👾
              </p>
            </div>

            {/* Links Section */}
            <div className="space-y-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target={link.url.startsWith('http') || link.url.startsWith('mailto:') ? '_blank' : '_self'}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="nav-btn-link block w-full"
                >
                  <span className="btn nav-btn !h-auto min-h-12 w-full rounded-lg bg-gradient-to-l from-neutral-800 to-black border border-neutral-700 px-4 py-3.5 text-base font-medium text-white">
                    <span className="flex w-full items-center justify-center gap-2">
                      <span className="nav-btn-icon flex size-7 shrink-0 items-center justify-center text-xl leading-none transition-colors duration-200">
                        {link.icon}
                      </span>
                      <span className="nav-btn-text transition-all duration-200">{link.name}</span>
                    </span>
                  </span>
                </a>
              ))}
            </div>

            {/* Footer */}
            <div className="text-center mt-8 text-gray-400 text-sm">
              <p>Thanks for visiting! ✨</p>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
