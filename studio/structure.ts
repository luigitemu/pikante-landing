import type {StructureResolver} from 'sanity/structure'
import {SINGLETONS} from './schemaTypes'

const TITLES: Record<string, string> = {
  hero: 'Hero',
  marquee: 'Marquee',
  whatIs: 'What Is',
  howTo: 'How To',
  products: 'Products',
  stores: 'Stores',
  lifestyle: 'Lifestyle',
  socialProof: 'Social Proof (unused on page)',
  offer: 'Offer (unused on page)',
  faq: 'FAQ',
  footer: 'Footer',
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Pikanté')
    .items(
      SINGLETONS.map((type) =>
        S.listItem()
          .title(TITLES[type] ?? type)
          .id(type)
          .child(S.document().schemaType(type).documentId(type))
      )
    )
