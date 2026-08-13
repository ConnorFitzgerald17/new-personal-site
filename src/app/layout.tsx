import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/app/providers";

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
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
