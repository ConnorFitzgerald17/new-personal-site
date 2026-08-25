import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/providers";

const grotesk = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Connor Fitzgerald — Full-stack developer",
  description:
    "Full-stack developer and independent product builder creating focused web products, useful tools, and thoughtful systems.",
  openGraph: {
    title: "Connor Fitzgerald — Full-stack developer",
    description:
      "Product-minded development for focused web products, useful tools, and thoughtful systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${grotesk.variable} ${serif.variable} ${mono.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
