import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "easymde/dist/easymde.min.css";
import { Providers } from "@/redux/provider";

// === Font configuration ===
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// === Metadata ===
export const metadata: Metadata = {
  title: "CodeCLA",
  description: "Code Challenges, Learning and Admin made easy",
};

// === Layout Props ===
type RootLayoutProps = {
  children: React.ReactNode;
};

// === Root Layout Component ===
export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-gray-50 text-gray-900">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
