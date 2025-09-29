"use client"

import { Toggle } from "radix-ui";
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useCallback, useEffect } from "react";


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
      <Toggle.Root
        pressed={isDark}
        onPressedChange={handleThemeChange}
        aria-label="Toggle dark mode"
        className="flex size-[35px] items-center justify-center rounded-full bg-background text-black dark:data-[state=on]:bg-background dark:data-[state=on]:text-white"
      >
        {isDark ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </Toggle.Root>
    )
  }
  
  export default ThemeToggle
