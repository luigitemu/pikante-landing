export const richTextField = (name: string, title: string, required = false) => ({
  name,
  title,
  type: 'array' as const,
  of: [{type: 'block' as const, styles: [{title: 'Normal', value: 'normal'}], lists: []}],
  validation: required ? (r: any) => r.required() : undefined,
})
