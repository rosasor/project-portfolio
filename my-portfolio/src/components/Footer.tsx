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
                                color: "#00ffff",
                                
                                // Will be used when gesture starts
                                transition: { duration: .1 }
                              }}
                              // Will be used when gesture ends
                              transition={{ duration: 0.5 }}
                        >
                        <LinkedInLogoIcon
                            aria-hidden
                            width={18}
                            height={18}
                            href="https://www.linkedin.com/in/rosawheelen/"
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
                    <GitHubLogoIcon
                        aria-hidden
                        width={18}
                        height={18}
                        href="https://www.github.com/rosasor/"
                        className="transition-colors hover:text-blue-500"
                        />
                </Link>

                {/* Email */}
                <Link 
                    href={""} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                >
                    <EnvelopeClosedIcon
                        aria-hidden
                        width={18}
                        height={18}
                        href="/"
                        className="transition-colors hover:text-blue-500"
                        />
                </Link>
            </div>
      </footer>
    )
}

export default Footer;