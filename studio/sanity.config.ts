import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes, SINGLETONS} from './schemaTypes'
import {structure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'pikante',

  projectId: 'v1g2cml7',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
  },

  document: {
    actions: (prev, {schemaType}) =>
      (SINGLETONS as readonly string[]).includes(schemaType)
        ? prev.filter(({action}) => action && !['duplicate', 'delete', 'unpublish'].includes(action))
        : prev,
    newDocumentOptions: (prev, {creationContext}) =>
      creationContext.type === 'global'
        ? prev.filter((template) => !(SINGLETONS as readonly string[]).includes(template.templateId))
        : prev,
  },
})
