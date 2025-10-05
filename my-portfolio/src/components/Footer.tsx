"use client"

import React from "react";
import SocialIcons from "./ui/SocialIcons";
import { Flex } from "@radix-ui/themes";

const Footer = () => {
    return (
        <footer className="mb-8" role="contentinfo" aria-label="Site footer">
            <Flex className="flex-col-reverse justify-center items-center gap-4 xs:flex-row">
                <p className="text-sm" aria-label="Copyright information">
                    © 2025 Elena Rosa Wheelen
                </p>
                <nav aria-label="Social media links">
                    <SocialIcons />
                </nav>
            </Flex>
        </footer>
    )
}

export default Footer;