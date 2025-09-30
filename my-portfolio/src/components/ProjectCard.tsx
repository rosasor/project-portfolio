"use client"

import React, { useEffect, useState } from "react"
import { Box, Card, Inset, Text, Strong, Flex, Badge } from "@radix-ui/themes"
import Link from "next/link"
import { ExternalLinkIcon } from "@radix-ui/react-icons"


const project = {
    title: 'Pretty MLS',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    status: 'In Progress',
    link: 'https://react.dev',
    description: 'A web application that allows agents to print luxurious branded listing pages to show to potential buyers.',
  };


const ProjectCard = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();
    }, []);


    return (
        <div className="items-center mx-auto max-sm:w-[90%] sm:w-[90%] md:w-full">
            <Box className="my-[4rem]">
                <Card className={isMobile ? "flex flex-col rounded-lg" : "flex rounded-lg"} size="2">
                    
                    <Inset className={isMobile ? "mb-[1rem]" : "mr-[2rem]"} clip="padding-box" side="left" pb="current">
                        <img
                            src={project.imageUrl}
                            alt="Bold typography"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </Inset>
                    <Flex as="div" direction="column" className={isMobile ? "mx-[.25rem] justify-between" : "my-[.25rem] justify-between"}>

                        <Flex as="div" direction="column">
                            <Text as="span" className="mt-[.25rem] text-base">
                                {project.year}
                            </Text>
                            <Text className="mt-[.5rem] text-xl">
                                <Strong>{project.title}</Strong>
                            </Text>
                            <Text as="p" className="mt-[.25rem] mb-[1rem] text-base">
                                {project.description}
                            </Text>
                        </Flex>
                        

                        <Flex as="div" className="mb-[.25rem] justify-between items-center">
                            <Badge 
                                color="green"
                                radius="large"
                                variant="soft"
                                className="rounded-md py-[.25rem] px-[.75rem] text-sm"
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
                                    className="transition-colors hover:text-blue-500"
                                /> 
                            </Link>
                        </Flex>
                        
                    </Flex>
                </Card>
            </Box>
        </div>
    )
}

export default ProjectCard;