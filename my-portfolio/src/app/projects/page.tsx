import { Box, Section } from "@radix-ui/themes"
import ProjectsList from "@/components/ProjectsList";
import ProjectsHeader from "@/components/ProjectsHeader";


export default function Projects() {
    return (
        <Box className="">
            <ProjectsHeader />

            {/* Project Card */}
            <Section className="mt-8">
                <ProjectsList />
            </Section>
        </Box>
    )
}