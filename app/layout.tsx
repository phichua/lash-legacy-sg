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
  title: "Lash Legacy SG | Premium Lash & Brow Studio",
  description:
    "Lash Legacy SG — Singapore's trusted beauty studio for eyelash extensions, lash lifts, brow lamination and brow shaping. Book via Instagram @lashlegacysg.",
  openGraph: {
    title: "Lash Legacy SG | Premium Lash & Brow Studio",
    description:
      "Singapore beauty studio specialising in eyelash extensions, lash lifts, brow lamination and brow shaping.",
    url: "https://lash-legacy-sg.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
