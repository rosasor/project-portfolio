import type { Metadata } from "next"
import { ThemeProvider } from "./contexts/ThemeContext"
import ProgressBar from "@/components/ui/ProgressBar"
import NavBar from "@/components/NavigationMenu"
import Footer from "@/components/Footer"
import "./styles/globals.css"

export const metadata: Metadata = {
  title: "Hello, World!",
  description: "Bye",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>      
      <body 
        className={`flex flex-col items-center min-h-screen p-8 overscroll-none antialiased`}
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

              {children}

            <footer>
              <Footer />
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
