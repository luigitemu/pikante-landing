import { toHTML } from '@portabletext/to-html';
import type { PortableTextBlock } from '@portabletext/types';

export function richTextToHtml(blocks: PortableTextBlock[] | undefined | null): string {
  if (!blocks || blocks.length === 0) return '';
  return toHTML(blocks);
}
