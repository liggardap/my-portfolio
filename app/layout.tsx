import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Liggar Prayoga — Backend-first. Full-stack in practice.",
  description:
    "Backend Software Engineer with 3+ years building scalable APIs and SaaS products for international clients. Based in Bali, open to remote.",
  metadataBase: new URL("https://liggar.site"),
  openGraph: {
    title: "Liggar Prayoga",
    description: "Backend Software Engineer based in Bali, Indonesia.",
    url: "https://liggar.site",
    siteName: "Liggar Prayoga",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Liggar Prayoga",
    description: "Backend Software Engineer based in Bali, open to remote.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon-512.png",
    apple: "/favicon-512.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
