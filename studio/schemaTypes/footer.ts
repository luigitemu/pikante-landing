import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      fields: [defineField({name: 'alt', title: 'Alt text', type: 'string', validation: (r) => r.required()})],
      validation: (r) => r.required(),
    }),
    defineField({name: 'tagline', title: 'Tagline', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'socialLinks',
      title: 'Social links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'socialLink',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {list: ['instagram', 'tiktok', 'whatsapp']},
              validation: (r) => r.required(),
            }),
            defineField({name: 'url', title: 'URL', type: 'url', validation: (r) => r.required()}),
          ],
          preview: {select: {title: 'platform', subtitle: 'url'}},
        },
      ],
      validation: (r) => r.required().min(1),
    }),
    defineField({name: 'copyrightText', title: 'Copyright line', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'distributorText', title: 'Distributor line', type: 'string', validation: (r) => r.required()}),
  ],
  preview: {
    prepare: () => ({title: 'Footer'}),
  },
})
