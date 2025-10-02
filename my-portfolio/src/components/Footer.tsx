"use client"

import React from "react";
import SocialIcons from "./ui/SocialIcons";
import { Flex } from "@radix-ui/themes";

const Footer = () => {
    return (
        <footer className="mb-4">
            <Flex className="flex-col-reverse justify-center items-center gap-4 xs:flex-row">
                <span className="text-sm">
                    © 2025 Elena Rosa Wheelen
                </span>
                <SocialIcons />
            </Flex>
      </footer>
    )
}

export default Footer;