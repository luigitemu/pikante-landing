import {defineField, defineType} from 'sanity'
import {sectionHeadFields} from './shared/sectionHead'
import {richTextField} from './shared/richText'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    ...sectionHeadFields(),
    defineField({
      name: 'items',
      title: 'Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          fields: [
            defineField({name: 'question', title: 'Question', type: 'string', validation: (r) => r.required()}),
            defineField(richTextField('answer', 'Answer', true) as any),
          ],
          preview: {select: {title: 'question'}},
        },
      ],
      validation: (r) => r.required().min(1),
    }),
  ],
  preview: {
    prepare: () => ({title: 'FAQ'}),
  },
})
