"use client"

import HeroAvatar from "@/components/ui/Avatar";
import { Text, Flex, Heading, Badge } from "@radix-ui/themes";
import Link from "next/link";
import { GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons"
import { motion } from "framer-motion";


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
                <Flex direction="column" align="center" gap="1rem" className="md:flex-row mb-100">
                    <Flex gap="1rem">
                        
                        <Badge size="1" color="cyan" className="px-3 py-1 rounded-lg gap-2">
                            <span className="relative flex size-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex size-3 rounded-full bg-cyan-500"></span>
                            </span>
                            <Text as="span">
                                Open to new opportunities
                            </Text>
                        </Badge>
                    </Flex>
                        <Flex gap="1rem">
                            <Link 
                                href={"https://www.linkedin.com/in/rosawheelen/"} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className=""
                                >
                                    <motion.div
                                        className="text-white"
                                        whileHover={{
                                            scale: 1.1,
                                            transition: { duration: .1 }
                                        }}
                                        transition={{ duration: 0.1 }}
                                    >
                                        <LinkedInLogoIcon
                                            aria-hidden
                                            width={18}
                                            height={18}
                                            href="https://www.linkedin.com/in/rosawheelen/"
                                            className="text-black dark:text-white transition-colors hover:text-violet-500"
                                            />
                                    </motion.div>
                            </Link>

                            <Link 
                                href={"https://www.github.com/rosasor/"} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className=""
                            >
                                <motion.div
                                    className="text-white"
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { duration: .1 }
                                        }}
                                        transition={{ duration: 0.1 }}
                                >
                                    <GitHubLogoIcon
                                        aria-hidden
                                        width={18}
                                        height={18}
                                        href="https://www.github.com/rosasor/"
                                        className="text-black dark:text-white transition-colors hover:text-violet-500"
                                    />
                                </motion.div>
                            </Link>

                            <Link 
                                href={""} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className=""
                            >
                                <motion.div
                                    className="text-white"
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { duration: .1 }
                                        }}
                                        transition={{ duration: 0.1 }}
                                >

                                    <EnvelopeClosedIcon
                                        aria-hidden
                                        width={18}
                                        height={18}
                                        href="/"
                                        className="text-black dark:text-white transition-colors hover:text-violet-500"
                                    />
                                </motion.div>
                            </Link>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default Header