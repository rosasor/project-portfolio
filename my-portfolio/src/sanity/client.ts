import { createClient } from "next-sanity";
// import { apiVersion, dataset, projectId } from '@/sanity/api'


export const client = createClient({
  projectId: "wnk0djqf",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});