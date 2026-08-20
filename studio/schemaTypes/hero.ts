import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({name: 'eyebrowLeft', title: 'Eyebrow (left)', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'eyebrowRight', title: 'Eyebrow (right)', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'headlinePrefix', title: 'Headline — prefix', type: 'string', description: '"El Mejor"', validation: (r) => r.required()}),
    defineField({name: 'headlineEmphasis', title: 'Headline — emphasized word', type: 'string', description: '"Mix" (rendered in accent style)', validation: (r) => r.required()}),
    defineField({name: 'headlineMid', title: 'Headline — mid', type: 'string', description: '"para tus"', validation: (r) => r.required()}),
    defineField({name: 'headlineStroke', title: 'Headline — outlined word', type: 'string', description: '"Micheladas" (rendered as stroked/outline text)', validation: (r) => r.required()}),
    defineField({name: 'ctaLabel', title: 'CTA button label', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'ctaHref', title: 'CTA button link', type: 'string', description: 'e.g. #sabores or a full URL', validation: (r) => r.required()}),
    defineField({
      name: 'metrics',
      title: 'Metrics row',
      type: 'array',
      of: [{type: 'metric'}],
      validation: (r) => r.max(3),
    }),
    defineField({
      name: 'prepVideo',
      title: 'Prep video panel',
      type: 'object',
      fields: [
        defineField({name: 'kicker', title: 'Kicker label', type: 'string'}),
        defineField({name: 'tag', title: 'Tag', type: 'string'}),
        defineField({name: 'headingPrefix', title: 'Heading — prefix', type: 'string'}),
        defineField({name: 'headingEmphasis', title: 'Heading — emphasized word', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text'}),
      ],
    }),
  ],
  preview: {
    prepare: () => ({title: 'Hero'}),
  },
})
