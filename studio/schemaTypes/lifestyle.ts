import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'lifestyle',
  title: 'Lifestyle',
  type: 'document',
  fields: [
    defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'headlinePrefix', title: 'Headline — plain part', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'headlineEmphasis', title: 'Headline — emphasized part', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: 'Alt text', type: 'string', validation: (r) => r.required()})],
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    prepare: () => ({title: 'Lifestyle'}),
  },
})
