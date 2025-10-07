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
                    href="https://www.linkedin.com/in/rosawheelen/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Elena Rosa Wheelen's LinkedIn profile (opens in new tab)"
                    className="focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 rounded-lg"
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
                                aria-hidden="true"
                                width={18}
                                height={18}
                                className="text-black dark:text-white hover:text-violet-600 dark:hover:text-violet-400"
                                />
                            <span className="sr-only">LinkedIn</span>
                        </motion.div>
                </Link>

                {/* GitHub */}
                <Link 
                    href="https://www.github.com/rosasor/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Elena Rosa Wheelen's GitHub profile (opens in new tab)"
                    className="focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 rounded-lg"
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
                            aria-hidden="true"
                            width={18}
                            height={18}
                            className="text-black dark:text-white transition-colors hover:text-violet-600 dark:hover:text-violet-400"
                        />
                        <span className="sr-only">GitHub</span>
                    </motion.div>
                </Link>

                {/* Email */}
                <Link 
                    href="mailto:elenarosawdev@gmail.com" 
                    aria-label="Send email to Elena Rosa Wheelen"
                    className="focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 rounded-lg"
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
                            aria-hidden="true"
                            width={18}
                            height={18}
                            className="text-black dark:text-white transition-colors hover:text-violet-600 dark:hover:text-violet-400"
                        />
                        <span className="sr-only">Email</span>
                    </motion.div>
                </Link>
            </div>
    )
}

export default SocialIcons;