function assertValue<T>(v: T | undefined, errorMessage: string): T {
    if (v === undefined) {
      throw new Error(errorMessage)
    }
  
    return v
}

export const dataset = assertValue(
    process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET',
)
  
  export const projectId = assertValue(
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'wnk0djqf',
    'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID',
)

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'