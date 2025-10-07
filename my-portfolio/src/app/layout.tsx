import type { Metadata } from "next"
import { ThemeProvider } from "./contexts/ThemeContext"
import ProgressBar from "@/components/ui/ProgressBar"
import NavBar from "@/components/NavigationMenu"
import Footer from "@/components/Footer"
import "./styles/globals.css"
import { Box } from "@radix-ui/themes"

export const metadata: Metadata = {
  title: "Elena the FED!",
  description: "Frontend Developer Portfolio",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>      
      <body 
        className={`min-h-screen mt-24 overscroll-none antialiased selection:bg-violet-300 selection:text-violet-900`}
      >
        <Box className="w-full max-w-[830px] md:w-[80%] xl:w-full mx-auto px-6 xs:px-8 lg:px-8 sm:gap-16 pt-10">
        
        {/* Dot Grid background */}
        <Box
          className="pointer-events-none fixed inset-0 -z-10
                     bg-neutral-50 dark:bg-neutral-900
                     bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]
                     dark:bg-[radial-gradient(#2a2a2a_1px,transparent_1px)]
                     [background-size:16px_16px]"
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={true}
        >
          <ProgressBar />
          <Box as="div" className="" >
            <nav>
              <NavBar />
            </nav>
              <main className="">
                {children}
                <footer>
              <Footer />
            </footer>
              </main>
            
          </Box>
        </ThemeProvider>
        </Box>
      </body>
    </html>
  );
}
