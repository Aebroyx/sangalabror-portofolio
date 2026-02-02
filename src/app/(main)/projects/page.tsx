import { getProjectsList } from '@/sanity/lib/fetch'
import ProjectsContent from './ProjectsContent'

export const metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of web development projects, mobile applications, and UI/UX designs. See my work in React, Next.js, and modern web technologies.',
  openGraph: {
    title: 'Projects - Sangalabror Pujianto',
    description: 'Explore my portfolio of web development projects, mobile applications, and UI/UX designs. See my work in React, Next.js, and modern web technologies.',
  },
}

export default async function Projects() {
  const projects = await getProjectsList()

  return <ProjectsContent projects={projects} />
}