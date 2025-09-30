import ProjectCard from "@/components/ProjectCard"
import { Box, Card, Inset, Text, Strong, Flex, Badge, Heading } from "@radix-ui/themes"


export default function Projects() {
    return (
        <div>
            <Flex className="justify-center">
                <Heading as="h1" className="text-3xl text-center font-bold">
                    Hello
                </Heading>
            </Flex>



            {/* Project Card */}
            <section className="">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </section>
        </div>
    )
}