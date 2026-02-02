import { getEducation } from '@/sanity/lib/fetch'
import EducationContent from './EducationContent'

export default async function Education() {
  const education = await getEducation()

  return <EducationContent education={education} />
}