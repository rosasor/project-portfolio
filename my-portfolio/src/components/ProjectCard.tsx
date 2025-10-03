"use client"

import { Box, Card, Inset, Text, Strong, Flex, Badge, Button } from "@radix-ui/themes"
import Link from "next/link"
import { ExternalLinkIcon } from "@radix-ui/react-icons"


const project = {
    title: 'Pretty MLS',
    year: '2025',
    imageUrl: 'https://images.pexels.com/photos/1054666/pexels-photo-1054666.jpeg?cs=srgb&dl=pexels-hsapir-1054666.jpg&fm=jpg',
    status: 'In Progress',
    link: 'https://react.dev',
    description: 'A web application that allows agents to print luxurious branded listing pages to show to potential buyers.',
  };


const ProjectCard = () => {
    return (
        <Box as="div" className="mb-12 sm:mb-16">
            <Flex className="justify-center">
                <Card className="flex flex-col sm:max-md:w-[80%] lg:max-w-full lg:flex-row">
                    <Inset side="left" pb="current" className="h-full lg:max-w-[50%]">
                        <img
                            src={project.imageUrl}
                            alt="Bold typography"
                            className="w-full max-lg:max-h-50  lg:max-h-60 object-cover rounded-lg"
                        />
                    </Inset>
                    <Flex as="div" direction="column" justify="between" className="lg:ml-4 flex lg:max-w-[60%]">

                        <Flex as="div" direction="column" className="">
                            <Text as="span" className="mt-3 lg:mt-1 text-base">
                                {project.year}
                            </Text>
                            <Text className="mt-1 text-xl">
                                <Strong>{project.title}</Strong>
                            </Text>
                            <Text as="p" className="mt-2 mb-1 text-base">
                                {project.description}
                            </Text>
                            <Button className="justify-start my-2 text-neutral-700 dark:text-neutral-200 hover:underline hover:text-violet-600 dark:hover:text-violet-400">
                                <Link 
                                href={"/projects"} 
                                rel="noopener noreferrer"
                                className=""
                                >
                                    Read More →
                                </Link>
                            </Button>
                        </Flex>
                        

                        <Flex as="div" className="my-1 justify-between items-center">
                            <Badge 
                                color="green"
                                radius="large"
                                variant="soft"
                                className="rounded-md py-1 px-3 text-sm"
                            >
                                {project.status}
                            </Badge>

                            <Link
                                href={""} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className=""
                            >
                               <ExternalLinkIcon
                                    aria-hidden
                                    width={18}
                                    height={18}
                                    href="/"
                                    className="transition-colors hover:text-violet-600 dark:hover:text-violet-400"
                                /> 
                            </Link>
                        </Flex>
                        
                    </Flex>
                </Card>
            </Flex>
        </Box>
    )
}

export default ProjectCard;