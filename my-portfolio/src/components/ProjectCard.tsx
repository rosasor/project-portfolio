import React from "react"
import { Box, Card, Inset, Text, Strong } from "@radix-ui/themes"


const ProjectCard = () => {
    return (
        <div>
            <Box className="mt-[2rem]">
                <Card className="flex rounded-lg" size="2">
                    <Inset className=" mr-[2rem]" clip="padding-box" side="left" pb="current">
                        <img
                            src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                            alt="Bold typography"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </Inset>
                    <Text className="mt-[1rem]" as="p" size="4">
                        <Strong>Flashbang</Strong> is a web application that allows you to create and share flashcards with your friends.
                    </Text>
                </Card>
            </Box>
        </div>
    )
}

export default ProjectCard;