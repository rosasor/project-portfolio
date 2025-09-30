"use client"

import React from "react";
import SocialIcons from "./ui/SocialIcons";

const Footer = () => {
    return (
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            <div>
                <span className="text-sm">
                    © 2025 Elena Rosa Wheelen
                </span>
            </div>
        
            <SocialIcons />
      </footer>
    )
}

export default Footer;