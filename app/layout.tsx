import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { WebVitalsScripts } from "@/components/landing/data/web-vitals-scripts";
import { Providers } from "@/components/landing/data/providers";
import type { Metadata } from 'next'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: 'Next.js with Supabase',
  description: 'A Next.js starter with Supabase authentication and database.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body className={inter.className}>
        <Providers>
          {children}
          <WebVitalsScripts />
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
