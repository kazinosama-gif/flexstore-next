import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ThemeProvider from "@/components/theme/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import LoadingProvider from "@/components/loading/LoadingProvider";
import MouseGlow from "@/components/background/MouseGlow";
import ScrollProgress from "@/components/layout/ScrollProgress";
import BackToTop from "@/components/layout/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FlexStore",
  description: "Modern SaaS platform for growing businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col overflow-x-hidden">
        <ThemeProvider>
          <LoadingProvider>

            <ScrollProgress />

            <MouseGlow />

            <BackToTop />

            <div className="relative z-10">
              <Navbar />
              {children}
            </div>

          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}