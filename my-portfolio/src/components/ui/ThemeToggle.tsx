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
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.1 }
        }}
        transition={{ duration: 0.1 }}
      >
        <Toggle.Root
          pressed={isDark}
          onPressedChange={handleThemeChange}
          aria-label="Toggle dark mode"
          className="flex items-center justify-center rounded-full text-black transition-colors hover:text-violet-600 dark:hover:data-[state=on]:text-violet-400 dark:data-[state=on]:text-white"
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
