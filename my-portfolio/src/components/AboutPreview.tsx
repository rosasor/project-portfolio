import { Text, Box, Button, Flex, Heading, Section, Separator, Strong} from "@radix-ui/themes";
import Link from "next/link";

const AboutPreview = () => {
    return (
        <Box className="mx-auto flex justify-center items-center my-8 mb-24 w-full md:max-w-[70%]">
            <Flex direction="column" className="gap-8">
                <Section>
                    <Heading as="h3" className="text-2xl font-bold mb-2 text-neutral-800 dark:text-neutral-200">
                        About Me
                    </Heading>
                    <Text as="p" className="text-neutral-700 dark:text-neutral-200">
                        Front&ndash;end Developer with a strong UX&#47;UI design foundation and hands&ndash;on experience building full&ndash;stack applications 
                        using React&#x2c; TypeScript&#x2c; and Python&#46; Brings a visual&ndash;first approach to frontend development&#x2c; 
                        paired with real&ndash;world production experience and an eye for pixel&ndash;perfect detail&#46;
                    </Text>
                    <Button className=" py-2 my-2 gap-4 text-neutral-700 dark:text-neutral-200 hover:underline hover:text-violet-600 dark:hover:text-violet-400">
                        <Link 
                        href={"/about"} 
                        rel="noopener noreferrer"
                        className=""
                        >
                            See More →
                        </Link>
                    </Button>
                </Section>
                
                <Section>
                    <Heading as="h3" className="text-neutral-800 dark:text-neutral-200 text-2xl font-bold mb-2">
                        Professional Experience
                    </Heading>
                    <Flex className="items-baseline gap-4 text-nowrap text-neutral-700 dark:text-neutral-200">
                        <Text as="p">
                            Preset
                        </Text>
                        <Separator orientation="horizontal" size="4" className="bg-neutral-300 dark:bg-neutral-700"></Separator>
                        
                        <Flex className="gap-1">
                        <Text as="p" className="hidden sm:inline">
                            Frontend Developer at
                        </Text>
                        <Text as="p"><Strong>Waterfront Properties</Strong></Text>
                        </Flex>
                    </Flex>
                    <Flex className="items-baseline gap-4 text-nowrap text-neutral-700 dark:text-neutral-200">
                        <Text as="p">
                            2023&ndash;2024
                        </Text>
                        <Separator orientation="horizontal" size="4" className="bg-neutral-300 dark:bg-neutral-700"></Separator>
                        <Flex className="gap-1">
                        <Text as="p" className="hidden sm:inline">
                            Controls Engineer at
                        </Text>
                        <Text as="p"><Strong>The Escape Game</Strong></Text>
                        </Flex>
                    </Flex>
                </Section>
            </Flex>
        </Box>
    )
}

export default AboutPreview;