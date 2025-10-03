import React from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import { project } from "@/data/projectData";
import { Box, Flex } from "@radix-ui/themes";

const App: React.FC = () => {
  return (
    <Box as="div" className="mb-12 sm:mb-16">
        <Flex direction="column" className="justify-center">
                {project.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        isImageLeft={index % 2 === 0}
                    />
                ))}
        </Flex>
    </Box>
  );
};

export default App;