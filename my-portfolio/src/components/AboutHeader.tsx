import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image"

const AboutHeader = () => {
    return (
        
        <Box className="mb-16">
            <Flex className="justify-center lg:justify-between flex-col md:flex-row">
                <Flex direction="column" className="sm:max-md:w-[70%] lg:max-w-[70%]">
                    <Heading as="h1" className="mt-8 font-bold text-3xl sm:text-4xl lg:text-5xl ">
                        Hello About Me
                    </Heading>
                    <Text as="p" className="my-6 text-neutral-700 dark:text-neutral-200">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic eligendi sed quae odio numquam obcaecati autem reprehenderit.
                    </Text>
                </Flex>
                <Flex className="justify-center max-w-full">
                <Image 
                    className="select-none"
                    width={150}
                    height={175}
                    src="/Elena_Headshot.svg"
                    alt="bruh"
                />
                </Flex>
            </Flex>
        </Box>
    )
}

export default AboutHeader;