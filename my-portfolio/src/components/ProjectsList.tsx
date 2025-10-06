import React from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import { project } from "@/data/projectData";
import { Box, Flex } from "@radix-ui/themes";

const App: React.FC = () => {
  return (
    <Box as="div" className="">
        <Flex direction="column" className="justify-center gap-8">
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