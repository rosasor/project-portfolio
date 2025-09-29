"use client"

import { type ReactNode } from "react"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"

interface ThemeProviderWrapperProps extends ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children, ...props }: ThemeProviderWrapperProps) {
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  )
}