'use client'
import { use } from 'react'
import { Text, Box, Flex, Heading } from "@radix-ui/themes";


export default function ProjectPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
 
  return (
    <Box className="mb-12 sm:mb-16">
        <Flex className="flex-col gap-12">
            <Heading as="h1" className="mt-8 font-bold text-3xl sm:text-4xl lg:text-5xl">
                {slug}
            </Heading>
            <Text className=" text-neutral-700 dark:text-neutral-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aspernatur assumenda at asperiores odio impedit accusamus harum totam ratione? Harum soluta excepturi minima, error consectetur dicta veritatis repellat corporis nam?
            </Text>
        </Flex>
    </Box>
    
  )
}
