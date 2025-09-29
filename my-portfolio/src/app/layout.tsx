import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "./contexts/ThemeContext"
import ProgressBar from "@/components/ProgressBar"
import NavBar from "@/components/NavigationMenu"
import Footer from "@/components/Footer"
import "./styles/globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        className={`flex flex-col items-center min-h-screen p-8 ${geistSans.variable} ${geistMono.variable} antialiased`}
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
