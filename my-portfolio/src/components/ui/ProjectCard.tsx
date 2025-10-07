"use client"

import { Box, Card, Inset, Text, Strong, Flex, Badge, Button } from "@radix-ui/themes"
import Link from "next/link"
import { ExternalLinkIcon } from "@radix-ui/react-icons"
import { ProjectData } from "@/data/projectData"


type ProjectCardProps = {
    project: ProjectData;
    isImageLeft: boolean;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isImageLeft }) => {    
    return (
        <Box as="div" className="mb-12 sm:mb-16">
            <Flex className="justify-center ">
                <Card className={`flex flex-col sm:max-md:w-[80%] lg:max-w-full 
                    ${isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                    <Inset side="left" pb="current" className="max-h-50 lg:max-w-[48%] min-w-[48%]">
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-full object-cover rounded-lg bg-none select-none"
                        />
                    </Inset>
                    <Flex as="div" direction="column" className={`flex justify-around lg:max-w-[60%]"
                        ${isImageLeft ? "lg:ml-10 lg:mr-5" : "lg:mr-15 "}`}
                    >

                        <Flex as="div" direction="column" className="">
                            <Text as="span" className="mt-4 lg:mt-1 text-sm">
                                {project.year}
                            </Text>
                            <Text className="mt-3 text-xl text-neutral-800 dark:text-neutral-200">
                                <Strong>{project.title}</Strong>
                            </Text>
                            <Flex>
                            <Text as="p" className="mt-2 mb-1 text-sm line-clamp-5">
                                {project.description}
                            </Text>
                            </Flex>
                        </Flex>
                        
                        <Flex className="justify-between flex-row">
                            <Button className="hidden justify-start my-2 text-sm text-neutral-700 dark:text-neutral-200 hover:underline hover:text-violet-600 dark:hover:text-violet-400">
                                <Link 
                                    href={`/projects/` + project.slug} 
                                    rel="noopener noreferrer"
                                    className=""
                                >
                                    Read More →
                                </Link>
                            </Button>

                            

                            {project.status === "Live" ? (
                                <Flex className="my-1 gap-2 items-center">
                                    <Badge 
                                        color={project.tag === "In-Progress" ? "yellow" : project.tag === "Complete" ? "green" : "red"}
                                        radius="large"
                                        variant="soft"
                                        className="rounded-md py-1 px-3 text-xs select-none"
                                    >
                                        {project.tag}
                                    </Badge>

                                    <Badge 
                                        color="cyan"
                                        radius="large"
                                        variant="soft"
                                        className="rounded-md py-1 px-3 text-xs select-none"
                                    >
                                        {project.status}
                                    </Badge>

                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className=""
                                    >
                                    <ExternalLinkIcon
                                            aria-hidden
                                            width={18}
                                            height={18}
                                            href={project.link}
                                            className="transition-colors hover:text-violet-600 dark:hover:text-violet-400"
                                        /> 
                                    </Link>
                                </Flex>
                             ) : (
                                <Flex className="my-1 gap-2 items-center">
                                    <Badge 
                                        color={project.tag === "In-Progress" ? "yellow" : project.tag === "Complete" ? "green" : "red"}
                                        radius="large"
                                        variant="soft"
                                        className="rounded-md py-1 px-3 text-xs select-none"
                                    >
                                        {project.status}
                                    </Badge>
                                </Flex>
                             )}
                        </Flex>
                    </Flex>
                </Card>
            </Flex>
        </Box>
    )
}

export default ProjectCard;