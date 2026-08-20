import {defineField} from 'sanity'

export const sectionHeadFields = () => [
  defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string', validation: (r: any) => r.required()}),
  defineField({name: 'headlinePrefix', title: 'Headline — plain part', type: 'string', validation: (r: any) => r.required()}),
  defineField({name: 'headlineEmphasis', title: 'Headline — emphasized part', type: 'string', validation: (r: any) => r.required()}),
  defineField({name: 'intro', title: 'Intro paragraph', type: 'text'}),
]
