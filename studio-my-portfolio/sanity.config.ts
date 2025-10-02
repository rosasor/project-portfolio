import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

// Environment variables for project configuration
const projectId = process.env.SANITY_STUDIO_API_PROJECT_ID || 'wnk0djqf'
const dataset = process.env.SANITY_STUDIO_API_DATASET || 'production'

export default defineConfig({
  name: 'default',
  title: 'studio-my-portfolio',

  projectId,
  dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
