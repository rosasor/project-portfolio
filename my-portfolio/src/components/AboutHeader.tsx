import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image"


const AboutHeader = () => {
    return (
        
        <Box className="mb-16">
            <Flex className="justify-center lg:justify-between flex-col sm:flex-row max-md:gap-12">
                <Flex direction="column" className="lg:max-w-[60%]">
                    <Heading as="h1" className="mt-8 font-bold text-3xl sm:text-4xl lg:text-5xl">
                        About Me
                    </Heading>
                    <Text as="p" className="my-6 text-sm text-neutral-700 dark:text-neutral-200">
                        Front&ndash;end Developer with a strong UX&#47;UI design foundation and hands&ndash;on experience building full&ndash;stack applications 
                        using React&#x2c; TypeScript&#x2c; and Python&#46; Brings a visual&ndash;first approach to frontend development&#x2c; 
                        paired with real&ndash;world production experience and an eye for pixel&ndash;perfect detail&#46;
                    </Text>
                </Flex>
                <Flex className="justify-center min-w-[35%] ">
                    <Image 
                        priority={true}
                        className="select-none object-cover max-w-full rounded-lg my-auto"
                        width={160}
                        height={160}
                        src="/Elena_Headshot.svg"
                        alt="Elena Rosa Wheelen"
                    />
                </Flex>
            </Flex>
        </Box>
    )
}

export default AboutHeader;