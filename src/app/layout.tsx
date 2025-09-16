import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Confluence 2025",
  description:
    "The flagship tech conference uniting students, developers, and industry leaders at the intersection of blockchain, Web3, and emerging technologies.",
  icons: {
    icon: "/con-img (1).jpg", // your custom favicon (must be in public/)
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
