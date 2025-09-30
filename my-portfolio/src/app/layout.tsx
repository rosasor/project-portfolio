import type { Metadata } from "next"
import { ThemeProvider } from "./contexts/ThemeContext"
import ProgressBar from "@/components/ui/ProgressBar"
import NavBar from "@/components/NavigationMenu"
import Footer from "@/components/Footer"
import "./styles/globals.css"

export const metadata: Metadata = {
  title: "Elena the FED!",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>      
      <body 
        className={`flex flex-col items-center min-h-screen mt-24 p-3 xs:p-8 overscroll-none antialiased selection:bg-violet-300 selection:text-violet-900`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={true}
        >
          <ProgressBar />
          <div className="flex flex-col max-w-[800px]" >
            <nav>
              <NavBar />
            </nav>
              <main className="flex flex-col gap-4 mx-auto px-4 justify-center items-center">
                {children}
              </main>
            <footer>
              <Footer />
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
