export interface Project {
  id: number
  name: string
  route: string
  link: string
  link_name?: string
  description: string
  href?: string
}

export interface ProjectPageProps {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
