import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'marquee',
  title: 'Marquee',
  type: 'document',
  fields: [
    defineField({
      name: 'items',
      title: 'Scrolling phrases',
      type: 'array',
      of: [{type: 'string'}],
      validation: (r) => r.required().min(1),
    }),
  ],
  preview: {
    prepare: () => ({title: 'Marquee'}),
  },
})
