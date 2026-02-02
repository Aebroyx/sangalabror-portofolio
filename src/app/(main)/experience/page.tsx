import { getExperiences } from '@/sanity/lib/fetch'
import ExperienceAccordion from '@/app/components/ExperienceAccordion'

export default async function Experience() {
  const experiences = await getExperiences()

  return <ExperienceAccordion experiences={experiences} />
}