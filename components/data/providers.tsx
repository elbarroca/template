'use client';

import { ThemeProvider } from "next-themes";
import dynamic from "next/dynamic";
import React from "react";

const DynamicDefaultSeo = dynamic(
  () => import("next-seo").then((mod) => mod.DefaultSeo),
  { ssr: false }
);

const DynamicSidebarProvider = dynamic(
  () => import("@/components/ui/sidebar").then((mod) => mod.SidebarProvider),
  { ssr: false }
);

export function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <DynamicDefaultSeo
        title="SaaS MVP Template"
        description="Clean SaaS starter with free analytics & performance"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://mvptemplate-git-main-elbarrocas-projects.vercel.app',
          site_name: 'SaaS MVP Template',
        }}
      />
      <DynamicSidebarProvider>
        {children}
      </DynamicSidebarProvider>
    </ThemeProvider>
  );
}
