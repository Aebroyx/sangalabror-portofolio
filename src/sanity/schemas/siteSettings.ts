import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Document Title',
      type: 'string',
      description: 'Internal document name (not used on the website)',
      initialValue: 'Site Settings',
      hidden: true, // Hide this field since there's only one settings document
    }),
    defineField({
      name: 'cvFile',
      title: 'CV / Resume File',
      type: 'file',
      description: 'Upload your CV/Resume PDF file here',
      options: {
        accept: '.pdf',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'aboutGreeting',
      title: 'About – Greeting',
      type: 'string',
      description: 'e.g. "Hi, my name is"',
    }),
    defineField({
      name: 'aboutFullName',
      title: 'About – Full Name',
      type: 'string',
    }),
    defineField({
      name: 'aboutTagline',
      title: 'About – Tagline',
      type: 'string',
      description: 'e.g. "Fullstack Developer"',
    }),
    defineField({
      name: 'aboutBio',
      title: 'About – Bio',
      description: 'Introduction paragraph. Use "Highlight (primary color)" on text to show in primary color.',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Highlight (primary color)', value: 'primary' },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'aboutBioShort',
      title: 'About – Bio (mobile)',
      description: 'Shorter version for mobile. Leave empty to use the same as desktop bio.',
      type: 'text',
      rows: 4,
    }),
  ],
})
