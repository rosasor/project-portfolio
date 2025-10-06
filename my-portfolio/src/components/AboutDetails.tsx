import { Box, Text, Flex, Strong, Heading } from "@radix-ui/themes"


const AboutDetails = () => {
    return (
        <Box className="mb-12 sm:mb-16">
            <Flex className="flex-col gap-12">
                <Flex className="flex-col">
                    <Text className=" text-neutral-700 dark:text-neutral-200">
                        Hi&#x2c; I&apos;m <Strong>Elena Rosa Wheelen</Strong>&#x2c; a front&ndash;end developer based in South Florida who loves making everyday life a 
                        little easier&#46; I&apos;m driven by curiosity and creativity&#x2c; often building projects that start as simple ideas 
                        or personal challenges&#46; Each project is a chance to learn&#x2c; experiment&#x2c; and create something meaningful&#46;


                    </Text>
                </Flex>
                <Flex className="flex-col">
                    <Heading className="mb-4 font-bold text-xl sm:text-2xl text-neutral-800 dark:text-neutral-200">
                        What Inspires Me
                    </Heading>
                    <Text className=" text-neutral-700 dark:text-neutral-200">
                        What inspires me most is the endless opportunity to learn and create&#46; 
                        I&apos;m fascinated by how technology can bring ideas to life and connect people in meaningful ways&#46;
                        The feeling of building something impactful&#x2c; both for users and behind the scenes&#x2c; keeps me motivated every day&#46;
                    </Text>
                </Flex>
                <Flex className="flex-col">
                    <Heading className="mb-4 font-bold text-xl sm:text-2xl text-neutral-800 dark:text-neutral-200">
                        How I Learn
                    </Heading>
                    <Text className=" text-neutral-700 dark:text-neutral-200">
                    Whenever I&apos;m learning something new&#x2c; I like to jump right in and experiment&#46;
                    I use a mix of resources like documentation&#x2c; tutorials&#x2c; templates&#x2c; and LLM chats to understand new concepts and 
                    grow my skills&#46; I also believe in learning from others and often reach out to both peers and mentors to hear their insights&#x2c;
                     because collaboration and curiosity go hand in hand&#46;
                    </Text>
                </Flex>
                <Flex className="flex-col">
                    <Heading className="mb-4 font-bold text-xl sm:text-2xl text-neutral-800 dark:text-neutral-200">
                        Behind the Pixels
                    </Heading>
                    <Text className=" text-neutral-700 dark:text-neutral-200">
                        In my downtime&#x2c; I enjoy learning something new&#x2c; working out&#x2c; 
                        playing video games with friends&#x2c; or reading manhwa&#46;
                    </Text>
                </Flex>
                <Flex className="flex-col">
                    <Heading className="mb-4 font-bold text-xl sm:text-2xl text-neutral-800 dark:text-neutral-200 ">
                        Thanks for visiting!
                    </Heading>
                    <Text className=" text-neutral-700 dark:text-neutral-200">
                        
                    </Text>
                </Flex>
            </Flex>
        </Box>
    )
}

export default AboutDetails