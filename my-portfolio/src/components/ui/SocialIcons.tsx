"use client"

import React from "react";
import Link from "next/link"
import { GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons"
import { motion } from "framer-motion";

const SocialIcons = () => {
    return (
            <div className="flex gap-2">

                {/* LinkedIn */}
                <Link 
                    href={"https://www.linkedin.com/in/rosawheelen/"} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                    >
                        <motion.div
                            className="p-1 rounded-lg bg-none hover:bg-neutral-200 dark:hover:bg-neutral-700
                        transition-colors hover:text-violet-600 dark:hover:text-violet-400"
                            initial={{
                                rotate:0
                            }}
                            whileHover={{
                                scale: 1.1,
                                rotate: -10,
                              }}
                        >
                            <LinkedInLogoIcon
                                aria-hidden
                                width={18}
                                height={18}
                                href="https://www.linkedin.com/in/rosawheelen/"
                                className="text-black dark:text-white transition-colors hover:text-violet-600 dark:hover:text-violet-400"
                                />
                        </motion.div>
                </Link>

                {/* GitHub */}
                <Link 
                    href={"https://www.github.com/rosasor/"} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                >
                    <motion.div
                        className="p-1 rounded-lg bg-none hover:bg-neutral-200 dark:hover:bg-neutral-700
                        transition-colors hover:text-violet-600 dark:hover:text-violet-400"
                        initial={{
                            rotate:0
                        }}
                        whileHover={{
                            scale: 1.1,
                            rotate: 5,
                          }}
                    >
                        <GitHubLogoIcon
                            aria-hidden
                            width={18}
                            height={18}
                            href="https://www.github.com/rosasor/"
                            className="text-black dark:text-white transition-colors hover:text-violet-600 dark:hover:text-violet-400"
                        />
                    </motion.div>
                </Link>

                {/* Email */}
                <Link 
                    href={""} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                >
                    <motion.div
                        className="p-1 rounded-lg 
                        bg-none hover:bg-neutral-200 dark:hover:bg-neutral-700
                        transition-colors hover:text-violet-600 dark:hover:text-violet-400"
                        initial={{
                            rotate:0
                        }}
                        whileHover={{
                            scale: 1.1,
                            rotate: 10,
                          }}
                    >

                        <EnvelopeClosedIcon
                            aria-hidden
                            width={18}
                            height={18}
                            href="/"
                            className="text-black dark:text-white transition-colors hover:text-violet-600 dark:hover:text-violet-400"
                        />
                    </motion.div>
                </Link>
            </div>
    )
}

export default SocialIcons;