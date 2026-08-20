import {defineField, defineType} from 'sanity'
import {sectionHeadFields} from './shared/sectionHead'

export default defineType({
  name: 'stores',
  title: 'Stores',
  type: 'document',
  fields: [
    ...sectionHeadFields(),
    defineField({
      name: 'cities',
      title: 'Cities',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'city',
          fields: [
            defineField({name: 'city', title: 'City name', type: 'string', validation: (r) => r.required()}),
            defineField({name: 'dept', title: 'Department', type: 'string', validation: (r) => r.required()}),
            defineField({name: 'code', title: 'Short code', type: 'string', description: 'e.g. TGU', validation: (r) => r.required().max(4)}),
            defineField({name: 'featured', title: 'Featured', type: 'boolean', initialValue: false}),
            defineField({
              name: 'places',
              title: 'Points of sale',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'place',
                  fields: [
                    defineField({name: 'name', title: 'Name', type: 'string', validation: (r) => r.required()}),
                    defineField({name: 'type', title: 'Type', type: 'string', description: 'e.g. Supermercado, Minisuper, Estación', validation: (r) => r.required()}),
                  ],
                  preview: {select: {title: 'name', subtitle: 'type'}},
                },
              ],
              validation: (r) => r.required().min(1),
            }),
          ],
          preview: {select: {title: 'city', subtitle: 'dept'}},
        },
      ],
      validation: (r) => r.required().min(1),
    }),
    defineField({name: 'ctaHeading', title: 'CTA heading', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'ctaSubtext', title: 'CTA subtext', type: 'string'}),
    defineField({name: 'ctaButtonLabel', title: 'CTA button label', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'ctaButtonHref', title: 'CTA button link', type: 'string', validation: (r) => r.required()}),
  ],
  preview: {
    prepare: () => ({title: 'Stores'}),
  },
})
