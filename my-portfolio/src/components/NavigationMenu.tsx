"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { motion } from "framer-motion";

const NavBar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Next" },
    { href: "/about", label: "More" },
  ];

  return (
    <div className="fixed top-[1.5rem] mx-auto left-1/2 transform -translate-x-1/2 z-10">
      <NavigationMenu.Root className="flex bg-background/80 backdrop-blur-sm rounded-full px-5 py-1 border-background/50 shadow-md shadow-neutral-950/5">
        <NavigationMenu.List className="flex gap-8 items-center">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
                
              <NavigationMenu.Item key={link.href} className="flex">
                <motion.div>
                <Link
                  href={link.href}
                  className={`font-medium text-[.9rem] py-2 transition-colors
                    ${
                      isActive
                        ? "text-black dark:text-white"
                        : "text-neutral-500 dark:text-neutral-400 hover:text-violet-500 focus:text-black focus:dark:text-white"
                    }`}
                >
                  {link.label}
                </Link>
                </motion.div>
              </NavigationMenu.Item>
              
            );
          })}

          {/* Dark Mode Switch */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  );
};

export default NavBar;
