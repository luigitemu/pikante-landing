import {defineField, defineType} from 'sanity'
import {sectionHeadFields} from './shared/sectionHead'

export default defineType({
  name: 'whatIs',
  title: 'What Is',
  type: 'document',
  fields: [
    ...sectionHeadFields(),
    defineField({
      name: 'items',
      title: 'Points',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'whatIsItem',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string', validation: (r) => r.required()}),
            defineField({name: 'description', title: 'Description', type: 'text', validation: (r) => r.required()}),
          ],
          preview: {select: {title: 'title', subtitle: 'description'}},
        },
      ],
      validation: (r) => r.required().min(1),
    }),
  ],
  preview: {
    prepare: () => ({title: 'What Is'}),
  },
})
