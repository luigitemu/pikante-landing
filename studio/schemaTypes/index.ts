import metric from './objects/metric'
import hero from './hero'
import marquee from './marquee'
import whatIs from './whatIs'
import howTo from './howTo'
import products from './products'
import stores from './stores'
import lifestyle from './lifestyle'
import socialProof from './socialProof'
import offer from './offer'
import faq from './faq'
import footer from './footer'

export const schemaTypes = [
  metric,
  hero,
  marquee,
  whatIs,
  howTo,
  products,
  stores,
  lifestyle,
  socialProof,
  offer,
  faq,
  footer,
]

export const SINGLETONS = [
  'hero',
  'marquee',
  'whatIs',
  'howTo',
  'products',
  'stores',
  'lifestyle',
  'socialProof',
  'offer',
  'faq',
  'footer',
] as const
