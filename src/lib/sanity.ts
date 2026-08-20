import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';
import type { Image } from '@sanity/types';

export const sanity = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  apiVersion: '2026-01-01',
  useCdn: true,
});

const builder = createImageUrlBuilder(sanity);

export function urlFor(source: Image) {
  return builder.image(source);
}
