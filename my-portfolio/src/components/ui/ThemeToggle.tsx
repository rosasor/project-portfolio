"use client"

import { Toggle } from "radix-ui";
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useCallback, useEffect } from "react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])
    
    const handleThemeChange = useCallback((pressed: boolean) => {
        setTheme(pressed ? "dark" : "light")
    }, [setTheme])

    if (!mounted) return null
  
    const isDark = resolvedTheme === "dark"

    return (
      <motion.div
        className="p-1 rounded-full 
          bg-none hover:bg-neutral-200 dark:hover:bg-neutral-700
          transition-colors hover:text-violet-600 dark:hover:text-violet-400"
        initial={{
          rotate: 0
        }}
        whileHover={{
          scale: 1.1,
          rotate: 10,
        }}
      >
        <Toggle.Root
          pressed={isDark}
          onPressedChange={handleThemeChange}
          aria-label="Toggle dark mode"
          className="flex items-center justify-center rounded-full text-black transition-colors hover:text-violet-600 dark:hover:data-[state=on]:text-violet-400 dark:data-[state=on]:text-white
          focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 rounded-lg"
        >
          {isDark ? (
            <Sun 
              className="h-4 w-4" 
            />
          ) : (
            <Moon 
              className="h-4 w-4" 
            />
          )}
        </Toggle.Root>
      </motion.div>
    )
  }
  
  export default ThemeToggle
