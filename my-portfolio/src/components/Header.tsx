import HeroAvatar from "@/components/ui/Avatar";
import { Text, Flex, Heading } from "@radix-ui/themes";


const Header = () => {
    return (
        <>
        <Flex as="div" direction="column" gap="2rem" justify="center" align="center">
            <HeroAvatar />

            <Flex as="div" direction="column" className="my-2">
                <Heading as="h1" className="text-4xl font-bold">
                    Hello I&apos;m Elena Rosa
                </Heading>
                <Text>
                    World
                </Text>
            </Flex>
        </Flex>
        </>
    )
}

export default Header