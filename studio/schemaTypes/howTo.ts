import {defineField, defineType} from 'sanity'
import {sectionHeadFields} from './shared/sectionHead'

export default defineType({
  name: 'howTo',
  title: 'How To',
  type: 'document',
  fields: [
    ...sectionHeadFields(),
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'howToStep',
          fields: [
            defineField({name: 'stepLabel', title: 'Step label', type: 'string', description: 'e.g. "Paso 01"', validation: (r) => r.required()}),
            defineField({name: 'title', title: 'Title', type: 'string', validation: (r) => r.required()}),
            defineField({name: 'description', title: 'Description', type: 'text', validation: (r) => r.required()}),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
              fields: [defineField({name: 'alt', title: 'Alt text', type: 'string', validation: (r) => r.required()})],
              validation: (r) => r.required(),
            }),
          ],
          preview: {select: {title: 'title', subtitle: 'stepLabel', media: 'image'}},
        },
      ],
      validation: (r) => r.required().min(1),
    }),
  ],
  preview: {
    prepare: () => ({title: 'How To'}),
  },
})
