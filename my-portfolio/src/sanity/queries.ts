import {defineQuery} from 'next-sanity'


const projectCardFields = /* groq */ `
  _id,
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  coverImage,
  "date": coalesce(date, _updatedAt),
`

const projectFields = /* groq */ `
  _id,
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  coverImage,
  "date": coalesce(date, _updatedAt),
`
// Query to get all the data for a the project card component
export const allProjectsQuery = defineQuery(`
    *[_type == "project" && defined(slug.current)] | order(date desc, _updatedAt desc) {
        ${projectCardFields}
    }
`)

// Query to get all the data for a single project, this is used for project page /[slug]
export const projectQuery = defineQuery(`
    *[_type == "project" && slug.current == $slug] [0] {
        ${projectFields}
    }
`)