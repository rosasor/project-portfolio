import { Box, Section, Flex, Heading } from "@radix-ui/themes"
import ProjectsList from "@/components/ProjectsList";


export default function Projects() {
    return (
        <Box className="">
            <Flex className="">
                <Heading as="h1" className="text-3xl font-bold">
                    Hello Projects
                </Heading>
            </Flex>



            {/* Project Card */}
            <Section className="mt-8">
                <ProjectsList />
            </Section>
        </Box>
    )
}