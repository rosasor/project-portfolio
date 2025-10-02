import {defineCliConfig} from 'sanity/cli'

const projectId = process.env.SANITY_STUDIO_API_PROJECT_ID || 'wnk0djqf'
const dataset = process.env.SANITY_STUDIO_API_DATASET || 'production'

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  }
})
