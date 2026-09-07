import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rence - Web Developer & BSIT Graduate",
  description:
    "Personal portfolio of Rence, a BSIT graduate and aspiring web developer. Explore my projects, skills, and experience in full-stack web development.",
  keywords:
    "web developer, BSIT, portfolio, full-stack developer, React, Next.js, PHP",
  authors: [{ name: "Rence" }],
  openGraph: {
    title: "Rence - Web Developer Portfolio",
    description:
      "Discover my web development projects and experience. I build functional and user-friendly applications.",
    type: "website",
    url: "https://yourportfolio.com",
    images: [
      {
        url: "https://yourportfolio.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rence - Web Developer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}
