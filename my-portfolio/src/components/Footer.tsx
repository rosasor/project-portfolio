"use client"

import React from "react";
import Link from "next/link"
import { GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons"
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            <div>
                <span className="text-sm">
                    © 2025 Elena Rosa Wheelen
                </span>
            </div>
        
            {/* Social Media Icons */}
            <div className="flex gap-[1rem]">

                {/* LinkedIn */}
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

                {/* GitHub */}
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

                {/* Email */}
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
            </div>
      </footer>
    )
}

export default Footer;