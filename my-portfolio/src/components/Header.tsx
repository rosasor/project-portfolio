import HeroAvatar from "@/components/ui/Avatar";
import { Text, Flex, Heading } from "@radix-ui/themes";


const Header = () => {
    return (
        <>
        <Flex as="div" direction="column" gap="2rem" justify="center" align="center" className="m-auto">
            <HeroAvatar />

            <Flex as="div" direction="column" align="center" className="my-3">
                <Heading as="h1" className="text-3xl sm:text-4xl md:text-5xl/13 text-center font-bold">
                    Hi&#x2c; I&apos;m Elena Rosa  &mdash;<br></br>
                    Frontend Engineer
                </Heading>
                <Text as="p" align="center" className="my-6 w-[80%] sm:w-[60%] md:w-[65%] text-base text-neutral-700 dark:text-neutral-200">
                    Frontend Developer skilled in JavaScript&#x2c; React&#x2c; TypeScript&#x2c; 
                    and Next.js&#x2c; with a background in UX/UI engineering&#46;

                </Text>
            </Flex>
        </Flex>
        </>
    )
}

export default Header