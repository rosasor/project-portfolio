import { Box, Flex, Heading, Text } from "@radix-ui/themes";


const ProjectsHeader = () => {
    return (
        
        <Box className="mb-16">
            <Flex className="justify-center lg:justify-between">
                <Flex direction="column" className="sm:max-md:w-[80%] lg:max-w-[70%]">
                    <Heading as="h1" className="mt-8 font-bold text-3xl sm:text-4xl lg:text-5xl ">
                        Hello Beautiful Projects
                    </Heading>
                    <Text as="p" className="my-6 text-neutral-700 dark:text-neutral-200">
                        A selection of hands-on work that I designed, built, and scaled to production.
                    </Text>
                </Flex>
            </Flex>
        </Box>
    )
}

export default ProjectsHeader;