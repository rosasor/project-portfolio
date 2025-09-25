import React from "react";
import Link from "next/link"
import Image from "next/image";
import { GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons"

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
                        <LinkedInLogoIcon
                            aria-hidden
                            width={18}
                            height={18}
                            href="https://www.linkedin.com/in/rosawheelen/"
                            className="transition-colors hover:text-blue-500"
                        />
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