import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  const userData = {
    name: user.user_metadata?.full_name || user.email,
    email: user.email,
    avatar: user.user_metadata?.avatar_url,
  };

  return (
    <SidebarProvider>
      <AppSidebar user={userData} />
      {children}
    </SidebarProvider>
  );
}
