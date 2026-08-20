import {defineField, defineType} from 'sanity'
import {sectionHeadFields} from './shared/sectionHead'

export default defineType({
  name: 'offer',
  title: 'Offer',
  type: 'document',
  fields: [
    ...sectionHeadFields(),
    defineField({
      name: 'perks',
      title: 'Perks',
      type: 'array',
      of: [{type: 'string'}],
      validation: (r) => r.required().min(1),
    }),
    defineField({name: 'countdownHours', title: 'Countdown — hours', type: 'number', validation: (r) => r.required().min(0)}),
    defineField({name: 'countdownMinutes', title: 'Countdown — minutes', type: 'number', validation: (r) => r.required().min(0).max(59)}),
    defineField({name: 'ctaLabel', title: 'CTA button label', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'ctaHref', title: 'CTA button link', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: 'Alt text', type: 'string', validation: (r) => r.required()})],
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    prepare: () => ({title: 'Offer'}),
  },
})
