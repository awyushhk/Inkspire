import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import LenisScroller from "@/components/LenisScroller";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inkspire | Editorial Portfolio Platform",
  description: "Stop building websites. Start telling stories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-ink font-sans selection:bg-iris selection:text-white">
        <LenisScroller>
          <Cursor />
          <Header />
          {children}
        </LenisScroller>
      </body>
    </html>
  );
}
