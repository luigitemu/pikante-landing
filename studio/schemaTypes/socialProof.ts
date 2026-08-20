import {defineField, defineType} from 'sanity'
import {sectionHeadFields} from './shared/sectionHead'

export default defineType({
  name: 'socialProof',
  title: 'Social Proof',
  type: 'document',
  fields: [
    ...sectionHeadFields(),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [{type: 'metric'}],
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'review',
          fields: [
            defineField({name: 'stars', title: 'Stars (1-5)', type: 'number', validation: (r) => r.required().min(1).max(5).integer()}),
            defineField({name: 'quote', title: 'Quote', type: 'text', validation: (r) => r.required()}),
            defineField({name: 'authorInitials', title: 'Author initials', type: 'string', validation: (r) => r.required().max(3)}),
            defineField({name: 'authorName', title: 'Author name', type: 'string', validation: (r) => r.required()}),
            defineField({name: 'authorLocation', title: 'Author location', type: 'string', validation: (r) => r.required()}),
          ],
          preview: {select: {title: 'authorName', subtitle: 'quote'}},
        },
      ],
      validation: (r) => r.required().min(1),
    }),
  ],
  preview: {
    prepare: () => ({title: 'Social Proof'}),
  },
})
