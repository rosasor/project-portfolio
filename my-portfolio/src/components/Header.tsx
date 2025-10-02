"use client"

import HeroAvatar from "@/components/ui/Avatar";
import { Text, Flex, Heading, Badge } from "@radix-ui/themes";
import SocialIcons from "./ui/SocialIcons";
import { motion } from "framer-motion";


const Header = () => {
    return (
        <Flex as="div" direction="column" gap="2rem" justify="center" align="center" className="m-auto">
            <HeroAvatar />

            <Flex as="div" direction="column" align="center" className="">
                <Heading as="h1" className="mt-3 text-3xl sm:text-4xl md:text-5xl/13 text-center font-bold">
                    Hi&#x2c; I&apos;m Elena Rosa  &mdash;<br></br>
                    Frontend Engineer
                </Heading>
                <Text as="p" align="center" className="my-6 w-[90%] sm:w-[60%] md:w-[65%] text-base text-neutral-700 dark:text-neutral-200">
                    Frontend Developer skilled in JavaScript&#x2c; React&#x2c; TypeScript&#x2c; 
                    and Next.js&#x2c; with a background in UX&#47;UI engineering&#46;

                </Text>
                <Flex direction="column" align="center" gap="1rem" className="md:flex-row mb-10">
                    <Flex gap="1rem">
                        
                        <Badge size="1" color="cyan" className="px-3 py-1 rounded-lg gap-2">
                            
                        
                            <span className="relative flex size-2">
                                <motion.span
                                    className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.7, 0, 0.7],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: "loop",
                                    }}
                                >
                                </motion.span>
                                <span className="relative inline-flex size-2 rounded-full bg-cyan-500"></span>

                            </span>


                            <Text as="span" className="select-none">
                                Open to new opportunities
                            </Text>
                        </Badge>
                    </Flex>
                    <SocialIcons />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Header