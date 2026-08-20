import {defineField, defineType} from 'sanity'
import {sectionHeadFields} from './shared/sectionHead'
import {richTextField} from './shared/richText'

export default defineType({
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
    ...sectionHeadFields(),
    defineField({
      name: 'items',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'product',
          fields: [
            defineField({name: 'name', title: 'Name', type: 'string', validation: (r) => r.required()}),
            defineField({name: 'tag', title: 'Badge (optional)', type: 'string', description: 'e.g. "Más vendido" — leave empty for none'}),
            defineField(richTextField('description', 'Description', true) as any),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
              fields: [defineField({name: 'alt', title: 'Alt text', type: 'string', validation: (r) => r.required()})],
              validation: (r) => r.required(),
            }),
            defineField({name: 'heatLevel', title: 'Heat level (0-5 chiles)', type: 'number', validation: (r) => r.required().min(0).max(5).integer()}),
            defineField({name: 'price250', title: 'Price — 250ml', type: 'string', validation: (r) => r.required()}),
            defineField({name: 'price570', title: 'Price — 570ml', type: 'string', validation: (r) => r.required()}),
            defineField({name: 'price1L', title: 'Price — 1 Litro', type: 'string', validation: (r) => r.required()}),
          ],
          preview: {select: {title: 'name', media: 'image'}},
        },
      ],
      validation: (r) => r.required().min(1),
    }),
  ],
  preview: {
    prepare: () => ({title: 'Products'}),
  },
})
