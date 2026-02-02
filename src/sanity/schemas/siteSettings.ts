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
  ],
})
